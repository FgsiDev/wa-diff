__d(
  "adsMgmtFilterStringValueSetRenderer",
  ["fbt", "AdsMgmtUsability2025H2SRExperimentUtils", "firstx", "intlList"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (t, n, a, i) {
        if ((i === void 0 && (i = r("intlList").CONJUNCTIONS.AND), !a.length))
          return "";
        var e = a.length,
          l = t(r("firstx")(a));
        if (e === 1) return l;
        var u = function (n, o, a) {
            var e = n.map(function (e) {
              return t(e);
            });
            return r("intlList")(e, o, a);
          },
          c = o(
            "AdsMgmtUsability2025H2SRExperimentUtils",
          ).getIsAccountInStandardizeAMFilterTokens()
            ? s._(/*BTDS*/ "{count} more", [s._param("count", e - 2)])
            : s._(/*BTDS*/ "{count} more", [s._param("count", e - 1)]);
        return o(
          "AdsMgmtUsability2025H2SRExperimentUtils",
        ).getIsAccountInStandardizeAMFilterTokens()
          ? e === 2 || e === 3
            ? u(
                a,
                r("intlList").CONJUNCTIONS.OR,
                r("intlList").DELIMITERS.COMMA,
              )
            : r("intlList")(
                [
                  u(
                    a.slice(0, 2),
                    r("intlList").CONJUNCTIONS.NONE,
                    r("intlList").DELIMITERS.COMMA,
                  ),
                  c,
                ],
                r("intlList").CONJUNCTIONS.OR,
              )
          : r("intlList")([l, c], i);
      },
      u = e;
    l.default = u;
  },
  226,
);
