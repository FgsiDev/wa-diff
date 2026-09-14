__d(
  "AdsUEditorCampaignDeliveryClearOmnichannelWebAppAndMCMEConversionObjectReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryClearOmnichannelWebAppMCMEConversionObjectActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return o("AdsMutators").chain(
                r("AdsCampaignRecordAccessors").promoted_object
                  .mcme_conversion_id.delete,
                r("AdsCampaignRecordAccessors").promoted_object
                  .omnichannel_object.delete,
              )(e);
            });
          },
          o(
            "AdsUEditorCampaignDeliveryClearOmnichannelWebAppMCMEConversionObjectActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
