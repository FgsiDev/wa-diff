__d(
  "adsUEditorShouldAccountGrandfatherForMultiAdsSelector",
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
              ).shouldAccountGrandfather(e);
            });
          },
          { name: i.id },
        ),
      ),
      s = e;
    l.default = s;
  },
  98,
);
