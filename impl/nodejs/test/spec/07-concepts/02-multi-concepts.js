const { Concepts } = require('../../..');
const { error } = require('../../../src/util');
const { should } = require('chai');

should();

describe('spec/concepts/multi-concepts', function () {
    it('should allow more than one concept at the same level', function () {
        const concepts = new Concepts({
            "$class*": {
                "$property*": {
                    "returns": "$returnType"
                },
                "$method*": {
                    "$parameter*": "$type",
                    "returns": "$returnType"
                }
            }
        });

        concepts.shadow.should.deep.equal({
            "concept": {
                "_": "class",
                "quantifier": { "min": 0 },
                "concept": [
                    {
                        "_": "property",
                        "quantifier": { "min": 0 },
                        "literal": {
                            "_": "returns",
                            "variable": { "_": "returnType" }
                        }
                    },
                    {
                        "_": "method",
                        "quantifier": { "min": 0 },
                        "literal": {
                            "_": "returns",
                            "variable": { "_": "returnType" }
                        },
                        "concept": {
                            "_": "parameter",
                            "quantifier": { "min": 0 },
                            "variable": { "_": "type" }
                        }
                    }
                ]
            }
        });
    });

    describe('name conflicts', function () {
        it('should give error when two concepts share the same name', function () {
            (() => new Concepts({
                "$conflict*": "$value",
                "$conflict+": {
                    "another": "$value"
                }
            })).should.throw(
                error.Concepts_definition_is_not_valid__REASON(
                    because => because.Cannot_declare_CONCEPT_more_than_once(
                        'conflict'
                    )
                ).message
            );
        });
    });

    describe('concepts resolution', function () {
        it('should set concept of a schema to the first validating concept', function () {
            const concepts = new Concepts({
                "$class*": {
                    "$property*": {
                        "returns": "$returnType"
                    },
                    "$method*": {
                        "$parameter*": "$type",
                        "returns": "$returnType"
                    }
                }
            });

            const schema = concepts.create({
                "user": {
                    "login": {
                        "username": "string",
                        "password": "string",
                        "returns": "string"
                    }
                }
            });

            schema.shadow.should.deep.equal({
                "class": [
                    {
                        "_": "user",
                        "property": [],
                        "method": [
                            {
                                "_": "login",
                                "parameter": [
                                    {
                                        "_": "username",
                                        "type": "string"
                                    },
                                    {
                                        "_": "password",
                                        "type": "string"
                                    }
                                ],
                                "returnType": "string"
                            }
                        ]
                    }
                ]
            });
        });

        it('should give error when none of the concepts validate a schema', function () {
            const concepts = new Concepts({
                "$class*": {
                    "$property*": {
                        "returns": "$returnType"
                    },
                    "$method*": {
                        "$parameter*": "$type",
                        "returns": "$returnType"
                    }
                }
            });

            (() => concepts.create({
                "user": {
                    "login": {
                        "username": "string",
                        "password": "string"
                    }
                }
            })).should.throw(
                error.Schema_definition_is_not_valid__REASON(
                    because => because.LITERAL_is_missing(
                        'returns'
                    )
                ).message
            );
        });
    });

    describe('more than one match found', function () {
        it('should set the concept to the first one when more than one concept matches', function () {
            const concepts = new Concepts({
                "$class*": {
                    "$property*": {
                        "returns": "$returnType"
                    },
                    "$method*": {
                        "$parameter*": "$type",
                        "returns": "$returnType"
                    }
                }
            });

            const schema = concepts.create({
                "user": {
                    "logout": {
                        "returns": "number"
                    }
                }
            });

            schema.shadow.class[0].property[0]._.should.be.equal('logout');
        });
    });
});