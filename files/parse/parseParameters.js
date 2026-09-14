__d(
  "parseParameters",
  ["FixedFormKeys", "enumObjectKeys", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = !1,
        n = r("immutable").List(),
        a = r("immutable").List(
          o("FixedFormKeys").FIXED_FORM_KEYS_LIST.map(function (e) {
            return { key: e, value: "" };
          }),
        );
      return (
        r("enumObjectKeys")(e).map(function (r) {
          var i = o("FixedFormKeys").FixedFormKeys.cast(r);
          i != null
            ? (a = a.set(o("FixedFormKeys").FIXED_FORM_KEYS_LIST.indexOf(i), {
                key: i,
                value: e[r],
              }))
            : ((t = !0), (n = n.push({ key: r, value: e[r] })));
        }),
        { customizedParameters: n, fixedFormParameters: a, isShown: t }
      );
    }
    l.parseParameters = e;
  },
  98,
);
