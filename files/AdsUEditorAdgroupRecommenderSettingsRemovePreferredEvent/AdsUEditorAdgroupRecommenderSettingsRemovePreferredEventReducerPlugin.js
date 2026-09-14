__d(
  "AdsUEditorAdgroupRecommenderSettingsRemovePreferredEventReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupRecommenderSettingsRemovePreferredEventDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return (
              r("vulture")("AcKnIatNeMJn8SvrA4_dEgvbY7c="),
              o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                var n;
                r("vulture")("jcohgsA_aAtVjOqQXB8sRuDt_z4=");
                var o =
                  (n = e.creative) == null ||
                  (n = n.recommender_settings) == null
                    ? void 0
                    : n.preferred_events;
                return (
                  o &&
                    (o = o.filter(function (e) {
                      return e !== t.event;
                    })),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.recommender_settings.preferred_events.set(o, e)
                );
              })
            );
          },
          o(
            "AdsUEditorAdgroupRecommenderSettingsRemovePreferredEventDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
