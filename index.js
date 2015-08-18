'use strict';

var chai = require('chai');

function tbdBuilder(globalMessage) {
  return function tbd(message) {
    if (!message) {
      message = globalMessage;
    }
    throw new chai.AssertionError(message, null, tbd);
  };
}

module.exports = tbdBuilder('To be done!');
module.exports.complain = tbdBuilder;
