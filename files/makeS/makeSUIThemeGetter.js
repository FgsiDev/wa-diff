__d(
  "makeSUIThemeGetter",
  ["SUITheme", "memoizeWithArgs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      function t(t) {
        var n = {};
        return (
          Object.keys(e).forEach(function (r) {
            var o = e[r];
            o !== void 0 && (n[r] = o(t));
          }),
          new (r("SUITheme"))({ id: t.id, components: n })
        );
      }
      return r("memoizeWithArgs")(t, function (e) {
        return e.id;
      });
    }
    l.default = e;
  },
  98,
);
