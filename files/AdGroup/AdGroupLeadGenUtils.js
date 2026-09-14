__d(
  "AdGroupLeadGenUtils",
  ["AdsAPIAdgroupRecordUtils", "AdsAPIObjectives", "AdsPromotedObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return (
        (n === r("AdsPromotedObjectTypes").WEBSITE_AND_INSTANT_FORM ||
          (t === r("AdsAPIObjectives").LEAD_GENERATION &&
            n === r("AdsPromotedObjectTypes").ON_AD)) &&
        o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)
      );
    }
    l.isLeadGenAdGroupWithExistingPost = e;
  },
  98,
);
