__d(
  "AdsUEditorAdgroupMessageMarketingSetReferencedAdgroupReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSetReferencedAdgroupActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.marketing_message_structured_spec.referenced_adgroup_id.set(
                t.referencedAdgroupId,
                e,
              );
            });
          },
          r("AdsUEditorAdgroupMessageMarketingSetReferencedAdgroupActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
