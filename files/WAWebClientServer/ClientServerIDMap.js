__d(
  "ClientServerIDMap",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map();
    function l(t, n) {
      e.set(t, n);
    }
    function s(t) {
      return e.get(t) || t;
    }
    ((i.addIDMapping = l), (i.resolveID = s));
  },
  66,
);
