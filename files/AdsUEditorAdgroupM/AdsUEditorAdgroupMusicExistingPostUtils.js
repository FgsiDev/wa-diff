__d(
  "AdsUEditorAdgroupMusicExistingPostUtils",
  ["AdsAutomaticFlowUtils", "getByPath", "gkx", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      return !!(
        (s(e, t, !0) &&
          o("AdsAutomaticFlowUtils").isEligibleForAPlusCUseExistingPost(
            n,
            r,
            e,
          )) ||
        s(e, t, !1)
      );
    }
    function s(e, t, n) {
      return e == null ? !1 : r("isTruthy")(t) ? d(e) : c(e, n);
    }
    function u(e, t) {
      var n;
      return (n = r("getByPath")(
        e,
        t ? ["type"] : ["attachments", "data", "0", "type"],
        "",
      )) != null
        ? n
        : "";
    }
    function c(e, t) {
      if (e == null) return !1;
      var n = u(e, !1);
      return t
        ? n === "share" ||
            ((n === "album" || n === "photo") && r("gkx")("12519"))
        : n === "photo";
    }
    function d(e) {
      if (e == null) return !1;
      var t = u(e, !0);
      return t === "photo";
    }
    ((l.isEligiblePostForMusic = e),
      (l.isSupportedPostForMusic = s),
      (l.getByPathForFBIGPost = u));
  },
  98,
);
