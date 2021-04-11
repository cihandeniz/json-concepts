class Concepts {
    /**
     * @param {String|Object} conceptsPathOrObject
     * 
     * @returns {Concepts} 
     */
    static load(conceptsPathOrObject) {
        let conceptsObject = conceptsPathOrObject;
        if(typeof conceptsObject === 'string') {
            conceptsObject = JSON.parse(fs.readFileSync(conceptsObject));
        }

        return new Concepts(conceptsObject);
    }

    #conceptsObject;

    constructor(conceptsObject) {
        this.#conceptsObject = conceptsObject;
    }

    get object() {
        return this.#conceptsObject;
    }

    /**
     * @param {Object} schemaObject
     * 
     * @returns {boolean}
     */
    validate(schemaObject) {
        return Concepts.#validateRecursively(this.#conceptsObject, schemaObject);
    }

    /**
     * 
     * @param {String|Object} schemaPathOrObject 
     * 
     * @returns {Schema}
     */
    load(schemaPathOrObject) {
        let schemaObject = schemaPathOrObject;
        if(typeof schemaObject === 'string') {
            schemaObject = JSON.parse(fs.readFileSync(schemaPathOrObject));
        }

        if (this.validate(schemaObject)) {
            return new Schema(schemaObject);
        } else {
            throw "error";
        }
    }

    static #validateRecursively = function (conceptsObject, schemaObject) {
        if (typeof conceptsObject === 'string') {
            return Concepts.#validateValue(conceptsObject, schemaObject);
        }

        for (const key in conceptsObject) {
            let schemaKey = key;

            if (Concepts.#isVariable(key)) {
                schemaKey = Object.keys(schemaObject)[0];
            } else if (!schemaObject.hasOwnProperty(key)) {
                return false;
            }

            if (!Concepts.#validateRecursively(conceptsObject[key], schemaObject[schemaKey])) {
                return false;
            }
        }

        return Object.keys(conceptsObject).length == Object.keys(schemaObject).length;
    }

    static #validateValue = function (conceptsObject, schemaObject) {
        if (Concepts.#isVariable(conceptsObject)) {
            return true;
        }

        return conceptsObject === schemaObject;
    }

    static #isVariable = function (expression) {
        return expression.startsWith(symbols.VARIABLE);
    }

    static #isMetaData = function (expression) {
        return expression.startsWith(symbols.META_DATA);
    }
}

module.exports = { Concepts };

const fs = require('fs');
const symbols = require('./symbols');
const Schema = require('./schema').Schema;