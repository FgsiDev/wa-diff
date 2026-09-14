__d(
  "adsMgmtTableGetColumnConfigAndDescriptor",
  [
    "adsMgmtTableGetColumnConfig",
    "adsMgmtTableGetFullColumnDescriptor",
    "memoizeStringOnly",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        var e = r("adsMgmtTableGetFullColumnDescriptor")(t);
        return babelHelpers.extends(
          {},
          e,
          r("adsMgmtTableGetColumnConfig")(e),
          { id: t },
        );
      },
      s = r("memoizeStringOnly")(e);
    l.default = s;
  },
  98,
);
