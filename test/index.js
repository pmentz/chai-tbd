/*jshint mocha: true */
/*jshint expr: true */
'use strict';

var chai = require('chai');
var expect = require('chai').expect;
var testee = require('../index');

describe('chai-tbd', function() {
  it('exists', function() {
    expect(testee).to.be.ok;
  });

  it('is a function', function() {
    expect(testee).to.be.a('function');
  });

  it('creates an AssertionError with the message "To be done!"', function() {
    try {
      testee();
    } catch (error) {
      expect(error).to.be.an.instanceof(chai.AssertionError);
      expect(error.message).to.equal('To be done!');
    }
  });

  it('creates an AssertionError with the message given', function() {
    try {
      testee('Foo');
    } catch (error) {
      expect(error.message).to.equal('Foo');
    }
  });

  describe('`complain(message)`', function() {
    before(function() {
      this.testee = testee.complain('Foo');
    });

    it('returns a function', function() {
      expect(this.testee).to.be.a('function');
    });

    it('creates an AssertionError with the message used', function() {
      try {
        this.testee();
      } catch (error) {
        expect(error).to.be.an.instanceof(chai.AssertionError);
        expect(error.message).to.equal('Foo');
      }
    });

    it('creates an AssertionError with the overriden message', function() {
      try {
        this.testee('Bar');
      } catch (error) {
        expect(error.message).to.equal('Bar');
      }
    });
  });
});
