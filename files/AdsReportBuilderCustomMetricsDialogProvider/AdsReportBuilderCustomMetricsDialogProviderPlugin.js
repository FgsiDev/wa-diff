__d(
  "AdsReportBuilderCustomMetricsDialogProviderPlugin",
  ["AdsReportBuilderInitialRoutingParamsStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
        var e = !1,
          t = Object.freeze({}),
          n = r(
            "AdsReportBuilderInitialRoutingParamsStore",
          ).getInitialRoutingData();
        if (n) {
          var o,
            a,
            i =
              n == null || (o = n.params) == null
                ? void 0
                : o.show_custom_metric_dialog;
          e = i != null ? i : e;
          var l =
            n == null || (a = n.params) == null
              ? void 0
              : a.custom_column_event_source;
          l != null && (t = { customColumnEventSource: l });
        }
        return babelHelpers.extends({}, t, {
          isOpen: e,
          customMetric: null,
          isMutating: !1,
          uiErrors: new Set(),
          apiErrors: new Set(),
        });
      },
      s = { initialState: e() },
      u = s;
    l.default = u;
  },
  98,
);
