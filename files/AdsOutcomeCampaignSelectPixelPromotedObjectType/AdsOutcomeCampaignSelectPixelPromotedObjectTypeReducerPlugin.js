__d(
  "AdsOutcomeCampaignSelectPixelPromotedObjectTypeReducerPlugin",
  [
    "AdsODAXCampaignReducerUtils",
    "AdsOutcomeCampaignSelectPixelPromotedObjectTypeDataActionFlux",
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
                promotedObjectType: r("AdsPromotedObjectTypes").PIXEL,
              }),
            );
          },
          o("AdsOutcomeCampaignSelectPixelPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
