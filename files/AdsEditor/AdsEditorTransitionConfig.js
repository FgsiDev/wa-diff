__d(
  "AdsEditorTransitionConfig",
  ["AdsGeoTransitionShimmerConfig", "AdsInterfacesRouter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1,
      s = "";
    function u() {
      var t = window.location.pathname;
      if (t === s) return e;
      var n;
      try {
        n =
          r("AdsInterfacesRouter").getOrNull == null
            ? void 0
            : r("AdsInterfacesRouter").getOrNull();
      } catch (t) {
        return e;
      }
      if (n == null) return e;
      s = t;
      var o = n.getGivenName();
      if (
        o === "ads_edit_standalone" ||
        o === "adsets_edit_standalone" ||
        o === "campaigns_edit_standalone"
      ) {
        var a = r("AdsGeoTransitionShimmerConfig").getTransitionsOverride();
        e = a != null ? a : !1;
      } else e = !1;
      return e;
    }
    var c = { shouldUseTransitions: u };
    l.default = c;
  },
  98,
);
