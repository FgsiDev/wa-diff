__d(
  "AdsUEditorCampaignSelectLeadFormMessengerPromotedObjectTypeReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsODAXCampaignReducerUtils",
    "AdsPromotedObjectTypes",
    "AdsSAFRSelectors",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectLeadFormMessengerPromotedObjectTypeDataActionFlux",
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
                pixelList: null,
                promotedObjectType: r("AdsPromotedObjectTypes")
                  .LEAD_FORM_MESSENGER,
                destinationType: r("AdCampaignDestination").LEAD_FORM_MESSENGER,
              }),
            );
          },
          o(
            "AdsUEditorCampaignSelectLeadFormMessengerPromotedObjectTypeDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
