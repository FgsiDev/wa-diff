__d(
  "AdsSmartAppPromotionUtils",
  [
    "AdsAPICampaignRecord",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAppUrlUtils",
    "AdsCampaignGroupRecordAccessors",
    "AdsCampaignRecordAccessors",
    "AdsLoadObjectUtils",
    "AdsMutators",
    "AdsPEAdgroupSelectors",
    "AdsSmartPromotion",
    "AdsSmartPromotionConstants",
    "AdsYouthAdsAgeLimitEligibility",
    "AdsYouthAdsIndonesia18MinAgeUtils",
    "AdsYouthAdsLegalAge",
    "adsCommonTargetingGetDefaultCountryByBusinessCountryCode",
    "adsTargetingGetIsEmbargoedCountry",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsAPICampaignRecord").getSpec().targeting;
    function s(t, n, a, i) {
      var l =
        a.smart_promotion_type === r("AdsSmartPromotion").SMART_APP_PROMOTION;
      if (!l) return t;
      var s = n.business_country_code;
      r("adsTargetingGetIsEmbargoedCountry")(s) && (s = null);
      var u = r("adsCommonTargetingGetDefaultCountryByBusinessCountryCode")(s),
        c = {
          age_min: o("AdsSmartPromotionConstants")
            .SMART_APP_PROMOTION_DEFAULT_MIN_AGE,
          age_max: o("AdsSmartPromotionConstants")
            .SMART_APP_PROMOTION_DEFAULT_MAX_AGE,
          geo_locations: { countries: [u], location_types: ["home", "recent"] },
          targeting_optimization: i ? "none" : "expansion_all",
        };
      return r("AdsCampaignRecordAccessors").targeting.set(new e(c), t);
    }
    function u(e, t) {
      var n,
        o =
          t.smart_promotion_type === r("AdsSmartPromotion").SMART_APP_PROMOTION;
      if (!o) return e;
      var a = r("AdsAppUrlUtils").isOculusURL(
        (n = e.promoted_object) == null ? void 0 : n.object_store_url,
      );
      return a ? r("AdsCampaignRecordAccessors").promoted_object.delete(e) : e;
    }
    function c(e, t, n) {
      return e ? !(t && n === !1) : !1;
    }
    function d(e, t) {
      return t === r("AdsAPIObjectives").APP_INSTALLS
        ? e
        : r("AdsCampaignGroupRecordAccessors").smart_promotion_type.delete(e);
    }
    function m(e) {
      var t;
      return o("AdsMutators").chain(
        (t = r("AdsCampaignGroupRecordAccessors")).daily_budget.delete,
        t.lifetime_budget.delete,
        t.is_autobid.delete,
        t.is_average_price_pacing.delete,
        t.pacing_type.delete,
        t.bid_strategy.delete,
        t.spend_cap.delete,
      )(e);
    }
    function p(e, t) {
      return e === "duplication"
        ? o("AdsMutators").chain(
            r("AdsCampaignRecordAccessors").optimization_goal.set(
              t.optimization_goal,
            ),
            function (e) {
              var t,
                n,
                a =
                  (t = e.promoted_object) == null
                    ? void 0
                    : t.custom_event_type,
                i =
                  (n = e.promoted_object) == null ? void 0 : n.custom_event_str;
              return o("AdsMutators").chain(
                r(
                  "AdsCampaignRecordAccessors",
                ).promoted_object.custom_event_type.set(a),
                r(
                  "AdsCampaignRecordAccessors",
                ).promoted_object.custom_event_str.set(i),
              )(e);
            },
          )(t)
        : o("AdsMutators").chain(
            r("AdsCampaignRecordAccessors").optimization_goal.set(
              r("AdsAPIOptimizationGoals").APP_INSTALLS,
            ),
            r("AdsCampaignRecordAccessors").promoted_object.custom_event_type
              .delete,
            r("AdsCampaignRecordAccessors").promoted_object.custom_event_str
              .delete,
          )(t);
    }
    function _(e, t, n, r, a, l, s) {
      var u = o("AdsLoadObjectUtils").getLoadedValuesFromMap(
          o("AdsPEAdgroupSelectors").getAllByFieldsSelector()(
            l,
            { adset_id: null, campaign_id: null, id: null },
            i.id,
          ),
        ),
        c = new Set(),
        d = new Set(),
        m = new Set();
      u.forEach(function (e) {
        (c.add(e.id), d.add(e.adset_id), m.add(e.campaign_id));
      });
    }
    function f(e, t) {
      var n = null;
      return (
        e != null &&
          t != null &&
          e.getLoadedMap().forEach(function (e) {
            e.id === t && (n = e == null ? void 0 : e.minimum_age);
          }),
        n
      );
    }
    function g(e, t, n, r) {
      var a = n != null ? Math.max(r, n) : null,
        i =
          t != null
            ? Math.max(r, t)
            : e
              ? o("AdsSmartPromotionConstants")
                  .SMART_APP_PROMOTION_DEFAULT_MIN_AGE
              : null;
      return a != null && i != null && a !== i;
    }
    function h(e, t, n, a, i, l, s, u) {
      var c = e
        ? o("AdsSmartPromotionConstants").DEFAULT_AGE_MIN
        : o("AdsSmartPromotionConstants").SMART_APP_PROMOTION_DEFAULT_MIN_AGE;
      (n && (c = o("AdsSmartPromotionConstants").DEFAULT_AGE_MIN),
        i != null && (c = Math.max(c, i)));
      var d = u != null && u.length > 0;
      if (a || d) {
        var m = r("AdsYouthAdsLegalAge").GLOBAL;
        (s != null &&
        s.includes(
          o("AdsYouthAdsAgeLimitEligibility").INDONESIA_COUNTRY_CODE,
        ) &&
        !o(
          "AdsYouthAdsIndonesia18MinAgeUtils",
        ).shouldEnable18MinAgeInIndonesia()
          ? (m = r("AdsYouthAdsLegalAge").INDONESIA)
          : s != null &&
            s.includes(
              o("AdsYouthAdsAgeLimitEligibility").THAILAND_COUNTRY_CODE,
            ) &&
            (m = r("AdsYouthAdsLegalAge").THAILAND),
          (c = Math.max(c, m)));
      }
      e
        ? (c = Math.max(
            c,
            t != null
              ? t
              : o("AdsSmartPromotionConstants")
                  .SMART_APP_PROMOTION_DEFAULT_MIN_AGE,
          ))
        : l != null && (c = Math.max(c, l));
      var p = g(e, t, l, c);
      return { advisoryMinAge: c, isAppAndAccountMinAgeMismatched: p };
    }
    function y(e, t, n, o, a, i, l, s, u, c) {
      if (
        e != null &&
        e.objective === r("AdsAPIObjectives").APP_INSTALLS &&
        e.smart_promotion_type === r("AdsSmartPromotion").SMART_APP_PROMOTION
      ) {
        var d = h(s, l, n, o, a, i, u, c);
        return r("AdsCampaignRecordAccessors").targeting.age_min.set(
          d.advisoryMinAge,
          t,
        );
      }
      return t;
    }
    ((l.resetCampaignTargetingForSAP = s),
      (l.resetPromotedObjectForSAP = u),
      (l.shouldDisableDeleteForSAP = c),
      (l.removeSAPFlag = d),
      (l.setSAPCampaignGroupSpec = m),
      (l.setSAPOptimizationGoalAndCustomEventTypeFromDuplication = p),
      (l.genLogPEDuplicationDuplicateButtonClicked = _),
      (l.getAppDestinationDataMinAge = f),
      (l.calculateAdvisoryMinAge = h),
      (l.setAdvisoryMinAgeTargetingSpec = y));
  },
  98,
);
