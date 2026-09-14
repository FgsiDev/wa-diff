__d(
  "fieldValueFormatter",
  ["AdsPEExportConstants", "isFalsey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /[\t\n\"]/,
      s = /[\t\n,\"]/,
      u = /\"/g,
      c = /(\r\n|\r|\n)/g;
    function d(t, n) {
      var a = t;
      if (r("isFalsey")(a)) return "";
      a = a.replace(c, "\n");
      var i = n === o("AdsPEExportConstants").Delimiter.Comma ? s : e;
      return i.test(a) ? '"' + a.replace(u, '""') + '"' : a;
    }
    l.default = d;
  },
  98,
);
