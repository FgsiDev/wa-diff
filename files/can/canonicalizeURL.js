__d(
  "canonicalizeURL",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e
        .trim()
        .replace(/(^\w+:|^)\/\//, "")
        .replace(/^www\./, "")
        .replace(/\/*$/, "")
        .toLowerCase();
    }
    i.default = e;
  },
  66,
);
