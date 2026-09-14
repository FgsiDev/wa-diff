__d(
  "compose",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      if (n.length < 2) {
        var o = new Error(
          "Compose expects two or more functions as arguments.",
        );
        throw (o.stack, o);
      }
      var a = n.reverse(),
        i = a[0],
        l = a[1],
        s = babelHelpers.arrayLikeToArray(a).slice(2),
        u = function () {
          return l(i.apply(void 0, arguments));
        };
      return s.length === 0 ? u : e.apply(void 0, [u].concat(s).reverse());
    }
    i.default = e;
  },
  66,
);
