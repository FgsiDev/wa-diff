__d(
  "AdsTargetingAudienceFairnessUtils",
  [
    "$InternalEnum",
    "AdsApplicationUtils",
    "AdsBuyingTypes",
    "AdsCampaignRecordAccessors",
    "AdsCustomAudienceType",
    "AdsRegulatedCategory",
    "AdsTargetingCountryUtils",
    "AdsUEditorCampaignSetTargetingAudienceFairnessMitigationStrategyAction",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "expansion",
      s = n("$InternalEnum")({
        REMOVE_FROM_SPEC: "remove_from_spec",
        SET_TO_DEFAULT: "set_to_default",
        SET_TO_INPUT: "set_to_input",
        NO_CHANGE: "no_change",
      }),
      u = ["CA"],
      c = [r("AdsRegulatedCategory").EMPLOYMENT];
    function d(e, t, n, o, a) {
      if (!e) return !1;
      var i = m(t, n);
      if (!i || o.length === 0) return !1;
      var l = o.some(function (e) {
        return e.subtype === r("AdsCustomAudienceType").SUBTYPES.LOOKALIKE;
      });
      if (l) return !1;
      if (a != null && a.length > 0) {
        var s = a.some(function (e) {
          return u.includes(e);
        });
        if (!s) return !1;
      }
      return r("gkx")("1794");
    }
    function m(e, t) {
      if (t === r("AdsBuyingTypes").RESERVED || e == null) return !1;
      var n = e.some(function (e) {
        return c.includes(e);
      });
      return !!n;
    }
    function p(e, t, n, o) {
      r(
        "AdsUEditorCampaignSetTargetingAudienceFairnessMitigationStrategyAction",
      ).dispatch(
        {
          campaignIDs: e,
          hostID: t,
          tafeCaMitigationStrategy: o,
          regulatedCategories: n,
        },
        {
          line: "132",
          module: "AdsTargetingAudienceFairnessUtils.js",
          moduleID: i.id,
        },
      );
    }
    function _(e) {
      var t = e.buyingType,
        n = e.customAudiences,
        r = e.existingMitigationStrategy,
        a = e.inputMitigationStrategy,
        i = e.regulatedCategories,
        l = e.targetingCountries,
        u = d(o("AdsApplicationUtils").isPowerEditor(), i, t, n, l);
      if (!u) return r != null ? s.REMOVE_FROM_SPEC : s.NO_CHANGE;
      var c = a != null ? a : r;
      return c == null
        ? s.SET_TO_DEFAULT
        : c !== r
          ? s.SET_TO_INPUT
          : s.NO_CHANGE;
    }
    function f(t, n, a, i) {
      var l,
        u,
        c,
        d,
        m =
          (l =
            (u = t.targeting) == null || (u = u.custom_audiences) == null
              ? void 0
              : u.toJSON()) != null
            ? l
            : [],
        p =
          (c = t.targeting) == null || (c = c.geo_locations) == null
            ? void 0
            : c.toJSON(),
        f = o("AdsTargetingCountryUtils").getUniqueCountriesSorted(p || {}, !1),
        g = _({
          regulatedCategories: n != null ? n : [],
          buyingType: a,
          customAudiences: m,
          targetingCountries: f,
          existingMitigationStrategy:
            (d = t.targeting) == null ? void 0 : d.tafe_ca_mitigation_strategy,
          inputMitigationStrategy: i,
        });
      switch (g) {
        case s.REMOVE_FROM_SPEC:
          return r(
            "AdsCampaignRecordAccessors",
          ).targeting.tafe_ca_mitigation_strategy.delete(t);
        case s.SET_TO_DEFAULT:
          return r(
            "AdsCampaignRecordAccessors",
          ).targeting.tafe_ca_mitigation_strategy.set(e, t);
        case s.SET_TO_INPUT:
          return r(
            "AdsCampaignRecordAccessors",
          ).targeting.tafe_ca_mitigation_strategy.set(i, t);
        case s.NO_CHANGE:
          return t;
      }
    }
    ((l.DEFAULT_TAFE_CA_MITIGATION_STRATEGY = e),
      (l.TAFEMitigationStrategyUpdateAction = s),
      (l.ELIGIBLE_SPECIAL_AD_CATEGORIES = c),
      (l.getIsCampaignEligibleForTAFE = d),
      (l.updateMitigationStrategyInTargetingSpec = p),
      (l.getTAFEMitigationStrategyUpdateAction = _),
      (l.maybeUpdateTAFEMitigationStrategyInCampaignRecord = f));
  },
  98,
);
