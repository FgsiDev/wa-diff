__d(
  "adsUseProductTagsUtils",
  [
    "AdsInteractiveComponentConstants",
    "immutable",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e, t) {
      var n = o("react-compiler-runtime").c(3),
        r;
      return (
        n[0] !== e || n[1] !== t
          ? ((r = m(e, t)), (n[0] = e), (n[1] = t), (n[2] = r))
          : (r = n[2]),
        r
      );
    }
    function c(e) {
      return e.map(function (e) {
        var t,
          n = e.positionSpec,
          a = e.productTagSpec;
        if (n == null) {
          var i;
          return r("immutable").Map(
            ((i = {}),
            (i.type = o(
              "AdsInteractiveComponentConstants",
            ).SHOPPING_PRODUCT_TAG),
            (i.product_tag_spec = a),
            i),
          );
        }
        return r("immutable").Map(
          ((t = {}),
          (t.type = o("AdsInteractiveComponentConstants").SHOPPING_PRODUCT_TAG),
          (t.position_spec = n),
          (t.product_tag_spec = a),
          t),
        );
      });
    }
    function d(e) {
      return e == null
        ? null
        : r("immutable").Map.isMap(e)
          ? e
          : r("immutable").Map(e);
    }
    function m(e, t) {
      return e != null
        ? r("immutable").List.isList(e)
          ? e
          : r("immutable").List(e)
        : t != null && t.size > 0
          ? t
              .filter(function (e) {
                return e.get("product_tag_spec");
              })
              .map(function (e) {
                return {
                  positionSpec: e.getIn(["position_spec"]),
                  productTagSpec: e.getIn(["product_tag_spec"]),
                  isProductTagSelected: !1,
                };
              })
          : r("immutable").List();
    }
    function p(e) {
      var t, n;
      return e.carousel != null
        ? "" +
            ((t = (n = e.carousel) == null ? void 0 : n.index) != null ? t : 0)
        : e.assetKey;
    }
    function _(e) {
      return parseInt(e, 10).toString() === e;
    }
    function f(e) {
      return _(e) ? parseInt(e, 10) : null;
    }
    function g(e) {
      var t = e.hasEligibleCatalogs,
        n = e.igShoppingEnabledAccount,
        r = e.isNotDynamicAd,
        o = e.isShoplessIGAccountWithStaticProductTagsEnabled,
        a = e.isShoppingEnabledObjective;
      return r && a && (n || o) && t;
    }
    ((l.useProductTags = u),
      (l.buildInteractiveComponentsSpec = c),
      (l.normalizeChangeSet = d),
      (l.getProductTags = m),
      (l.getAssetKey = p),
      (l.getAssetCarouselIndex = f),
      (l.isProductTagToolAvailable = g));
  },
  98,
);
