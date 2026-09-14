__d(
  "AdsRBCustomMetricsAPIParser",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "0",
      l = function (n, r, o) {
        var t, a;
        return {
          scopeType: n,
          scopeID: r,
          creationTime: o.creation_time,
          creator: o.creator,
          deletionTime: o.deletion_time,
          deletor: o.deletor,
          metricType: o.custom_derived_metric_type || "persistent",
          permissionType: o.permission || "shared",
          description: o.description || "",
          format_type: o.format_type,
          formula: o.formula,
          id: o.id,
          name: o.name,
          savedReportID: o.saved_report_id === e ? null : o.saved_report_id,
          supportAttributionWindow:
            (t = o.has_attribution_windows) != null ? t : !1,
          supportInlineAttributionWindow:
            (a = o.has_inline_attribution_window) != null ? a : !1,
        };
      };
    i.parse = l;
  },
  66,
);
