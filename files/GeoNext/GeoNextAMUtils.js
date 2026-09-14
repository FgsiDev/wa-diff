__d(
  "GeoNextAMUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "/adsmanager/audiences",
      l = "/adsmanager/reporting",
      s = "/adsreporting",
      u = "/adsmanager/manage",
      c = "/adsmanager/marketing",
      d = "/adsmanager/manage/advertising_settings",
      m = "/ads/manager/account_settings",
      p = "/adsmanager/manage/ad_account_settings",
      _ = "/billing_hub/payment_activity",
      f = "/billing_hub/payment_settings",
      g = "/billing_hub/accounts",
      h = "/adsmanager/billing_hub",
      y = "/ads/manager/rules/management",
      C = "/business_locations",
      b = "/latest/business_home",
      v = "adsmanager/onboarding/lwi_graduation",
      S = "adsmanager/onboarding/igfa_graduation",
      R = "adsmanager/onboarding/ig_ad4ad",
      L = "/adsmanager/custom_analytics_configurations",
      E = "/adsmanager/portfolios",
      k = new Set([l, s, e, L, E]),
      I = new Set([_, f, g]);
    function T() {
      var e = window.location.pathname,
        t = k.has(e.split("/", 3).join("/")),
        n = e.includes(d) || e.includes(p) || e.includes(m),
        r = I.has(e.split("/", 3).join("/")),
        o = e.startsWith(h),
        a = e.includes(u),
        i = e.includes(c),
        l = e.includes(y),
        s = e.includes(C),
        _ = e.includes(b);
      if (n || t || l || s || _ || o) return !0;
      if (r) {
        var f = new URLSearchParams(location.search),
          g = f.get("placement") === "ads_manager";
        return g;
      }
      if (a || i) return !0;
      var L = e.includes(v) || e.includes(S) || e.includes(R);
      return !!L;
    }
    i.isGeoNextEnabled = T;
  },
  66,
);
