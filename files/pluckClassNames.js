__d(
  "pluckClassNames",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(t) {
      var n = [],
        r = [];
      return (
        Array.isArray(t)
          ? t.forEach(function (t) {
              var o = e(t),
                a = o.classNames,
                i = o.styles;
              ((n = n.concat(a)), (r = r.concat(i)));
            })
          : typeof t == "string"
            ? n.push(t)
            : r.push(t),
        { classNames: n, styles: r }
      );
    }
    i.default = e;
  },
  66,
);
