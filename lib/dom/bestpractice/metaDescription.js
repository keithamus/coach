/**
 * The sitespeed.io coach (https://www.sitespeed.io/coach)
 * Copyright (c) 2016, Peter Hedenskog, Tobias Lidskog
 * and other contributors
 * Released under the Apache 2.0 License
 */
(function() {
  'use strict';
  var max = 155;
  var score = 100;
  var message = '';
  var metas = document.getElementsByTagName('meta');
  var description = metas['description'] ? metas['description'].getAttribute('content') : '';
  if (description.length === 0) {
    message = 'The page is missing a meta description.';
    score = 0;

  } else if (description.length > max) {
    message = 'The meta description is too long. It has ' + description.length + ' characters, recommended is ' + max;
    score = 50;
  }

  // http://static.googleusercontent.com/media/www.google.com/en//webmasters/docs/search-engine-optimization-starter-guide.pdf
  // https://d2eeipcrcdle6.cloudfront.net/seo-cheat-sheet.pdf

  return {
    id: 'metaDescription',
    title: 'Meta desciption',
    description: 'Use a page description to make the page more relevant for a search engine',
    advice: message,
    score: score,
    weight: 5,
    offending: [],
    tags: ['bestpractice']
  };
})();
