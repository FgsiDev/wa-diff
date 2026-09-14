__d(
  "VideoAsyncLoggerHelper",
  ["SubscriptionsHandler"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o,
        a = new (r("SubscriptionsHandler"))(),
        i = !1,
        l = function () {
          (i || (e(), (i = !0)),
            o && (clearTimeout(o), (o = null)),
            a.release());
        };
      ((o = setTimeout(l, 0)),
        t.forEach(function (e) {
          a.addSubscriptions(n.addListener(e, l));
        }));
    }
    l.operateAsync = e;
  },
  98,
);
