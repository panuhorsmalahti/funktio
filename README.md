funktio
=======

A tiny functional programming toolbox.

Usage:
```
const funktio = require("funktio");

// returns a new object {a: 1, b: 2}
const obj = funktio.updated({a: 1}, "b", 2);

// returns a new object {b: 2}
const obj2 = funktio.removed(obj, "a");
```
