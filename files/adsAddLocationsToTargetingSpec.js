__d(
  "adsAddLocationsToTargetingSpec",
  ["AdsAPICampaignRecord", "AdsCampaignRecordAccessors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsAPICampaignRecord")
        .getSpec()
        .targeting.getSpec().geo_locations,
      s = r("AdsAPICampaignRecord")
        .getSpec()
        .targeting.getSpec().excluded_geo_locations;
    function u(t, n, o) {
      if (n == null || o == null) return t;
      var a = r("AdsCampaignRecordAccessors").targeting.geo_locations.set(
        new e(n),
        t,
      );
      return r(
        "AdsCampaignRecordAccessors",
      ).targeting.excluded_geo_locations.set(new s(o), a);
    }
    l.default = u;
  },
  98,
);
