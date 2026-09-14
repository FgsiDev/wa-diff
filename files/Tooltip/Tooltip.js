__d(
  "Tooltip",
  [
    "fbt",
    "invariant",
    "Arbiter",
    "AsyncRequest",
    "CSS",
    "ContextualLayer",
    "ContextualLayerAutoFlip",
    "DOM",
    "Event",
    "Style",
    "TooltipData",
    "Vector",
    "emptyFunction",
    "getElementText",
    "getInlineBoundingRect",
    "getOrCreateDOMID",
    "gkx",
    "nl2br",
    "setImmediate",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = null,
      u = null,
      c = null,
      d = null,
      m = null,
      p = null,
      _ = null,
      f = !1,
      g = [],
      h = [];
    function y() {
      if (!m) {
        ((p = n("DOM").create("div", {
          className: "tooltipContent",
          "data-testid": "tooltip_testid",
        })),
          (_ = n("getOrCreateDOMID")(p)));
        var e = n("DOM").create("i", { className: "arrow" }),
          t = n("DOM").create("div", { className: "uiTooltipX" }, [p, e]);
        ((m = new (n("ContextualLayer"))({}, t)),
          m.shouldSetARIAProperties(!1),
          m.enableBehavior(n("ContextualLayerAutoFlip")),
          n("gkx")("25574") && (m.getRoot().style.pointerEvents = "none"));
      }
    }
    function C(e, t) {
      (v._show(e, l._(/*BTDS*/ "Loading...")),
        new (n("AsyncRequest"))(t)
          .setHandler(function (t) {
            (v._show(e, t.getPayload()), m && m.updatePosition());
          })
          .setErrorHandler(n("emptyFunction"))
          .send());
    }
    var b;
    n("Event").listen(document.documentElement, "mouseover", function (e) {
      ((b = e),
        n("setImmediate")(function () {
          b = null;
        }));
    });
    var v = babelHelpers.extends({}, n("TooltipData"), {
      isActive: function (n) {
        return n === e;
      },
      process: function (r, o) {
        if (n("DOM").contains(r, o) && r !== e) {
          v.fetchIfNecessary(r);
          var t = v._get(r);
          if (t.suppress) return;
          t.delay ? v._showWithDelay(r, t.delay) : v.show(r);
        }
      },
      fetchIfNecessary: function (t) {
        var e = t.getAttribute("data-tooltip-uri");
        e && (t.removeAttribute("data-tooltip-uri"), C(t, e));
      },
      suspend: function () {
        f = !0;
      },
      hide: function () {
        var t = e,
          r,
          o = f;
        f = !1;
        try {
          (n("Arbiter").inform("tooltip/requesthide", { context: t }), (r = f));
        } finally {
          f = o;
        }
        r || (t && v.commitHide(t));
      },
      commitHide: function (r) {
        if (!u || r !== u) {
          if (r && m)
            for (m.hide(), e = null; g.length; ) {
              var t;
              (t = g.pop()) == null || t.remove();
            }
          n("Arbiter").inform("tooltip/hide", { context: r });
        }
      },
      _show: function (t, n) {
        (v._store({ context: t, content: n }), v.isActive(t) && v.show(t));
      },
      show: function (t) {
        var e,
          r = f;
        f = !1;
        try {
          (n("Arbiter").inform("tooltip/requestshow", { context: t }), (e = f));
        } finally {
          f = r;
        }
        e || v.commitShow(t);
      },
      commitShow: function (r) {
        var t = function () {
            r.removeAttribute("aria-describedby");
            var e = v._get(r);
            (e.className && m && n("CSS").removeClass(m.getRoot(), e.className),
              v.hide());
          },
          o = function (o) {
            n("DOM").contains(e, o.getTarget()) || t();
          };
        ((u = r),
          y(),
          r !== e && v.commitHide(e),
          (u = null),
          r !== e && n("Arbiter").inform("tooltip/beforeshow", { context: r }));
        var a = v._get(r);
        if (!(a.suppress || v.allSuppressed)) {
          var i = a.content;
          if (a.overflowDisplay) {
            if (r.offsetWidth >= r.scrollWidth) return;
            i || (i = n("getElementText")(r));
          }
          var l = i
              ? function () {
                  (r.setAttribute("aria-describedby", _), m && m.show());
                }
              : function () {},
            c = 0,
            d = a.offsetY ? parseInt(a.offsetY, 10) : 0;
          if (a.position === "left" || a.position === "right")
            d = (r.offsetHeight - 28) / 2;
          else if (a.alignH !== "center") {
            var f = r.offsetWidth;
            f < 32 && (c = ((f - 32) / 2) * (a.alignH === "right" ? -1 : 1));
          }
          var h = b
            ? n("Vector").getEventPosition(b)
            : n("Vector").getElementPosition(r);
          if (
            (m || s(0, 4328),
            m
              .setContextWithBounds(r, n("getInlineBoundingRect")(r, h))
              .setOffsetX(c)
              .setOffsetY(d)
              .setPosition(a.position)
              .setAlignment(a.alignH),
            typeof i == "string")
          ) {
            n("CSS").addClass(m.getRoot(), "invisible_elem");
            var C = n("DOM").create("span", {}, n("nl2br")(i)),
              S = n("DOM").create("div", { className: "tooltipText" }, C);
            (n("DOM").setContent(p, S),
              l(),
              n("CSS").removeClass(m.getRoot(), "invisible_elem"));
          } else (n("DOM").setContent(p, i), l());
          g.push(
            n("Event").listen(document.documentElement, "mouseover", o),
            n("Event").listen(document.documentElement, "focusin", o),
          );
          var R = n("Style").getScrollParent(r);
          (R !== window && g.push(n("Event").listen(R, "scroll", t)),
            a.persistOnClick || g.push(n("Event").listen(r, "click", t)),
            a.className && n("CSS").addClass(m.getRoot(), a.className),
            (e = r));
        }
      },
      _showWithDelay: function (t, r) {
        if ((t !== c && v._clearDelay(), !d)) {
          var e = function (t) {
            n("DOM").contains(c, t.getTarget()) || v._clearDelay();
          };
          (h.push(
            n("Event").listen(document.documentElement, "mouseover", e),
            n("Event").listen(document.documentElement, "focusin", e),
          ),
            (c = t),
            (d = window.setTimeout(function () {
              (v._clearDelay(), v.show(t));
            }, r)));
        }
      },
      _clearDelay: function () {
        for (window.clearTimeout(d), c = null, d = null; h.length; )
          h.pop().remove();
      },
    });
    (n("Event").listen(window, "scroll", v.hide), (a.exports = v));
  },
  130,
);
