__d(
  "AdsGeoTransitionShimmerConfig",
  ["gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "transition_infra",
      s = "transition_infra+ux";
    function u(t) {
      return t === e ? e : t === s ? s : null;
    }
    function c() {
      return r("gkx")("11277") ? u(r("qex")._("2925")) : null;
    }
    function d() {
      return c() === s;
    }
    function m() {
      var t = c();
      return t == null ? null : t === e;
    }
    var p = { getArm: c, getTransitionsOverride: m, isEnabled: d };
    l.default = p;
  },
  98,
);
