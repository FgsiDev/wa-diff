__d(
  "AdsGetStandardTemplateDefaultJSONForWhatsAppFlows",
  [
    "AdsGetStandardTemplateDefaultJSONHelper",
    "AdsGetStandardTemplateDefaultJSONHelperForWhatsAppFlows",
    "CTWAAdsOptimizationStoreUtils",
    "ClickToWhatsAppFeatureGating",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s, u, c, d) {
      var m,
        p =
          (m = c != null ? c : u) != null
            ? m
            : o("ClickToWhatsAppFeatureGating").getWabaIDForPageWANumber(t, e),
        _ = o("ClickToWhatsAppFeatureGating").enableCTWAFlows(
          a,
          p,
          d,
          e,
          t,
          s,
          u,
        );
      if (_ && t != null) {
        var f = p;
        if (f != null) {
          var g = o(
            "CTWAAdsOptimizationStoreUtils",
          ).getIsWhatsAppNumberCloudAPI(n, e);
          return r("AdsGetStandardTemplateDefaultJSONHelperForWhatsAppFlows")(
            n,
            f,
            g,
          );
        }
      }
      return r("AdsGetStandardTemplateDefaultJSONHelper")(n, a, i);
    }
    l.default = e;
  },
  98,
);
