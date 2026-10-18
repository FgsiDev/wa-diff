__d(
  "WAWebCoexBusinessRequest",
  [
    "WALogger",
    "WAWebFetchWithAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebUserPrefsMeUser",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      var a,
        i =
          (a = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
            ? void 0
            : a.user;
      if (i == null) return { type: "failed", reason: "no_phone_number" };
      await r("WAWebNetworkStatus").waitIfOffline();
      try {
        var l = await o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(
          function (e) {
            return t({ phoneNumber: i, token: e });
          },
        );
        return { type: "success", value: l };
      } catch (t) {
        return t instanceof
          o("WAWebFetchWithAdAccountToken").FetchAdAccountTokenError
          ? { type: "failed", reason: "token_unavailable" }
          : (o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "sendCoexBusinessRequest: request failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs(n),
            { type: "failed", reason: "request_failed" });
      }
    }
    l.sendCoexBusinessRequest = s;
  },
  98,
);
