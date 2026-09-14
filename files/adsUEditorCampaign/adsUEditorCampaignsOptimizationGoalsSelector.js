__d(
  "adsUEditorCampaignsOptimizationGoalsSelector",
  [
    "AdsAPIOptimizationGoals",
    "adsCreateSelector",
    "adsUEditorSelectedCampaignPlainObjectsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        var e;
        return (e = t.optimization_goal) != null
          ? e
          : r("AdsAPIOptimizationGoals").NONE;
      },
      s = r("adsCreateSelector")(
        [r("adsUEditorSelectedCampaignPlainObjectsSelector")],
        function (n) {
          return n.map(e);
        },
        { name: i.id },
      ),
      u = s;
    l.default = u;
  },
  98,
);
