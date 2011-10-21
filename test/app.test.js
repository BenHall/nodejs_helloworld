// Run $ expresso

/**
 * Module dependencies.
 */

var app = require('../app'),
    assert = require('assert');


module.exports = {
  'GET /': function(beforeExit, assert){
    assert.response(app,
      { url: '/' },
      { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' }},
      function(res){
        assert.includes(res.body, 'Welcome to Express');
      });
  },
  'String Length': function(beforeExit, assert){
    assert.equal(6, 'foobar'.length);
  }
};