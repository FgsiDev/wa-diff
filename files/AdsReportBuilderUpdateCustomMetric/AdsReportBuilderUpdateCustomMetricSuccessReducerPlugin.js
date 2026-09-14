__d(
  "AdsReportBuilderUpdateCustomMetricSuccessReducerPlugin",
  [
    "AdsDataAtom",
    "AdsReportBuilderCustomMetricRecord",
    "AdsReportBuilderEntryPointEventSources",
    "AdsReportBuilderRefreshTableAction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: function (n, o) {
          var t = n.get(o.id),
            a = o.creationTime,
            l = o.creator,
            s = o.deletionTime,
            u = o.deletor,
            c = o.description,
            d = o.format_type,
            m = o.formula,
            p = o.id,
            _ = o.metricType,
            f = o.name,
            g = o.permissionType,
            h = o.savedReportID,
            y = o.scopeID,
            C = o.scopeType,
            b = o.supportAttributionWindow,
            v = o.supportInlineAttributionWindow,
            S = new (r("AdsReportBuilderCustomMetricRecord"))({
              creationTime: a,
              creator: l,
              deletionTime: s,
              deletor: u,
              description: c,
              format_type: d,
              formula: m,
              id: p,
              metricType: _,
              name: f,
              permissionType: g,
              savedReportID: h,
              scopeID: y,
              scopeType: C,
              supportAttributionWindow: b,
              supportInlineAttributionWindow: v,
            });
          return (
            S.formula !== (t == null ? void 0 : t.formula) &&
              (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  r("AdsReportBuilderRefreshTableAction").dispatch(
                    {
                      eventSource: r("AdsReportBuilderEntryPointEventSources")
                        .REFRESH_ON_UPDATE_CUSTOM_METRICS,
                    },
                    {
                      line: "71",
                      module:
                        "AdsReportBuilderUpdateCustomMetricSuccessReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                },
              ),
            n.set(o.id, S)
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
