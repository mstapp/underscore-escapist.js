# Underscore-escapist.js

Strong anti-XSS protection for underscore.js templates.

Underscore-escapist.js is a plugin for the
[underscore.js](https://github.com/jashkenas/underscore) library that replaces
underscore's built-in `escape()` function with the
[escapist.js](https://github.com/mstapp/escapist.js) library's
`escapist.attr()`.  This combines the convenience of the underscore templates'
escaped-interpolate operator (`<%-`) with strong, whitelisted escaping from
OWASP's Reform project via escapist.js.

The underscore `escape` function only blacklists the "big 6" evil characters
commonly used for XSS injection (`&`, `<`, `>`, `"`, `'`, and `/`). OWASP
recommends using a whitelist approach instead. A whitelist escape algorithm
will escape all characters except for a small set of known-safe characters
(the whitelist). Whitelisting prevents XSS attacks that exploit security holes
left open by browsers' attempts to allow malformed HTML.

Underscore-escapist.js replaces underscore's `escape` function with a wrapper
that calls `escapist.attr`, which uses the OWASP Reform library's whitelist
algorithm. Since underscore's escaped-interpolate operator (`<%-`) calls
`_.escape`, the escapist.js anti-XSS code is used automatically in those
template contexts as well as in direct calls to `_.escape`.

## Usage

**The underscore-escapist.js library includes a copy of escapist.js.** No need
to download escapist.js separately.

You can use underscore-escapist in JavaScript code or HTML templates. Add the library file
from `dist/underscore-escapist.js` to your project and include it in your HTML via a
`<script>` tag.

Calls to escaped-interpolate operator (`<%-`) will escape text via `escapist.attr()`:

```
<!-- Equivalent to <%= escapist.attr( untrustedText ) %>. -->
<p> <%- untrustedText %> </p>
```

If you want to use `escapist.html()` instead of the default `attr` function:

```
<p> <%= escapist.html( untrustedText ) %> </p>
```

Of course, direct calls to `_.escape()` will also use `escapist.attr()`:

```
var safeText = _.escape( untrustedText );
```

## Install Source & Build

Clone the source, install node.js with `npm` package manager, then install
`grunt-cli` globally:

```
npm install -g grunt-cli
```

Then `cd` to the underscore-escapist directory and `npm install` to install the
underscore-escapist.js dependencies.

To build, run `grunt` to create the full `dist/underscore-escapist.js` distribution file.

## Tests

Underscore-escapist.js uses qunit for unit tests. To run the tests, first run a simple test
server so you can load the tests/index.html file in a browser:

```
node tests/testserver.js
```

Then point your browser to http://localhost:8080/tests/ to run the tests & view the test results.

## License

MIT License. See the [license file](LICENSE.txt) for details.
