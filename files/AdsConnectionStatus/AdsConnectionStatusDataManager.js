__d(
  "AdsConnectionStatusDataManager",
  [
    "errorCode",
    "fbt",
    "AdsConnectionStatusGraphErrorAction",
    "AdsConnectionStatusGraphSuccessAction",
    "ApiClient",
    "CurrentUser",
    "URI",
    "UrlMap",
    "err",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = 1e4;
    function d() {
      var t = new (e || (e = r("URI")))(o("UrlMap").resolve("graph"))
          .setPath("/me")
          .setQueryData({
            _checking_connection: !0,
            access_token: r("ApiClient").getAccessToken(),
            fields: "id",
            suppress_http_code: 1,
          })
          .toString(),
        n = new XMLHttpRequest();
      (r("ApiClient").getWithCredentials() && (n.withCredentials = !0),
        n.open("GET", t, !0),
        n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
        (n.timeout = c),
        (n.ontimeout = function () {
          var e = r("err")(String(u._(/*BTDS*/ "Request timed out")));
          ((e.error_subcode = 1792053),
            r("AdsConnectionStatusGraphErrorAction").dispatch(
              { error: e },
              {
                line: "64",
                module: "AdsConnectionStatusDataManager.js",
                moduleID: i.id,
              },
            ));
        }),
        (n.onerror = function () {
          var e = r("err")(
            String(u._(/*BTDS*/ "Invalid response returned from server")),
          );
          ((e.error_subcode = 1792087),
            r("AdsConnectionStatusGraphErrorAction").dispatch(
              { error: e },
              {
                line: "77",
                module: "AdsConnectionStatusDataManager.js",
                moduleID: i.id,
              },
            ));
        }),
        (n.onload = function () {
          var e, t;
          try {
            e = JSON.parse(n.responseText);
          } catch (e) {}
          if (!e || !e.id) {
            ((t = r("err")(
              String(
                u._(
                  /*BTDS*/ "Invalid response returned from server: {response}",
                  [u._param("response", n.responseText)],
                ),
              ),
            )),
              (t.error_subcode = 1792054),
              r("AdsConnectionStatusGraphErrorAction").dispatch(
                { error: t },
                {
                  line: "100",
                  module: "AdsConnectionStatusDataManager.js",
                  moduleID: i.id,
                },
              ));
            return;
          }
          if (e.id !== r("CurrentUser").getAccountID()) {
            ((t = r("err")(
              String(
                u._(
                  /*BTDS*/ "It looks like you've switched user. Please refresh the page.",
                ),
              ),
            )),
              (t.error_subcode = 1792055),
              r("AdsConnectionStatusGraphErrorAction").dispatch(
                { error: t },
                {
                  line: "119",
                  module: "AdsConnectionStatusDataManager.js",
                  moduleID: i.id,
                },
              ));
            return;
          }
          r("AdsConnectionStatusGraphSuccessAction").dispatch(
            {},
            {
              line: "125",
              module: "AdsConnectionStatusDataManager.js",
              moduleID: i.id,
            },
          );
        }),
        n.send());
    }
    l.check = d;
  },
  226,
);
