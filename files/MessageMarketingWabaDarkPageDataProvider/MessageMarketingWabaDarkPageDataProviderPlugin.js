__d(
  "MessageMarketingWabaDarkPageDataProviderPlugin",
  [
    "AsyncTypedRequest",
    "Promise",
    "SignalsLaminarHelpers",
    "XMessageMarketingDarkPageLoaderControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var o = r(
        "XMessageMarketingDarkPageLoaderControllerRouteBuilder",
      ).buildUri({ whatsapp_number_id: t });
      return new (e || (e = n("Promise")))(function (e, t) {
        new (r("AsyncTypedRequest"))(o)
          .setPayloadHandler(function (t) {
            var n = t.dark_page_id;
            return e(n != null ? String(n) : null);
          })
          .setErrorHandler(function (e) {
            return t(e);
          })
          .setMethod("POST")
          .setReadOnly(!1)
          .send();
      });
    }
    var u = {
        initialState: o("SignalsLaminarHelpers").createLoadObjectMap(
          s,
          function (e) {
            return e;
          },
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
