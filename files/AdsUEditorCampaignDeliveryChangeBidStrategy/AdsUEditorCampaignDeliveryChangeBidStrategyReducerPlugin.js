__d(
  "AdsUEditorCampaignDeliveryChangeBidStrategyReducerPlugin",
  [
    "AdsAPIBidStrategies",
    "AdsAPIBillingEvents",
    "AdsAPICampaignRecordUtils",
    "AdsBudgetScalingMutationUtils",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignOptimizationPluginResolver",
    "AdsCampaignRecordAccessors",
    "AdsConversionWindowUtils",
    "AdsCostStrategyUtils",
    "AdsModeBasedBiddingUtils",
    "AdsMutators",
    "AdsOptimizationUtils",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignDeliveryChangeBidStrategyActionFlux",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignSapAttributionWindowUtil",
    "adsUEditorCampaignSmartAttributionWindowUtil",
    "gkx",
    "ifRequired",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, a, i, l, s) {
        var e = t;
        if (l) {
          var u = r("AdsCampaignOptimizationPluginResolver")
              .resolve({
                objective: n,
                promotedObjectType: a,
                destinationType: o(
                  "AdsAPICampaignRecordUtils",
                ).getDestinationType(e),
              })
              .getDefaultBidAmount(
                e.optimization_goal,
                e.billing_event,
                e,
                i.currency,
                i.business_country_code,
              ),
            c = o("AdsOptimizationUtils").changeUSDCentToLocalCurrency(
              u,
              i.account_currency_ratio_to_usd,
              i.currency,
            );
          return r("AdsCampaignRecordAccessors").bid_amount.set(c, e);
        }
        return s != null &&
          e.bid_strategy !== r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP
          ? r("AdsCampaignRecordAccessors").bid_amount.set(s, e)
          : (e.bid_amount !== void 0 &&
              e.bid_strategy ===
                r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP &&
              (e = r("AdsCampaignRecordAccessors").bid_amount.set(null, e)),
            e);
      },
      s = function (t) {
        if (t.pacing_type == null) return t;
        var e = t.pacing_type.includes("day_parting")
          ? ["day_parting"]
          : ["standard"];
        return r("AdsCampaignRecordAccessors").pacing_type.set(
          r("immutable").List(e),
          t,
        );
      },
      u = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            objectives: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective,
            ),
            promotedObjectTypes: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType,
            ),
            adAccount: r("adsUEditorAccountSelector"),
          },
          function (t, n, a) {
            var i = a.adAccount,
              l = a.objectives,
              u = a.promotedObjectTypes;
            return o("AdsMutators").mutateEach(
              t,
              n.campaignIDs,
              function (t, a) {
                var c = t;
                c = r("AdsCampaignRecordAccessors").bid_strategy.set(
                  n.bidStrategy,
                  c,
                );
                var d = o(
                    "AdsCostStrategyUtils",
                  ).getBidLegacyFieldsValueByBidStrategy(
                    n.bidStrategy,
                    c.optimization_goal,
                  ),
                  m = d.MappedIsAutobid,
                  p = d.MappedIsAveragePricePacing;
                ((c = r("AdsCampaignRecordAccessors").is_autobid.set(m, c)),
                  (c = r(
                    "AdsCampaignRecordAccessors",
                  ).is_average_price_pacing.set(p, c)),
                  (c = o(
                    "AdsBudgetScalingMutationUtils",
                  ).maybeClearCampaignBudgetScalingForBidStrategy(
                    c,
                    n.bidStrategy,
                  )),
                  (c = e(
                    c,
                    r("nullthrows")(l.get(a)),
                    u.get(a),
                    i,
                    n.shouldSetDefaultBidAmount,
                    n.bidAmount,
                  )));
                var _ = o(
                  "adsUEditorCampaignSapAttributionWindowUtil",
                ).isLongAttributionWindowSupported(
                  c.optimization_goal,
                  !n.isAAALAW,
                );
                if (!_) {
                  var f, g, h;
                  r("ifRequired")(
                    "AdsUEditorAppSmartAttributionWindowDataProvider",
                    function (e) {
                      h = e;
                    },
                  );
                  var y =
                      h != null
                        ? o(
                            "adsUEditorCampaignSmartAttributionWindowUtil",
                          ).getSmartAttributionWindowData(
                            h(),
                            n.promotedAppId,
                            c.optimization_goal,
                          )
                        : null,
                    C = o(
                      "adsUEditorCampaignSapAttributionWindowUtil",
                    ).getAppConstraintsLawOverrides(
                      n.appConstraints,
                      c.optimization_goal,
                      y,
                      n.isReadOnly,
                      (f = c) == null ? void 0 : f.attribution_spec,
                      !n.isAAALAW,
                      (g = c.promoted_object) == null
                        ? void 0
                        : g.object_store_url,
                    ),
                    b =
                      n.shouldSetDefaultConversionWindowLengthByAppConstraintsLAW ===
                      !0
                        ? o(
                            "adsUEditorCampaignSapAttributionWindowUtil",
                          ).attributionWindowToNumber(C)
                        : n.defaultConversionWindowLength;
                  c = o(
                    "AdsConversionWindowUtils",
                  ).setDefaultClickConversionWindow(c, b);
                }
                var v = r("gkx")("2104"),
                  S = r("AdsCampaignDraftFragmentStore").isNew(a);
                return (
                  (S || !v) &&
                    (c = o(
                      "AdsConversionWindowUtils",
                    ).setDefaultViewConversionWindow(
                      c,
                      n.defaultViewConversionWindowLength,
                    )),
                  n.bidStrategy !==
                    r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP &&
                    (c = s(c)),
                  n.bidStrategy ===
                    r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS ||
                  n.bidStrategy === r("AdsAPIBidStrategies").COST_CAP
                    ? (o(
                        "AdsModeBasedBiddingUtils",
                      ).isBidStrategyEligibleForModeBasedBidding(
                        n.bidStrategy,
                      ) ||
                        (c = o(
                          "AdsModeBasedBiddingUtils",
                        ).maybeDeleteCostBiddingMode(c)),
                      r("AdsCampaignRecordAccessors").billing_event.set(
                        r("AdsAPIBillingEvents").IMPRESSIONS,
                        c,
                      ))
                    : ((c = o(
                        "AdsModeBasedBiddingUtils",
                      ).maybeDeleteCostBiddingMode(c)),
                      c)
                );
              },
            );
          },
          o("AdsUEditorCampaignDeliveryChangeBidStrategyActionFlux").actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
