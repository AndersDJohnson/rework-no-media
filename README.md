## Rework - No Media

[![NPM version](https://badge.fury.io/js/rework-no-media.png)](http://badge.fury.io/js/rework-no-media)
[![NPM dependencies](https://david-dm.org/adjohnson916/rework-no-media.png)](https://david-dm.org/adjohnson916/rework-no-media)
[![Build Status](https://travis-ci.org/adjohnson916/rework-no-media.png)](https://travis-ci.org/adjohnson916/rework-no-media)

> Unwrap media queries with [rework].

Using [rework], removes media queries around rule sets, elevating them to the root scope.

Useful for e.g. providing alternate stylesheets to older browsers in a mobile-first design, as an alternative to buggy and client-side heavy JavaScript media query polyfills like [Respond](https://github.com/scottjehl/Respond) or [css3-mediaqueries-js](https://code.google.com/p/css3-mediaqueries-js/).

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

[rework]: https://github.com/visionmedia/rework
