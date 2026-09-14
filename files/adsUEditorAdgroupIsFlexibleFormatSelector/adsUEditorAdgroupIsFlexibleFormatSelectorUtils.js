__d(
  "adsUEditorAdgroupIsFlexibleFormatSelectorUtils",
  ["AdsAPIObjectives", "AdsBulkValueUtils", "AdsLinkPostFormat", "first"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n, a;
      return (
        o("AdsBulkValueUtils").getUniformValue(e) ===
          r("AdsLinkPostFormat").FLEXIBLE &&
        (((n = r("first")(t)) == null ? void 0 : n.objective) ===
          r("AdsAPIObjectives").LINK_CLICKS ||
          ((a = r("first")(t)) == null ? void 0 : a.objective) ===
            r("AdsAPIObjectives").OUTCOME_ENGAGEMENT)
      );
    }
    l.adsUEditorAdgroupIsFlexibleFormat = e;
  },
  98,
);
