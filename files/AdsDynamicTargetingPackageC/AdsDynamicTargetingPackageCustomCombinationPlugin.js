__d(
  "AdsDynamicTargetingPackageCustomCombinationPlugin",
  [
    "fbt",
    "AdsAudienceBehaviorUtils",
    "AdsAudienceBehaviorWarnings",
    "AdsDynamicTargetingCategories",
    "AdsProductSetCreationSources",
    "AdsUniformValue",
    "CometPlaceholder.react",
    "DATargetingConsolidationUtils",
    "GeoBaseFormInputLayout.react",
    "GeoNotice.react",
    "GeoSpinner.react",
    "JSResource",
    "geoMargin",
    "getByPath",
    "lazyLoadComponent",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = r("lazyLoadComponent")(
        r("JSResource")("AdsDynamicTargetingCard.react").__setRef(
          "AdsDynamicTargetingPackageCustomCombinationPlugin",
        ),
      ),
      d = r("lazyLoadComponent")(
        r("JSResource")("AdsUEditorCampaignProductSetContainer.react").__setRef(
          "AdsDynamicTargetingPackageCustomCombinationPlugin",
        ),
      ),
      m = r("lazyLoadComponent")(
        r("JSResource")("AdsProductAudienceSection.react").__setRef(
          "AdsDynamicTargetingPackageCustomCombinationPlugin",
        ),
      );
    function p(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.onProductAudienceFieldsChange,
        a = e.onProductSetChange,
        i = e.productAudienceSpecs,
        l = e.productCatalogID;
      if (
        i.length !== 1 ||
        !o("AdsAudienceBehaviorUtils").isAudienceSpecEditableInUI(i[0])
      ) {
        var c;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = u.jsx(r("GeoNotice.react"), {
                "data-testid": void 0,
                status: "info",
                xstyle: r("geoMargin").top8,
                children: o(
                  "AdsAudienceBehaviorWarnings",
                ).getUnsupportedAudienceSpecWarning(),
              })),
              (t[0] = c))
            : (c = t[0]),
          c
        );
      }
      var p;
      t[1] !== i[0]
        ? ((p = new (r("AdsUniformValue"))(
            r("getByPath")(i[0], ["product_set_id"]),
          )),
          (t[1] = i[0]),
          (t[2] = p))
        : (p = t[2]);
      var _ = p,
        f;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Interacted with products from:")), (t[3] = f))
        : (f = t[3]);
      var g;
      t[4] !== a || t[5] !== l || t[6] !== _
        ? ((g = u.jsx(r("GeoBaseFormInputLayout.react"), {
            label: f,
            xstyle: r("geoMargin").vert12,
            children: function () {
              return u.jsx(d, {
                forceHideInstagramNotice: !0,
                isEnabled: new (r("AdsUniformValue"))(!0),
                onProductSetChange: a,
                productCatalogID: l,
                renderingSurface: "canvas_builder",
                selectedProductSetID: _,
                sourceSpec: r("AdsProductSetCreationSources")
                  .PRODUCT_AUDIENCE_SPECS,
              });
            },
          })),
          (t[4] = a),
          (t[5] = l),
          (t[6] = _),
          (t[7] = g))
        : (g = t[7]);
      var h;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsx("div", { className: "xso031l x1q0q8m5 x3ckiwt" })),
          (t[8] = h))
        : (h = t[8]);
      var y;
      t[9] !== n || t[10] !== i[0]
        ? ((y = u.jsx(m, { onChange: n, productAudienceSpec: i[0] })),
          (t[9] = n),
          (t[10] = i[0]),
          (t[11] = y))
        : (y = t[11]);
      var C;
      return (
        t[12] !== g || t[13] !== y
          ? ((C = u.jsxs("div", { children: [g, h, y] })),
            (t[12] = g),
            (t[13] = y),
            (t[14] = C))
          : (C = t[14]),
        C
      );
    }
    var _ = {
        type: "dynamic_ads/targeting_package",
        key: "CUSTOM_COMBINATION",
        targetingCategory: r("AdsDynamicTargetingCategories").RETARGETING,
        shouldRender: function (t) {
          var e = t.bulkPromotedProductSet;
          return e instanceof r("AdsUniformValue");
        },
        renderCard: function (t) {
          return u.jsx(r("CometPlaceholder.react"), {
            fallback: u.jsx(r("GeoSpinner.react"), {
              center: !0,
              loggingName: i.id,
            }),
            name: i.id,
            children: u.jsx(c, {
              active:
                t.targetingType === "CUSTOM_COMBINATION" &&
                !o(
                  "DATargetingConsolidationUtils",
                ).getShouldDisableDATargetingOldUI(
                  t.daTargetingConsolidationCampaignType,
                ),
              bulkPromotedProductSet: t.bulkPromotedProductSet,
              content: u.jsx(p, babelHelpers.extends({}, t)),
              daTargetingConsolidationCampaignType:
                t.daTargetingConsolidationCampaignType,
              hasMarketingMessagesPlacement: t.hasMarketingMessagesPlacement,
              id: "CUSTOM_COMBINATION",
              isCustom: !0,
            }),
          });
        },
        defaultFields: [],
        shouldMatchPromotedProductSet: !1,
      },
      f = _;
    l.default = f;
  },
  226,
);
