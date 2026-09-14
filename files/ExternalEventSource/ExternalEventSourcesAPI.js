__d(
  "ExternalEventSourcesAPI",
  [
    "AdsGraphAPI",
    "CatalogConsolidatedSignalsUtils",
    "CatalogUnreadableIDCache",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("gkx")("13479")
        ? [
            "id",
            "name",
            "source_type",
            "action_source",
            "associated_default_urls",
          ]
        : ["id", "name", "source_type", "action_source"],
      s = 100;
    function u(t) {
      return o("CatalogUnreadableIDCache").guardCatalogRead(t, function () {
        return o("AdsGraphAPI")
          .get(i.id)
          .object("product_catalog", t)
          .edge("external_event_sources")
          .batched()
          .get({ fields: e, limit: s })
          .then(function (e) {
            return e.data;
          });
      });
    }
    function c(e, t) {
      return o("AdsGraphAPI")
        .get(i.id)
        .object("product_catalog", e)
        .edge("external_event_sources")
        .batched()
        .post({ external_event_sources: t });
    }
    function d(e, t) {
      var n = o(
        "CatalogConsolidatedSignalsUtils",
      ).mapToPostGraphExternalEventSourcesParam(t);
      return o("AdsGraphAPI")
        .get(i.id)
        .object("product_catalog", e)
        .edge("external_event_sources")
        .batched()
        .remove({ external_event_sources: n });
    }
    ((l.fetch = u), (l.add = c), (l.remove = d));
  },
  98,
);
