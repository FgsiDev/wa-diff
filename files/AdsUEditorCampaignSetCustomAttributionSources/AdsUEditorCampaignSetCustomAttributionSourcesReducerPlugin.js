__d(
  "AdsUEditorCampaignSetCustomAttributionSourcesReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetCustomAttributionSourcesActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.custom_attribution_source_ids.set(
                r("immutable").List(t.customAttributionSourceIDs),
                e,
              );
            });
          },
          o("AdsUEditorCampaignSetCustomAttributionSourcesActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
