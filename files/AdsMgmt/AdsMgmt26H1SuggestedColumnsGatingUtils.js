__d(
  "AdsMgmt26H1SuggestedColumnsGatingUtils",
  ["ARXUsabilityHoldoutUtils", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e;
      return o("ARXUsabilityHoldoutUtils").shouldAccountSeeFlow11_1Pretests() &&
        (e = r("qex")._("2189")) != null
        ? e
        : !1;
    }
    function s() {
      var e;
      return o("ARXUsabilityHoldoutUtils").shouldAccountSeeFlow11_1Pretests() &&
        (e = r("qex")._("2190")) != null
        ? e
        : !1;
    }
    ((l.getShouldSuggestMRSColumns = e),
      (l.getShouldSuggestMRSColumnsWithoutExposure = s));
  },
  98,
);
