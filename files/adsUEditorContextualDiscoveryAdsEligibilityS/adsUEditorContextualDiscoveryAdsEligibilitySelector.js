__d(
  "adsUEditorContextualDiscoveryAdsEligibilitySelector",
  [
    "AdsContextualDiscoveryAdsEligibilitySettingDataProvider",
    "adsCreateSelector",
    "adsUEditorAccountIDSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAccountIDSelector"),
          r(
            "AdsContextualDiscoveryAdsEligibilitySettingDataProvider",
          ).toFluxSelector(),
        ],
        function (t, n) {
          return n.get(t);
        },
        { name: i.id + ".adsUEditorContextualDiscoveryAdsEligibilitySelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
