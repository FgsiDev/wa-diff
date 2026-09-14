__d(
  "AdsCreativeFlexWHMediaUtils",
  [
    "AdsCreativeFlexAssetUtils",
    "AdsCreativeFlexConstants",
    "AdsCreativeFlexSpecCheckUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o(
          "AdsCreativeFlexAssetUtils",
        ).getCreativeFlexImageAndVideoFromMSS(e),
        n = t.mssImageSpecs,
        r = t.mssVideoSpecs,
        a =
          n.some(function (e) {
            return (
              e.creation_source !== "WEBSITE_MEDIA" &&
              e.creation_source !== "VIDEO_THUMBNAIL"
            );
          }) || r.length > 0,
        i = o("AdsCreativeFlexSpecCheckUtils").getAllOptInRelatedMediaSpecs(e),
        l = i.cagImageSpecs,
        s = i.cagVideoSpecs;
      return l.length > 0 || s.length > 0 || a;
    }
    function s() {
      return !0;
    }
    function u(e, t) {
      if (t == null || t.size === 0) return e;
      var n = new Set(
          e.map(function (e) {
            return e.id;
          }),
        ),
        r = [];
      return (
        t.forEach(function (e, t) {
          n.has(t) || r.push(e);
        }),
        []
          .concat(e, r)
          .slice(0, o("AdsCreativeFlexConstants").RELATED_MEDIA_DEFAULT_COUNT)
      );
    }
    ((l.hasNonWHSpec = e),
      (l.isEagerPathWHDownloadEnabled = s),
      (l.mergeRecommendedWithCachedWH = u));
  },
  98,
);
