const { Concepts } = require('../../..');
const { error } = require('../../../src/util');
const { should } = require('chai');

should();

describe('spec/arrays/object-arrays', function () {
    it('should allow object arrays for literals', function () {
        const concepts = new Concepts({
            "$service+": {
                "parameters?": [{
                    "name": "$pName",
                    "type": "$pType"
                }]
            }
        });

        concepts.shadow.should.deep.equal({
            "concept": {
                "_": "service",
                "quantifier": { "min": 1 },
                "literal": {
                    "_": "parameters",
                    "quantifier": { "min": 0, "max": 1 },
                    "variable": {
                        "dimensions": 1,
                        "literal": [
                            {
                                "_": "name",
                                "variable": { "_": "pName" }
                            },
                            {
                                "_": "type",
                                "variable": { "_": "pType" }
                            }
                        ]
                    }
                }
            }
        });
    });

    it('should give error when array definition does not exist', function () {
        const definition =
        {
            "openapi": "$spec-version:version",
            "info": {
                "version": "$version:version",
                "title": "$title",
                "license?": {
                    "name": "$license-name",
                    "url?": "$license-url:url"
                }
            },
            "servers?": [
                {}
            ],
            "@types": {
                "version": "^[0-9]+\\.[0-9]+(\\.[0-9]){0,1}$",
                "url": "http[s]?:\\/\\/.*"
            }
        };

        throw new Error('not implemented');
    });

    describe('schema', function () {
        it('should validate object arrays', function () {
            const concepts = new Concepts({
                "$service+": {
                    "parameters?": [{
                        "name": "$pName",
                        "type": "$pType"
                    }]
                }
            });

            const schema = concepts.create({
                "sayHello": {
                    "parameters": [
                        {
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "name": "surname",
                            "type": "string"
                        }
                    ]
                }
            });

            schema.shadow.should.deep.equal({
                "service": [
                    {
                        "_": "sayHello",
                        "parameters": [
                            {
                                "pName": "name",
                                "pType": "string"
                            },
                            {
                                "pName": "surname",
                                "pType": "string"
                            }
                        ]
                    }
                ]
            });
        });

        it('should validate every item in object array', function () {
            const concepts = new Concepts({
                "$service+": {
                    "parameters?": [{
                        "name": "$name",
                        "type?": "$type"
                    }]
                }
            });

            (() => concepts.validate({
                "sayHello": {
                    "parameters": [{}]
                }
            })).should.throw(
                error.Schema_definition_is_not_valid__REASON(
                    because => because.LITERAL_is_missing('name')
                ).message
            );

            (() => concepts.validate({
                "sayHello": {
                    "parameters": [
                        { "name": "string" },
                        { "type": "string" }
                    ]
                }
            })).should.throw(
                error.Schema_definition_is_not_valid__REASON(
                    because => because.LITERAL_is_missing('name')
                ).message
            );
        });

        it('should not accept arrays when object array is not expected', function () {
            const concepts = new Concepts({
                "zero": { "value": "$value" }
            });

            (() => concepts.validate({
                "zero": [{}]
            })).should.throw(
                error.Schema_definition_is_not_valid__REASON(
                    because => because.VARIABLE_is_not_an_array(
                        'zero'
                    )
                ).message
            );
        });

        it('should treat the literal that holds the object array as a schema node', function () {
            const concepts = new Concepts({
                "$service+": {
                    "parameters?": [{
                        "name": "$pName"
                    }]
                }
            });

            const schema = concepts.create({
                "sayHello": {
                    "parameters": [{
                        "name": "name"
                    }]
                }
            });

            const sayHello = schema._shadow.getSchemas('service')[0];
            const parameters = sayHello.getSchemas('parameters')[0];

            parameters.data.should.deep.equal({
                "pName": "name"
            });
        });
    });

    describe('concepts vs object arrays', function () {
        it('should cast the same schema shadow', function () {
            const concepts = new Concepts({
                "$service+": {
                    "$parameter*": "$type"
                }
            });

            const schema1 = concepts.create({
                "sayHello": {
                    "name": "string",
                    "surname": "string"
                }
            });

            const objectArray = new Concepts({
                "$service+": {
                    "parameter?": [{
                        "name": "$_",
                        "type": "$type"
                    }]
                }
            });

            const schema2 = objectArray.create({
                "sayHello": {
                    "parameter": [
                        {
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "name": "surname",
                            "type": "string"
                        }
                    ]
                }
            });

            schema1.shadow.should.deep.equal(schema2.shadow);
        });
    });

    describe('concepts and object arrays', function () {
        it('should allow concepts under object arrays', function () {
            (() => new Concepts({
                "array?": [{
                    "$field*": "$value"
                }]
            })).should.not.throw();
        });

        it('should allow object arrays under concepts', function () {
            (() => new Concepts({
                "$data*": [{
                    "name": "$name",
                    "value": "$value"
                }]
            })).should.not.throw();
        });

        it('should concepts under object arrays under concepts', function () {
            (() => new Concepts({
                "$data*": [{
                    "$field*": "$value"
                }]
            })).should.not.throw();
        });
    });

    describe('multi-dimensional array', function () {
        it('should allow more than one dimensions', function () {
            const concepts = new Concepts({
                "matrix": [[{ "value": "$value" }]]
            });

            const schema = concepts.create({
                "matrix": [[{ "value": 1 }, { "value": 2 }]]
            });

            schema.shadow.should.deep.equal({
                "matrix": [[
                    { "value": 1 },
                    { "value": 2 }
                ]]
            });
        });

        it('should allow less dimensions in schema', function () {
            const concepts = new Concepts({
                "matrix": [[{ "value": "$value" }]]
            });

            const schema1 = concepts.create({
                "matrix": [{ "value": 1 }, { "value": 2 }]
            });

            schema1.shadow.should.deep.equal({
                "matrix": [[
                    { "value": 1 },
                    { "value": 2 }
                ]]
            });

            const schema2 = concepts.create({
                "matrix": { "value": 1 }
            });

            schema2.shadow.should.deep.equal({
                "matrix": [[
                    { "value": 1 }
                ]]
            });
        });

        it('should not allow more dimensions than expected', function () {
            const concepts = new Concepts({
                "matrix": [[{ "value": "$value" }]]
            });

            (() => concepts.create({
                "matrix": [[[{ "value": 1 }]]]
            })).should.throw(
                error.Schema_definition_is_not_valid__REASON(
                    because => because.VARIABLE_expects_at_most_EXPECTED_dimensional_array__but_got_ACTUAL(
                        'matrix', 2, 3
                    )
                ).message
            );
        });
    });
});
