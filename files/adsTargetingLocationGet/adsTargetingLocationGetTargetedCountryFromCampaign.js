__d(
  "adsTargetingLocationGetTargetedCountryFromCampaign",
  ["adsTargetingLocationGroupByCountry"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.targeting.geo_locations;
      if (!t) return null;
      var n = Object.keys(r("adsTargetingLocationGroupByCountry")(t, {}));
      return n.length === 1 ? n[0] : null;
    }
    l.default = e;
  },
  98,
);
