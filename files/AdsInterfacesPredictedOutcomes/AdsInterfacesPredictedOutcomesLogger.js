__d(
  "AdsInterfacesPredictedOutcomesLogger",
  [
    "AdsAPIBidStrategies",
    "AdsBisonUtils",
    "AdsInterfacesPredictedOutcomesTypedLogger",
    "AdsUnifiedLoggingConfig",
    "adsDeliveryEstimateDataLoaderSendShadowRequest",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [],
      s;
    function u(e, t, n, o) {
      var a = r("AdsBisonUtils").getBoundsWithErrorPrediction(
          e.actions,
          o,
          e.actions_lower_bound,
          e.actions_upper_bound,
        ),
        i = r("AdsBisonUtils").getBoundsWithErrorPrediction(
          e.reach,
          o,
          e.reach_lower_bound,
          e.reach_upper_bound,
        );
      return {
        actionsCumulative: n.map(function (e) {
          return Math.floor(e.actions);
        }),
        actionsMax: a.max,
        actionsMedian: e.actions,
        actionsMin: a.min,
        actionsWithBid: t.actions,
        reachCumulative: n.map(function (e) {
          return Math.floor(e.reach);
        }),
        reachMax: i.max,
        reachMedian: e.reach,
        reachMin: i.min,
        reachWithBid: t.reach,
        spend: e.spend,
        spendCumulative: n.map(function (e) {
          return Math.floor(e.spend);
        }),
        spendWithBid: t.spend,
      };
    }
    function c(e) {
      var t = e.bidStrategy,
        n = e.errorCode,
        o = e.isCBOEnabled,
        a = e.isIOS14AdCampaign,
        i = e.objective,
        l = e.optimizationGoal,
        s = e.predictionSurface;
      d(
        [],
        [
          {
            metadata: {
              bid: null,
              bidStrategy: t,
              dailyBudget: 0,
              estimateDAU: 0,
              estimateMAU: 0,
              hasError: !0,
              isAutoBid: t === r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP,
              isCBOEnabled: o,
              isIOS14AdCampaign: a,
              longTermPredictionID: null,
              objective: i,
              optimizationGoal: l,
              originalDailyBudget: null,
              showedActions: !1,
              showZeroConversionNotice: !1,
              predictionID: "",
              zeroConversionRequestID: "",
              errorCode: n,
              predictionSurface: s,
            },
          },
        ],
        !1,
      );
    }
    function d(t, n, o, a) {
      (o === void 0 && (o = !0),
        a === void 0 && (a = null),
        (e = n.map(function (e) {
          var t = u(
            e.prediction || r("AdsBisonUtils").getEmptyPoint(),
            r("AdsBisonUtils").getEmptyPoint(),
            e.cumulativePredictions || [],
            e.metadata.estimateDAU || 0,
          );
          return babelHelpers.extends(
            {},
            e.metadata,
            t,
            e.campaignGroupPredictionData,
          );
        })),
        (s = a),
        o && _(t, "render_data"));
    }
    function m(t, n) {
      (_(t, n), (e = []));
    }
    function p(e, t) {
      _([e], t);
    }
    function _(e, t) {
      e.length > 0
        ? e.forEach(function (e) {
            f(e, t);
          })
        : f(null, t);
    }
    function f(t, n) {
      var o,
        a = s,
        i = (o = e) == null ? void 0 : o[0];
      (n === "edit" &&
        a != null &&
        i != null &&
        i.predictionID != null &&
        r("adsDeliveryEstimateDataLoaderSendShadowRequest")(
          a,
          i.predictionID,
          t,
        ),
        e.forEach(function (e) {
          var o,
            a,
            i,
            l,
            s,
            u,
            c = new (r("AdsInterfacesPredictedOutcomesTypedLogger"))()
              .setEvent(n)
              .setSessionID(r("AdsUnifiedLoggingConfig").sessionId)
              .setShowedActions(e.showedActions)
              .setHasError(e.hasError)
              .setErrorCode(e.errorCode)
              .setBid(e.bid || 0)
              .setIsAutobid(e.isAutoBid)
              .setDailyBudget(Math.floor(e.dailyBudget))
              .setPredictedActionsMax(Math.floor(e.actionsMax))
              .setPredictedActionsMedian(Math.floor(e.actionsMedian))
              .setPredictedActionsMin(Math.floor(e.actionsMin))
              .setPredictedReachMax(Math.floor(e.reachMax))
              .setPredictedReachMedian(Math.floor(e.reachMedian))
              .setPredictedReachMin(Math.floor(e.reachMin))
              .setPredictedSpend(Math.floor(e.spend))
              .setDailyActiveUsers(Math.floor(e.estimateDAU))
              .setMonthlyActiveUsers(Math.floor(e.estimateMAU))
              .setPredictionID(e.predictionID)
              .setLongTermPredictionID(e.longTermPredictionID)
              .setShowZeroConversionNotice(e.showZeroConversionNotice)
              .setPredictedReachWithBid(Math.floor(e.reachWithBid))
              .setPredictedActionsWithBid(Math.floor(e.actionsWithBid))
              .setPredictedSpendWithBid(Math.floor(e.spendWithBid))
              .setPredictedSpendCumulative(e.spendCumulative)
              .setPredictedReachCumulative(e.reachCumulative)
              .setPredictedActionsCumulative(e.actionsCumulative)
              .setBidStrategy(e.bidStrategy)
              .setObjective(e.objective)
              .setOptimizationGoal(e.optimizationGoal)
              .setPredictedCampaignGroupSpend(e.predictedCampaignGroupSpend)
              .setPredictedCampaignGroupReachMin(
                Math.floor(
                  (o = e.predictedCampaignGroupReachMin) != null ? o : NaN,
                ),
              )
              .setPredictedCampaignGroupReachMax(
                Math.floor(
                  (a = e.predictedCampaignGroupReachMax) != null ? a : NaN,
                ),
              )
              .setPredictedCampaignGroupReachMedian(
                Math.floor(
                  (i = e.predictedCampaignGroupReachMedian) != null ? i : NaN,
                ),
              )
              .setPredictedCampaignGroupActionsMin(
                Math.floor(
                  (l = e.predictedCampaignGroupActionsMin) != null ? l : NaN,
                ),
              )
              .setPredictedCampaignGroupActionsMax(
                Math.floor(
                  (s = e.predictedCampaignGroupActionsMax) != null ? s : NaN,
                ),
              )
              .setPredictedCampaignGroupActionsMedian(
                Math.floor(
                  (u = e.predictedCampaignGroupActionsMedian) != null ? u : NaN,
                ),
              )
              .setIsCboEnabled(!!e.isCBOEnabled)
              .setIsIos14AdCampaign(!!e.isIOS14AdCampaign)
              .setZeroConversionWwwRequestID(e.zeroConversionRequestID);
          (r("isTruthy")(t) && c.setCampaignID(t),
            e.predictionSurface != null &&
              c.setPredictionSurface(e.predictionSurface),
            e.originalDailyBudget != null &&
              c.setPredictedSpendWithBid(Math.floor(e.originalDailyBudget)),
            c.log());
        }));
    }
    ((l.setHasError = c),
      (l.setLoggingData = d),
      (l.logSubmit = m),
      (l.logToggle = p));
  },
  98,
);
