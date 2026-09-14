__d(
  "adsUEditorMultiAdsStickyOptOutSelector",
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
              var t = o("AdsContextualDiscoveryAdsUtils").isGBGIMAdvertiser(e);
              return (
                o("AdsContextualDiscoveryAdsUtils").shouldStickyOptOut(e) && t
              );
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
