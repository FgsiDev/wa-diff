__d(
  "adsUEditorODAXTranslatedObjectivesForSelectedAdgroupsSelector",
  [
    "AdsODAXUtils",
    "AdsUEditorSelectorUtils",
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorGetDerivedPromotedObjectTypeForSelectedAdgroupsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
          r(
            "adsUEditorGetDerivedPromotedObjectTypeForSelectedAdgroupsSelector",
          ),
        ],
        o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e, t) {
          return e.map(function (e, n) {
            var r,
              a = e.campaign,
              i = e.campaignGroup,
              l = t.getValueForIndex(n),
              s =
                (r = a.promoted_object) == null
                  ? void 0
                  : r.full_funnel_objective;
            return o("AdsODAXUtils").maybeTranslateObjective(
              s || i.objective,
              l,
              a.optimization_goal,
            );
          });
        }),
        {
          name:
            i.id +
            ".adsUEditorODAXTranslatedObjectivesForSelectedAdgroupsSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
