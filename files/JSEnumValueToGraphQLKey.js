__d(
  "JSEnumValueToGraphQLKey",
  ["flipObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e =
      typeof WeakMap == "function"
        ? new WeakMap()
        : {
            get: function (t) {
              return null;
            },
            set: function (t, n) {},
          };
    function s(t) {
      var n = e.get(t);
      if (n != null) return n;
      var o = r("flipObject")(t);
      return (e.set(t, o), o);
    }
    function u(e, t) {
      var n = s(e);
      return n[t];
    }
    l.default = u;
  },
  98,
);
