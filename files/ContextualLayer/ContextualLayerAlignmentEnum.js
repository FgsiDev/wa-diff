__d(
  "ContextualLayerAlignmentEnum",
  ["$InternalEnum", "prop-types"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
        LEFT: "left",
        CENTER: "center",
        RIGHT: "right",
      }),
      s = [e.LEFT, e.CENTER, e.RIGHT];
    function u(t) {
      switch (t) {
        case e.LEFT:
          return "left";
        case e.CENTER:
          return "center";
        case e.RIGHT:
          return "right";
      }
    }
    var c = s.map(u),
      d = r("prop-types").oneOf(c),
      m = {
        left: u(e.LEFT),
        center: u(e.CENTER),
        right: u(e.RIGHT),
        values: c,
        propType: d,
      },
      p = m;
    l.default = p;
  },
  98,
);
