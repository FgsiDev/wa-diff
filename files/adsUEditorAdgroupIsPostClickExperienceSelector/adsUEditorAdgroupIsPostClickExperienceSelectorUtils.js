__d(
  "adsUEditorAdgroupIsPostClickExperienceSelectorUtils",
  ["AdsPostClickUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e.every(function (e) {
        var n = e.adgroup,
          r = e.campaign,
          a = e.campaignGroup;
        return o("AdsPostClickUtils").isEligibleForPostClickExperience(
          t,
          a.objective,
          n,
          r,
        );
      });
    }
    l.isPostClickExperience = e;
  },
  98,
);
