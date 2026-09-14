__d(
  "AdAccountCatalogProviderUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      (t === void 0 && (t = !1), n === void 0 && (n = !1));
      var r = l(e, t, n);
      return r;
    }
    function l(e, t, n) {
      return (
        t === void 0 && (t = !1),
        n === void 0 && (n = !1),
        e === "PRODUCT_EXTENSIONS" && (t === !0 || n === !0)
      );
    }
    i.getIsAllProductsProductSetOnlyWithLogging = e;
  },
  66,
);
