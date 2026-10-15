__d(
  "CometVirtualizationSharedMargin",
  [
    "CometDebounce",
    "VirtualizationConfig",
    "cometVirtualizationMarginBounds",
    "cometVirtualizationMarginStep",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    function s(e, t) {
      return JSON.stringify([
        e,
        t.initialTopBottomMargin,
        t.initialLeftRightMargin,
        t.isInfiniteScrollUp,
        t.readAheadMarginMax,
      ]);
    }
    function u(t) {
      var n, r;
      return (n = (r = e.get(t)) == null ? void 0 : r.margin) != null
        ? n
        : null;
    }
    function c(e, t) {
      ((e.margin = t),
        Array.from(e.listeners).forEach(function (e) {
          return e();
        }));
    }
    function d(t, n, r) {
      var a = e.get(t);
      if (a != null) {
        var i = a.config,
          l = o("cometVirtualizationMarginStep").computeNextMargin(
            a.margin,
            n,
            r,
            o("cometVirtualizationMarginBounds").computeMarginBounds(
              i.initialTopBottomMargin,
              window.innerHeight,
              i.isInfiniteScrollUp,
              i.readAheadMarginMax,
            ),
          );
        l !== a.margin && c(a, l);
      }
    }
    function m(e) {
      return e instanceof Element ? e.scrollTop : e.scrollY;
    }
    function p(e, t, n) {
      var a = r("CometDebounce")(
          function () {
            var n = m(t),
              r = n > l.lastScrollTop;
            ((l.lastScrollTop = n), d(e, r, l.scrollSpeed.weightedSpeed));
          },
          { wait: o("VirtualizationConfig").SCROLL_HANDLING_DEBOUNCE_MS },
        ),
        i = function () {
          return a();
        },
        l = {
          detach: function () {
            (t.removeEventListener("scroll", i), a.reset());
          },
          lastScrollTop: m(t),
          scrollSpeed: n,
          subscribers: 0,
        };
      return (t.addEventListener("scroll", i, { passive: !0 }), l);
    }
    function _(t, n, r, o, a, i) {
      var l,
        s = e.get(t);
      s == null &&
        ((s = {
          attachments: new Map(),
          config: babelHelpers.extends({}, n),
          listeners: new Set(),
          margin: r,
        }),
        e.set(t, s));
      var u = s,
        c = (l = u.attachments.get(o)) != null ? l : p(t, o, a);
      (u.attachments.set(o, c),
        c.subscribers++,
        (c.scrollSpeed = a),
        u.listeners.add(i));
      var d = !0;
      return function () {
        d &&
          ((d = !1),
          u.listeners.delete(i),
          --c.subscribers === 0 && (c.detach(), u.attachments.delete(o)));
      };
    }
    ((l.getSharedMarginKey = s),
      (l.readSharedMargin = u),
      (l.stepSharedMargin = d),
      (l.subscribeToSharedMargin = _));
  },
  98,
);
