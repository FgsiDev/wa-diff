__d(
  "getModuleNameFromFluxContainer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null) return null;
      var t = e.match(/.* \[from (.*?)\]/);
      if (!t) return e;
      var n = t[1],
        r = n.indexOf(".");
      return r > 0 ? n.substr(0, r) : n;
    }
    i.default = e;
  },
  66,
);
