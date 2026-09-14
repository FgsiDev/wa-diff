__d(
  "ShopsAdsAdapterCampaignAudienceRulePlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignSAIPLocationUtils",
    "adsCommonTargetingGetDefaultCountryByBusinessCountryCode",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (
        !o(
          "AdsUEditorCampaignSAIPLocationUtils",
        ).isEligibleForSAIPi18nExpansion()
      )
        return r("immutable").List(["US"]);
      var t = r("adsCommonTargetingGetDefaultCountryByBusinessCountryCode")(
        e.business_country_code,
      );
      return o("AdsUEditorCampaignSAIPLocationUtils").isCountrySAIPSupported(t)
        ? r("immutable").List([t])
        : r("immutable").List(["US"]);
    }
    var s = {
        type: "shops_ads_adapter_website_and_shop_opt_in_rule",
        key: "shops_Ads_targeting_audience_rule",
        isCompatible: function (t) {
          var e,
            n = o(
              "AdsUEditorCampaignSAIPLocationUtils",
            ).isLocationSAIPSupported(
              (e = t.targeting.geo_locations) == null ? void 0 : e.toJS(),
            );
          return n ? null : "non_us_audience";
        },
        pivots: { ruleType: "shops_ads_targeting_audience_rule" },
        transform: function (n, a) {
          return a.isShopsAdsIncentiveProgramEnabled &&
            a.resetAudienceFields !== !1
            ? o("AdsMutators").chain(
                r("AdsCampaignRecordAccessors").targeting.geo_locations.delete,
                r(
                  "AdsCampaignRecordAccessors",
                ).targeting.geo_locations.countries.set(e(a.account)),
                r(
                  "AdsCampaignRecordAccessors",
                ).targeting.geo_locations.location_types.set(
                  r("immutable").List(["home", "recent"]),
                ),
              )(n)
            : n;
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
