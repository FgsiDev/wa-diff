__d(
  "adsCampaignSetProductSetPromotedObjectReducerFn",
  [
    "AdCampaignDestination",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPIOptimizationGoals",
    "AdsCampaignGroupBudgetMutationUtils",
    "AdsCampaignOptimizationPluginResolver",
    "AdsCampaignRecordAccessors",
    "AdsConvergenceCampaignPluginResolver",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsOptimizationMutationUtils",
    "AdsPlacementReducerUtils",
    "AdsPromotedObjectTypes",
    "AdsValueOptimizationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a,
        i = n.account,
        l = n.campaignGroupsMap,
        s = n.canUseVOForCatalogSales,
        u = n.canUseVOForWebsiteConversion,
        c = n.eligibilityInformation,
        d = n.safrConfig,
        m = e.id,
        p = l.get(m),
        _ = t.catalogSalesData,
        f = _ != null,
        g = e;
      f &&
        (g = o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").promoted_object.delete,
          r("AdsCampaignRecordAccessors").conversion_goal_id.delete,
        )(g));
      var h = f
          ? r("AdsPromotedObjectTypes").PRODUCT_SET
          : r("AdsPromotedObjectTypes").PIXEL,
        y = p.objective,
        C = o("AdsODAXUtils").maybeTranslateObjective(
          y,
          h,
          e.optimization_goal,
        ),
        b = p.buying_type,
        v = {
          account: i,
          buyingType: b,
          objective: y,
          promotedObjectType: h,
          safrConfig: d != null ? d : {},
          pageID:
            p != null
              ? o("AdsAPICampaignGroupRecordUtils").getPromotedObjectPageID(p)
              : null,
          catalogSalesData: _,
          storeTrafficData: null,
          isODAXSwitchChannel: !0,
        };
      g = r("AdsConvergenceCampaignPluginResolver")
        .resolve({ objective: C })
        .mergeStaticDefaults(g, v);
      var S =
        p != null && o("AdsAPICampaignGroupRecordUtils").hasBudget_LEGACY(p);
      S
        ? (g = o(
            "AdsCampaignGroupBudgetMutationUtils",
          ).resetCampaignWhenCampaignGroupBudgetEnabled(i, g, p))
        : (g = o(
            "AdsCampaignGroupBudgetMutationUtils",
          ).resetCampaignWhenCampaignBudgetEnabled(i, p, g));
      var R = r("AdsCampaignOptimizationPluginResolver").resolve({
          objective: C,
          promotedObjectType: h,
        }),
        L =
          !f &&
          (e.optimization_goal === r("AdsAPIOptimizationGoals").VALUE ||
            o("AdsValueOptimizationUtils").shouldDefaultVOOptimizationGoal(
              e,
              i,
              p,
              !0,
              "catalog_off_trigger",
              !0,
            )) &&
          o("AdsValueOptimizationUtils").isVOGoalPFRPCAEnabled();
      return (
        (g = o("AdsOptimizationMutationUtils").clearOptimizationFields(g)),
        (g = o("AdsOptimizationMutationUtils").resetOptimizationRelatedFields(
          i,
          g,
          R,
          C,
          {
            account: i,
            campaign: g,
            campaignGroup: p,
            productCatalogID:
              _ == null || (a = _.catalog) == null ? void 0 : a.id,
            productSet: _ == null ? void 0 : _.productSet,
            hasBackingApplication: !1,
            promotedObjectType: h,
            canUseVOForCatalogSales: s,
            canUseVOForWebsiteConversion: u,
          },
          void 0,
          void 0,
          L,
        )),
        (g = o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").name.set(e.name),
          r("AdsCampaignRecordAccessors").id.set(m),
          r("AdsCampaignRecordAccessors").campaign_id.set(e.campaign_id),
          r("AdsCampaignRecordAccessors").status.set(e.status),
          f
            ? r("AdsCampaignRecordAccessors").destination_type.set(
                r("AdCampaignDestination").WEBSITE,
              )
            : r("AdsCampaignRecordAccessors").destination_type.delete,
        )(g)),
        (g = o("AdsPlacementReducerUtils").resetPlacement(
          g,
          babelHelpers.extends({}, c, { objective: C, promotedObjectType: h }),
        )),
        g
      );
    }
    l.default = e;
  },
  98,
);
