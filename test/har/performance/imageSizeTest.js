'use strict';
let assert = require('assert');
let har = require('../../help/har');


describe('Don\'t send too large images to the browser', function() {
  it('We should be able to know if there are too much image data', function() {
    return har.getHARresult('test/har/files/imageSize.har').then((result) => {
      assert.strictEqual(result[0].performance.imageSize.score, 50);
    });
  });


  it('We should be able to know if the amount of image data is ok', function() {
    return har.getHARresult('test/har/files/imageSize2.har').then((result) => {
      assert.strictEqual(result[0].performance.imageSize.score, 100);
    });
  });

});
