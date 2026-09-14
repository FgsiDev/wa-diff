__d(
  "AdsOutcomeCampaignSelectWebsiteAndLeadFormPromotedObjectTypeReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsODAXCampaignReducerUtils",
    "AdsPromotedObjectTypes",
    "AdsSAFRSelectors",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectWebsiteAndLeadFormPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectors",
    "adsSignalSourceContainersSelector",
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
            pixelList: o(
              "adsSignalSourceContainersSelector",
            ).createSignalContainersSelector("website"),
          },
          function (e, t, n) {
            return o(
              "AdsODAXCampaignReducerUtils",
            ).adsCampaignSetChannelReducerFn(
              e,
              t,
              babelHelpers.extends({}, n, {
                promotedObjectType: r("AdsPromotedObjectTypes")
                  .WEBSITE_AND_INSTANT_FORM,
                destinationType: r("AdCampaignDestination")
                  .WEBSITE_AND_LEAD_FORM,
              }),
            );
          },
          o(
            "AdsUEditorCampaignSelectWebsiteAndLeadFormPromotedObjectTypeDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
