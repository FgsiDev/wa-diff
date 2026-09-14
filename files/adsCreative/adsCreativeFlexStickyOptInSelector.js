__d(
  "adsCreativeFlexStickyOptInSelector",
  [
    "AdsAdgroupTypeUtils",
    "AdsCreativeFlexGKCheckUtils",
    "LoadObject",
    "adsCreateSelector",
    "userSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return function (t) {
        return t != null && o("AdsAdgroupTypeUtils").isDPA(t)
          ? (e == null ? void 0 : e.da_creative_flex_opt_in_status) !==
              "OPTED_OUT"
          : o(
                "AdsCreativeFlexGKCheckUtils",
              ).isAccountEligibleForStickyDefaultOn()
            ? (e == null ? void 0 : e.creative_flex_opt_in_status) !==
              "OPTED_OUT"
            : !1;
      };
    }
    var s = r("adsCreateSelector")(
      [r("userSettingsSelector")],
      function (n) {
        var t;
        return (t =
          n == null
            ? void 0
            : n.mapValue(function (t) {
                return e(t);
              })) != null
          ? t
          : r("LoadObject").withValue(null, { creatorModuleID: i.id });
      },
      { name: i.id + ".adsCreativeFlexStickyOptInSelector" },
    );
    ((l.fetchStickyDefaultOnForAdgroup = e),
      (l.adsCreativeFlexStickyOptInSelector = s));
  },
  98,
);
