/**
 * The sitespeed.io coach (https://www.sitespeed.io/coach)
 * Copyright (c) 2016, Peter Hedenskog, Tobias Lidskog
 * and other contributors
 * Released under the Apache 2.0 License
 */
 
(function() {
  var measures = {}
  var marks = {};

  if (window.performance && window.performance.getEntriesByType) {

    var myMarks = Array.prototype.slice.call(window.performance.getEntriesByType('mark'));

    myMarks.forEach(function(mark) {
      marks[mark.name] = mark.startTime;
    });

    var myMeasures = Array.prototype.slice.call(window.performance.getEntriesByType('measure'));

    myMeasures.forEach(function(measure) {
      measures[measure.name] = {
        duration: measure.duration,
        startTime: measure.startTime
      };
    });
  }

  return {
    marks: marks,
    measures: measures
  };

})();
