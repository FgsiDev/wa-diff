__d(
  "adsPACgetExistingLabelForValue",
  [
    "AdsAssetFeedConstant",
    "AdsPlacementAssetUtils",
    "FBLogger",
    "getErrorSafe",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Map();
    function s(t) {
      return t.reduce(function (e, t, n) {
        return t == null || n === o("AdsAssetFeedConstant").ADLABELS
          ? e
          : e.set(n, t);
      }, e);
    }
    function u(e, t) {
      return r("immutable").is(s(e), s(t));
    }
    function c(e, t, n) {
      var a,
        i = r("immutable").fromJS(n),
        l =
          (a = e.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a[t],
        s = null;
      try {
        s =
          l == null
            ? void 0
            : l.find(function (e) {
                return u(e, i);
              });
      } catch (e) {
        return (
          r("FBLogger")("adsPACgetExistingLabelForValue")
            .catching(r("getErrorSafe")(e))
            .warn(
              "finding existing value from assetList encounter error, field: %s",
              t,
            ),
          null
        );
      }
      return o("AdsPlacementAssetUtils").getFirstAdLabel(s);
    }
    l.default = c;
  },
  98,
);
