__d(
  "AdsMetadataAppInfoDefaultOnUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = e ? "OPT_IN" : "OPT_OUT";
      return {
        enrollStatus: e ? "OPT_IN" : "OPT_OUT",
        enrollActionType: t,
        media: { enrollStatus: n, enrollActionType: t },
        appInformation: { enrollStatus: n, enrollActionType: t },
        ratingsAndReviews: { enrollStatus: n, enrollActionType: t },
      };
    }
    function l(t, n) {
      var r = n.isEligibleForAppInfo,
        o = n.isFastTrackBackfillEligible,
        a = n.passesDefaultOnGK,
        i = n.persistedActionType,
        l = n.stickyValue;
      if (i === "MANUAL" || i === "STICKY") return t;
      if (
        (t == null ? void 0 : t.enrollStatus) == null &&
        (t == null ? void 0 : t.enrollActionType) == null
      ) {
        if (!r) return t;
        if (l === !1) return e(!1, "STICKY");
        if (a || o) return e(!0, "DEFAULT");
        if (l === !0) return e(!0, "STICKY");
      }
      return t;
    }
    i.getAppInfoSpecWithDefaultOn = l;
  },
  66,
);
