[![Build Status][buildstatus-img]][buildstatus-url] [![Coverage Status][coverage-img]][coverage-url] [![Dependency Status][dependency-img]][dependency-url] [![devDependency Status][devDependency-img]][devDependency-url] [![stable][stable-img]][stability-url]  
[![NPM][nodei-img]][nodei-url]

# chai-tbd
An extension for [chai][] to create failing *to be done* tasks.

## Installation

* You need to have [npm][] installed. 
* Use 
    * `npm install chai-tbd` to retrieve the module or 
    * `npm install chai-tbd -D` to save the developer dependency to your package.json.

## Guide

When defining tests, I often start to write down the stubs for the tests I will have to implement. When finished I start to fill them with life. My problem was, what to do with those tests that have to be done.

With [mocha][] you are able to simply leave the function out of the `it` command to mark it as *pending*.

```javascript
describe('incomplete feature', function() {
  it('misses tests');
});
```

That's good, but actually, I wanted my tests to fail with a message.

So [chai][] has the `fail` expression, to... well, to fail. So I could use that one. A little bit of a problem is, that its purpose is the use in custom validations. This is the reason, why the signature is not that handy.

```javascript
describe('incomplete feature', function() {
  it('misses tests', function() {
    expect.fail('foo', 'bar', 'To be done!');
  });
});
```

Ok, you could also use `null` instead of `'foo'` and `'bar'`, but that does not make it much nicer.

Long story short, I wrote this module to handle this situation.

```javascript
var tbd = require('chai-tbd');

describe('incomplete feature', function() {
  it('misses tests', function() {
    tbd();
  });
});
```

You will have a clean stacktrace in your output:

```
  1) incomplete feature:
     AssertionError: To be done!
      at Context.<anonymous> (test/index.js:5:5)
```

If you want a special message in some cases, you can hand it over as an argument.

```javascript
describe('incomplete feature', function() {
  it('misses tests', function() {
    tbd('I will implement this later');
  });
});
```

And if you don't like the common message *"To be done!"*, you can configure it as well at retrieval time.

```javascript
var notImplemented = require('chai-tbd').complain('Not implemented yet');

describe('incomplete feature', function() {
  it('misses tests', function() {
    notImplemented();
  });
});
```


## API

### tbd([message])

When called, this function throws an `chai.AssertionError` with the message *"To be done!"*. The optional `message` param can be used to change the reason.  
Note, that you can create a function with a permanent message, using [tbd.complain(message)](#tbdcomplainmessage).

### tbd.complain(message)

This will return a function, that throws an `chai.AssertionError` with the given message. The returned function behaves exactly like [tbd([message])](#tbdmessage) except, that its default reason is the message given.

## License

MIT

[npm]:http://npmjs.org/
[chai]: https://www.npmjs.com/package/chai
[mocha]: https://www.npmjs.com/package/mocha

[buildstatus-img]: https://travis-ci.org/pmentz/chai-tbd.svg?branch=master
[buildstatus-url]: https://travis-ci.org/pmentz/chai-tbd
[coverage-img]: https://coveralls.io/repos/pmentz/chai-tbd/badge.svg?service=github&branch=master
[coverage-url]: https://coveralls.io/github/pmentz/chai-tbd?branch=master
[dependency-img]: https://david-dm.org/pmentz/chai-tbd.svg
[dependency-url]: https://david-dm.org/pmentz/chai-tbd
[devDependency-img]: https://david-dm.org/pmentz/chai-tbd/dev-status.svg
[devDependency-url]: https://david-dm.org/pmentz/chai-tbd#info=devDependencies
[stable-img]: https://img.shields.io/badge/stability-2%20--%20stable-brightgreen.svg?style=flat-round
[stability-url]: https://iojs.org/api/documentation.html#documentation_stability_index
[nodei-img]: https://nodei.co/npm/chai-tbd.png?compact=true
[nodei-url]: https://nodei.co/npm/chai-tbd/