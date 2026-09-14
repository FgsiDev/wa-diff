__d(
  "AdImageSpecsUtilsV2",
  [
    "AdImageSpecs",
    "AdImageSpecsUtils",
    "AdImageTallFBSpecs",
    "AdsEmptyValue",
    "AdsPlacementAPISpecReaderUtils",
    "AdsUniformValue",
    "ApiAdObjectTypes",
    "adsGetCreativeTypeByCreativeFields",
    "objectKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsGetCreativeTypeByCreativeFields")(
      r("ApiAdObjectTypes").SHARE,
    );
    function s(e, t) {
      var n = [],
        a = o("AdImageSpecsUtils").getAllImageSpecs();
      r("objectKeys")(a).forEach(function (t) {
        var r = a[t].supportedTypes || [];
        r.indexOf(e) >= 0 && n.push(a[t]);
      });
      var i = t;
      return i
        ? n.filter(function (e) {
            return i.every(function (t) {
              return o(
                "AdsPlacementAPISpecReaderUtils",
              ).isPageTypeSupportedByPlacement(e.placement, t);
            });
          })
        : n;
    }
    function u(e, t) {
      return e && t
        ? [r("AdImageSpecs").PAGE_POST_MULTI_PRODUCT]
        : e
          ? [
              r("AdImageSpecs").PAGE_POST_DESKTOP_FEED,
              r("AdImageTallFBSpecs").PAGE_POST_DESKTOP_FEED_SQUARE,
              r("AdImageTallFBSpecs").PAGE_POST_DESKTOP_FEED_NO_CROP,
            ]
          : [];
    }
    function c(e, t) {
      if (
        !(e instanceof r("AdsEmptyValue")) &&
        e instanceof r("AdsUniformValue")
      ) {
        var n = r("adsGetCreativeTypeByCreativeFields")(e.getValue());
        return m(n, t);
      }
      return [];
    }
    function d(t, n) {
      var a = [],
        i = o("AdImageSpecsUtils").getAllImageSpecs();
      r("objectKeys")(i).forEach(function (t) {
        var n = i[t].supportedTypes || [];
        n.indexOf(e) >= 0 && a.push(i[t]);
      });
      var l = n;
      return t && l
        ? a.filter(function (e) {
            return o(
              "AdsPlacementAPISpecReaderUtils",
            ).isPageTypeSupportedByAssetCustomizationPlacement(
              e.placement,
              t,
              l,
            );
          })
        : a;
    }
    function m(e, t) {
      var n = s(e, t);
      return o("AdImageSpecsUtils").getUniqueCropImageSpecs(n);
    }
    ((l.getImageSpecsForAdTypeV2 = s),
      (l.getCropImageSpecsForDCO = u),
      (l.getCropImageSpecsForBulkObjectTypeV2 = c),
      (l.getImageSpecsForAssetCustomizationPlacement = d),
      (l.getCropImageSpecsForAdTypeV2 = m));
  },
  98,
);
