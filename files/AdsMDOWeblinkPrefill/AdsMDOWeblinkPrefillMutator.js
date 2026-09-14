__d(
  "AdsMDOWeblinkPrefillMutator",
  [
    "AdsAPIObjectives",
    "AdsMDOWeblinkPrefillUtils",
    "AdsPageUtils",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      if (
        (n !== r("AdsAPIObjectives").OUTCOME_SALES &&
          n !== r("AdsAPIObjectives").OUTCOME_LEADS) ||
        a == null
      )
        return e;
      var i = o("AdsPageUtils").getPageID(e),
        l = i != null ? a(i) : null;
      return l &&
        r("isTruthy")(l.last_website_link) &&
        o("AdsMDOWeblinkPrefillUtils").isInAdsManagerMDOWeblinkPrefillGK(t)
        ? o(
            "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
          ).setStickyWeblinkPrefill(e, l.last_website_link, l, n)
        : e;
    }
    l.applyMDOWeblinkPrefillIfEligible = e;
  },
  98,
);
