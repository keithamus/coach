'use strict';

module.exports.runAdvice = function(pages, adviceList, options) {
  adviceList = adviceList.filter(validateAdvice);

  return pages.map(function(page) {
    let results = adviceList.map(function(advice) {
      let pageProcessor = advice.processPage;
      let result = pageProcessor.call(advice, page, options);
      return {
        id: advice.id,
        title: advice.title,
        description: advice.description,
        advice: result.advice,
        weight: advice.weight,
        tags: advice.tags,
        score: result.score,
        offending: result.offending
      };
    });

    // setup a object with the ids as keys to make it easier to use
    let o = {};
    for (let i = 0; i < results.length; ++i) {
      o[results[i].id] = results[i];
    }

    return {
      url: page.url,
      performance: o
    }
  })
};

function validateAdvice(advice) {
  if (!advice.id) {
    console.log('Advice is missing an id');
    return false;
  }
  if (!(typeof advice.processPage === 'function')) {
    console.log('Advice ' + advice.id + ' needs a processPage function.');
    return false;
  }
  return true;
}
