/**
 * Names of errors to be thrown from this module.
 * 
 * @enum {String}
 */
const Names = {
    /** Schema validation errors */
    SCHEMA_ERROR: 'SchemaError',
    /** Other errors */
    ERROR: 'Error'
}

function _error(message, name = Names.ERROR) {
    const result = new Error(message);

    result.name = name;

    return result;
}

module.exports = {
    Names,
    FILE_is_not_a_valid_json(FILE) {
        return _error(`'${FILE}' is not a valid json`);
    },
    Cannot_load_URL(URL) {
        return _error(`Cannot load '${URL}'`);
    },
    Cannot_load_FILE(FILE) {
        return _error(`Cannot load '${FILE}'`);
    },
    Concepts_required_to_load_SCHEMA(SCHEMA) {
        return _error(
            `Concepts required to load ${SCHEMA}.` +
            ` Either specify @concepts meta-data within ${SCHEMA}, or pass concepts as a parameter.`
        );
    },
    PARAMETER_is_required(PARAMETER) {
        return _error(`${PARAMETER} is required`);
    },
    SCHEMA_is_not_valid(SCHEMA) {
        if(typeof SCHEMA === 'object') {
            SCHEMA = 'Schema';
        }

        return _error(`${SCHEMA} is not valid`, Names.SCHEMA_ERROR);
    },
    Expected_type_was_EXPECTED_got_ACTUAL(EXPECTED, ACTUAL) {
        return _error(`Expected type was '${EXPECTED}', got '${ACTUAL}'`);
    }, 
    TRANSFORMATION_is_not_compatible_with_its_CONCEPTS(TRANSFORMATION, CONCEPTS) {
        if(typeof TRANSFORMATION === 'object') {
            TRANSFORMATION = 'Transformation';
        }

        return _error(`${TRANSFORMATION} is not compatible with its ${CONCEPTS}`, Names.SCHEMA_ERROR);
    }
};