__d(
  "getSupportedObjectivesForMediaTypeAutomation",
  ["AdsAPIObjectives", "AdsDAMediaTypeAutomationConfig.experimental"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      r("AdsAPIObjectives").CONVERSIONS,
      r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
    ];
    function s() {
      var t;
      return (t = r(
        "AdsDAMediaTypeAutomationConfig.experimental",
      ).SUPPORTED_OBJECTIVES) != null
        ? t
        : e;
    }
    l.default = s;
  },
  98,
);
