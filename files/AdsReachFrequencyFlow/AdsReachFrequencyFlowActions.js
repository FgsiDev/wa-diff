__d(
  "AdsReachFrequencyFlowActions",
  [
    "AdsAccountUtils",
    "AdsApplicationUtils",
    "AdsInstagramAccountActionSources",
    "AdsInstagramAccountPageCreateAndUsePageBackedDataAction",
    "AdsInstagramAccountStoreUtils",
    "AdsInstagramUserIdMigrationUtils",
    "AdsPERouterHelper",
    "AdsReachFrequencyFlowChangeInstagramDestinationAction",
    "AdsReachFrequencyFlowGetPredictionSuccessAction",
    "AdsReachFrequencyFlowInitExistingAction",
    "AdsReachFrequencyFlowInitNewAction",
    "AdsReachFrequencyToggleMetricsComparisonAction",
    "AdsRegulatedCategory",
    "AdsUEditorHostIDs",
    "logReachFrequencyEvents",
    "nullthrows",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      r("AdsReachFrequencyFlowChangeInstagramDestinationAction").dispatch(
        {
          campaignIDs: e,
          instagramDestinationID: t,
          instagramDestinationIDV2: n,
        },
        {
          line: "50",
          module: "AdsReachFrequencyFlowActions.js",
          moduleID: i.id,
        },
      );
    }
    function s(e, t, n, o, a, l, s) {
      var u = o != null ? o : Date.now(),
        c = u - s,
        d = t.trending_topics_spec != null,
        m = JSON.stringify({
          user_quote_request_latency: c,
          is_reels_trending_ads: d,
        });
      (r("logReachFrequencyEvents")("rf_prediction_success", {
        rf_campaign_id: e,
        rf_prediction_id: t.id,
        metadata: m,
      }),
        r("AdsReachFrequencyFlowGetPredictionSuccessAction").dispatch(
          {
            campaignID: e,
            currentTimeUnix: u,
            prediction: t,
            params: n,
            frequencyOptions: a,
            source: l,
          },
          {
            line: "85",
            module: "AdsReachFrequencyFlowActions.js",
            moduleID: i.id,
          },
        ));
    }
    function u(t, n, a) {
      r("promiseDone")(
        r(
          "AdsInstagramAccountStoreUtils",
        ).genDefaultInstagramAccountForReachFrequency(
          t.account_id,
          !!r("AdsAccountUtils").getBusinessInfo(t).businessID,
          a,
        ),
        function (t) {
          if (t.needsInstagramAccount)
            if (t.instagramAccountID != null && t.instagramAccountID !== "") {
              var l = t.instagramAccountID,
                s =
                  t.instagramAccountV2ID != null
                    ? o(
                        "AdsInstagramUserIdMigrationUtils",
                      ).convertIGIDV2FromStringToStrongType(
                        t.instagramAccountV2ID,
                      )
                    : void 0;
              e([n], l, s);
            } else
              r(
                "AdsInstagramAccountPageCreateAndUsePageBackedDataAction",
              ).dispatch(
                {
                  hostID: r("AdsUEditorHostIDs").EDITING,
                  source: r("AdsInstagramAccountActionSources")
                    .PE_REACH_FREQUENCY,
                  data: {
                    campaignID: n,
                    adgroupIDs: [],
                    pageID: a,
                    accessToken: t.pageAccessToken || "",
                  },
                },
                {
                  line: "126",
                  module: "AdsReachFrequencyFlowActions.js",
                  moduleID: i.id,
                },
              );
        },
      );
    }
    function c(e) {
      o("AdsApplicationUtils").isPowerEditor() &&
        r("AdsPERouterHelper")
          .getRouteBuilder()
          .tray("EDITOR_DRAWER")
          .context({ toggleSource: e })
          .navigate();
    }
    function d(e, t, n, o, a, l, s, u, c, d) {
      (s === void 0 && (s = !1),
        r("nullthrows")(e, "Unexpected null: accountInfo"),
        r("AdsReachFrequencyFlowInitNewAction").dispatch(
          {
            accountInfo: e,
            adsPlannerPlanCreationSpec: l,
            campaignID: n,
            campaignGroupID: t,
            dealID: null,
            destinationID: a,
            objective: o,
            regulatedCategory: r("AdsRegulatedCategory").NONE,
            isConvergenceRouting: s,
            isHp1: d,
            isMetaMomentMaker: c,
            isReelsTrendingAds: u,
          },
          {
            line: "169",
            module: "AdsReachFrequencyFlowActions.js",
            moduleID: i.id,
          },
        ));
    }
    function m(e, t, n, o, a, l, s, u, c) {
      (u === void 0 && (u = !1),
        c === void 0 && (c = null),
        r("nullthrows")(e, "Unexpected null: accountInfo"),
        r("AdsReachFrequencyFlowInitExistingAction").dispatch(
          {
            accountInfo: e,
            campaignGroupID: t,
            campaignID: n,
            isMetaMomentMaker: c,
            prediction: o,
            campaign: a,
            isMidCampaignEdit: l,
            shouldSetExistingInitialized: s,
            isReelsTrendingAds: u,
          },
          {
            line: "199",
            module: "AdsReachFrequencyFlowActions.js",
            moduleID: i.id,
          },
        ));
    }
    function p() {
      r("AdsReachFrequencyToggleMetricsComparisonAction").dispatch(
        { shouldShowMetricsComparison: !0 },
        {
          line: "213",
          module: "AdsReachFrequencyFlowActions.js",
          moduleID: i.id,
        },
      );
    }
    ((l.changeInstagramDestination = e),
      (l.getPredictionSuccess = s),
      (l.setInstagramDestination = u),
      (l.toggleOpenEditor = c),
      (l.initNew = d),
      (l.initExisting = m),
      (l.showMetricsComparison = p));
  },
  98,
);
