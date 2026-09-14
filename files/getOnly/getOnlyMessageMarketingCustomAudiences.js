__d(
  "getOnlyMessageMarketingCustomAudiences",
  ["AdsAudienceMode", "getCustomAudiences", "isMessageMarketingCustomAudience"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return (
        t === void 0 && (t = r("AdsAudienceMode").INCLUDE),
        (n = o("getCustomAudiences").getCustomAudiences(e, t)) == null
          ? void 0
          : n.filter(function (e) {
              return r("isMessageMarketingCustomAudience")(e);
            })
      );
    }
    l.getOnlyMessageMarketingCustomAudiences = e;
  },
  98,
);
