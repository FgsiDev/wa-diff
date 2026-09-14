__d(
  "AdsUEditorCampaignAnchorViewThroughAttrWindowReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignAnchorViewThroughAttrWindowActionFlux",
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
              ).anchor_view_through_attribution_window_seconds.set(
                t.windowSeconds,
                e,
              );
            });
          },
          o("AdsUEditorCampaignAnchorViewThroughAttrWindowActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
