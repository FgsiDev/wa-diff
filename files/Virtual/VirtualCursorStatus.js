__d(
  "VirtualCursorStatus",
  ["UserAgent", "cr:5662", "emptyFunction", "setImmediate"],
  function (t, n, r, o, a, i, l) {
    var e = null,
      s = null;
    function u() {
      s ||
        (s = n("cr:5662").listen(window, "blur", function () {
          ((e = null), c());
        }));
    }
    function c() {
      s && (s.remove(), (s = null));
    }
    function d(t) {
      ((e = t.keyCode), u());
    }
    function m() {
      ((e = null), c());
    }
    if (
      typeof window != "undefined" &&
      window.document &&
      window.document.createElement
    ) {
      var p = document.documentElement;
      if (p) {
        if (p.addEventListener)
          (p.addEventListener("keydown", d, !0),
            p.addEventListener("keyup", m, !0));
        else if (p.attachEvent) {
          var _ = p.attachEvent;
          (_("onkeydown", d), _("onkeyup", m));
        }
      }
    }
    var f = {
        isKeyDown: function () {
          return !!e;
        },
        getKeyDownCode: function () {
          return e;
        },
      },
      g = !1,
      h = !1,
      y = null,
      C = !1;
    function b(e) {
      var t = new Set(),
        n = f.isKeyDown(),
        o = e.WEBKIT_FORCE_AT_MOUSE_DOWN,
        a = e.clientX,
        i = e.clientY,
        l = e.isTrusted,
        s = e.mozInputSource,
        u = e.offsetX,
        c = e.offsetY,
        d = e.webkitForce,
        m = e.target,
        p = m.clientHeight,
        _ = m.clientWidth;
      return (
        a === 0 &&
          i === 0 &&
          u >= 0 &&
          c >= 0 &&
          h &&
          l &&
          s == null &&
          t.add("Chrome"),
        g &&
          h &&
          !n &&
          d != null &&
          o != null &&
          d < o &&
          u === 0 &&
          c === 0 &&
          s == null &&
          t.add("Safari-edge"),
        a === 0 &&
          i === 0 &&
          u < 0 &&
          c < 0 &&
          h &&
          s == null &&
          t.add("Safari-old"),
        !g &&
          !h &&
          !n &&
          l &&
          r("UserAgent").isBrowser("IE >= 10") &&
          s == null &&
          (a < 0 && i < 0
            ? t.add("IE")
            : (u < 0 || u > _) && (c < 0 || c > p) && t.add("MSIE")),
        s === 0 && l && t.add("Firefox"),
        t
      );
    }
    function v() {
      ((g = !0),
        r("setImmediate")(function () {
          g = !1;
        }));
    }
    function S() {
      ((h = !0),
        r("setImmediate")(function () {
          h = !1;
        }));
    }
    function R(e, t) {
      y === null && (y = b(e));
      var n = y;
      C = n.size > 0;
      var o =
        e.target.getAttribute("data-accessibilityid") ===
        "virtual_cursor_trigger";
      (t(C, n, o),
        r("setImmediate")(function () {
          ((C = !1), (y = null));
        }));
    }
    function L() {
      return C;
    }
    function E(e, t) {
      t === void 0 && (t = r("emptyFunction"));
      var o = function (n) {
        return R(n, t);
      };
      e.addEventListener("click", o);
      var a = n("cr:5662").listen(e, "mousedown", v),
        i = n("cr:5662").listen(e, "mouseup", S);
      return {
        remove: function () {
          (e.removeEventListener("click", o), a.remove(), i.remove());
        },
      };
    }
    ((l.add = E), (l.isVirtualCursorTriggered = L));
  },
  98,
);
