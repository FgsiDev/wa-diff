__d(
  "AdsConvertCampaignGroupByObjectiveUtils",
  [
    "AdsAPIBidStrategies",
    "AdsAPICampaignGroupRecordUtils",
    "AdsCampaignGroupBudgetMutationUtils",
    "AdsCampaignGroupBudgetPluginResolver",
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsSmartAppPromotionUtils",
    "MAIIOS14CampaignGroupUtils",
    "adsCampaignGroupBudgetCanUseAutoBidding",
    "adsCampaignGroupBudgetCanUseAverageCostBidding",
    "adsCampaignGroupBudgetCanUseMaxCostBidding",
    "adsCampaignGroupBudgetCanUseRoasBidding",
    "adsCampaignGroupBudgetGetPacingTypeForBidType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("AdsMutators").chain(
        function (e) {
          var t = r(
            "AdsCampaignGroupRecordAccessors",
          ).collaborative_ads_partner_info;
          return t.get(e) != null ? t.set(null, e) : e;
        },
        function (e) {
          return u(e, t);
        },
        function (e) {
          return c(e);
        },
        function (e) {
          return r("AdsCampaignGroupRecordAccessors").objective.set(t, e);
        },
        function (e) {
          return o("AdsSmartAppPromotionUtils").removeSAPFlag(e, t);
        },
        function (e) {
          return r("MAIIOS14CampaignGroupUtils").removeSKAdNetworkFlag(e, t);
        },
      )(e);
    }
    function s(e) {
      return o("AdsMutators").chain(
        r("AdsCampaignGroupRecordAccessors").budget_strategy.delete,
      )(e);
    }
    function u(e, t) {
      if (!o("AdsAPICampaignGroupRecordUtils").hasBudgetBeta(e)) return e;
      var n = r("AdsCampaignGroupBudgetPluginResolver").resolve({
        objective: t,
      });
      return d(
        !!e.is_autobid,
        !!e.is_average_price_pacing,
        e.bid_strategy,
        n.getBidControlType(),
      )
        ? e
        : o(
            "AdsCampaignGroupBudgetMutationUtils",
          ).resetBiddingTypeFieldsWhenCampaignGroupBudgetEnabled(e);
    }
    function c(e) {
      if (!o("AdsAPICampaignGroupRecordUtils").hasBudgetBeta(e)) return e;
      var t = r("adsCampaignGroupBudgetGetPacingTypeForBidType")(
        e.bid_strategy,
      );
      return o(
        "AdsCampaignGroupBudgetMutationUtils",
      ).setCampaignGroupPacingType(e, t);
    }
    function d(e, t, n, o) {
      return n === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS
        ? r("adsCampaignGroupBudgetCanUseRoasBidding")(o)
        : e
          ? r("adsCampaignGroupBudgetCanUseAutoBidding")(o)
          : t
            ? r("adsCampaignGroupBudgetCanUseAverageCostBidding")(o)
            : r("adsCampaignGroupBudgetCanUseMaxCostBidding")(o);
    }
    ((l.convertCampaignGroup = e), (l.disableBudgetFlex = s));
  },
  98,
);
