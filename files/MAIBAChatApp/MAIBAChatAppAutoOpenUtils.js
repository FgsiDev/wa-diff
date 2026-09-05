__d(
  "MAIBAChatAppAutoOpenUtils",
  ["AdsAIUtils", "ExecutionEnvironment", "getMAIBAPageAdAccountID", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "maiba_chat_autoopen",
      u = "business_help_center_article";
    function c(t) {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var n = new URL(window.location.href),
          a = new URLSearchParams(n.search),
          i = a.get(s);
        if (i !== u) return t;
        var l = r("gkx")("5852");
        if (!l) return t;
        a.delete(s);
        var c = a.toString(),
          d = n.pathname + (c === "" ? "" : "?" + c) + n.hash;
        return (
          window.history.replaceState(window.history.state, document.title, d),
          o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
            "MAIBAChatAppAutoOpenUtils:business_help_center_article",
            !1,
            "Business Help Center",
          )
            ? babelHelpers.extends({}, t, {
                entrypoint: "BUSINESS_HELP_CENTER_ARTICLE_LOGIN_RETURN",
                isMAIBAChatAppOpen: !0,
                selectedChatState: {
                  linkedAdAccountId: r("getMAIBAPageAdAccountID")(),
                },
              })
            : t
        );
      }
      return t;
    }
    l.applyMAIBAChatAppAutoOpenURLOverride = c;
  },
  98,
);
