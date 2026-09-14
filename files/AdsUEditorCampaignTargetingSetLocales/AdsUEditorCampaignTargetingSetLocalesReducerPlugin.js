__d(
  "AdsUEditorCampaignTargetingSetLocalesReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignTargetingReducerUtils",
    "AdsUEditorCampaignTargetingSetLocalesActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignTargetingReducerUtils").createReducer(
          {},
          function (e, t) {
            return t.campaignIDs == null || t.hostID == null
              ? e
              : o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
                  return o("AdsMutators").chain(
                    r("AdsCampaignRecordAccessors").targeting.locales.set(
                      r("immutable").List(t.locales),
                    ),
                  )(e);
                });
          },
          r("AdsUEditorCampaignTargetingSetLocalesActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
