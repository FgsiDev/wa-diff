__d(
  "AdsCanUseDynamicAdsValueOptimizationSelector",
  ["adsAccountHasCapabilitySelector", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsAccountHasCapabilitySelector")(
            "CAN_USE_DYNAMIC_ADS_VALUE_OPTIMIZATION",
          ),
        ],
        function (t) {
          var e;
          return (e = t.getValue()) != null ? e : !1;
        },
        { name: i.id + ".AdsCanUseDynamicAdsValueOptimizationSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
