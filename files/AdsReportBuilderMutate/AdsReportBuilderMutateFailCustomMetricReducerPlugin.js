__d(
  "AdsReportBuilderMutateFailCustomMetricReducerPlugin",
  ["errorCode", "AdsCustomMetricsErrorType"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = 1359174,
      d = 2061015,
      m =
        ((e = {}), (e[c] = r("AdsCustomMetricsErrorType").INVALID_FORMULA), e),
      p =
        ((u = {}),
        (u.formula = r("AdsCustomMetricsErrorType").EMPTY_FORMULA),
        (u.name = r("AdsCustomMetricsErrorType").EMPTY_NAME),
        u),
      _ = {
        reduce: function (t, n) {
          var e = new Set(),
            o = n.error,
            a = o.error_subcode != null ? o.error_subcode : null;
          if (
            (a != null &&
              m[a] != null &&
              e.add(m[a] || r("AdsCustomMetricsErrorType").NOT_SPECIFIED),
            a === d)
          ) {
            var i,
              l =
                (i = o.error_data) == null ? void 0 : i.blame_field_specs[0][0];
            l != null &&
              p[l] != null &&
              e.add(p[l] || r("AdsCustomMetricsErrorType").NOT_SPECIFIED);
          }
          return babelHelpers.extends({}, t, { isMutating: !1, apiErrors: e });
        },
      },
      f = _;
    l.default = f;
  },
  98,
);
