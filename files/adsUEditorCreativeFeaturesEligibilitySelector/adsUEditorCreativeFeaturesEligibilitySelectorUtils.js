__d(
  "adsUEditorCreativeFeaturesEligibilitySelectorUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      var r = t.length > 0 ? t[0].id : null,
        o = t.length > 0 ? t[0].special_ad_categories : null;
      return n.get({
        accountID: e,
        campaignGroupID: r,
        specialAdCategories: o,
      });
    }
    i.adsUEditorCreativeFeaturesEligibility = e;
  },
  66,
);
