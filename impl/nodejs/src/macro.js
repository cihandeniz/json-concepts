class Macro {
    /**
     * Recursively loads all included files and places them next to #include
     * keys. This does not process `#include`s, only loads them from file or
     * URL.
     * 
     * @param {Object} definition Definition object
     * 
     * @returns {Object} Definition object with includes loaded
     */
    static async include(definition = required('definition')) {
        if (typeof definition !== 'object') {
            return definition;
        }

        for (const key in definition) {
            if (key == `${SC.MACRO}include` && typeof definition[key] === 'string') {
                definition[key] = await loadJSON(definition[key]);
            }

            definition[key] = await Macro.include(definition[key]);
        }

        return definition;
    }

    /**
     * Processes macros within given definition object and returns processed object.
     * 
     * @param {Object} definition (Required) Definition to be processed
     * 
     * @returns {Object} Processed object
     */
    static process(definition = required('definition')) {
        return new Macro(definition).process();
    }

    /* const */ #definition;
    /* const */ #injections;
    /* const */ #macros;

    /**
     * Macro represents the processing of macros of a definition object. After
     * this process, given definition object will be manipulated.
     * 
     * This constructor processes `#include`s and builds macros from given
     * definition and makes definition object ready to be processed.
     * 
     * @param {Object} definition Definition object including macros
     */
    constructor(definition) {
        this.#definition = _include(definition);

        this.#injections = arrayify.pull(this.#definition, `${SC.MACRO}inject`);
        delete this.#definition[`${SC.MACRO}inject`];

        this.#macros = {};

        if (typeof this.#definition === 'object') {
            for (const key in this.#definition) {
                if (!_expressionIsMacro(key)) { continue; }

                if (key.substring(SC.MACRO.length) == "") {
                    throw error.Concepts_definition_is_not_valid__REASON(
                        because => because.Reference_EXPRESSION_must_have_a_name(this.#definition[key])
                    );
                }

                this.#macros[key] = this.#definition[key];
                delete this.#definition[key];
            }
        }
    }

    /**
     * Processes definition object of this macro instance.
     * 
     * @returns Processed object
     */
    process() {
        for (const key in this.#macros) {
            this.#macros[key] = this._process(this.#macros[key], key);
        }

        const result = this._process(this.#definition);

        for (const injection of this.#injections) {
            if (typeof injection !== 'object') {
                throw error.Concepts_definition_is_not_valid__REASON(
                    because => because.Inject_expects_an_object_or_an_array_of_objects__but_got_VALUE(
                        injection
                    )
                );
            }

            const path = metaData.read(injection, 'path', /* burnAfterReading */ true) || SC.PATH;

            Macro.process(injection);

            OP.find(result, path).forEach(item => _assign(item, injection));
        }

        return result;
    }

    /**
     * @param {Object} definition 
     * 
     * @returns {Object} 
     */
    _process(definition) {
        if (typeof definition !== 'object') {
            return definition;
        }

        for (const key in definition) {
            if (key.startsWith(SC.MACRO)) {
                throw error.Concepts_definition_is_not_valid__REASON(
                    because => because.REFERENCE_should_be_defined_at_the_root(key)
                );
            }
        }

        for (const key in definition) {
            const value = definition[key];

            if (_expressionIsMacro(value)) {
                definition[key] = this._get(value);
            } else if (Array.isArray(value) && value.every(item => _expressionIsMacro(item))) {
                definition[key] = this._merge(value);
            } else if (Array.isArray(value) && value.some(item => _expressionIsMacro(item))) {
                throw error.Concepts_definition_is_not_valid__REASON(
                    because => because.All_items_in_ARRAY_should_be_a_reference(value)
                );
            } else {
                definition[key] = this._process(value);
            }
        }

        return definition;
    }

    /**
     * @param {String} reference 
     * 
     * @returns {Object}
     */
    _get(reference) {
        if (!this.#macros[reference]) {
            throw error.Concepts_definition_is_not_valid__REASON(
                because => because.REFERENCE_cannot_be_found(reference)
            );
        }

        return this.#macros[reference];
    }

    /**
     * @param {Array} array 
     * 
     * @returns {Object|String}
     */
    _merge(array) {
        const merged = {};

        for (const reference of array) {
            const value = this._get(reference);

            if (typeof value !== 'object') {
                throw error.Concepts_definition_is_not_valid__REASON(
                    because => because.Cannot_merge_a_non_object_reference__REFERENCE(reference)
                );
            }

            for (const key in value) {
                if (merged[key]) {
                    throw error.Concepts_definition_is_not_valid__REASON(
                        because => because.Cannot_merge_REFERENCES__conflict_occurs_on_KEY(array, key)
                    );
                }

                merged[key] = value[key];
            }
        }

        return merged;
    }
}

/**
 * @param {*} definition 
 * 
 * @returns {*}
 */
function _include(definition) {
    if (typeof definition !== 'object') {
        return definition;
    }

    for (const key in definition) {
        if (key == `${SC.MACRO}include`) {
            const include = Macro.process(definition[key]);

            delete definition[key];
            _assign(definition, include)
        } else {
            _include(definition[key]);
        }
    }

    return definition;
}

/**
 * @param {*} expression 
 * 
 * @returns {Boolean}
 */
function _expressionIsMacro(expression) {
    return typeof expression === 'string' && expression.startsWith(SC.MACRO);
}

/**
 * @param {Object} target
 * @param {Object} source 
 */
function _assign(target, source) {
    for (const key in source) {
        if (target[key] && target[key] !== source[key]) {
            throw error.Concepts_definition_is_not_valid__REASON(
                because => because.Cannot_assign_SOURCE_to_KEY__there_is_already_a_value__TARGET(
                    source[key], key, target[key]
                )
            );
        }

        target[key] = source[key];
    }
}

module.exports = Macro;

const OP = require('./object-path');
const { SpecialCharacters: SC, error, arrayify, metaData, required, loadJSON } = require('./util');