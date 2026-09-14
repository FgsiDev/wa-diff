__d(
  "AdsConvergenceDefaultCampaignPlugin",
  [
    "AdsAPICampaignRecord",
    "AdsAPICampaignRecordUtils",
    "AdsConvergenceCampaignUtils",
    "AdsODAXUtils",
    "AdsOptimizationUtils",
    "adsCampaignGetDefaultStartTimeString",
    "adsDeliveryTranslateOldAttributionWindowSpec",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "convergenceCampaign",
        key: "campaign/default",
        pivots: {},
        mergeStaticDefaults: function (t, n) {
          return this.__mergeObjectiveSpecificStaticDefaults(
            this._mergeCommonStaticDefaults(t, n),
            n,
          );
        },
        _mergeCommonStaticDefaults: function (t, n) {
          var e,
            a,
            i = n.account,
            l = n.alternativeCountries,
            s = n.buyingType,
            u = n.objective,
            c = n.safrConfig,
            d = r("adsCampaignGetDefaultStartTimeString")(i),
            m = o("AdsOptimizationUtils").getDefaultAttributionWindowDays(),
            p = r("adsDeliveryTranslateOldAttributionWindowSpec")({
              attribution_window_days: m,
            }),
            _ =
              (e = n.promotedObjectType) != null
                ? e
                : o("AdsAPICampaignRecordUtils").getPromotedObjectType(u, t),
            f = o("AdsODAXUtils").maybeTranslateObjective(u, _, null),
            g = o("AdsConvergenceCampaignUtils").getDefaultTargeting(
              i,
              s,
              f,
              _,
              null,
              c,
              l,
            ),
            h = o("AdsConvergenceCampaignUtils").getDefaultBudget(
              i,
              null,
              null,
              u,
              _,
            ),
            y = h.defaultDailyBudget,
            C = h.defaultLifetimeBudget,
            b = h.pacingType;
          return (
            (n == null ? void 0 : n.isODAXSwitchChannel) === !0 &&
              (delete g.age_max, delete g.age_min, delete g.geo_locations),
            t.mergeDeepWith(
              function (e, t) {
                return t != null ? t : e;
              },
              new (r("AdsAPICampaignRecord"))(
                ((a = {}),
                (a.status = "ACTIVE"),
                (a.budget_remaining = y),
                (a.daily_budget = y),
                (a.lifetime_budget = C),
                (a.pacing_type = b),
                (a.start_time = d),
                (a.targeting = g),
                (a.attribution_spec = p),
                a),
              ),
            )
          );
        },
        __mergeObjectiveSpecificStaticDefaults: function (t) {
          return t;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
