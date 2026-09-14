__d(
  "AdsPEStatRangeUISelectors",
  [
    "AdsAccountStore",
    "AdsPEInsightsStatRangeUIProvider",
    "AdsPEStatRangeUISelectorUtil",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        r("AdsPEInsightsStatRangeUIProvider").toFluxSelector(),
        r("AdsAccountStore").getCreatedTime,
        r("AdsAccountStore").getTimezoneID,
      ],
      function (t, n, r) {
        return o("AdsPEStatRangeUISelectorUtil").getStatRangeSelectorState(
          t,
          n,
          r,
        );
      },
      { name: i.id + ".adsPEInsightsStatRangeUISelector" },
    );
    l.adsPEInsightsStatRangeUISelector = e;
  },
  98,
);
