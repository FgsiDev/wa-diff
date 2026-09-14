__d(
  "adsMgmtTableSpecializeLevelSpecificPropsForObjectType",
  ["AdsObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        ((e = {}),
        (e[r("AdsObjectTypes").CREATIVE] = r("AdsObjectTypes").ADGROUP),
        e);
    function u(e, t) {
      if (e != null) {
        var n = s[t];
        return babelHelpers.extends({}, e[n], e[t]);
      } else return;
    }
    l.default = u;
  },
  98,
);
