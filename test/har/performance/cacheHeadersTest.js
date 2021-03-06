'use strict';
let assert = require('assert');
let har = require('../../help/har');


describe('Use cache headers', function() {
  it('We should be able to know if we have failing cache headers', function() {
    return har.getHARresult('test/har/files/cacheHeaders.har').then((result) => {
      assert.strictEqual(result[0].performance.cacheHeaders.score, 0);
      // massive
      assert.strictEqual(result[0].performance.cacheHeaders.offending.length, 115);
    });
  });


  it('We should be able to know if we the cache headers are ok', function() {
    return har.getHARresult('test/har/files/cacheHeaders2.har').then((result) => {
      assert.strictEqual(result[0].performance.cacheHeaders.score,100);
      assert.strictEqual(result[0].performance.cacheHeaders.offending.length, 0);
    });
  });

});
