__d(
  "AdsOutcomeCampaignSelectReminderPromotedObjectTypeReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsODAXCampaignReducerUtils",
    "AdsOutcomeCampaignSelectReminderPromotedObjectTypeDataActionFlux",
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
            var a;
            return o(
              "AdsODAXCampaignReducerUtils",
            ).adsCampaignSetChannelReducerFn(e, t, {
              account: n.account,
              campaignGroupsMap: n.campaignGroupsMap,
              eligibilityInformation: n.eligibilityInformation,
              safrConfig: n.safrConfig,
              pixelList: void 0,
              promotedObjectType: r("AdsPromotedObjectTypes").REMINDER,
              destinationType: r("AdCampaignDestination").ON_REMINDER,
              prefilledOptimizationGoal:
                (a = t.prefilledOptimizationGoal) != null ? a : void 0,
            });
          },
          r("AdsOutcomeCampaignSelectReminderPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
