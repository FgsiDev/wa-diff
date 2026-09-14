__d(
  "adsSignalsConversionTypeaheadSelectedPixelIDSelector",
  [
    "AdsWebsiteOptimizationUtil",
    "SignalsConversionTypeaheadStateDataProvider",
    "adsCreateSelector",
    "adsSignalsConversionTypeaheadDefaultPixelIDSelector",
    "adsSignalsWebsitePromotedObjectEventNameIDToPixelIDSelector",
    "adsSignalsWebsitePromotedObjectSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("SignalsConversionTypeaheadStateDataProvider").toFluxSelector(),
      s = r("adsCreateSelector")(
        [
          r("adsSignalsWebsitePromotedObjectSelector"),
          e,
          r("adsSignalsConversionTypeaheadDefaultPixelIDSelector"),
          r("adsSignalsWebsitePromotedObjectEventNameIDToPixelIDSelector"),
        ],
        function (t, n, r, a) {
          var e = t.isUniformValue,
            i = t.websitePromotedObject;
          return o(
            "AdsWebsiteOptimizationUtil",
          ).getSignalsConversionTypeaheadSelectedPixelID(i, e, n, r, a);
        },
        {
          name: i.id + ".adsSignalsConversionTypeaheadSelectedPixelIDSelector",
        },
      ),
      u = s;
    l.default = u;
  },
  98,
);
