__d(
  "AdsUEditorCampaignSelectPageLikesOptimizationUnderIGProfileAndFBPagePromotedObjectReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIOptimizationGoals",
    "AdsODAXCampaignReducerUtils",
    "AdsPromotedObjectTypes",
    "AdsSAFRSelectors",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectPageLikesOptimizationUnderIGProfileAndFBPagePromotedObjectActionFlux",
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
                  .IG_PROFILE_AND_FB_PAGE,
                destinationType: r("AdCampaignDestination").ON_PAGE,
                prefilledOptimizationGoal: r("AdsAPIOptimizationGoals")
                  .PAGE_LIKES,
              }),
            );
          },
          o(
            "AdsUEditorCampaignSelectPageLikesOptimizationUnderIGProfileAndFBPagePromotedObjectActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
