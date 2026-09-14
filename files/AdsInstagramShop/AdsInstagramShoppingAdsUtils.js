__d(
  "AdsInstagramShoppingAdsUtils",
  ["AdsAPIObjectives"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === r("AdsAPIObjectives").LINK_CLICKS ||
        e === r("AdsAPIObjectives").POST_ENGAGEMENT ||
        e === r("AdsAPIObjectives").BRAND_AWARENESS ||
        e === r("AdsAPIObjectives").REACH ||
        e === r("AdsAPIObjectives").CONVERSIONS
      );
    }
    l.isValidShoppingAdObjective = e;
  },
  98,
);
