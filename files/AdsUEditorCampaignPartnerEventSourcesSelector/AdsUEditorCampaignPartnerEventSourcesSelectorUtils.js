__d(
  "AdsUEditorCampaignPartnerEventSourcesSelectorUtils",
  [
    "AdsBulkValueUtils",
    "LoadObject",
    "catalogSegmentGetParentCatalogEventSourcesKey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return t == null
        ? r("LoadObject").withValue(!1, { creatorModuleID: i.id })
        : e.get(t);
    }
    function s(e, t, n, a) {
      return t.mapValue(function (t) {
        var l = t.selectedCatalogSegmentID,
          s = o("AdsBulkValueUtils").getUniformValueOrDefault(a, null),
          u = l != null ? l : s;
        return u != null
          ? n.get(
              r("catalogSegmentGetParentCatalogEventSourcesKey")(
                e.account_id,
                u,
              ),
            )
          : r("LoadObject").withValue([], { creatorModuleID: i.id });
      });
    }
    ((l.checkIfCPASCatalog = e), (l.parentCatalogExternalEventSources = s));
  },
  98,
);
