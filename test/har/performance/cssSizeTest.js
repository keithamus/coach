'use strict';
let assert = require('assert');
let har = require('../../help/har');


describe('Don\'t send too much CSS to the browser', function() {
  it('We should be able to know if there are too much CSS', function() {
    return har.getHARresult('test/har/files/cssSize.har').then((result) => {
      assert.strictEqual(result[0].performance.cssSize.score, 100);
    });
  });

  it('We should be able to know if there are too much CSS', function() {
    return har.getHARresult('test/har/files/cssSize2.har').then((result) => {
      assert.strictEqual(result[0].performance.cssSize.score, 50);
    });
  });
});
