__d(
  "AdsDASingleMediaFormatLiquidityUtils",
  [
    "fbt",
    "AdsAPIAdgroupRecordUtils",
    "AdsAdvancedPreviewV2DASingleMediaAsCollectionTooltip.react",
    "AdsDynamicAdsUtils",
    "AdsFlexibleFormatAdexUtils",
    "AdsLinkPostFormat",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "gkx",
    "immutable",
    "isFalsey",
    "justknobx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      return r("gkx")("18274");
    }
    function d(e) {
      var t = e.adgroup,
        n = o(
          "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
        ).getAdgroupSpecPathPlugin(e);
      return m(t, n);
    }
    function m(e, t) {
      var n =
          o("AdsAPIAdgroupRecordUtils").getLinkPostFormat(e, t) ===
          r("AdsLinkPostFormat").SINGLE,
        a = o("AdsDynamicAdsUtils").isDynamicAd(e);
      return n && a && c();
    }
    function p(e) {
      var t = e.adgroup,
        n = o(
          "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
        ).getAdgroupSpecPathPlugin(e);
      return _(t, n);
    }
    function _(e, t) {
      var n;
      if (e == null || t == null || !m(e, t)) return !1;
      var o =
        e == null || (n = e.creative) == null
          ? void 0
          : n.format_transformation_spec;
      return o == null || o.length === 0
        ? !1
        : o.some(function (e) {
            var t =
                e instanceof r("immutable").Map ? e.get("format") : e.format,
              n =
                e instanceof r("immutable").Map
                  ? e.get("data_source")
                  : e.data_source;
            return (
              (n instanceof r("immutable").List &&
                t === "da_collection" &&
                n.toArray().includes("catalog")) ||
              (Array.isArray(n) &&
                t === "da_collection" &&
                n.includes("catalog"))
            );
          });
    }
    function f(e, t) {
      var n;
      if (e != null && t != null) {
        var a = t(e);
        n = o(
          "AdsFlexibleFormatAdexUtils",
        ).getStickyStatusFromUserSettingsLoadObject(
          a,
          "da_single_media",
          "da_collection",
          "catalog",
        );
      }
      var i = o(
          "AdsFlexibleFormatAdexUtils",
        ).shouldBlockReactiveControlDefaultOn(),
        l = r("gkx")("19607");
      return n !== "OPT_OUT" && r("isFalsey")(i) && r("isFalsey")(l);
    }
    function g(e) {
      return e.every(function (e) {
        return d(e);
      });
    }
    function h(e) {
      return e == null ? !1 : g(e.adObjectsList);
    }
    var y = {
      pluginKey: "single-optimization",
      config: {
        type: "single-optimization",
        optimizationType: 226,
        optionValue: 2260001,
      },
      customPills: [
        {
          label: s._(/*BTDS*/ "Collection"),
          Tooltip: function (t) {
            var e = t.triggerRef;
            return u.jsx(
              r("AdsAdvancedPreviewV2DASingleMediaAsCollectionTooltip.react"),
              { triggerRef: e },
            );
          },
        },
      ],
    };
    function C() {
      return r("justknobx")._("5324");
    }
    ((l.isDASingleMediaFormatLiquidityGKEnabled = c),
      (l.isEligibleForDASingleMediaFormatLiquidity = d),
      (l.isOptedInForDASingleMediaRenderAsCollectionForAdObjects = p),
      (l.isOptedInForDASingleMediaRenderAsCollection = _),
      (l.shouldAccountDefaultOptInForDASingleMediaFormatLiquidity = f),
      (l.getAdsDASingleMediaFormatLiquidityEligibilityForAdObjects = g),
      (l.getAdsDASingleMediaFormatLiquidityEligibility = h),
      (l.DA_SINGLE_MEDIA_AS_COLLECTION_PREVIEW_VARIATION = y),
      (l.shouldShowDASingleMediaFormatLiquidityPreviewFilters = C));
  },
  226,
);
