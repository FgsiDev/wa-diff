__d(
  "AdsCatalogSelectorOptimisationUtils",
  ["AdsPCAUnificationUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === !0 ? u(!0) : u();
    }
    function s(e) {
      return (
        ((e === !0 &&
          o("AdsPCAUnificationUtils").AdsIsPcaUnificationWs1BetaGKEnabled()) ||
          !(
            o("AdsPCAUnificationUtils").AdsIsPcaUnificationWs1GKEnabled() ||
            o("AdsPCAUnificationUtils").AdsIsPcaUnificationWs1BetaGKEnabled()
          )) &&
        u()
      );
    }
    function u(e) {
      return e === !0
        ? r("gkx")("3181") || r("gkx")("9140")
        : r("gkx")("3185") || r("gkx")("9277");
    }
    ((l.isCatalogPreloadOptimisationEnabled = e),
      (l.isCatalogProductSetActionOptimisationEnabled = s));
  },
  98,
);
