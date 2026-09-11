__d(
  "adsObserveRuntimeType",
  [
    "AdsStaticTypingObservationFalcoEvent",
    "adsDescribeRuntimeType",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 50,
      s = new Set(),
      u = 0;
    function c() {
      try {
        return r("justknobx")._("5848");
      } catch (e) {
        return 0;
      }
    }
    function d(t, n, a) {
      try {
        if (!r("gkx")("26833") || u >= e) return;
        var i = c();
        if (i <= 0 || Math.random() * i >= 1) return;
        u++;
        var l = o("adsDescribeRuntimeType").adsDescribeRuntimeType(a),
          d = JSON.stringify([t, n, l]);
        if (s.has(d)) return;
        var m = {
          declared_type: n,
          is_truncated:
            l.includes(o("adsDescribeRuntimeType").TRUNCATION_MARKER) ||
            l.includes(o("adsDescribeRuntimeType").UNREADABLE),
          observation_site: t,
          observed_type: l,
          sample_rate: String(i),
        };
        (r("AdsStaticTypingObservationFalcoEvent").log(function () {
          return m;
        }),
          s.add(d));
      } catch (e) {}
    }
    function m() {
      (s.clear(), (u = 0));
    }
    ((l.adsObserveRuntimeType = d), (l.adsResetRuntimeTypeObserverForTest = m));
  },
  98,
);
