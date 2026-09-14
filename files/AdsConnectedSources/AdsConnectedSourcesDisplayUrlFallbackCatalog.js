__d(
  "AdsConnectedSourcesDisplayUrlFallbackCatalog",
  [
    "AdsBulkValueUtils",
    "AdsConnectedSourcesSourceUrlFallbackCatalog",
    "AdsEditingAdgroupEditorContext",
    "AdsMetadataConnectedSourcesUtils",
    "AdsUEditorAdgroupBulkSelectors",
    "AdsUnifiedCreativeAPIFields",
    "LoadObject",
    "adgroupAPlusCFirstEligibleProductSetForUrlUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("20705") : r("gkx")("20645")
      );
    }
    function s() {
      var e = o(
          "AdsUEditorAdgroupBulkSelectors",
        ).selectorByCreativeField_DEPRECATED_USE_BULKBYSEMANTICFIELD(
          r("AdsUnifiedCreativeAPIFields").displayURL,
        ),
        t = o("AdsBulkValueUtils").getUniformValue(
          e(r("AdsEditingAdgroupEditorContext")),
        );
      return t != null && t !== "" ? t : null;
    }
    function u(e) {
      return e == null || e === ""
        ? null
        : o(
            "AdsConnectedSourcesSourceUrlFallbackCatalog",
          ).getSourceUrlFallbackCatalogFetchOpts(e);
    }
    function c(e) {
      var t = u(e);
      return t == null ||
        !o("AdsMetadataConnectedSourcesUtils").isPECatalogUrlWaterfallEnabled(
          !0,
        )
        ? null
        : t;
    }
    function d(e) {
      var t = c(e);
      return t == null
        ? r("LoadObject").empty({ creatorModuleID: i.id })
        : o(
            "adgroupAPlusCFirstEligibleProductSetForUrlUtils",
          ).getFirstEligibleProductSetForUrl(t);
    }
    ((l.isPEDisplayUrlFallbackEnabled = e),
      (l.getAdgroupDisplayUrl = s),
      (l.getDisplayUrlFallbackCandidateOpts = u),
      (l.getDisplayUrlFallbackCatalogFetchOpts = c),
      (l.getDisplayUrlFallbackCatalogProductSetLO = d));
  },
  98,
);
