__d(
  "adsConvergenceGetDefaultCampaignRecord",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecord",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAdCreationUtils",
    "AdsCampaignGroupBudgetMutationUtils",
    "AdsCampaignOptimizationPluginResolver",
    "AdsCampaignRecordAccessors",
    "AdsConvergenceCampaignPluginResolver",
    "AdsMutators",
    "AdsODAXCampaignReducerUtils",
    "AdsODAXUtils",
    "AdsOptimizationMutationUtils",
    "adsCFSAFRSelector",
    "adsCommonTargetingAlternativeCountriesCache",
    "adsTargetFrequencyInAuctionMutationUtils",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new (r("AdsAPICampaignRecord"))(
        ((e = {}),
        (e.name = o("AdsAdCreationUtils").DEFAULT_CAMPAIGN_NAME),
        (e.status = "ACTIVE"),
        e),
      );
    function u(e, t, n, a, i, l, u, c) {
      var d = s;
      t.is_odax_campaign_group === !0 &&
        !o("AdsAPICampaignGroupRecordUtils").isReachFrequency(t) &&
        u != null &&
        (u.targeting != null || r("qex")._("5893") !== !0) &&
        (d = o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").targeting.flexible_spec.set(
            u.targeting.flexible_spec,
          ),
          r("AdsCampaignRecordAccessors").targeting.exclusions.set(
            u.targeting.exclusions,
          ),
        )(d));
      var m = t.objective,
        p = t.buying_type;
      ((d = o("AdsODAXCampaignReducerUtils").maybeSetDestinationForVideo(d, m)),
        c != null &&
          (d = r("AdsCampaignRecordAccessors").destination_type.set(c, d)));
      var _ = o("AdsAPICampaignRecordUtils").getPromotedObjectType(m, d),
        f = o("AdsODAXUtils").maybeTranslateObjective(m, _, null),
        g = r("adsCFSAFRSelector")();
      o(
        "adsCommonTargetingAlternativeCountriesCache",
      ).fetchAlternativeCountriesForAccount(e);
      var h = {
        account: e,
        alternativeCountries: o(
          "adsCommonTargetingAlternativeCountriesCache",
        ).getAlternativeCountries(),
        buyingType: p,
        objective: m,
        promotedObjectType: _,
        storeTrafficData: n,
        safrConfig: g,
        pageID: a,
        catalogSalesData: l,
      };
      d = r("AdsConvergenceCampaignPluginResolver")
        .resolve({ objective: f })
        .mergeStaticDefaults(d, h);
      var y = o("AdsAPICampaignGroupRecordUtils").hasBudget_LEGACY(t),
        C = t.budget_strategy,
        b = C === "CAMPAIGN_FLEX_BUDGET",
        v = o(
          "AdsCampaignGroupBudgetMutationUtils",
        ).shouldDefaultBudgetToLifetimeForTargetFrequency(t);
      (y
        ? (d = o(
            "AdsCampaignGroupBudgetMutationUtils",
          ).resetCampaignWhenCampaignGroupBudgetEnabled(e, d, t))
        : (d = o(
            "AdsCampaignGroupBudgetMutationUtils",
          ).resetCampaignWhenCampaignBudgetEnabled(e, t, d, {
            isBudgetFlexOn: b,
            shouldDefaultToLifetimeForTargetFrequency: v,
          })),
        v &&
          (d = o(
            "adsTargetFrequencyInAuctionMutationUtils",
          ).maybeDefaultScheduleForTargetFrequencyAuction(d, e.timezone_id)));
      var S = r("AdsCampaignOptimizationPluginResolver").resolve({
        objective: m,
        promotedObjectType: _,
        destinationType: o("AdsAPICampaignRecordUtils").getDestinationType(d),
      });
      if (m !== r("AdsAPIObjectives").STORE_VISITS) {
        var R;
        ((d = o("AdsOptimizationMutationUtils").clearOptimizationFields(d)),
          (d = o("AdsOptimizationMutationUtils").resetOptimizationRelatedFields(
            e,
            d,
            S,
            m,
            {
              account: e,
              campaign: d,
              campaignGroup: t,
              productCatalogID:
                l == null || (R = l.catalog) == null ? void 0 : R.id,
              productSet: l == null ? void 0 : l.productSet,
              hasBackingApplication: !1,
            },
            void 0,
          )));
      }
      return d;
    }
    l.default = u;
  },
  98,
);
