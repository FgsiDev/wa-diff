__d(
  "WAWebVoipBackgroundWarmConditions",
  [
    "Promise",
    "WAWebBackendEventBus",
    "WAWebNetworkType",
    "WAWebPonyfillsIdleCallback",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3e4,
      u = new Set(["2g", "slow-2g"]);
    function c() {
      return o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd
        ? (e || (e = n("Promise"))).resolve()
        : new (e || (e = n("Promise")))(function (e) {
            o("WAWebBackendEventBus").BackendEventBus.onceOfflineDeliveryEnd(
              function () {
                return e();
              },
            );
          });
    }
    function d(e) {
      return Date.now() - e <= s;
    }
    function m(t) {
      return new (e || (e = n("Promise")))(function (e) {
        var n = null,
          r =
            t == null
              ? null
              : self.setTimeout(function () {
                  (n != null &&
                    o("WAWebPonyfillsIdleCallback").cancelIdleCallback(n),
                    e());
                }, t);
        n = o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          (r != null && self.clearTimeout(r), e());
        });
      });
    }
    function p() {
      var e,
        t = navigator;
      return (
        ((e = t.connection) == null ? void 0 : e.saveData) === !0 ||
        u.has(o("WAWebNetworkType").getEffectiveNetworkType())
      );
    }
    ((l.waitForCurrentOfflineDeliveryEnd = c),
      (l.didFireOnTime = d),
      (l.waitForIdleCallback = m),
      (l.isConstrainedNetwork = p));
  },
  98,
);
