(function (undefined) {
  module.exports = function (options) {
  
    options = options || {};
    options.skipPrint = options.skipPrint == undefined ? true : options.skipPrint;

    return function (style) {
      var rules = style.rules;

      for (var i = 0; i < rules.length; i++) {
        var rule = rules[i];
        var query = rule.media;
        if (!query) continue;
        if (options.skipPrint && query.match(/\bprint\b/)) continue;
        var args = [i--, 1];
        args = args.concat(rule.rules);
        rules.splice.apply(rules, args);
      }
    }
    
  };
})();