__d(
  "AdsProfilePlusAssets",
  ["AdsAPIObjectives"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.some(function (e) {
        return (
          e === r("AdsAPIObjectives").PROFILE_FOLLOWERS ||
          e === r("AdsAPIObjectives").STORE_VISITS
        );
      });
    }
    function s(e) {
      return e.filter(function (e) {
        return e.has_transitioned_to_new_page_experience !== !0;
      });
    }
    function u(e) {
      return e === "PAGE_POSTS";
    }
    ((l.isAnyObjectiveBlockedForProfileAds = e),
      (l.filterProfilePlusDelegatePages = s),
      (l.shouldShowDelegatePagesForAdsGlobalNavigation = u));
  },
  98,
);
