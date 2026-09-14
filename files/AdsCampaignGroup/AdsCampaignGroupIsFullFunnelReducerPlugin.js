__d(
  "AdsCampaignGroupIsFullFunnelReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsFullFunnelActionFlux",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignGroupIDs,
              function (e) {
                return r("AdsCampaignGroupRecordAccessors").is_full_funnel.set(
                  t.isFullFunnel || !1,
                  e,
                );
              },
            );
          },
          r("AdsFullFunnelActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
