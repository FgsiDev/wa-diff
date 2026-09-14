__d(
  "AdsUEditorShopAdsLoggerUtils",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      e != null &&
        r("AdsInterfacesLogger").logOnce({
          eventName: "campaign_property_set",
          data: { cms_id: e, subsequent_data: JSON.stringify(t) },
        });
    }
    function s(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").logOnce({
        eventName: "shops_ads_saoff_default_opt_in_opt_out",
        data:
          ((a = { caller: e }),
          (a.sub_event = "isDefaultOptedIn: " + String(t)),
          (a.adgroup_id = n),
          (a.message = o),
          a),
      });
    }
    function u(e) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "shops_ads_set_static_destination",
        data: { subsequent_data: JSON.stringify({ destination_data: e }) },
      });
    }
    function c(e) {
      r("AdsInterfacesLogger").log({
        eventName: "shops_ads_set_static_destination",
        data: { subsequent_data: JSON.stringify({ destination_data: e }) },
      });
    }
    function d(e, t) {
      r("AdsInterfacesLogger").log({
        eventName: "shops_ads_sdd_recommendations_from_cache",
        data: { subsequent_data: JSON.stringify({ cacheHasValue: t, uri: e }) },
      });
    }
    function m(e, t) {
      r("AdsInterfacesLogger").log({
        eventName: "shops_ads_sdd_recommendations",
        data: {
          subsequent_data: JSON.stringify({
            media_params: e,
            destination_data: t,
          }),
        },
      });
    }
    ((l.logCommerceMerchantSettingsID = e),
      (l.logSAOffDefaultOptInOptOuts = s),
      (l.logStaticShopAdsDestinationOnce = u),
      (l.logStaticShopAdsDestination = c),
      (l.logCachedSDDRecommendationsRequests = d),
      (l.logStaticShopAdsSDDRecommendations = m));
  },
  98,
);
