__d(
  "AdsDCOPreviewTokenDataLoader",
  [
    "AsyncTypedRequest",
    "XDCOAdPreviewTokenControllerRouteBuilder",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("XDCOAdPreviewTokenControllerRouteBuilder").buildUri({
              adgroup_id: e,
            }),
            n = yield new (r("AsyncTypedRequest"))(t).promisePayload(),
            o = n.dco_ad_token;
          return o;
        })),
        s.apply(this, arguments)
      );
    }
    l.loadDCOAdTokenForPreview = e;
  },
  98,
);
