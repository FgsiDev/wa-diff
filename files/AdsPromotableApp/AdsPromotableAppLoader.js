__d(
  "AdsPromotableAppLoader",
  ["AdsGraphAPI", "PromotableAppFields"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(e)
        .edge("advertisable_applications")
        .batched()
        .get({ fields: o("PromotableAppFields").PROMOTABLE_APP_FIELDS });
    }
    l.loadPromotableApps = e;
  },
  98,
);
