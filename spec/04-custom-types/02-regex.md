# Regex

Regex validator can be applied to custom types that inherit from `string`. You
can define a regex pattern under `regex` key. For the following concepts
definition, `identifier` type only accepts values that match the given regex
pattern;

`CONCEPTS: service.concepts.json`

```json
{
    "$service+": {
        "name": "$name:identifier"
    },
    "@types": {
        "identifier": {
            "type": "string",
            "regex": "/^[a-zA-Z]*$/g"
        }
    }
}
```

For above concepts definition following schema is **NOT** valid;

`SCHEMA: greeting.service.json`

```json
{
    "service": {
        "name": "say hello"
    }
}
```

Because `say hello` does **NOT** match `/[a-zA-Z]/g` pattern.

`ERROR: 'greeting.service.json' is not valid, 'say hello' is not a valid`
`identifier.`

## Short-Hand Usage

Following definition demonstrates a short-hand usage of `regex` validator.

`CONCEPTS: service.concepts.json`

```json
{
    "$service+": {
        "name": "$name:identifier"
    },
    "@types": {
        "identifier": "/^[a-zA-Z]*$/g"
    }
}
```
