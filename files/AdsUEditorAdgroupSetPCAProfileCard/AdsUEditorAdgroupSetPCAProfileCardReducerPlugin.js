__d(
  "AdsUEditorAdgroupSetPCAProfileCardReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetPCAProfileCardDataActionFlux",
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
              ).creative.creative_sourcing_spec.product_media_metadata_spec.multi_share_end_card.set(
                t.hasOptIn,
                e,
              );
            });
          },
          r("AdsUEditorAdgroupSetPCAProfileCardDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
