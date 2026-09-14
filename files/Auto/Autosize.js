__d(
  "Autosize",
  ["cx", "Style", "cr:6108", "cr:6114"],
  function (t, n, r, o, a, i, l) {
    var e = /^[0-9]+$/;
    function s(e) {
      var t,
        r = e.cloneNode(!0);
      n("cr:6108").addClass(r, "_4g");
      var o =
        e.clientWidth -
        (t = n("Style")).getFloat(e, "paddingLeft") -
        t.getFloat(e, "paddingRight");
      t.set(r, "width", o + "px");
      var a =
        e.clientHeight -
        t.getFloat(e, "paddingTop") -
        t.getFloat(e, "paddingBottom");
      return (t.set(r, "height", a + "px"), n("cr:6114").insertAfter(e, r), r);
    }
    function u(e, t, r, o, a) {
      var i = e.style.fontSize,
        l = e.style.height;
      n("Style").set(e, "height", "auto");
      var s = "";
      t !== null && ((s = e.style.width), n("Style").set(e, "width", "auto"));
      for (var u = 0, c = a.length - 1; u < c; ) {
        var d = Math.ceil((u + c) / 2);
        (n("Style").set(e, "font-size", a[d] + o),
          (r !== null && e.scrollHeight > r) ||
          (t !== null && e.scrollWidth > t)
            ? (c = d - 1)
            : (u = d));
      }
      return (
        (e.style.fontSize = i),
        (e.style.height = l),
        t !== null && (e.style.width = s),
        a[u] + o
      );
    }
    function c(e, t, r, o, a, i) {
      var l = a,
        s = i,
        u = e.style.fontSize,
        c = e.style.height;
      n("Style").set(e, "height", "auto");
      var d = "";
      if (
        (t !== null &&
          ((d = e.style.width), n("Style").set(e, "width", "auto")),
        n("Style").set(e, "font-size", s + o),
        (r === null || e.scrollHeight <= r) &&
          (t === null || e.scrollWidth <= t))
      )
        return (
          (e.style.fontSize = u),
          (e.style.height = c),
          t !== null && (e.style.width = d),
          s + o
        );
      if (
        (n("Style").set(e, "font-size", l + o),
        (r !== null && e.scrollHeight > r) || (t !== null && e.scrollWidth > t))
      )
        return (
          (e.style.fontSize = u),
          (e.style.height = c),
          t !== null && (e.style.width = d),
          l + o
        );
      for (; l + 1 < s; ) {
        var m = Math.ceil((l + s) / 2);
        (n("Style").set(e, "font-size", m + o),
          (r !== null && e.scrollHeight > r) ||
          (t !== null && e.scrollWidth > t)
            ? (s = m)
            : (l = m));
      }
      return (
        (e.style.fontSize = u),
        (e.style.height = c),
        t !== null && (e.style.width = d),
        l + o
      );
    }
    function d(e, t) {
      if (((this._wrap = e), (this._attr = t), this._attr.sizes)) {
        for (var n = this._attr.sizes, r = 1, o = n.length; r < o; r++)
          if (!(n[r - 1] <= n[r])) {
            n.sort(function (e, t) {
              return e - t;
            });
            break;
          }
      } else if (t.min > t.max) {
        var a = t.min;
        ((t.min = t.max), (t.max = a));
      }
      this.fit();
    }
    d.prototype.fit = function (t, r) {
      (t === void 0 && (t = this._attr.width),
        r === void 0 && (r = this._attr.height));
      var o = this._wrap;
      if (!o.clientWidth) {
        m.push(this);
        return;
      }
      var a = s(o);
      (e.test(t)
        ? (a.style.width = t + "px")
        : t !== null && t !== "auto" && (a.style.width = t),
        e.test(r)
          ? (a.style.height = r + "px")
          : r !== null && r !== "auto" && (a.style.height = r));
      var i = null;
      this._attr.wrap || (i = a.clientWidth);
      var l = null;
      (this._attr.wrap || r !== null) && (l = a.clientHeight);
      var d;
      (this._attr.sizes
        ? (d = u(a, i, l, "px", this._attr.sizes))
        : (d = c(a, i, l, "px", this._attr.min, this._attr.max)),
        n("cr:6114").remove(a),
        n("Style").set(o, "font-size", d),
        n("cr:6108").removeClass(o, "invisible_elem"));
    };
    var m = [];
    ((d.onNodeInserted = function () {
      var e = m;
      ((m = []),
        e.forEach(function (e) {
          e.fit();
        }));
    }),
      (a.exports = d));
  },
  null,
);
