__d(
  "adsMgmtTableGetFullColumnDescriptor",
  ["adsMgmtColumnToDescriptor", "expectationViolation", "memoizeStringOnly"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["base", "columnID"];
    function s(t) {
      for (
        var n = {}, o = r("adsMgmtColumnToDescriptor")(t);
        o.base != null && o.columnID == null;
      ) {
        var a = o,
          i = a.base,
          l = a.columnID,
          s = babelHelpers.objectWithoutPropertiesLoose(a, e);
        ((n = babelHelpers.extends({}, n, s)), (o = i));
      }
      if (o.columnID != null)
        n = babelHelpers.extends({}, n, { id: o.columnID });
      else
        return (
          r("expectationViolation")(
            "legacyDescriptor must have columnID at this point",
          ),
          n
        );
      return n;
    }
    var u = r("memoizeStringOnly")(s);
    l.default = u;
  },
  98,
);
