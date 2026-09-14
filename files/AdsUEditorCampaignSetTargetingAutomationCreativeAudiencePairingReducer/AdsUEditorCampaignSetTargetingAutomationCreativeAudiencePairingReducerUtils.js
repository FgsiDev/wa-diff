__d(
  "AdsUEditorCampaignSetTargetingAutomationCreativeAudiencePairingReducerUtils",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsTargetingPGDIndividualSettingUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 25,
      s = 65,
      u = function (t) {
        var e;
        return ((e = t.targeting.targeting_automation) == null
          ? void 0
          : e.advantage_audience) == null
          ? t
          : r(
              "AdsCampaignRecordAccessors",
            ).targeting.targeting_automation.advantage_audience.set(0)(t);
      },
      c = function (t) {
        var e;
        return ((e = t.targeting.targeting_automation) == null ||
        (e = e.individual_setting) == null
          ? void 0
          : e.age) == null
          ? t
          : r(
              "AdsCampaignRecordAccessors",
            ).targeting.targeting_automation.individual_setting.age.set(0)(t);
      },
      d = function (t) {
        var e;
        return ((e = t.targeting.targeting_automation) == null ||
        (e = e.individual_setting) == null
          ? void 0
          : e.gender) == null
          ? t
          : r(
              "AdsCampaignRecordAccessors",
            ).targeting.targeting_automation.individual_setting.gender.set(0)(
              t,
            );
      },
      m = function (t) {
        return t.targeting.age_range == null
          ? t
          : r("AdsCampaignRecordAccessors").targeting.age_range.delete(t);
      },
      p = function (t) {
        return r("AdsCampaignRecordAccessors").targeting.genders.set(
          r("immutable").List(),
        )(t);
      },
      _ = function (n) {
        return function (t) {
          var o = r("AdsCampaignRecordAccessors").targeting.age_min.get(t);
          return o == null
            ? n == null
              ? t
              : r("AdsCampaignRecordAccessors").targeting.age_min.set(
                  Math.min(n, e),
                )(t)
            : o > e
              ? r("AdsCampaignRecordAccessors").targeting.age_min.set(e)(t)
              : t;
        };
      },
      f = function (t) {
        var e = r("AdsCampaignRecordAccessors").targeting.age_max.get(t);
        return e != null && e < s
          ? r("AdsCampaignRecordAccessors").targeting.age_max.set(s)(t)
          : t;
      },
      g = function (t, n, a, i) {
        return n !== 0
          ? o("AdsMutators").chain(
              r(
                "AdsCampaignRecordAccessors",
              ).targeting.targeting_automation.creative_audience_pairing.set(n),
              u,
              c,
              d,
              p,
              m,
              _(i),
              f,
            )(t)
          : a === !0
            ? o("AdsMutators").chain.apply(
                o("AdsMutators"),
                [
                  r(
                    "AdsCampaignRecordAccessors",
                  ).targeting.targeting_automation.creative_audience_pairing.set(
                    n,
                  ),
                  o("AdsTargetingPGDIndividualSettingUtils")
                    .applyDefaultTargetingAutomationIndividualSetting,
                ].concat(
                  i != null
                    ? [r("AdsCampaignRecordAccessors").targeting.age_min.set(i)]
                    : [],
                ),
              )(t)
            : r(
                "AdsCampaignRecordAccessors",
              ).targeting.targeting_automation.creative_audience_pairing.set(n)(
                t,
              );
      };
    l.updateCampaignCreativeAudiencePairing = g;
  },
  98,
);
