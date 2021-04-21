# Variable Types

Variable types can be defined explicitly.

For this concepts definition, `$enabled:boolean` denotes that `enabled` should
be a `boolean`;

`CONCEPTS: service.concepts.json`

```json
{
    "$service+": {
        "$flag*": "$enabled:boolean"
    }
}
```

Concepts shadow contains type of a variable under `type` key;

`CONCEPTS SHADOW`

```json
{
    "concept": {
        "_": "service",
        "quantifier": { "min": 1 },
        "concept": {
            "_": "flag",
            "quantifier": { "min": 0 },
            "variable": {
                "_": "enabled",
                "type": "boolean"
            }
        }
    }
}
```

Below is an **INVALID** schema;

`SCHEMA: greeting.service.json`

```json
{
    "sayGoodbye": {
        "async": "yes",
    }
}
```

`ERROR: 'greeting.service.json' is not valid, '$enabled' expects a boolean,`
`but got a string "yes".`

## Available Variable Types

- `:any` allows any type of value to be set to corresponding variable
- `:object` allows only objects without a validation
- `:string` allows only string values
- `:boolean` allows only `true` or `false`
- `:number` allows only numbers

> Note that `:object` does not allow a primitive for its variable.

By default a variable type is `:any`. Below concept definitions behaves exactly
the same;

`explicit.concepts.json`

```json
{
    "$service+": {
        "extra": "$extra:any"
    }
}
```

`implicit.concepts.json`

```json
{
    "$service+": {
        "extra": "$extra"
    }
}
```

> Note that `explicit.concepts.json` will have `type: "any"` in its shadow,
> whereas `implicit.concepts.json` won't.
