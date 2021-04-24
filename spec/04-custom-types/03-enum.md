# Enum

Enum validator enables you to restrict value of a custom type to be one of the
items in a given list.

For following concepts definition, `statusCode` is restricted to be either
`200`, `400` or `500`.

`CONCEPTS: service.concepts.json`

```json
{
    "$service+": {
        "statusCode": "$statusCode:httpStatus"
    },
    "@types": {
        "httpStatus": {
            "type": "number",
            "enum": [ 200, 400, 500 ]
        }
    }
}
```

Short-hand for enum validator is as follows;

`CONCEPTS: service.concepts.json`

```json
{
    "$service+": {
        "statusCode": "$statusCode:httpStatus"
    },
    "@types": {
        "httpStatus": [ 200, 400, 500 ]
    }
}
```

`CONCEPTS SHADOW`

```json
{
    "concept": {
        "_": "service",
        "quantifier": { "min": 1 },
        "literal": {
            "_": "statusCode",
            "variable": {
                "_": "statusCode",
                "type": "httpStatus"
            }
        }
    },
    "metaData": {
        "types": [
            {
                "_": "httpStatus",
                "type": "number",
                "validators": [
                    {
                        "_": "enum",
                        "value": [ 200, 400, 500 ]
                    }
                ]
            }
        ]
    }
}
```

Here `httpStatus` automatically inherits from `number`, because every item in
the array is a `number`.

Below schema is **NOT** valid, because `404` is not listed in `httpStatus`
definition;

`SCHEMA: greeting.service.json`

```json
{
    "sayHello": {
        "statusCode": 404
    }
}
```

`ERROR: 'greeting.service.json' is not valid, '404' is not a valid http status.`

## Enum of `any` Type

`CONCEPTS: service.concepts.json`

```json
{
    "$service+": {
        "statusCode": "$statusCode:httpStatus"
    },
    "@types": {
        "httpStatus": [ 200, "400", 500 ]
    }
}
```

type of `httpStatus` is automatically set to `any`, because not all of the
items are of the same type.
