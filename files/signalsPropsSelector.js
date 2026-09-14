__d(
  "signalsPropsSelector",
  ["shallowEqual"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e.find(function (e) {
        return r("shallowEqual")(e, t);
      });
    }
    function s(t, n) {
      n === void 0 && (n = 1);
      var r = [],
        o = function (a) {
          var o = t != null ? t(a) : a,
            i = e(r, o);
          return i == null ? (r.length >= n && r.shift(), r.push(o), o) : i;
        },
        a = Object.getOwnPropertyDescriptor(o, "name"),
        i = a == null || a.configurable;
      i &&
        Object.defineProperty(o, "name", {
          configurable: !0,
          enumerable: !1,
          value: (t != null ? t.name : "all") + "_propSelector",
          writable: !1,
        });
      function l(e) {
        return o(e);
      }
      return (
        (l.getStores = function () {
          return [];
        }),
        (l.isGetStoresStatic = !0),
        (l.isGetStoresPure = !0),
        (l.rawSelectFn = o),
        l
      );
    }
    l.default = s;
  },
  98,
);
