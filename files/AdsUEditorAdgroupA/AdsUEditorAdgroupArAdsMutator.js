__d(
  "AdsUEditorAdgroupArAdsMutator",
  ["AdsAdgroupSemanticFields", "AdsArLinkUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("AdsArLinkUtils").isArAd(e, t)
        ? r("AdsAdgroupSemanticFields").linkURL.set(t, e, null)
        : e;
    }
    l.clearArAdsLink = e;
  },
  98,
);
