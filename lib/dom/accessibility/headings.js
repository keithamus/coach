/**
 * @fileoverview Use headings tags to structure your page
 * @namespace advice/accessibility
 * @author Peter Hedenskog, Tobias Lidskog
 * @Copyright (c) 2016, Peter Hedenskog, Tobias Lidskog and other contributors.
 * Released under the Apache 2.0 License.
 */
(function() {
  'use strict';
  var headings = ['h6', 'h5', 'h4', 'h3', 'h2', 'h1'];
  var score = 0;
  var totalHeadings = 0;
  var message = '';
  headings.forEach(function(heading) {
    totalHeadings += Array.prototype.slice.call(window.document.getElementsByTagName(heading)).length;
  });

  if (totalHeadings === 0) {
    score = 0;
    message = 'The page is missing headings. Use them to get a better structure of your content.';
  } else {
    var hadPreviousHeading = false;
    headings.forEach(function(heading) {
      var tags = Array.prototype.slice.call(window.document.getElementsByTagName(heading));
      if (hadPreviousHeading && tags.length === 0) {
        score += 10;
        message += ' Your page is missing ' + heading + ' and have headings with lower prio.';
      }
      if (tags.length > 0) {
        hadPreviousHeading = true;
      }
    })
  }

  return {
    id: 'headings',
    title: 'Use headings tags to structure your page',
    description: 'Headings gives your document a logical, easy to follow structure. Have you ever wondered how Wikipedia puts together its table of contents for each article? They use the logical heading structure for that, too!The h1 through h6 elements are unambiguous in telling screen readers, search engines and other technologies what the structure of your document is. https://www.marcozehe.de/2015/12/14/the-web-accessibility-basics/',
    advice: message,
    score: 100 - score < 0 ? 0 : 100 - score,
    weight: 4,
    offending: [],
    tags: ['accessibility', 'html']
  };

})();
