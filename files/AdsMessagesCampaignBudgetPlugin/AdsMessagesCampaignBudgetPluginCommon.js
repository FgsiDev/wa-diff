__d(
  "AdsMessagesCampaignBudgetPluginCommon",
  [
    "$InternalEnum",
    "AdCampaignDestination",
    "AdsClickToMessageBudgetGuidanceUtils",
    "AdsDefaultBudget",
    "AdsDefaultPageDataProvider",
    "AdsEditingCampaignEditorContext",
    "AdsEditorCtxDynamicBudgetUtils",
    "AdsInterfacesLogger",
    "AdsMessagesCampaignBudgetPluginEndDateCommon",
    "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
    "AdsPromotedObjectTypes",
    "ClickToMessageCTMAdoptionFeatureGating",
    "CtxBudgetGuidanceLongTermHoldoutUtils",
    "SABRBudgetRoundDownMarketingAdoptionUtils",
    "adsCampaignConvertUSDBudgetToCurrency",
    "adsCampaignGetCampaignDayCount",
    "adsUEditorCampaignBudgetModeSelector",
    "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
    "isFalsey",
    "isTruthy",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("requireDeferred")(
        "AdsMessagesCampaignCTXDynamicBudgetQueryUtilCommon",
      ).__setRef("AdsMessagesCampaignBudgetPluginCommon"),
      s = n("$InternalEnum")({
        MESSENGER: "AdsMessagesMessengerCampaignBudgetPlugin",
        WHATSAPP: "AdsMessagesWhatsAppCampaignBudgetPlugin",
        INSTAGRAM: "AdsMessagesInstagramCampaignBudgetPlugin",
      }),
      u = 30,
      c = "ctx_am_dynamic_zo_budget_defaulting",
      d = "ctx_am_budget_recommendation_sabr_zo_combined",
      m;
    function p() {
      var t = o(
          "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
        ).shouldEnableCTXBudgetDurationDefaultQEParamsSelector(
          r("AdsEditingCampaignEditorContext"),
        ),
        n = t.account,
        a = t.destinationType,
        i = t.isCBOEnabled,
        l = t.objective,
        s = t.optimizationGoal,
        u = t.pageID;
      e.onReady(function (e) {
        var t = e.ctxDynamicBudgetSelector(
            r("AdsEditingCampaignEditorContext"),
          ),
          o = t.attribution_spec,
          c = t.bidStrategy,
          d = t.placement,
          p = t.promoted_object,
          _ = t.target_spec;
        e.fetchCTXDynamicBudgetRecommendation(
          u != null ? u : "",
          n,
          i,
          a,
          s,
          l,
          o,
          c,
          d,
          p,
          _,
        )
          .then(function (e) {
            m = e;
          })
          .catch(function (e) {});
      });
    }
    function _(e, t) {
      t === void 0 && (t = !1);
      var n = o(
          "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
        ).shouldEnableCTXBudgetDurationDefaultQEParamsSelector(
          r("AdsEditingCampaignEditorContext"),
        ),
        a = n.account,
        i = n.destinationType,
        l = n.isCBOEnabled,
        u = n.isCreationPackageEnabled,
        _ = n.objective,
        f = n.optimizationGoal,
        g = n.pageID,
        h = n.promotedObjectType,
        y = !1;
      r("isTruthy")(a) &&
        (y = o(
          "ClickToMessageCTMAdoptionFeatureGating",
        ).eligibleCTXAMSABRZOCombinedBudgetGuidance(l, i, f));
      var C = g,
        b = i;
      if (
        e === s.MESSENGER &&
        !y &&
        (h !== r("AdsPromotedObjectTypes").MESSENGER || r("isFalsey")(b)) &&
        ((b = r("AdCampaignDestination").MESSENGER), (y = !0), r("isFalsey")(C))
      ) {
        var v;
        C =
          (v = r("AdsDefaultPageDataProvider")()
            .get(a.account_id)
            .getValue()) == null
            ? void 0
            : v.pageID;
      }
      if (!y || r("isFalsey")(C) || r("isFalsey")(i) || r("isFalsey")(_))
        return null;
      p();
      var S = o("adsUEditorCampaignBudgetModeSelector").dailyBudgetSelector(
          r("AdsEditingCampaignEditorContext"),
        ),
        R = null;
      r("isTruthy")(S) && (R = S.getValues()[0]);
      var L = null,
        E = null;
      r("isTruthy")(m) &&
        ((E = o(
          "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
        ).getBudgetNumberInUSDbyCurrencyMultiplier(Number(m))),
        o(
          "ClickToMessageCTMAdoptionFeatureGating",
        ).isEligibleForCTXDynamicBudgetDefaulting(
          l,
          !1,
          "budgetPluginBudgetDefaulting",
          f,
        ) && (L = r("adsCampaignConvertUSDBudgetToCurrency")(a.currency, E)));
      var k = o(
          "AdsClickToMessageBudgetGuidanceUtils",
        ).getBudgetRecommendationForSABRZOCombinedBudgetAdvertiserCurrency(
          C,
          a,
          i,
          t === !0 ? null : R,
          f,
          L,
          !0,
        ),
        I = k;
      o(
        "AdsEditorCtxDynamicBudgetUtils",
      ).logExposureForCTXDynamicZOGreaterThanSABR(E, l, C, f, i);
      var T = r("isTruthy")(L) && k === L;
      if (r("isTruthy")(k)) {
        var D =
          o("AdsDefaultBudget").getDefaultDailyBudget(a.currency) /
          o("AdsDefaultBudget").getDefaultDailyBudget("USD");
        I = k / D;
      }
      if (
        r("isTruthy")(I) &&
        (u
          ? o(
              "ClickToMessageCTMAdoptionFeatureGating",
            ).enableCTXAMSABRZOWithWACombinedBudgetGuidanceCreationPackagesQE(
              !1,
            )
          : o(
              "ClickToMessageCTMAdoptionFeatureGating",
            ).isEligibleForCTXDynamicBudgetDefaulting(
              l,
              !1,
              "budgetPluginDefaultingComparison",
              f,
            ) ||
            o(
              "ClickToMessageCTMAdoptionFeatureGating",
            ).enableCTXAMSABRZOWithWACombinedBudgetGuidanceQE(
              !1,
              "CTXAMSABRZOCombinedBudgetGuidance",
              e,
            ))
      ) {
        var x,
          $ = (R != null ? R : 0) >= I,
          P = T ? c : d;
        return (
          r("AdsInterfacesLogger").log({
            eventName: P,
            data:
              ((x = {}),
              (x.page_id = C),
              (x.campaign_destination_type = i),
              (x.new_value = I),
              (x.optimization_goal = f),
              x),
          }),
          $ &&
          !o(
            "CtxBudgetGuidanceLongTermHoldoutUtils",
          ).isCtxBudgetGuidanceLongTermHoldoutEnabled(
            !0,
            "consistent_budget",
            "AdsMessagesCampaignBudgetPluginCommon",
          )
            ? null
            : I
        );
      }
      return null;
    }
    function f(e, t) {
      var n = t != null ? t : g(),
        a = _(e, !0);
      if (r("isTruthy")(a) && r("isTruthy")(n)) {
        var i = Math.round(a / 100) * 100;
        return i !== a &&
          o(
            "SABRBudgetRoundDownMarketingAdoptionUtils",
          ).isInSabrBudgetRoundDownMarketingAdoption(!0)
          ? o(
              "SABRBudgetRoundDownMarketingAdoptionUtils",
            ).applyMarketingRoundDown(i * n)
          : a * n;
      }
      return null;
    }
    function g() {
      var e = o(
          "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
        ).startDateSelector(r("AdsEditingCampaignEditorContext")),
        t = null;
      if (r("isTruthy")(e)) {
        var n = o(
          "AdsMessagesCampaignBudgetPluginEndDateCommon",
        ).getMessagesDefaultEndDate(e);
        t = Math.floor(r("adsCampaignGetCampaignDayCount")(e, n));
      }
      return t != null ? t : u;
    }
    ((l.CTXBudgetPluginsType = s),
      (l.setDefaultDailyBudgetForCTXAtEditing = _),
      (l.setDefaultLifetimeBudgetForCTXAtEditing = f));
  },
  98,
);
