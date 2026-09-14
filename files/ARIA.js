__d(
  "ARIA",
  ["DOM", "emptyFunction", "ge", "getOrCreateDOMID", "joinClasses"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = function () {
        ((e = r("ge")("ariaAssertiveAlert")),
          e ||
            ((e = r("DOM").create("div", {
              id: "ariaAssertiveAlert",
              className: r("joinClasses")(
                "accessible_elem",
                "accessible_elem_offset",
              ),
              "aria-live": "assertive",
            })),
            r("DOM").appendContent(document.body, e)),
          (s = r("ge")("ariaPoliteAlert")),
          s ||
            ((s = e.cloneNode(!1)),
            s.setAttribute("id", "ariaPoliteAlert"),
            s.setAttribute("aria-live", "polite"),
            r("DOM").appendContent(document.body, s)),
          (u = r("emptyFunction")));
      };
    function c(t, n) {
      u();
      var o = n ? e : s;
      r("DOM").setContent(o, t);
    }
    function d(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
        o < t;
        o++
      )
        n[o - 1] = arguments[o];
      var a = n
        .map(function (e) {
          return r("getOrCreateDOMID")(e);
        })
        .join(" ");
      e.setAttribute("aria-controls", a);
    }
    function m(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
        o < t;
        o++
      )
        n[o - 1] = arguments[o];
      var a = n
        .map(function (e) {
          return r("getOrCreateDOMID")(e);
        })
        .join(" ");
      e.setAttribute("aria-describedby", a);
    }
    function p(e, t) {
      e.setAttribute("aria-owns", r("getOrCreateDOMID")(t));
    }
    function _(e, t) {
      var n = r("getOrCreateDOMID")(t);
      (e.setAttribute("aria-controls", n),
        e.setAttribute("aria-haspopup", "true"));
      var o = e.getAttribute("role") || "";
      o && e.setAttribute("role", o);
    }
    function f(e) {
      c(e, !0);
    }
    function g(e) {
      c(e, !1);
    }
    ((l.controls = d),
      (l.describedBy = m),
      (l.owns = p),
      (l.setPopup = _),
      (l.announce = f),
      (l.notify = g));
  },
  98,
);
