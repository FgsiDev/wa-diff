__d(
  "adsRegulatedCategoryIsPoliticalCategorySelected",
  ["AdsRegulatedCategoryConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e != null &&
        e.some(function (e) {
          return o(
            "AdsRegulatedCategoryConstants",
          ).AdsRegulatedCategorySIEPCategories.includes(e);
        })
      );
    }
    l.default = e;
  },
  98,
);
