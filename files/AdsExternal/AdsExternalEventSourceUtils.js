__d(
  "AdsExternalEventSourceUtils",
  ["ExternalEventSourceTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n;
      return (t =
        e.source_type === r("ExternalEventSourceTypes").PIXEL ||
        ((n = e.action_source) == null ? void 0 : n.includes("website"))) !=
        null
        ? t
        : !1;
    }
    function s(e) {
      var t, n;
      return (t =
        e.source_type === r("ExternalEventSourceTypes").APP ||
        ((n = e.action_source) == null ? void 0 : n.includes("app"))) != null
        ? t
        : !1;
    }
    function u(e) {
      var t, n;
      return (t =
        e.source_type ===
          r("ExternalEventSourceTypes").OFFLINE_CONVERSION_DATA_SET ||
        ((n = e.action_source) == null
          ? void 0
          : n.includes("physical_store"))) != null
        ? t
        : !1;
    }
    function c(t, n) {
      if (t == null) return [];
      var r = n(t).getValue();
      return r == null
        ? []
        : r
            .filter(e)
            .toArray()
            .map(function (e) {
              return { id: e.id, type: e.source_type };
            });
    }
    ((l.isPixelEventSource = e),
      (l.isAppEventSource = s),
      (l.isOfflineEventSource = u),
      (l.getEventSourcesFromCatalog = c));
  },
  98,
);
