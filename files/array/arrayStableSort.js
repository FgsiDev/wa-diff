__d(
  "arrayStableSort",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      return e
        .map(function (e, t) {
          return { data: e, index: t };
        })
        .sort(function (e, n) {
          return t(e.data, n.data) || e.index - n.index;
        })
        .map(function (e) {
          return e.data;
        });
    }
    i.default = e;
  },
  66,
);
