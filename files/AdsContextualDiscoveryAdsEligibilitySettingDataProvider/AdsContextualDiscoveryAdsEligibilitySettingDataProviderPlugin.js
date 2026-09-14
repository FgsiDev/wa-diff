__d(
  "AdsContextualDiscoveryAdsEligibilitySettingDataProviderPlugin",
  [
    "AdsContextualDiscoveryAdsEligibilityDataLoaderAction",
    "AdsContextualDiscoveryAdsUtils",
    "SignalsLaminarHelpers",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: o("SignalsLaminarHelpers").createLoadObjectMap(
          o("AdsContextualDiscoveryAdsUtils")
            .loadAdsContextualDiscoveryAdsEligibilitySetting,
          function (e) {
            return e;
          },
          function () {
            r("AdsContextualDiscoveryAdsEligibilityDataLoaderAction").dispatch(
              {},
              {
                line: "35",
                module:
                  "AdsContextualDiscoveryAdsEligibilitySettingDataProviderPlugin.js",
                moduleID: i.id,
              },
            );
          },
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
