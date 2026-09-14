__d(
  "AdsMessengerExistingPostPageWelcomeMessageDataManager",
  [
    "AsyncTypedRequest",
    "Promise",
    "XMessengerAdsExistingPostPageWelcomeMessageControllerRouteBuilder",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {}
        var o = t.prototype;
        return (
          (o.getPageWelcomeMessage = function (o) {
            var t = r(
              "XMessengerAdsExistingPostPageWelcomeMessageControllerRouteBuilder",
            ).buildUri({ post_id: o });
            return new (e || (e = n("Promise")))(function (e, n) {
              new (r("AsyncTypedRequest"))()
                .setURI(t)
                .setHandler(function (t) {
                  var o = t.payload;
                  o.error ? n(r("err")(o.error)) : e(o.page_welcome_message);
                })
                .setErrorHandler(function (e) {
                  n(e);
                })
                .send();
            });
          }),
          t
        );
      })(),
      u = new s();
    l.default = u;
  },
  98,
);
