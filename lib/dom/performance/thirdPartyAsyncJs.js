/**
 * The sitespeed.io coach (https://www.sitespeed.io/coach)
 * Copyright (c) 2016, Peter Hedenskog, Tobias Lidskog
 * and other contributors
 * Released under the Apache 2.0 License
 */
(function(util) {
  'use strict';
  var patterns = [
    'ajax.googleapis.com',
    'apis.google.com',
    '.google-analytics.com',
    'connect.facebook.net',
    'platform.twitter.com',
    'code.jquery.com',
    'platform.linkedin.com',
    '.disqus.com',
    'assets.pinterest.com',
    'widgets.digg.com',
    '.addthis.com',
    'code.jquery.com',
    'ad.doubleclick.net',
    '.lognormal.com',
    'embed.spotify.com'
  ];

  function is3rdParty(url) {
    var hostname = util.getHostname(url);
    var re;
    for (var i = 0; i < patterns.length; i++) {
      re = new RegExp(patterns[i]);
      if (re.test(hostname)) {
        return true;
      }
    }
    return false;
  }
  var score = 0;
  var offending = [];
  var scripts = util.getSynchJSFiles(document);

  for (var i = 0, len = scripts.length; i < len; i++) {
    if (is3rdParty(scripts[i])) {
        offending.push(scripts[i]);
        score += 10;
    }
  }

  return {
    id: 'thirdPartyAsyncJs',
    title: 'Always load third party Javascript asynchronously',
    description: 'Use the JavaScript snippets that load the JS files asynchronously in order to speed up the user experience',
    advice: offending.length > 0 ? 'The page got ' + offending.length + ' synchronously Javascript requests.': '',
    score: 100 - score < 0 ? 0 : 100 - score,
    weight: 5,
    offending: offending,
    tags: ['performance','js']
  };
})(util);
