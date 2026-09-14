__d(
  "CatalogConsolidatedSignalsUtils",
  ["ConsolidatedSignalsDataType", "ExternalEventSourceTypes", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      r("ExternalEventSourceTypes").PIXEL,
      r("ExternalEventSourceTypes").OFFLINE_CONVERSION_DATA_SET,
    ];
    function s(e) {
      return Array.from(e).map(function (e) {
        return e.action_source.includes("app")
          ? new (r("ConsolidatedSignalsDataType"))({
              action_source: r("immutable").List([]),
              id: e.id,
            })
          : e;
      });
    }
    function u(e) {
      return [{ type: "APP", value: e }];
    }
    function c(e) {
      var t = {
        action_source: ["website"],
        is_consolidated_container: e.isConsolidatedContainer,
        type: "PIXEL",
        value: e,
      };
      if (e.isConsolidatedContainer) {
        var n;
        return [
          t,
          {
            action_source: ["physical_store"],
            is_consolidated_container: e.isConsolidatedContainer,
            type: "OFFLINE_CONVERSION_DATA_SET",
            value: {
              business:
                ((n = e.ownerBusiness) == null ? void 0 : n.id) != null
                  ? {
                      block_offline_analytics: !1,
                      id: e.ownerBusiness.id,
                      name: e.ownerBusiness.name,
                      picture: null,
                    }
                  : null,
              hasBAPIDomains: e.hasBAPIDomains,
              id: e.id,
              last_upload_time: null,
              lastFiredTime: e.lastFiredTime,
              name: e.name,
              ownerAdAccount: e.ownerAdAccount,
              ownerBusiness: e.ownerBusiness,
            },
          },
        ];
      }
      return [t];
    }
    function d(e) {
      var t = {
        action_source: ["physical_store"],
        is_consolidated_container: e.is_consolidated_container,
        type: "OFFLINE_CONVERSION_DATA_SET",
        value: e,
      };
      return e.is_consolidated_container
        ? [
            t,
            {
              action_source: ["website"],
              is_consolidated_container: e.is_consolidated_container,
              type: "PIXEL",
              value: {
                business: e.business,
                hasBAPIDomains: !1,
                id: e.id,
                last_upload_time: e.last_upload_time,
                lastFiredTime: null,
                name: e.name,
                ownerAdAccount: null,
                ownerBusiness: { id: e.business.id, name: e.business.name },
              },
            },
          ]
        : [t];
    }
    function m(e) {
      return new (r("ConsolidatedSignalsDataType"))({
        action_source: r("immutable").List(
          e == null ? void 0 : e.action_source,
        ),
        id: e.value.id,
      });
    }
    function p(e) {
      return new (r("ConsolidatedSignalsDataType"))({
        action_source:
          e != null && e.action_source
            ? r("immutable").List(e == null ? void 0 : e.action_source)
            : r("immutable").List([]),
        id: e.id,
      });
    }
    function _(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          var n = e == null ? void 0 : e.action_source;
          n != null && n.length > 0
            ? n.forEach(function (n) {
                return t.push(
                  new (r("ConsolidatedSignalsDataType"))({
                    action_source: r("immutable").List([n]),
                    id: e.id,
                  }),
                );
              })
            : t.push(
                new (r("ConsolidatedSignalsDataType"))({
                  action_source: r("immutable").List(n),
                  id: e.id,
                }),
              );
        }),
        s(t)
      );
    }
    ((l.CONSOLIDATED_SUPPORTED_SIGNAL_TYPES = e),
      (l.mapToPostGraphExternalEventSourcesParam = s),
      (l.fromAppToCatalogConnectEventSourceType = u),
      (l.fromPixelToCatalogConnectEventSourceType = c),
      (l.fromOfflineEventSetToCatalogConnectEventSourceType = d),
      (l.mapCatalogConnectEventSourceTypeToConsolidatedType = m),
      (l.mapExternalEventSourceTypeToConsolidatedType = p),
      (l.explodeExternalEventSourceToConsolidatedSignalsDataType = _));
  },
  98,
);
