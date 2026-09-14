__d(
  "adsExperimentsAreAllOptimizationGoalsEqual",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.campaigns;
      return (
        t
          .map(function (e) {
            return e.optimization_goal;
          })
          .toSet().size === 1
      );
    }
    l.default = e;
  },
  98,
);
