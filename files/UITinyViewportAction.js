__d(
  "UITinyViewportAction",
  [
    "Arbiter",
    "ArbiterMixin",
    "CSS",
    "Event",
    "FullScreen",
    "getDocumentScrollElement",
    "queryThenMutateDOM",
    "throttle",
  ],
  function (t, n, r, o, a, i, l) {
    var e = document.documentElement,
      s,
      u,
      c,
      d,
      m = !1,
      p = !1,
      _ = !1,
      f = babelHelpers.extends({}, r("ArbiterMixin"), {
        init: function (n) {
          var t = r("throttle")(function () {
            r("FullScreen").isFullScreen() ||
              r("queryThenMutateDOM")(
                function () {
                  ((d = d || r("getDocumentScrollElement")()),
                    (u = e.clientWidth < d.scrollWidth - 1),
                    (c = e.clientHeight < 400),
                    (s = c || u));
                },
                function () {
                  if (s !== m || u !== p || c !== _) {
                    var t;
                    ((t = o("CSS")).conditionClass(e, "tinyViewport", s),
                      t.conditionClass(e, "tinyWidth", u),
                      t.conditionClass(e, "tinyHeight", c),
                      t.conditionClass(e, "canHaveFixedElements", !s),
                      f.inform("change", s),
                      r("Arbiter").inform(
                        "tinyViewport/change",
                        { tiny: s, tinyWidth: u, tinyHeight: c },
                        "state",
                      ),
                      (m = s),
                      (p = u),
                      (_ = c));
                  }
                },
                "TinyViewport",
              );
          });
          (t(),
            r("Arbiter").subscribe("quickling/response", t),
            r("Event").listen(window, "resize", t),
            r("FullScreen").subscribe("changed", t));
        },
        isTiny: function () {
          return s;
        },
        isTinyWidth: function () {
          return u;
        },
        isTinyHeight: function () {
          return c;
        },
      }),
      g = f;
    l.default = g;
  },
  98,
);
