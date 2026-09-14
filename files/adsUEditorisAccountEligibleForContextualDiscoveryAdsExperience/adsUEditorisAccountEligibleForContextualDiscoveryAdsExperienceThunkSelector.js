__d(
  "adsUEditorisAccountEligibleForContextualDiscoveryAdsExperienceThunkSelector",
  [
    "AdsContextualDiscoveryAdsUtils",
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorContextualDiscoveryAdsEligibilitySelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateThunkSelector")(
      r("adsCreateSelector")(
        [r("adsUEditorContextualDiscoveryAdsEligibilitySelector")],
        function (t) {
          return t.mapValue(function (e) {
            return o(
              "AdsContextualDiscoveryAdsUtils",
            ).isAccountEligibleForContextualDiscoveryAdsExperience(e);
          });
        },
        { name: i.id },
      ),
    );
    l.default = e;
  },
  98,
);
