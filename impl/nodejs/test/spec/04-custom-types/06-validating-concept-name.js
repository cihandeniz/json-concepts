const { Concepts } = require('../../..');
const { error } = require('../../../src/util');
const { should } = require('chai');

should();

describe('spec/custom-types/validating-concept-name', function () {
    it('should allow validating concept names as well', function () {
        const concepts = new Concepts({
            "$service:identifier+": {
                "$method:method*": {
                    "$parameter:identifier*": "$type"
                }
            },
            "@types": {
                "identifier": "/^[a-zA-Z][0-9a-zA-Z]*$/g",
                "method": ["GET", "POST", "PUT", "DELETE"]
            }
        });

        concepts.shadow.should.deep.equal({
            "concept": {
                "_": "service",
                "type": "identifier",
                "quantifier": { "min": 1 },
                "concept": {
                    "_": "method",
                    "type": "method",
                    "quantifier": { "min": 0 },
                    "concept": {
                        "_": "parameter",
                        "type": "identifier",
                        "quantifier": { "min": 0 },
                        "variable": {
                            "_": "type"
                        }
                    }
                }
            }
        });

        (() => concepts.validate({
            "/users": {}
        })).should.throw(
            error.Schema_definition_is_not_valid__because__REASON(
                because => because.VALUE_is_not_a_valid_TYPE(
                    '/users', 'identifier'
                )
            ).message
        );

        (() => concepts.validate({
            "users": {
                "PATCH": {}
            }
        })).should.throw(
            error.Schema_definition_is_not_valid__because__REASON(
                because => because.VALUE_is_not_a_valid_TYPE(
                    'PATCH', 'method'
                )
            ).message
        );
    });

    it('should only allow string types for concept name types', function () {
        (() => new Concepts({
            "$service:number+": "$type"
        })).should.throw(
            error.Concepts_definition_is_not_valid__because__REASON(
                because => because.CONCEPT_cannot_be_TYPE__only_string_allowed(
                    'service', 'number'
                )
            ).message
        );

        (() => new Concepts({
            "$service:identifier+": "$type",
            "@types": {
                "identifier": { "type": "number" }
            }
        })).should.throw(
            error.Concepts_definition_is_not_valid__because__REASON(
                because => because.CONCEPT_cannot_be_TYPE__only_string_allowed_but_TYPE_is_ROOT(
                    'service', 'identifier', 'number'
                )
            ).message
        );
    });

    it('should allow inheritance as long as root type is string', function () {
        (() => new Concepts({
            "$service:identifier+": "$type",
            "@types": {
                "identifier": { "type": "text" },
                "text": { "type": "string" }
            }
        })).should.not.throw();

        (() => new Concepts({
            "$service:money+": "$type",
            "@types": {
                "money": { "type": "decimal" },
                "decimal": { "type": "number" }
            }
        })).should.throw(
            error.Concepts_definition_is_not_valid__because__REASON(
                because => because.CONCEPT_cannot_be_TYPE__only_string_allowed_but_TYPE_is_ROOT(
                    'service', 'money', 'number'
                )
            ).message
        );
    });

    it('should not confuse type error with quantifier error', function () {
        (() => new Concepts({
            "$service:+": "$type",
            "@types": {
                "identifier": { "type": "text" },
                "text": { "type": "string" }
            }
        })).should.throw(
            error.Concepts_definition_is_not_valid__because__REASON(
                because => because.Cannot_parse_EXPRESSION__a_type_was_expected_after_symbol(
                    '$service:+'
                )
            ).message
        );
    });
});