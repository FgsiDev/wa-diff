__d(
  "getFieldPaths",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(t, n) {
      var r = [],
        o = n || [];
      return (
        Object.keys(t).forEach(function (n) {
          var a = o.concat(n);
          t[n] === null || typeof t[n] != "object"
            ? r.push(a)
            : (r = r.concat(e(t[n], a)));
        }),
        r
      );
    }
    i.default = e;
  },
  66,
);
