'use strict';
let assert = require('assert');
let har = require('../../help/har');


describe('Avoid setting private headers on items that can be cached', function() {
  it('We should be able to find cache headers that are private', function() {
    return har.getHARresult('test/har/files/privateAssets.har').then((result) => {
      assert.strictEqual(result[0].performance.privateAssets.offending.length, 39);
      assert.strictEqual(result[0].performance.privateAssets.score, 0);
    });
  });

  it('We should be able to know if headers are not private', function() {
    return har.getHARresult('test/har/files/privateAssets2.har').then((result) => {
      assert.strictEqual(result[0].performance.privateAssets.score, 100);
    });
  });
});
