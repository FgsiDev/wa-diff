__d(
  "adsUEditorAdgroupDynamicFlexibleIdentityShopSelectorExtraDataSelectorUtils",
  ["AdsBulkValueUtils", "AdsUEditorCampaignSAIPLocationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsBulkValueUtils").aggregate(
        e.map(function (e) {
          var t = e.campaign;
          return o(
            "AdsUEditorCampaignSAIPLocationUtils",
          ).getCountriesFromGeoLocations(t.targeting.geo_locations);
        }),
      );
    }
    l.targetingCountry = e;
  },
  98,
);
