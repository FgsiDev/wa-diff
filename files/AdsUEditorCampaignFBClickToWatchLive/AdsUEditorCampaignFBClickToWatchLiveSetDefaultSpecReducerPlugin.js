__d(
  "AdsUEditorCampaignFBClickToWatchLiveSetDefaultSpecReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPICampaignGroupRecordUtils",
    "AdsCampaignRecordAccessors",
    "AdsCampaignSelectInstagramLiveVideoAdUtils",
    "AdsLiveVideoAdUtils",
    "AdsLiveVideoLocationTypes",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupFBClickToWatchLiveSetDefaultSpecActionFlux",
    "AdsUEditorCampaignFBClickToWatchLiveUtils",
    "AdsUEditorCampaignGroupSelectors",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "adsSignalSourceContainersSelector",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignBudgetPluginSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsUEditorCampaignSelectors").adObjectsList.mapTransform(
        function (e) {
          var t = e.campaignGroup;
          return t;
        },
      ),
      s = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignGroupsByCampaignID: e,
            placementEligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
            budgetPlugin: r("adsUEditorCampaignBudgetPluginSelector"),
            pixelList: o(
              "adsSignalSourceContainersSelector",
            ).createSignalContainersSelector("website"),
            isCBOEnabled: o(
              "AdsUEditorCampaignGroupSelectors",
            ).campaignGroups.everyPlainObject(
              o("AdsAPICampaignGroupRecordUtils").hasBudget,
            ),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.budgetPlugin,
              l = n.campaignGroupsByCampaignID,
              s = n.isCBOEnabled,
              u = n.pixelList,
              c = n.placementEligibilityInformation;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                var d = e,
                  m = l.get(n),
                  p =
                    t.liveVideoLocationType ===
                    o("AdsLiveVideoLocationTypes").LiveVideoLocationType
                      .FACEBOOK
                      ? r("AdCampaignDestination").FACEBOOK_LIVE
                      : r("AdCampaignDestination").INSTAGRAM_LIVE,
                  _ = o(
                    "AdsLiveVideoAdUtils",
                  ).getDefaultOptimizationGoalFromPlugin(
                    d,
                    p,
                    m.objective,
                    r("AdsPromotedObjectTypes").LIVE_VIDEO,
                  ),
                  f = babelHelpers.extends({}, c, {
                    destinationType: p,
                    promotedObjectType: r("AdsPromotedObjectTypes").LIVE_VIDEO,
                  });
                return (
                  t.liveVideoLocationType ===
                  o("AdsLiveVideoLocationTypes").LiveVideoLocationType.FACEBOOK
                    ? (d = o(
                        "AdsUEditorCampaignFBClickToWatchLiveUtils",
                      ).updateCampaignForFacebookLiveDestination(
                        a,
                        m,
                        i,
                        _,
                        d,
                        s,
                        t.hostID,
                        f,
                        n,
                      ))
                    : t.liveVideoLocationType ===
                        o("AdsLiveVideoLocationTypes").LiveVideoLocationType
                          .INSTAGRAM &&
                      (d = o("AdsMutators").chain(
                        r("AdsCampaignRecordAccessors").destination_type.set(p),
                        r("AdsCampaignRecordAccessors").optimization_goal.set(
                          _,
                        ),
                        function (e) {
                          return o(
                            "AdsCampaignSelectInstagramLiveVideoAdUtils",
                          ).updateCampaignForInstagramLiveDestination(
                            a,
                            m,
                            e,
                            t.fallbackPageID,
                            u,
                            f,
                            s,
                            i,
                          );
                        },
                      )(d)),
                  d
                );
              },
            );
          },
          r("AdsUEditorAdgroupFBClickToWatchLiveSetDefaultSpecActionFlux")
            .actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
