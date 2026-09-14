__d(
  "AdsAppFluxUtils",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ":";
    function s(t, n) {
      return t + e + n;
    }
    function u(t) {
      var n = t.split(e);
      return n.length === 2
        ? { accountID: n[0], appID: n[1] }
        : (r("FBLogger")("ads").mustfix("Invalid app flux key: %s", t), null);
    }
    ((l.getFluxKey = s), (l.parseKey = u));
  },
  98,
);
