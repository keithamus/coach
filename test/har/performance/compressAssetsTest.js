'use strict';
let assert = require('assert');
let har = require('../../help/har');


describe('Always compress text content', function() {
  it('We should be able to know that all content are compressed', function() {
    return har.getHARresult('test/har/files/compressAssets.har').then((result) => {
      assert.strictEqual(result[0].performance.compressAssets.offending.length, 0);
      assert.strictEqual(result[0].performance.compressAssets.score, 100);
    });
  });


  it('We should be able to find content that are not compressed', function() {
    return har.getHARresult('test/har/files/compressAssets2.har').then((result) => {
      assert.strictEqual(result[0].performance.compressAssets.score < 100, true );
    });
  });

});
