__d(
  "getInlineBoundingRect",
  ["Rect"],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      var r = e.getClientRects();
      if (!t || r.length === 0) return n("Rect").getElementBounds(e);
      for (var o, a = !1, i = 0; i < r.length; i++) {
        var l = new (n("Rect"))(
            Math.round(r[i].top),
            Math.round(r[i].right),
            Math.round(r[i].bottom),
            Math.round(r[i].left),
            "viewport",
          ).convertTo("document"),
          s = l.getPositionVector(),
          u = s.add(l.getDimensionVector());
        if (!o || (s.x <= o.l && s.y > o.t)) {
          if (a) break;
          o = new (n("Rect"))(s.y, u.x, u.y, s.x, "document");
        } else
          ((o.t = Math.min(o.t, s.y)), (o.b = Math.max(o.b, u.y)), (o.r = u.x));
        l.contains(new (n("Rect"))(t)) && (a = !0);
      }
      return (o || (o = n("Rect").getElementBounds(e)), o);
    }
    i.default = e;
  },
  66,
);
