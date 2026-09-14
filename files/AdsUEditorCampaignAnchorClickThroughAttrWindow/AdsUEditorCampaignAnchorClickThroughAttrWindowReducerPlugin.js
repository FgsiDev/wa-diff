__d(
  "AdsUEditorCampaignAnchorClickThroughAttrWindowReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignAnchorClickThroughAttrWindowActionFlux",
    "AdsUEditorCampaignReducerUtils",
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
              ).anchor_click_through_attribution_window_seconds.set(
                t.windowSeconds,
                e,
              );
            });
          },
          o("AdsUEditorCampaignAnchorClickThroughAttrWindowActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
