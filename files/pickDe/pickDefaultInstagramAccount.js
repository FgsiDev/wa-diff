__d(
  "pickDefaultInstagramAccount",
  [
    "AdsInstagramAccountLinkedPageProvider",
    "getByPath",
    "igAccessAdsManagerUtils",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null)
        return {
          id: void 0,
          id_v2: void 0,
          hasConnectedInstagramAccount: !1,
          threads_user_id: void 0,
        };
      var t = r("getByPath")(e, ["instagram_accounts", "data", "0", "id"]),
        n = r("getByPath")(e, ["instagram_accounts", "data", "0", "id_v2"]),
        a = r("getByPath")(e, [
          "instagram_accounts",
          "data",
          "0",
          "threads_user_id",
        ]),
        i = r("getByPath")(e, [
          "page_backed_instagram_accounts",
          "data",
          "0",
          "id",
        ]),
        l = r("getByPath")(e, [
          "page_backed_instagram_accounts",
          "data",
          "0",
          "id_v2",
        ]),
        s = r("getByPath")(e, [
          "page_backed_threads_accounts",
          "data",
          "threads_user_id",
        ]),
        u =
          r("AdsInstagramAccountLinkedPageProvider")().get().getValue() !=
            null && o("igAccessAdsManagerUtils").isIGAccessParityEnabled(),
        c = r("getByPath")(e, ["instagram_business_account", "id"]),
        d = t || i,
        m = n || l;
      !d && u && (d = c);
      var p = r("isTruthy")(t);
      return {
        id: d,
        id_v2: m,
        hasConnectedInstagramAccount: p,
        threads_user_id: p ? a : s,
      };
    }
    l.default = e;
  },
  98,
);
