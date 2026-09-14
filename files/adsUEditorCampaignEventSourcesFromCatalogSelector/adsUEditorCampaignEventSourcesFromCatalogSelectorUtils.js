__d(
  "adsUEditorCampaignEventSourcesFromCatalogSelectorUtils",
  ["AdsExternalEventSourceUtils", "LoadObject", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e != null
        ? t(e)
        : r("LoadObject").empty({ creatorModuleID: i.id });
    }
    function s(e) {
      return e.map(function (e) {
        var t;
        return (t =
          e == null
            ? void 0
            : e.filter(o("AdsExternalEventSourceUtils").isPixelEventSource)) !=
          null
          ? t
          : r("immutable").List();
      });
    }
    function u(e) {
      return e.map(function (e) {
        var t;
        return (t =
          e == null
            ? void 0
            : e.filter(o("AdsExternalEventSourceUtils").isAppEventSource)) !=
          null
          ? t
          : r("immutable").List();
      });
    }
    ((l.adsUEditorCampaignEventSourcesFromCatalog = e),
      (l.getAdsUEditorCampaignPixelsFromCatalog = s),
      (l.adsUEditorCampaignAppsFromCatalog = u));
  },
  98,
);
