## Rework - No Media

[![NPM version](https://badge.fury.io/js/rework-no-media.png)](http://badge.fury.io/js/rework-no-media)
[![NPM dependencies](https://david-dm.org/adjohnson916/rework-no-media.png)](https://david-dm.org/adjohnson916/rework-no-media)

> Unwrap media queries with rework.

Removes media queries around rules, placing those rules in the same location as before, but at the root scope instead.
Useful for e.g. providing alternate stylesheets to older browsers in a mobile-first design.

See `test/fixtures` for examples.

### API

```js
var rework = require('rework')
var noMedia = require('rework-no-media')

var css = rework(inputCSS)
.use(noMedia())
.toString()
```

#### noMedia([options])

`options` (object) - An optional options object.

`options.skipPrint` (boolean) (default: true) - Skip rewriting media queries containing `print` rules.

### License

The MIT License (MIT)

Copyright (c) 2013 Anders D. Johnson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
