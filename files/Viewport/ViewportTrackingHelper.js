__d(
  "ViewportTrackingHelper",
  ["DOMDimensions", "getElementPosition", "getViewportDimensions"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e === t) return !0;
      for (; e && e.parentElement; ) {
        if (e.parentElement === t) return !0;
        e = e.parentElement;
      }
      return !1;
    }
    function s(e, t) {
      return u(r("getViewportDimensions")(), e, t);
    }
    function u(e, t, n, a) {
      a === void 0 && (a = 0);
      var i = r("getElementPosition")(t),
        l = o("DOMDimensions").getElementDimensions(t);
      if (!i.x && !i.y && !l.height && !l.width) return !1;
      var s = Math.max(i.y, a),
        u = Math.min(i.y + l.height, e.height),
        c = Math.min(l.height, n);
      return u - s >= c;
    }
    function c(e, t) {
      var n = d(e),
        r = o("DOMDimensions").getElementDimensions(e),
        a = Math.min(r.height, t);
      return n >= a ? n : 0;
    }
    function d(e) {
      var t = r("getElementPosition")(e),
        n = o("DOMDimensions").getElementDimensions(e);
      if (!t.x && !t.y && !n.x && !n.y) return 0;
      var a = r("getViewportDimensions")().height,
        i = Math.max(t.y, 0),
        l = Math.min(t.y + n.height, a);
      return l - i;
    }
    function m(e) {
      for (var t = !1, n = [], r = 0; r < e.length; r++) {
        var o = e[r];
        if (s(o, 0)) (n.push(o), (t = !0));
        else if (t) break;
      }
      return n;
    }
    ((l.isDescendantOf = e),
      (l.isVisible = s),
      (l.getHeightIfVisible = c),
      (l.getElementsInViewIgnoreHeight = m));
  },
  98,
);
