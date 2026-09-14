__d(
  "adsCallToActionFilterTypesForCatalogVertical",
  ["AdsDynamicAudienceUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("AdsDynamicAudienceUtils").isAutoVertical(t)
        ? e
        : e.filter(function (e) {
            return (
              e.name !== "BOOK_TEST_DRIVE" && e.name !== "CHECK_AVAILABILITY"
            );
          });
    }
    l.default = e;
  },
  98,
);
