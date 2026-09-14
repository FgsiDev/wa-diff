__d(
  "adsAuthorizationCategoryMutate",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupUtils",
    "AdsMutators",
    "adsAuthorizationCategoryIsAnyPageAuthorized",
    "adsRegulatedCategoryIsPoliticalCategorySelected",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i) {
      var l = r("adsAuthorizationCategoryIsAnyPageAuthorized")([n], a);
      return t
        ? r("adsRegulatedCategoryIsPoliticalCategorySelected")(i)
          ? o("AdsAdgroupUtils").isPoliticalAd(e)
            ? r(
                "AdsAdgroupRecordAccessors",
              ).creative.degrees_of_freedom_spec.delete(e)
            : o("AdsMutators").chain(
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.authorization_category.set("POLITICAL"),
                r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
                  .delete,
              )(e)
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.authorization_category.delete(e)
        : l
          ? o("AdsAdgroupUtils").isPoliticalAd(e)
            ? r(
                "AdsAdgroupRecordAccessors",
              ).creative.degrees_of_freedom_spec.delete(e)
            : o("AdsMutators").chain(
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.authorization_category.set("POLITICAL"),
                r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
                  .delete,
              )(e)
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.authorization_category.delete(e);
    }
    l.default = e;
  },
  98,
);
