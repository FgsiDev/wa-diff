__d(
  "getVideoComponentName",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      if (e != null) {
        var t = null;
        if (
          (e.prototype && e.prototype.constructor
            ? (t = e.prototype.constructor)
            : e.constructor && (t = e.constructor),
          t && t.name)
        )
          return t.name;
        if (typeof e.toString == "function") return e.toString();
      }
      return null;
    }
    i.default = e;
  },
  66,
);
