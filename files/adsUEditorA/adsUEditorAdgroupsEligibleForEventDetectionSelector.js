__d(
  "adsUEditorAdgroupsEligibleForEventDetectionSelector",
  [
    "ReminderAdsGating",
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
        function (t) {
          return t.every(function (e) {
            var t = e.campaign,
              n = e.campaignGroup;
            return o(
              "ReminderAdsGating",
            ).isEventDetectionSupportedForObjectiveAndOptimization(
              n.objective,
              t.optimization_goal,
            );
          });
        },
        { name: i.id + ".adsUEditorAdgroupsEligibleForEventDetectionSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
