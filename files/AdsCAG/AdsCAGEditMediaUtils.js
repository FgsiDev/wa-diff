__d(
  "AdsCAGEditMediaUtils",
  [
    "AdImageSpecCropKeys",
    "AdImageSpecs",
    "AdImageSpecsUtils",
    "AdImageTallFBSpecs",
    "AdsImageLegacy",
    "filterNulls",
    "objectValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      AUDIENCE_NETWORK_MOBILE_EXTERNAL_NO_CROP:
        r("AdImageTallFBSpecs").AUDIENCE_NETWORK_MOBILE_EXTERNAL_NO_CROP,
      AUDIENCE_NETWORK_MOBILE_EXTERNAL_CROP:
        r("AdImageSpecs").AUDIENCE_NETWORK_MOBILE_EXTERNAL_CROP,
      AUDIENCE_NETWORK_MOBILE_EXTERNAL_SQUARE:
        r("AdImageTallFBSpecs").AUDIENCE_NETWORK_MOBILE_EXTERNAL_SQUARE,
      AUDIENCE_NETWORK_MOBILE_EXTERNAL:
        r("AdImageSpecs").AUDIENCE_NETWORK_MOBILE_EXTERNAL,
    };
    function s() {
      return r("objectValues")(e);
    }
    function u(e) {
      return e.cropKey === r("AdImageSpecCropKeys").NO_CROP
        ? ""
        : e.displayRatio;
    }
    function c() {
      return r("filterNulls")(
        s().map(function (e) {
          var t = o("AdImageSpecsUtils").getLabelForImageSpec(e, !1),
            n = e.cropKey,
            r = u(e);
          return { adImageSpec: e, optionKey: n, title: t, subTitle: r };
        }),
      );
    }
    function d(e, t) {
      return new (r("AdsImageLegacy"))(
        babelHelpers.extends({}, e, { crops: t }),
      );
    }
    function m(e) {
      return e && Object.keys(e).length === 1
        ? Object.keys(e)[0]
        : r("AdImageSpecCropKeys").NO_CROP;
    }
    function p(e) {
      return s().find(function (t) {
        return t.cropKey === e;
      });
    }
    ((l.getAllImageSpecs = s),
      (l.getCropAspectRatioOptions = c),
      (l.getAdsImageLegacy = d),
      (l.getCropsKey = m),
      (l.getAdImageSpecUsingCropsKey = p));
  },
  98,
);
