__d(
  "ShopsAdsOffsiteCheckoutAdsLoggingUtils",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o = e[0];
      r("AdsInterfacesLogger").logOnce({
        eventName: "shops_ads_offsite_iab_checkout_ad_creation",
        data:
          ((n = {}),
          (n.sub_event = "ineligiblility_reason"),
          (n.message = t),
          (n.adgroup_id = o),
          n),
      });
    }
    function s(e, t, n) {
      var o,
        a = e[0];
      r("AdsInterfacesLogger").log({
        eventName: "shops_ads_offsite_iab_checkout_ad_creation",
        data:
          ((o = {}),
          (o.sub_event = "optin_action_".concat(t)),
          (o.adgroup_id = a),
          (o.message = e.join(",")),
          (o.is_object_published = n),
          o),
      });
    }
    function u(e, t, n) {
      var o,
        a = e[0];
      r("AdsInterfacesLogger").log({
        eventName: "shops_ads_offsite_iab_checkout_ad_creation",
        data:
          ((o = {}),
          (o.sub_event = "optout_action_".concat(t)),
          (o.adgroup_id = a),
          (o.message = e.join(",")),
          (o.is_object_published = n),
          o),
      });
    }
    function c(e, t, n, o, a, i) {
      var l,
        s = e[0];
      r("AdsInterfacesLogger").logOnce({
        eventName: "shops_ads_offsite_iab_checkout_ad_creation",
        data:
          ((l = {}),
          (l.sub_event = "saoff_toggle_impression_".concat(
            t,
            "_toggle_state_",
            n,
          )),
          (l.message = "toggle_".concat(n)),
          (l.adgroup_id = s),
          (l.optimization_goal = JSON.stringify(o)),
          (l.custom_event_type = JSON.stringify(a)),
          (l.is_object_published = i),
          l),
      });
    }
    function d(e, t) {
      var n,
        o = t[0];
      r("AdsInterfacesLogger").log({
        eventName: "shops_ads_offsite_iab_checkout_ad_creation",
        data:
          ((n = {}),
          (n.sub_event = "radio_".concat(e)),
          (n.adgroup_id = o),
          (n.message = t.join(",")),
          n),
      });
    }
    function m(e, t) {
      var n;
      r("AdsInterfacesLogger").logOnce({
        eventName: "shops_ads_offsite_iab_checkout_ad_creation",
        data:
          ((n = {}),
          (n.adgroup_id = e),
          (n.sub_event = "shop_ads_saoff_doi_early_return_null_parent_data"),
          (n.message = t),
          n),
      });
    }
    ((l.logSAOffIneligibilityReasonOnce = e),
      (l.logSAOffOptinAction = s),
      (l.logSAOffOptOutAction = u),
      (l.logSAOffOptinImpression = c),
      (l.logSAOffRadioSelectorEvent = d),
      (l.logSAOffDOIEarlyReturn = m));
  },
  98,
);
