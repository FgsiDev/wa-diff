__d(
  "getMergedHeaderAndBodyTextForTemplate",
  ["isStringNotNullAndNotWhitespaceOnly"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "*",
      s = "\n";
    function u(t, n) {
      return r("isStringNotNullAndNotWhitespaceOnly")(t)
        ? "" + e + (t != null ? t : "") + e + s + (n != null ? n : "")
        : "" + s + (n != null ? n : "");
    }
    l.default = u;
  },
  98,
);
