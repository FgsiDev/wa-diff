__d(
  "AdsUEditorCampaignDeliveryChangeOmnichannelWebAppAndMCMEConversionObjectReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryChangeOmnichannelWebAppMCMEConversionObjectActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n,
                a,
                i = e,
                l = (n = r("immutable")).Map(t.appData),
                s = n.Map(t.pixelData),
                u = t.mcmeConversionID;
              return o("AdsMutators").chain(
                (a = r(
                  "AdsCampaignRecordAccessors",
                )).promoted_object.omnichannel_object.app.set(n.List([l])),
                a.promoted_object.omnichannel_object.pixel.set(n.List([s])),
                a.promoted_object.mcme_conversion_id.set(u),
                a.promoted_object.value_semantic_type.set(null),
              )(i);
            });
          },
          o(
            "AdsUEditorCampaignDeliveryChangeOmnichannelWebAppMCMEConversionObjectActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
