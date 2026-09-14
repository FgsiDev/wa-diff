__d(
  "AdsUEditorAdgroupMessageMarketingSetAssetCustomizationBodyReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSetAssetCustomizationBodyActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return t.body != null
                ? r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.marketing_message_structured_spec.asset_customization.body.set(
                    t.body,
                    e,
                  )
                : r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.marketing_message_structured_spec.asset_customization.delete(
                    e,
                  );
            });
          },
          r(
            "AdsUEditorAdgroupMessageMarketingSetAssetCustomizationBodyActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
