__d(
  "AdsTargetingAccountControlInfoUtils",
  [
    "AdsAPICampaignRecord",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsProgressiveDisclosureQEUtils",
    "AdsTargetingAccountControlInfoProvider",
    "AdsTargetingAsSignalUtils",
    "AdsTargetingConstants",
    "LocationConstants",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsAPICampaignRecord")
        .getSpec()
        .targeting.getSpec().geo_locations,
      s = r("AdsAPICampaignRecord")
        .getSpec()
        .targeting.getSpec().excluded_geo_locations,
      u = function (n) {
        var t,
          r,
          a = n != null ? new e(n) : null,
          i =
            (a == null
              ? void 0
              : a.has(o("LocationConstants").COUNTRY_GROUPS)) &&
            (a == null || (t = a.country_groups) == null
              ? void 0
              : t.count()) === 1 &&
            (a == null || (r = a.country_groups) == null
              ? void 0
              : r.every(function (e) {
                  return e === o("LocationConstants").WORLDWIDE;
                }));
        return !!i;
      },
      c = function (t) {
        if (t == null) return !1;
        var e = r("gkx")("720");
        return e;
      },
      d = function (n, a, i) {
        var t, l, d;
        if (
          !n ||
          !c(n) ||
          o("AdsTargetingAsSignalUtils").isCampaignGroupRegulated(i)
        )
          return a;
        var m = r("AdsTargetingAccountControlInfoProvider")().get(n.account_id);
        if (!m.hasValue()) return a;
        var p = m.getValueEnforcing(),
          _ =
            p == null || (t = p.audience_controls) == null
              ? void 0
              : t.geo_locations,
          f =
            p == null || (l = p.audience_controls) == null
              ? void 0
              : l.excluded_geo_locations,
          g =
            p == null || (d = p.audience_controls) == null ? void 0 : d.age_min,
          h = u(_);
        return o("AdsMutators").chain(
          function (t) {
            return _ != null && !h
              ? r("AdsCampaignRecordAccessors").targeting.geo_locations.set(
                  new e(_),
                  t,
                )
              : t;
          },
          function (e) {
            return f != null
              ? r(
                  "AdsCampaignRecordAccessors",
                ).targeting.excluded_geo_locations.set(new s(f), e)
              : e;
          },
          function (e) {
            return g != null &&
              g !== o("AdsTargetingConstants").DEFAULT_MIN_SELECTABLE_AGE
              ? r("AdsCampaignRecordAccessors").targeting.age_min.set(g, e)
              : e;
          },
        )(a);
      };
    function m(e) {
      if (e != null) {
        var t = [
          o("AdsProgressiveDisclosureQEUtils").getUnifiedAppSalesVariation,
        ].some(function (t) {
          return t(e, !1) != null;
        });
        if (t) return !1;
      }
      return r("gkx")("22092");
    }
    ((l.maybeApplyDefaultBusinessConstraints = d),
      (l.isBusinessConstraintsIntergrationEnabled = m));
  },
  98,
);
