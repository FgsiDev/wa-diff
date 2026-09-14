__d(
  "AdsUEditorCampaignSetRetailAudienceConfigReducerPlugin",
  [
    "AdsAPICampaignRecord",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetRetailAudienceConfigActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsAPICampaignRecord").getSpec().retail_audience_config,
      s = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (t, n) {
            var a = n.campaignIDs,
              i = n.retailAudienceConfig;
            return o("AdsMutators").mutateEach(t, a, function (t) {
              return r("AdsCampaignRecordAccessors").retail_audience_config.set(
                new e(i),
                t,
              );
            });
          },
          o("AdsUEditorCampaignSetRetailAudienceConfigActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
