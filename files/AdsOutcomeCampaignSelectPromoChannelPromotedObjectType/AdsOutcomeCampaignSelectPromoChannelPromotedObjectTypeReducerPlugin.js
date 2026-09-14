__d(
  "AdsOutcomeCampaignSelectPromoChannelPromotedObjectTypeReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsODAXCampaignReducerUtils",
    "AdsOutcomeCampaignSelectPromoChannelPromotedObjectTypeDataActionFlux",
    "AdsPromotedObjectTypes",
    "AdsSAFRSelectors",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "adsUEditorAccountSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignGroupsMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
            ),
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
            safrConfig: o("AdsSAFRSelectors").adsSAFRSelector,
          },
          function (e, t, n) {
            return o(
              "AdsODAXCampaignReducerUtils",
            ).adsCampaignSetChannelReducerFn(
              e,
              t,
              babelHelpers.extends({}, n, {
                promotedObjectType: r("AdsPromotedObjectTypes")
                  .WHATSAPP_CHANNEL,
                destinationType: r("AdCampaignDestination").WHATSAPP_CHANNEL,
              }),
            );
          },
          r(
            "AdsOutcomeCampaignSelectPromoChannelPromotedObjectTypeDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
