__d(
  "AdsUEditorAdgroupMarketingMessagesSetTrackingSpecReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupTrackingSpecMutators",
    "AdsUEditorCampaignMarketingMessagesUnsetOffsiteConversionFieldsActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.adgroupIDs,
              r = t.conversionType,
              a = t.trackingSpec;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              return o("AdsUEditorAdgroupTrackingSpecMutators").setTrackingSpec(
                a,
                e,
                r,
              );
            });
          },
          r(
            "AdsUEditorCampaignMarketingMessagesUnsetOffsiteConversionFieldsActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
