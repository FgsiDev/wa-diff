__d(
  "AdsInstreamVideoLengthUtil",
  [
    "AdsAdgroupSpecUtils",
    "AdsAdgroupTypeUtils",
    "AdsVideoConstraintsUtils",
    "isFalsey",
    "isValidID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        t === void 0 && (t = !1),
        !(
          (e >=
            o(
              "AdsVideoConstraintsUtils",
            ).getInstreamVideoDRLongMaxDurationInSec() &&
            t !== !0) ||
          e < 5
        )
      );
    }
    function s(e) {
      var t = e.adgroupSpec,
        n = e.pagePostDetails;
      if (!t.creative && !n) return null;
      if (
        o("AdsAdgroupTypeUtils").isVideoAd(t) ||
        o("AdsAdgroupTypeUtils").isAutomaticFormatAd(t)
      ) {
        var a,
          i = null;
        if (
          ((i =
            t == null ||
            (a = t.creative) == null ||
            (a = a.object_story_spec) == null ||
            (a = a.video_data) == null
              ? void 0
              : a.video_id),
          r("isFalsey")(i) || !r("isValidID")(i))
        ) {
          var l;
          if (
            (l = t.creative) != null &&
            (l = l.asset_feed_spec) != null &&
            l.videos
          ) {
            var s = t.creative.asset_feed_spec.videos;
            if (!s || !s.length) return null;
            var u = t.creative.asset_feed_spec.asset_customization_rules;
            if (!u || !u.length || !u[0].video_label) return null;
            var c = u[0].video_label.name,
              d = u
                .filter(function (e) {
                  var t;
                  return (t = e.customization_spec) == null ||
                    (t = t.facebook_positions) == null
                    ? void 0
                    : t.includes("instream_video");
                })
                .map(function (e) {
                  var t;
                  return (t = e.video_label) == null ? void 0 : t.name;
                });
            d && d.length && (c = d[0]);
            var m = s.filter(function (e) {
                var t;
                return (t = e.adlabels) == null ? void 0 : t.length;
              }),
              p = m.filter(function (e) {
                var t;
                return (
                  Number(
                    (t = e.adlabels) == null
                      ? void 0
                      : t.filter(function (e) {
                          return e.name === c;
                        }).length,
                  ) > 0
                );
              });
            p && p.length && (i = p[0].video_id);
          }
        }
        if (r("isFalsey")(i) || !r("isValidID")(i)) {
          var _ = o("AdsAdgroupSpecUtils").getPagePostID(t);
          if (_ != null && n && n[_]) {
            var f;
            i =
              (f = n[_]) == null ||
              (f = f.attachments) == null ||
              (f = f.data[0]) == null ||
              (f = f.target) == null
                ? void 0
                : f.id;
          }
        }
        return r("isFalsey")(i) || !r("isValidID")(i) ? null : i;
      }
      return null;
    }
    ((l.isEligibleInstreamAdsLength = e), (l.getInstreamVideoID = s));
  },
  98,
);
