__d(
  "AdsUniqueCatalogPreloadingUtils",
  [
    "CatalogBusinessEventsLoggerHelper",
    "CatalogPreloadingHandleScenarioAction",
    "CatalogPreloadingScenarioProvider",
    "PreloadingEvent.flow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("CatalogPreloadingScenarioProvider").toFluxStore();
    function s() {
      var t = e.getState(),
        n = t.isOngoing;
      return n;
    }
    function u(e) {
      switch (e) {
        case o("PreloadingEvent.flow").PreloadingEventName
          .ADS_INTERFACES_PRELOADING_SUCCESS:
          return "catalog_preloading_success_ui";
        case o("PreloadingEvent.flow").PreloadingEventName
          .ADS_INTERFACES_PRELOADING_ISSUE:
          return "catalog_preloading_issue_ui";
      }
    }
    function c(e, t) {
      var n = u(t);
      (n != null &&
        r("CatalogBusinessEventsLoggerHelper")
          .getPreloadingLogger()
          .setEvent(n)
          .setActionData({ data: JSON.stringify(e) }),
        r("CatalogPreloadingHandleScenarioAction").dispatch(
          { isOngoing: !1 },
          {
            line: "49",
            module: "AdsUniqueCatalogPreloadingUtils.js",
            moduleID: i.id,
          },
        ));
    }
    var d = { isScenarioOngoing: s, log: c };
    l.defaultConfig = d;
  },
  98,
);
