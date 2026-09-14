__d(
  "CustomConversionParseUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return !Object.prototype.hasOwnProperty.call(e, "filters");
    }
    function l(e) {
      var t, n;
      return {
        field: (t = e.field) != null ? t : "",
        fieldOperator: e.operator,
        operator: "or",
        valueArray: [(n = e.value) != null ? n : ""],
      };
    }
    function s(t) {
      for (var n, r, o = [], a = 0; a < t.length; a++) {
        var i;
        if (!e(t[a])) return null;
        if (n && r) {
          if (t[a].field !== n || t[a].operator !== r) return null;
        } else ((n = t[a].field), (r = t[a].operator));
        o.push((i = t[a].value) != null ? i : "");
      }
      return n && r
        ? { field: n, fieldOperator: r, operator: "or", valueArray: o }
        : null;
    }
    function u(t) {
      for (var n = [], r = 0; r < t.length; r++)
        if (e(t[r]) || t[r].operator === "or") n.push(t[r]);
        else {
          var o;
          n.push.apply(n, u((o = t[r].filters) != null ? o : []));
        }
      return n;
    }
    function c(t, n) {
      for (
        var r = { eventSource: n, field: "url", filters: [], value: "" }, o = 0;
        o < t.length;
        o++
      ) {
        var a = t[o];
        if (e(a)) {
          if (
            a.field === "url" &&
            a.operator === "i_contains" &&
            a.value === ""
          )
            continue;
          if (a.field === "event")
            if (r.field !== a.field) {
              var i;
              ((r.field = "event"), (r.value = (i = a.value) != null ? i : ""));
            } else return null;
          else r.filters.push(l(a));
        } else {
          var u,
            c = s((u = a.filters) != null ? u : []);
          if (c == null) return null;
          r.filters.push(c);
        }
      }
      return r;
    }
    function d(t) {
      if (t.event_sources.length !== 1) return null;
      var n = t.event_sources,
        r = n[0],
        o = t.filter,
        a = o.operator;
      if (!e(o)) {
        if (a === "or") return c([o], r);
        if (a === "and") {
          var i,
            l = u((i = o.filters) != null ? i : []);
          return c(l, r);
        }
        return null;
      }
      var s = o.field,
        d = o.value;
      return s === "event"
        ? { eventSource: r, field: s, filters: [], value: d != null ? d : "" }
        : s === "url"
          ? {
              eventSource: r,
              field: "url",
              filters: [
                {
                  field: "url",
                  fieldOperator: a,
                  operator: "or",
                  valueArray: [d != null ? d : ""],
                },
              ],
              value: d != null ? d : "",
            }
          : null;
    }
    function m(e) {
      var t = [],
        n = JSON.parse(e),
        r = n.inclusions.rules;
      if (r != null)
        for (var o = 0; o < r.length; o++) {
          var a = d(r[o]);
          if (a == null) return null;
          t.push(a);
        }
      return { operator: n.inclusions.operator, rules: t };
    }
    ((i.isAtomic = e),
      (i.parseAtomicRuleToFilter = l),
      (i.parseOrClause = s),
      (i.preProcessAndClause = u),
      (i.parseAndClause = c),
      (i.parseRule = d),
      (i.parseAdvancedRule = m));
  },
  66,
);
