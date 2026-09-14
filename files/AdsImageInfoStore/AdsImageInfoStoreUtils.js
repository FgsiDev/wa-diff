__d(
  "AdsImageInfoStoreUtils",
  [
    "AdsAPIAdgroupPaths",
    "AdsChildAttachmentsUtils",
    "AdsImageIDClasses",
    "AdsImageIDUtils",
    "AdsImageInfoStore",
    "FBLogger",
    "getByPath",
    "immutable",
    "isTruthy",
    "mergeDeep",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {
          ((this.getImageAssetFromImageID = function (e) {
            var t,
              n = o("AdsImageIDUtils").getImageHashFromID(e);
            if (r("isTruthy")(n)) return r("immutable").Map({ hash: n });
            var a =
              (t = r("AdsImageInfoStore").getFullSizeURL(e).getValue()) != null
                ? t
                : null;
            return r("isTruthy")(a)
              ? r("immutable").Map({ url: a })
              : (r("FBLogger")("ads_cx").mustfix(
                  "Either hash or URL must be provided for image",
                ),
                null);
          }),
            (this.getImageAssetFromImageIDForCag = function (e) {
              var t = o("AdsImageIDUtils").getImageHashFromID(e);
              if (r("isTruthy")(t)) return { hash: t };
              var n = r("AdsImageInfoStore").getFullSizeURL(e).getValue();
              return r("isTruthy")(n)
                ? { url: n }
                : (r("FBLogger")("ads_cx").mustfix(
                    "Either hash or URL must be provided for image",
                  ),
                  null);
            }),
            (this.getVideoAssetFromVideoIDForCag = function (e) {
              return r("isTruthy")(e)
                ? { video_id: e }
                : (r("FBLogger")("ads_cx").mustfix(
                    "video id must be provided for video",
                  ),
                  null);
            }),
            (this.getFullSizeAdsSimpleImageFromHash = function (e, t) {
              var n = o("AdsImageIDUtils").getImageID({
                accountID: t,
                hash: e,
              });
              return n
                ? r("AdsImageInfoStore").getFullSize(n).getValue()
                : null;
            }));
        }
        var t = e.prototype;
        return (
          (t.generateFullSizeURLAdgroup = function (t) {
            var e = r("mergeDeep")({}, t);
            return o("AdsChildAttachmentsUtils").isStaticCarouselAd(e)
              ? this.$1(e)
              : this.$2(e);
          }),
          (t.getImageHashOrURIFromImageID = function (t) {
            var e;
            return t instanceof o("AdsImageIDClasses").AdsAccountImageID
              ? t.getHash()
              : (e = r("AdsImageInfoStore").getFullSizeURL(t).getValue()) !=
                  null
                ? e
                : "";
          }),
          (t.getFullSizeURLFromImageID = function (t) {
            return r("AdsImageInfoStore").getFullSizeURL(t).getValue();
          }),
          (t.$2 = function (t) {
            return (
              this.$3(t, [
                r("AdsAPIAdgroupPaths").CREATIVE.IMAGE_URL,
                r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                  .PICTURE,
                r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
                  .PICTURE,
              ]),
              t
            );
          }),
          (t.$1 = function (t) {
            var e = this,
              n = o("AdsChildAttachmentsUtils").getChildAttachmentsPathFromSpec(
                t,
              );
            if (n == null) return t;
            var a = r("getByPath")(t, n);
            return (
              a.forEach(function (t) {
                return e.$3(t, [["picture"]]);
              }),
              t
            );
          }),
          (t.$3 = function (t, n) {
            n.some(function (e) {
              var n = r("getByPath")(t, e),
                a = o("AdsImageIDUtils").getImageID({ url: n });
              if (!a) return !1;
              var i = r("AdsImageInfoStore").getFullSizeURL(a),
                l = i.hasValue() ? i.getValueEnforcing() : null;
              return (r("setByPath")(t, e, l), !0);
            });
          }),
          e
        );
      })(),
      s = new e();
    l.default = s;
  },
  98,
);
