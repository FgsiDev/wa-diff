__d(
  "computeIsInEditing",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.at(0);
      if (t == null) return !1;
      var n = r("gkx")("9197");
      if (n) {
        var o = t.isDraft === !0 && t.isNew === !0,
          a = t.children,
          i =
            a == null
              ? void 0
              : a.every(function (e) {
                  return e.isDraft === !0 && e.isNew === !0;
                }),
          l = [];
        a == null ||
          a.forEach(function (e) {
            e.children.forEach(function (e) {
              return l.push(e);
            });
          });
        var s = l.every(function (e) {
          return e.isDraft === !0 && e.isNew === !0;
        });
        return o !== !0 || i !== !0 || s !== !0;
      }
      var u = t.isDraft === !0,
        c = t.children,
        d =
          c == null
            ? void 0
            : c.every(function (e) {
                return e.isDraft === !0;
              }),
        m = [];
      c == null ||
        c.forEach(function (e) {
          e.children.forEach(function (e) {
            return m.push(e);
          });
        });
      var p = m.every(function (e) {
        return e.isDraft === !0;
      });
      return u !== !0 || d !== !0 || p !== !0;
    }
    l.default = e;
  },
  98,
);
