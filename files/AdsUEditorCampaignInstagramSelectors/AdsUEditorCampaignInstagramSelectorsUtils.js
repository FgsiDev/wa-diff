__d(
  "AdsUEditorCampaignInstagramSelectorsUtils",
  ["AdsInstagramApplicabilityUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.some(function (e) {
        var t = e.spec;
        return r(
          "AdsInstagramApplicabilityUtils",
        ).placementSpecHasInstagramPlacementOnly(t);
      });
    }
    l.someEligibilityInfoHaveInstagramPlacementOnly = e;
  },
  98,
);
