__d(
  "AdsUEditorCampaignAnchorEngagedViewAttrWindowReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignAnchorEngagedViewAttrWindowActionFlux",
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
              ).anchor_engaged_view_attribution_window_seconds.set(
                t.windowSeconds,
                e,
              );
            });
          },
          o("AdsUEditorCampaignAnchorEngagedViewAttrWindowActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
