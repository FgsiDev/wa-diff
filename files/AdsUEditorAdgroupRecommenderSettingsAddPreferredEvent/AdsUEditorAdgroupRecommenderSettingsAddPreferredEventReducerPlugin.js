__d(
  "AdsUEditorAdgroupRecommenderSettingsAddPreferredEventReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupRecommenderSettingsAddPreferredEventDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n, o;
              if (!((n = e.creative) != null && n.product_set_id)) return e;
              var a =
                ((o = e.creative) == null ||
                (o = o.recommender_settings) == null
                  ? void 0
                  : o.preferred_events) || r("immutable").List();
              return (
                a.includes(t.event) || (a = a.push(t.event)),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.recommender_settings.preferred_events.set(a, e)
              );
            });
          },
          o(
            "AdsUEditorAdgroupRecommenderSettingsAddPreferredEventDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
