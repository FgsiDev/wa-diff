__d(
  "AdsInlineConversionUtils",
  [
    "AdsApplicationUtils",
    "AdsMessagingGeoConversionSitevarConfig.experimental",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ACTIVE_FEEDBACK", "ACTIVE_FEEDBACK_SUCCESS_MESSAGE"],
      s = {
        WARNING: "warning",
        ERROR: "error",
        ACTIVE_FEEDBACK: "info",
        ACTIVE_FEEDBACK_SUCCESS_MESSAGE: "info",
        HELP: "info",
        LEGAL_AND_POLICY: "policy-violation",
        NEW_PRODUCT: "info",
        RECOMMENDATION_BEST_PRACTICE: "info",
        RECOMMENDATION_PERSONALIZED: "info",
        RELEASE_NOTE: "info",
      },
      u = function (t) {
        if (t == null) return !0;
        for (var e of t)
          if (
            e.type !== "HELPTRAY_TEXT" &&
            e.type !== "PARAGRAPH" &&
            e.type !== "SECTION_TITLE"
          )
            return !1;
        return !0;
      },
      c = function (n) {
        var t = n.category,
          a = n.header,
          i = n.messageID,
          l = n.textData;
        return (
          !r(
            "AdsMessagingGeoConversionSitevarConfig.experimental",
          ).blocklist.includes(i) &&
          o("AdsApplicationUtils").isPowerEditor() &&
          e.includes(t) &&
          u(l) &&
          (a != null || l != null)
        );
      },
      d = function (t) {
        return s[t];
      },
      m = function (t) {
        return t == null
          ? void 0
          : t.filter(function (e) {
              var t = e.type;
              return t === "LEARN_MORE" || t === "LINK";
            });
      },
      p = function (t) {
        var e,
          n = m(t);
        if (n == null || n.length === 0) return null;
        var r = n[0],
          o =
            (e =
              t == null
                ? void 0
                : t.findIndex(function (e) {
                    return e === r;
                  })) != null
              ? e
              : 0;
        return { firstEligibleCTA: r, firstEligibleCTAIndex: o };
      };
    ((l.shouldShowMessageInGeoNotice = c),
      (l.getGeoNoticeStatusFromCategory = d),
      (l.getEligibleCTAData = p));
  },
  98,
);
