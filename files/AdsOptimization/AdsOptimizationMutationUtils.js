__d(
  "AdsOptimizationMutationUtils",
  [
    "invariant",
    "AccountAttributionEvent",
    "AdsAMNoPixelDefaultStoreUtils",
    "AdsAMShellPixelDefaultStoreUtils",
    "AdsAPIBidConstraints",
    "AdsAPIBidStrategies",
    "AdsAPIBillingEvents",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAudienceDirectConfig.experimental",
    "AdsBidConstraintsUtils",
    "AdsBidStrategyLoggingUtils",
    "AdsBiddingOptimizationUtils",
    "AdsBuyingTypes",
    "AdsBwIUtils",
    "AdsCampaignCreationTips",
    "AdsCampaignEditFlowTips",
    "AdsCampaignRecordAccessors",
    "AdsConversionWindowUtils",
    "AdsCostStrategyUtils",
    "AdsDataAtom",
    "AdsDefaultsLoggingUtils",
    "AdsInterfacesRouter",
    "AdsModeBasedBiddingUtils",
    "AdsODAXUtils",
    "AdsOffsiteCLOUtil",
    "AdsPromotedObjectTypes",
    "AdsUEditorHostIDs",
    "AdsUEditorPromotedObjectSetLeadAdsOffsiteConversionTypeDataAction",
    "DayPartingUtils",
    "adsBillingEventGetDefaultDEPRECATED",
    "adsCampaignIsCampaignGroupBudget",
    "gkx",
    "immutable",
    "isTruthy",
    "nullthrows",
    "qex",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = r("requireDeferred")("SetOffsiteCLOAttributionWindows").__setRef(
        "AdsOptimizationMutationUtils",
      ),
      c = r("immutable").Set([
        r("AdsAPIObjectives").APP_INSTALLS,
        r("AdsAPIObjectives").MOBILE_APP_INSTALLS,
        r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
      ]);
    function d(e) {
      return e.withMutations(function (e) {
        var t;
        ((t = r("AdsCampaignRecordAccessors")).attribution_spec.delete(e),
          t.bid_amount.delete(e),
          t.bid_constraints.delete(e),
          t.bid_strategy.delete(e),
          t.billing_event.delete(e),
          t.frequency_control_specs.delete(e),
          t.full_funnel_exploration_mode.delete(e),
          t.is_autobid.delete(e),
          t.is_average_price_pacing.delete(e),
          t.optimization_goal.delete(e),
          t.optimization_sub_event.delete(e));
        var n = e.pacing_type;
        n != null &&
          (n.includes("day_parting")
            ? r("AdsCampaignRecordAccessors").pacing_type.set(
                r("immutable").List(["day_parting"]),
                e,
              )
            : r("AdsCampaignRecordAccessors").pacing_type.set(
                r("immutable").List(["standard"]),
                e,
              ));
      });
    }
    function m(e, t, n, a, i, l, s, u) {
      var c,
        d,
        m,
        L = i.campaignGroup,
        E = i.prefilledOptimizationGoal,
        k = i.recommendedOptimizationType,
        I = o("AdsAPICampaignRecordUtils").getDestinationType(t),
        T =
          (L == null || (c = L.promoted_object) == null
            ? void 0
            : c.product_catalog_id) != null,
        D =
          o("AdsAMShellPixelDefaultStoreUtils").isShellPixelLPVDefaultEligible(
            e == null ? void 0 : e.account_id,
            L == null ? void 0 : L.objective,
            T,
          ) ||
          o("AdsAMNoPixelDefaultStoreUtils").isNoPixelLPVDefaultEligible(
            e == null ? void 0 : e.account_id,
            L == null ? void 0 : L.objective,
            T,
          ),
        x;
      D
        ? (x =
            (k == null ? void 0 : k.optimizationGoal) ||
            E ||
            r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS)
        : u === !0
          ? (x = r("AdsAPIOptimizationGoals").VALUE)
          : (x = (k == null ? void 0 : k.optimizationGoal) || E || v(t, n, i));
      var $ =
          l != null
            ? l
            : o("AdsAPICampaignRecordUtils").getPromotedObjectType(a, t),
        P = o("AdsODAXUtils").maybeTranslateObjective(a, $, x),
        N = f(L, t, P, x, e),
        M = y(L, P, x, N),
        w = g(e, L, t, n, M, x, N),
        A = h(t);
      x === r("AdsAPIOptimizationGoals").QUALITY_LEAD &&
        t.campaign_id &&
        o("AdsDefaultsLoggingUtils").logCLODefaulting(
          e == null ? void 0 : e.account_id,
          t.id,
          L == null ? void 0 : L.id,
          "switch_conversion_location",
        );
      var F =
          ((m = {}),
          (m.billing_event = N),
          (m.bid_amount = w),
          (m.bid_constraints = A),
          (m.is_autobid = M),
          (m.optimization_goal = x),
          (m.frequency_control_specs = n.getDefaultFrequencyControlSpecs(
            x,
            $,
            e,
            L == null || (d = L.frequency_control_specs) == null
              ? void 0
              : d.toJS(),
          )),
          (m.pacing_type = b(L, t, "standard")),
          m),
        O = {},
        B = r("adsCampaignIsCampaignGroupBudget")(
          t.daily_budget,
          t.lifetime_budget,
        ),
        W = null,
        q = null;
      if (!S(L)) {
        var U = o("AdsBiddingOptimizationUtils").canUseAveragePricePacing(
          n,
          x,
          N,
          B,
          e,
        );
        U
          ? ((W = o("AdsBiddingOptimizationUtils").getIsAveragePricePacingValue(
              !!M,
            )),
            (O.is_average_price_pacing = W))
          : ((O.is_average_price_pacing = !1), (W = !1));
        var V = L ? L.buying_type : null,
          H = V === r("AdsBuyingTypes").RESERVED;
        if (!H) {
          var G = C(e, P, x, n, N);
          ((q = o("AdsCostStrategyUtils").getBidStrategyByLegacyFields(M, W)),
            G !== q &&
              o("AdsBidStrategyLoggingUtils").logInconsistentBidStrategy(
                q,
                G,
                o("AdsCostStrategyUtils").BidStrategyEventSource
                  .OPTIMIZATION_MUTATION,
              ),
            (O.bid_strategy = q));
        }
      }
      var z = L ? L.bid_strategy : r("AdsAPIBidStrategies").NONE;
      x === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS &&
        P === r("AdsAPIObjectives").CONVERSIONS &&
        (O.full_funnel_exploration_mode = "NONE_EXPLORATION");
      var j = p(P, t, x, E, k);
      if (
        (j && (O.metrics_metadata = j),
        L && z === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS)
      ) {
        var K;
        delete F.bid_amount;
        var Q = r("immutable").Map(
          ((K = {}),
          (K[r("AdsAPIBidConstraints").ROAS_AVERAGE_FLOOR] = o(
            "AdsBidConstraintsUtils",
          ).getDefaultROASAverageFloor()),
          K),
        );
        ((F.bid_constraints = Q),
          (F.optimization_goal = r("AdsAPIOptimizationGoals").VALUE),
          (F.billing_event = r("AdsAPIBillingEvents").IMPRESSIONS));
      }
      var X = _(
        e,
        P,
        $,
        F.optimization_goal,
        q != null ? q : z,
        I,
        L != null && o("AdsBwIUtils").isBwICampaignGroup(L),
        a,
      );
      s !== !1 && (O = babelHelpers.extends({}, O, X));
      var Y = i.campaignGroup ? [i.campaignGroup.id] : [];
      (R(e, t, a, $, Y),
        (O = babelHelpers.extends(
          {},
          O,
          o("AdsModeBasedBiddingUtils").getDefaultCostBiddingModeFields(
            t,
            q != null ? q : z,
          ),
        )));
      var J = t.merge(F).merge(O);
      return t.lightweight_split_test === "VALUE_OPTIMIZATION_GOAL" &&
        t.optimization_goal ===
          r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS &&
        J.optimization_goal !== r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS
        ? r("AdsCampaignRecordAccessors").lightweight_split_test.delete(J)
        : J;
    }
    function p(e, t, n, o, a) {
      if (
        !o &&
        n === r("AdsAPIOptimizationGoals").VALUE &&
        t.optimization_goal !== r("AdsAPIOptimizationGoals").VALUE &&
        c.has(e)
      ) {
        var i;
        return (
          (i = {}),
          (i.creation_flow_tips = [
            e === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES
              ? "value_defaulting_for_product_catalog_sales"
              : "value_defaulting_for_app_install",
          ]),
          i
        );
      }
      if (a) {
        if (a.hostID === r("AdsUEditorHostIDs").CREATION) {
          if (
            Object.values(r("AdsCampaignCreationTips")).includes(
              a.optimizationType,
            )
          ) {
            var l;
            return ((l = {}), (l.creation_flow_tips = [a.optimizationType]), l);
          }
        } else if (
          a.hostID === r("AdsUEditorHostIDs").EDITING &&
          Object.values(r("AdsCampaignEditFlowTips")).includes(
            a.optimizationType,
          )
        ) {
          var s;
          return ((s = {}), (s.edit_flow_tips = [a.optimizationType]), s);
        }
      }
      return null;
    }
    function _(e, t, n, a, i, l, s, u, c, d) {
      var m = {},
        p = o(
          "AdsConversionWindowUtils",
        ).getDefaultConversionWindowMaybeExtended(e, t, a, n, i, l, s, u, c, d),
        _ = p.ctConvWindowDays,
        f = p.vtConvWindowDays,
        g = p.evcWindowDays;
      return (
        (m.attribution_spec = [
          {
            event_type: r("AccountAttributionEvent").CLICK_THROUGH,
            window_days: _,
          },
        ]),
        f != null &&
          m.attribution_spec.push({
            event_type: r("AccountAttributionEvent").VIEW_THROUGH,
            window_days: f,
          }),
        g != null &&
          m.attribution_spec.push({
            event_type: r("AccountAttributionEvent").ENGAGED_VIDEO_VIEW,
            window_days: g,
          }),
        m
      );
    }
    function f(e, t, n, a, i) {
      var l = S(e),
        s = l && e ? e.is_autobid : t.is_autobid,
        u = l && e ? e.is_average_price_pacing : t.is_average_price_pacing,
        c = o("AdsAPICampaignRecordUtils").getPromotedObjectType(n, t);
      return (
        a &&
        r("adsBillingEventGetDefaultDEPRECATED")(
          r("AdsBuyingTypes").AUCTION,
          n,
          a,
          c,
          i,
          t.bid_strategy,
          l,
          s,
          u,
        )
      );
    }
    function g(e, t, n, o, a, i, l) {
      var s = a;
      S(t) &&
        (s =
          r("nullthrows")(t).is_autobid ||
          r("nullthrows")(t).bid_strategy ===
            r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP);
      var u = e == null ? void 0 : e.currency,
        c = e == null ? void 0 : e.business_country_code;
      return r("isTruthy")(s) ? void 0 : o.getDefaultBidAmount(i, l, n, u, c);
    }
    function h(e) {
      var t = e.bid_constraints,
        n = r("immutable").Map(t);
      return (
        t && (n = n.delete(r("AdsAPIBidConstraints").ROAS_AVERAGE_FLOOR)),
        n
      );
    }
    function y(e, t, n, a) {
      if (!S(e)) {
        var i = !0;
        return (
          n &&
            a &&
            (i = o("AdsBiddingOptimizationUtils").canUseAutoBid(t, n, a)),
          r("AdsAudienceDirectConfig.experimental").isDirectDealsUser &&
            (i = !1),
          i
        );
      }
    }
    function C(e, t, n, a, i) {
      var l = void 0,
        s = !0;
      ((r("AdsAudienceDirectConfig.experimental").isDirectDealsUser ||
        (n && i && !y(null, t, n, i))) &&
        (s = !1),
        s && (l = r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP));
      var u =
        l !== r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP &&
        o("AdsBiddingOptimizationUtils").canUseAveragePricePacing(
          a,
          n,
          i,
          !1,
          e,
        );
      return (
        u && (l = r("AdsAPIBidStrategies").TARGET_COST),
        l || (l = r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP),
        l
      );
    }
    function b(e, t, n) {
      if (
        !S(e) &&
        !(e == null && t.lifetime_budget == null && t.daily_budget == null)
      ) {
        var r = t.pacing_type,
          a = r != null ? Array.from(r) : [];
        return o("DayPartingUtils").setPacingType(
          a,
          n === "no_pacing",
          n === "probabilistic_pacing_v2",
        );
      }
    }
    function v(e, t, n) {
      var r = n.account,
        o = n.appData,
        a = n.appInstallsTracked,
        i = n.appURL,
        l = n.campaignGroup,
        s = n.canUseVOForCatalogSales,
        u = n.canUseVOForWebsiteConversion,
        c = n.hasAdvertisableAppEvents,
        d = n.hasBackingApplication,
        m = n.hasConversionPixelSelected,
        p = n.hasOfflineConversionSelected,
        _ = n.haveIncrementalConversionOptimization,
        f = n.isODAXCampaignGroup,
        g = n.objective,
        h = n.pixelConversionEvent,
        y = n.prefilledOptimizationGoal,
        C = n.productCatalogID,
        b = n.productSet,
        v = n.promotedObjectType;
      return t.getDefaultOptimizationGoal({
        account: r,
        appData: o,
        appInstallsTracked: a,
        appURL: i,
        campaign: e,
        campaignGroup: l,
        hasAdvertisableAppEvents: c,
        hasBackingApplication: d,
        hasConversionPixelSelected: m,
        hasOfflineConversionSelected: p,
        haveIncrementalConversionOptimization: _,
        objective: g,
        pixelConversionEvent: h,
        prefilledOptimizationGoal: y,
        productCatalogID: C,
        productSet: b,
        promotedObjectType: v,
        canUseVOForCatalogSales: s,
        canUseVOForWebsiteConversion: u,
        isODAXCampaignGroup: f,
      });
    }
    function S(e) {
      return (
        !!(e && o("AdsAPICampaignGroupRecordUtils").hasBudget_LEGACY(e)) ||
        (e == null ? void 0 : e.budget_strategy) === "CAMPAIGN_FLEX_BUDGET"
      );
    }
    function R(t, n, a, l, s) {
      var c = !1;
      try {
        var d = r("AdsInterfacesRouter").get(),
          m = d.getParams(),
          p = m.nav_entry_point,
          _ = m.recommendation_type;
        c =
          p === "syd_guidance_hub" &&
          _ === "offsite_conversion_leads_optimization";
      } catch (e) {}
      var f =
        a === r("AdsAPIObjectives").OUTCOME_LEADS &&
        l === r("AdsPromotedObjectTypes").PIXEL &&
        (c ||
          ((t == null ? void 0 : t.offsite_clo_signal_status) === 4 &&
            (r("gkx")("59") || r("qex")._("228") === !0)));
      f &&
        ((e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
          (r(
            "AdsUEditorPromotedObjectSetLeadAdsOffsiteConversionTypeDataAction",
          ).dispatch(
            {
              campaignIDs: [n.id],
              hostID: r("AdsUEditorHostIDs").CREATION,
              leadAdsOffsiteConversionType: "clo",
              optimizationGoal: r("AdsAPIOptimizationGoals")
                .OFFSITE_CONVERSIONS,
            },
            {
              line: "817",
              module: "AdsOptimizationMutationUtils.js",
              moduleID: i.id,
            },
          ),
            u.onReady(function (e) {
              return e({
                campaignGroupIDs: s,
                campaignIDs: [n.id],
                hostID: r("AdsUEditorHostIDs").CREATION,
              });
            }));
        }),
        o("AdsOffsiteCLOUtil").logOffsiteCLODefault(n.id, n.account_id));
    }
    ((l.clearOptimizationFields = d),
      (l.resetOptimizationRelatedFields = m),
      (l.getDefaultAttributionSpec = _));
  },
  98,
);
