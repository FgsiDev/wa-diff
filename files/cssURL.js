__d(
  "cssURL",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return (
        "url('" +
        e.replace(/[\ud800-\udfff].|[^-a-zA-Z0-9./_?]/g, function (e) {
          return "\\" + e.codePointAt(0).toString(16) + " ";
        }) +
        "')"
      );
    }
    i.default = e;
  },
  66,
);
