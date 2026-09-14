__d(
  "forwardEvent",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      return e.addListener(n, function () {
        for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
          r[o] = arguments[o];
        return t.emit.apply(t, [n].concat(r));
      });
    }
    i.default = e;
  },
  66,
);
