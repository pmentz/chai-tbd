/*jshint mocha: true */
/*jshint expr: true */
'use strict';

var expect = require('chai').expect;
var testee = require('../index');

describe('chai-tbd', function() {
  it('exists', function() {
    expect(testee).to.be.ok;
  });
});
