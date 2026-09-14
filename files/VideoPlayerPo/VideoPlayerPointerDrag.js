__d(
  "VideoPlayerPointerDrag",
  ["react", "react-compiler-runtime", "useResizeObserver", "useStable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef,
      d = s.useState;
    function m() {
      var e = o("react-compiler-runtime").c(5),
        t = c(null),
        n = c(null),
        a;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = function (r, o) {
            ((t.current = o.getBoundingClientRect()), (n.current = o));
          }),
          (e[0] = a))
        : (a = e[0]);
      var i = r("useResizeObserver")(a),
        l;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function () {
            return function () {
              var e = n.current;
              e ? (t.current = e.getBoundingClientRect()) : (t.current = null);
            };
          }),
          (e[1] = l))
        : (l = e[1]);
      var s = r("useStable")(l),
        u;
      return (
        e[2] !== s || e[3] !== i
          ? ((u = {
              invalidateRootRect: s,
              rootRectRef: t,
              rootSizeRefCallback: i,
            }),
            (e[2] = s),
            (e[3] = i),
            (e[4] = u))
          : (u = e[4]),
        u
      );
    }
    function p(e, t) {
      if (t == null) return null;
      var n = Math.max(0, Math.min(t.width, e.clientX - t.left)),
        r = Math.max(0, Math.min(t.height, e.clientY - t.top));
      return {
        ratioX: t.width > 0 ? n / t.width : 0,
        ratioY: t.height > 0 ? r / t.height : 0,
      };
    }
    function _(e, t) {
      var n = e.changedTouches;
      if (t == null || !n) return null;
      for (var r = 0; r < n.length; ++r) {
        var o = n[r];
        if (o.identifier === t)
          return { clientX: o.clientX, clientY: o.clientY };
      }
      return null;
    }
    function f(e, t) {
      var n = e;
      switch (t.type) {
        case "start":
          n = babelHelpers.extends({}, e, {
            clientX: t.clientX,
            clientY: t.clientY,
            dragState: "dragging",
            lastEffect: e.dragState === "idle" ? "start" : e.lastEffect,
          });
          break;
        case "move":
          if (e.dragState !== "dragging") break;
          n = {
            clientX: t.clientX,
            clientY: t.clientY,
            dragState: "dragging",
            lastEffect: "move",
          };
          break;
        case "end":
          if (e.dragState !== "dragging") break;
          n = {
            clientX: t.clientX,
            clientY: t.clientY,
            dragState: "idle",
            lastEffect: "end",
          };
          break;
        case "cancel":
          if (e.dragState !== "dragging") break;
          n = {
            clientX: e.clientX,
            clientY: e.clientY,
            dragState: "idle",
            lastEffect: "cancel",
          };
          break;
        default:
          break;
      }
      return n.dragState !== e.dragState ||
        n.lastEffect !== e.lastEffect ||
        n.clientX !== e.clientX ||
        n.clientY !== e.clientY
        ? n
        : e;
    }
    var g = { clientX: 0, clientY: 0, dragState: "idle", lastEffect: null },
      h = function () {
        return window.navigator.userAgent.indexOf("MSIE") >= 0;
      };
    function y(e, t, n) {
      var r = g,
        o = null,
        a = null,
        i = function (n) {
          ((r = f(r, n)), e(r));
        },
        l = function (n) {
          i({ clientX: n.clientX, clientY: n.clientY, type: "move" });
          var e = t.current.onDragMoveSync;
          e == null || e(r);
        },
        s = function (n) {
          (o && o(),
            i({ clientX: n.clientX, clientY: n.clientY, type: "end" }));
          var e = t.current.onDragEndSync;
          e == null || e(r);
        },
        u = function () {
          (o && o(), i({ type: "cancel" }));
          var e = t.current.onDragCancelSync;
          e == null || e(r);
        },
        c = function (o) {
          var e = _(o, n.current);
          if (e != null) {
            i({ clientX: e.clientX, clientY: e.clientY, type: "move" });
            var a = t.current.onDragMoveSync;
            a == null || a(r);
          }
        },
        d = function (o) {
          var e = _(o, n.current);
          if (e != null) {
            (a && a(),
              i({ clientX: e.clientX, clientY: e.clientY, type: "end" }));
            var l = t.current.onDragEndSync;
            l == null || l(r);
          }
        },
        m = d;
      return {
        destroy: function () {
          (o && o(), a && a());
        },
        onMouseDown: function (n) {
          (h() || n.preventDefault(),
            i({ clientX: n.clientX, clientY: n.clientY, type: "start" }));
          var e = t.current.onDragStartSync;
          (e == null || e(r),
            o ||
              (window.addEventListener("mousemove", l),
              window.addEventListener("mouseup", s),
              window.addEventListener("blur", u),
              window.addEventListener("mouseleave", u),
              (o = function () {
                ((o = null),
                  window.removeEventListener("mousemove", l),
                  window.removeEventListener("mouseup", s),
                  window.removeEventListener("blur", u),
                  window.removeEventListener("mouseleave", u));
              })));
        },
        onTouchStart: function (o) {
          o.preventDefault();
          var e = o.changedTouches[0];
          e != null && (n.current = e.identifier);
          var l = _(o, n.current);
          if (l != null) {
            i({ clientX: l.clientX, clientY: l.clientY, type: "start" });
            var s = t.current.onDragStartSync;
            (s == null || s(r),
              a ||
                (window.addEventListener("touchmove", c),
                window.addEventListener("touchend", d),
                window.addEventListener("touchcancel", m),
                window.addEventListener("blur", u),
                (a = function () {
                  ((a = null),
                    window.removeEventListener("touchmove", c),
                    window.removeEventListener("touchend", d),
                    window.removeEventListener("touchcancel", m),
                    window.removeEventListener("blur", u));
                })));
          }
        },
      };
    }
    function C(e, t) {
      var n = o("react-compiler-runtime").c(4),
        r,
        a;
      (n[0] !== t || n[1] !== e
        ? ((r = function () {
            var n = t.current,
              r = n.onDragCancel,
              o = n.onDragEnd,
              a = n.onDragMove,
              i = n.onDragStart;
            switch (e.lastEffect) {
              case "start": {
                i(e);
                return;
              }
              case "move": {
                a(e);
                return;
              }
              case "end": {
                o(e);
                return;
              }
              case "cancel": {
                r(e);
                return;
              }
            }
          }),
          (a = [e, t]),
          (n[0] = t),
          (n[1] = e),
          (n[2] = r),
          (n[3] = a))
        : ((r = n[2]), (a = n[3])),
        u(r, a));
    }
    function b(e, t, n) {
      var a = o("react-compiler-runtime").c(13),
        i = d(g),
        l = i[0],
        s = i[1],
        c;
      a[0] !== e || a[1] !== t
        ? ((c = function () {
            return y(s, e, t);
          }),
          (a[0] = e),
          (a[1] = t),
          (a[2] = c))
        : (c = a[2]);
      var m = r("useStable")(c),
        p = m.destroy,
        _ = m.onMouseDown,
        f = m.onTouchStart,
        h,
        C;
      (a[3] !== p
        ? ((h = function () {
            return p;
          }),
          (C = [p]),
          (a[3] = p),
          (a[4] = h),
          (a[5] = C))
        : ((h = a[4]), (C = a[5])),
        u(h, C));
      var b;
      a[6] !== _ ||
      a[7] !== f ||
      a[8] !== (n == null ? void 0 : n.hasTouchEvents)
        ? ((b = {
            onClick: function (t) {
              (t.stopPropagation(), t.preventDefault());
            },
            onMouseDown: _,
            onTouchStart:
              (n == null ? void 0 : n.hasTouchEvents) === !0 ? f : void 0,
          }),
          (a[6] = _),
          (a[7] = f),
          (a[8] = n == null ? void 0 : n.hasTouchEvents),
          (a[9] = b))
        : (b = a[9]);
      var v;
      return (
        a[10] !== l || a[11] !== b
          ? ((v = { dragState: l, rootProps: b }),
            (a[10] = l),
            (a[11] = b),
            (a[12] = v))
          : (v = a[12]),
        v
      );
    }
    function v(e, t) {
      var n = o("react-compiler-runtime").c(7),
        r = c(e),
        a = c(null),
        i,
        l;
      (n[0] !== e
        ? ((i = function () {
            r.current = e;
          }),
          (l = [e]),
          (n[0] = e),
          (n[1] = i),
          (n[2] = l))
        : ((i = n[1]), (l = n[2])),
        u(i, l));
      var s = b(r, a, t),
        d = s.dragState,
        m = s.rootProps;
      C(d, r);
      var p = d.dragState === "dragging",
        _;
      return (
        n[3] !== d || n[4] !== m || n[5] !== p
          ? ((_ = { dragState: d, isDragging: p, rootProps: m }),
            (n[3] = d),
            (n[4] = m),
            (n[5] = p),
            (n[6] = _))
          : (_ = n[6]),
        _
      );
    }
    ((l.usePointerDragResizeObserver = m),
      (l.computePointerOffsetRatio = p),
      (l.usePointerDrag = v));
  },
  98,
);
