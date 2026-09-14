__d(
  "AdsAutoFixTargetingDataLoader",
  [
    "AsyncRequest",
    "Promise",
    "ThisControllerNoLongerExists",
    "XAdsTargetingAutoFixStatusAsyncControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var o = r(
          "XAdsTargetingAutoFixStatusAsyncControllerRouteBuilder",
        ).buildUri({ adset_id: t });
        new (r("AsyncRequest"))()
          .setAllowCrossOrigin(!0)
          .setURI(o)
          .setHandler(e)
          .setErrorHandler(n)
          .send();
      });
    }
    function u(t, a, i) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var l = o("ThisControllerNoLongerExists").__DEADURI__("7dy38ug9s");
        new (r("AsyncRequest"))()
          .setMethod("POST")
          .setData({ adset_id: t, banner_type: a, status: i })
          .setURI(l)
          .setHandler(e)
          .setErrorHandler(n)
          .send();
      });
    }
    ((l.fetchAutoFixStatus = s), (l.updateBannerStatus = u));
  },
  98,
);
