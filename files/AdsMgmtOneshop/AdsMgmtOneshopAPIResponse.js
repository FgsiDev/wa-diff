__d(
  "AdsMgmtOneshopAPIResponse",
  ["objectEntries"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "null",
      s = "data",
      u = "summary",
      c = ":",
      d = "incremental_",
      m = "custom_derived_metric_id";
    function p(t) {
      return t == null || t === "" || t === e;
    }
    function _(e, t) {
      var n = {};
      return (
        e.forEach(function (e, r) {
          var o = t[r];
          p(o) || (n[e] = o);
        }),
        n
      );
    }
    function f(e, t) {
      var n = {},
        r = {};
      return (
        e.forEach(function (e, o) {
          var a = e.name;
          if (!p(t[o]))
            if (!a.includes(c)) n[a] = t[o];
            else {
              var i = a.split(c),
                l = i[0],
                s = i[1];
              (Object.prototype.hasOwnProperty.call(n, l) ||
                ((r[l] = {}), (n[l] = r[l])),
                (r[l][s] = t[o]));
            }
        }),
        n
      );
    }
    function g(e, t) {
      var n = {},
        o = {};
      return (
        e.forEach(function (e, n) {
          var r = t[n];
          if (!(!r.types || !r.values)) {
            var a = e.name;
            Object.prototype.hasOwnProperty.call(o, a) || (o[a] = {});
            var i =
                e.attribution_window === "default" ||
                e.attribution_window == null
                  ? "value"
                  : e.attribution_window,
              l = r.breakdown;
            Object.prototype.hasOwnProperty.call(o[a], l) || (o[a][l] = {});
            var s = r.types,
              u = r.values;
            !Array.isArray(s) ||
              !Array.isArray(u) ||
              s.forEach(function (e, t) {
                var n = u[t];
                (Object.prototype.hasOwnProperty.call(o[a][l], e) ||
                  (o[a][l][e] = {}),
                  (o[a][l][e][i] = n));
              });
          }
        }),
        r("objectEntries")(o).forEach(function (e) {
          var t = e[0],
            o = e[1];
          ((n[t] = []),
            r("objectEntries")(o).forEach(function (e) {
              var o = e[0],
                a = e[1];
              r("objectEntries")(a).forEach(function (e) {
                var a = e[0],
                  i = e[1],
                  l = {};
                (r("objectEntries")(i).forEach(function (e) {
                  var t = e[0],
                    n = e[1];
                  l[t] = n;
                }),
                  (l[o] = a),
                  n[t].push(l));
              });
            }));
        }),
        n
      );
    }
    function h(e, t) {
      var n = {},
        r = {};
      return (
        e.forEach(function (e, o) {
          var a = t[o],
            i = a.value,
            l = a.indicator;
          if (!p(l)) {
            var s = e.name,
              u = e.attribution_window;
            (u === "dda" && (l = l.replace("" + c + d, c)),
              n[s] === void 0 && (n[s] = []));
            var m = s + "_" + l,
              _ = r[m];
            _ === void 0 &&
              (n[s].push({ indicator: l }), (_ = n[s].length - 1), (r[m] = _));
            var f = n[s][_];
            p(i) ||
              (Object.prototype.hasOwnProperty.call(f, "values") ||
                (f.values = []),
              f.values.push({ value: i, attribution_windows: [u] }));
          }
        }),
        n
      );
    }
    function y(e, t) {
      var n = {},
        o = {};
      return (
        e.forEach(function (e, n) {
          var r = t[n];
          if (r && r.custom_derived_metric_ids && r.values) {
            var a = e.name;
            Object.prototype.hasOwnProperty.call(o, a) || (o[a] = {});
            var i =
                e.attribution_window === "default"
                  ? "value"
                  : e.attribution_window,
              l = r.custom_derived_metric_ids,
              s = r.values;
            Array.isArray(l) &&
              Array.isArray(s) &&
              l.forEach(function (e, t) {
                var n = s[t];
                (Object.prototype.hasOwnProperty.call(o[a], e) ||
                  (o[a][e] = {}),
                  (o[a][e][i] = n));
              });
          }
        }),
        r("objectEntries")(o).forEach(function (e) {
          var t = e[0],
            o = e[1];
          ((n[t] = []),
            r("objectEntries")(o).forEach(function (e) {
              var o = e[0],
                a = e[1],
                i = {};
              (r("objectEntries")(a).forEach(function (e) {
                var t = e[0],
                  n = e[1];
                i[t] = n;
              }),
                (i[m] = o),
                n[t].push(i));
            }));
        }),
        n
      );
    }
    function C(e) {
      var t = babelHelpers.extends({}, e);
      return (
        (t.data = v(e, s)),
        Object.prototype.hasOwnProperty.call(t, u) && (t.summary = v(e, u)[0]),
        t
      );
    }
    function b(e) {
      var t = {};
      return (
        r("objectEntries")(e).forEach(function (e) {
          var n = e[0],
            r = e[1];
          t[n] = C(r);
        }),
        t
      );
    }
    function v(e, t) {
      var n = e[t];
      if (!n) return [];
      var r = Array.isArray(n) ? n[0] : n;
      if (!r || !r.headers || !Array.isArray(r.rows)) return [];
      var o = r.headers || {},
        a = r.rows;
      return a.map(function (e) {
        var t = {};
        if (Array.isArray(o.atomic_columns) && Array.isArray(e.atomic_values))
          try {
            t = babelHelpers.extends(
              {},
              t,
              f(o.atomic_columns, e.atomic_values),
            );
          } catch (e) {}
        if (Array.isArray(o.dimensions) && Array.isArray(e.dimension_values))
          try {
            t = babelHelpers.extends(
              {},
              t,
              _(o.dimensions, e.dimension_values),
            );
          } catch (e) {}
        if (Array.isArray(o.action_columns) && Array.isArray(e.action_values))
          try {
            t = babelHelpers.extends(
              {},
              t,
              g(o.action_columns, e.action_values),
            );
          } catch (e) {}
        if (Array.isArray(o.result_columns) && Array.isArray(e.result_values))
          try {
            t = babelHelpers.extends(
              {},
              t,
              h(o.result_columns, e.result_values),
            );
          } catch (e) {}
        if (
          Array.isArray(o.custom_derived_metrics_columns) &&
          Array.isArray(e.custom_derived_metrics_values)
        )
          try {
            t = babelHelpers.extends(
              {},
              t,
              y(
                o.custom_derived_metrics_columns,
                e.custom_derived_metrics_values,
              ),
            );
          } catch (e) {}
        return t;
      });
    }
    function S(e) {
      return Object.prototype.hasOwnProperty.call(e, s) ? C(e) : b(e);
    }
    l.getNormalizedOneshopResponse = S;
  },
  98,
);
