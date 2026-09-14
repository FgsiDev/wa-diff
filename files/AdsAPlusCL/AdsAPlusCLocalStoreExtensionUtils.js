__d(
  "AdsAPlusCLocalStoreExtensionUtils",
  ["LocalStoreExtensionDefaultOptInAllowlist.experimental", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      n === void 0 && (n = !1);
      var o =
        (e != null &&
          r(
            "LocalStoreExtensionDefaultOptInAllowlist.experimental",
          ).page_ids.includes(e)) ||
        (t == null
          ? void 0
          : t.is_eligible_for_location_extension_website_and_in_store_default_on) ===
          !0;
      return n ? r("gkx")("2472") && o : r("gkx")("2504") && o;
    }
    function s(e) {
      var t =
        (e == null
          ? void 0
          : e.is_eligible_for_location_extension_website_default_on) === !0;
      return r("gkx")("4078") || ((r("gkx")("9719") || r("gkx")("9720")) && t);
    }
    var u = 2;
    function c(e) {
      return d(e) == null;
    }
    function d(e) {
      var t, n;
      if (e == null) return "PAGE_DATA_UNAVAILABLE";
      var r = e.getValue();
      return r == null || e.isLoadingOrEmpty() || e.hasError()
        ? "PAGE_DATA_LOADING_OR_ERROR"
        : ((t =
              (n = r.locations) == null || (n = n.summary) == null
                ? void 0
                : n.total_count) != null
              ? t
              : 0) < u
          ? "INSUFFICIENT_STORE_LOCATIONS"
          : null;
    }
    ((l.passLocalStoreExtensionDefaultOptInGK = e),
      (l.passLocalStoreExtensionDefaultOptInGKForWebsite = s),
      (l.passPageLocationStructureCheck = c),
      (l.getPageLocationIneligibilityReason = d));
  },
  98,
);
