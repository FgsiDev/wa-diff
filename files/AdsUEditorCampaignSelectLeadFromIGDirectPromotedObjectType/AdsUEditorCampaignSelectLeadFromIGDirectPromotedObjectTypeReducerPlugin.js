__d(
  "AdsUEditorCampaignSelectLeadFromIGDirectPromotedObjectTypeReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsODAXCampaignReducerUtils",
    "AdsPromotedObjectTypes",
    "AdsSAFRSelectors",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectLeadFromIGDirectPromotedObjectTypeDataActionFlux",
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
                pixelList: void 0,
                promotedObjectType: r("AdsPromotedObjectTypes")
                  .LEAD_FROM_IG_DIRECT,
                destinationType: r("AdCampaignDestination").LEAD_FROM_IG_DIRECT,
              }),
            );
          },
          o(
            "AdsUEditorCampaignSelectLeadFromIGDirectPromotedObjectTypeDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
