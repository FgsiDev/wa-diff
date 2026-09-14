__d(
  "ObjectFlip",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return Object.keys(e).reduce(function (t, n) {
        var r = e[n];
        return (r != null && (t[r] = n), t);
      }, {});
    }
    i.default = e;
  },
  66,
);
