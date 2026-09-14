__d(
  "AdsUEditorAdgroupSetLinkTypeMutatorUtils",
  ["AdsAPIObjectives", "AdsPromotedObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e ? e === "external" || e === "website_and_shops" : !1;
    }
    function s(e, t, n) {
      return (
        e === r("AdsAPIObjectives").CONVERSIONS &&
        t === r("AdsPromotedObjectTypes").PIXEL &&
        n
      );
    }
    ((l.isOldLinkTypeWebsiteOrWebsiteAndShop = e),
      (l.getIsConversionsWebsiteDynamicFlow = s));
  },
  98,
);
