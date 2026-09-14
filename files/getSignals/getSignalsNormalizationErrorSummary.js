__d(
  "getSignalsNormalizationErrorSummary",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(t, n, o) {
      if (
        (n.errors.forEach(function (e) {
          if (e.where === "prop") {
            if (n.type === "prop") {
              var a = (e.propError && e.propError.badValues) || [];
              a.forEach(function (e) {
                var n =
                  e.rawPosition != null
                    ? Array.isArray(e.rawPosition)
                      ? e.rawPosition
                      : [e.rawPosition]
                    : [];
                t.invalidColumns = t.invalidColumns.withMutations(function (e) {
                  n.forEach(function (t) {
                    var n = e.get(t);
                    if (n == null) e.set(t, { count: 1, propPath: o });
                    else {
                      var r = n.count,
                        a = n.propPath;
                      e.set(t, { count: r + 1, propPath: a });
                    }
                  });
                });
              });
            }
          } else if (e.where === "rule") {
            var i = e.ruleError && e.ruleError.ruleSpecs.name;
            if (i != null) {
              var l = o.length === 0 ? i : o + "." + i,
                s = t.namedRuleErrors.get(l);
              (s != null ? (s = s.push(e)) : (s = r("immutable").List([e])),
                (t.namedRuleErrors = t.namedRuleErrors.set(l, s)));
            } else t.otherErrors = t.otherErrors.push(e);
          } else t.otherErrors = t.otherErrors.push(e);
        }),
        n.type === "compound")
      )
        for (var a in n.nodes) {
          var i = n.nodes[a],
            l = o.length === 0 ? a : o + "." + a;
          e(t, i, l);
        }
    }
    function s(t) {
      var n,
        o = {
          fatalErrors: (n = r("immutable")).List(),
          invalidColumns: n.Map(),
          namedRuleErrors: n.Map(),
          otherErrors: n.List(),
        };
      return (
        t.forEach(function (t) {
          (t.tree != null && e(o, t.tree, ""),
            t.fatalError != null &&
              (o.fatalErrors = o.fatalErrors.push(t.fatalError)));
        }),
        o
      );
    }
    l.default = s;
  },
  98,
);
