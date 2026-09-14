__d(
  "adsCallToActionFilterTypesForLeadFormAds",
  ["AdsAPIObjectives", "AdsCallToActionTypesUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("AdsCallToActionTypesUtils")
        .typesForObjective(r("AdsAPIObjectives").LEAD_GENERATION, null)
        .map(function (e) {
          return e.name;
        });
      return e.filter(function (e) {
        return t.includes(e.name);
      });
    }
    l.default = e;
  },
  98,
);
