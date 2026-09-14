__d(
  "getOffsetParent",
  ["Style"],
  function (t, n, r, o, a, i, l) {
    function e(t) {
      var n = t.parentNode;
      return !n || n === document.documentElement
        ? document.documentElement
        : r("Style").get(n, "position") !== "static"
          ? n
          : n === document.body
            ? document.documentElement
            : e(n);
    }
    l.default = e;
  },
  98,
);
