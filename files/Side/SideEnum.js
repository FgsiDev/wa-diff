__d(
  "SideEnum",
  ["$InternalEnum", "prop-types"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left",
      }),
      s = [e.TOP, e.RIGHT, e.BOTTOM, e.LEFT];
    function u(t) {
      switch (t) {
        case e.TOP:
          return "top";
        case e.RIGHT:
          return "right";
        case e.BOTTOM:
          return "bottom";
        case e.LEFT:
          return "left";
      }
    }
    var c = s.map(u),
      d = r("prop-types").oneOf(c),
      m = {
        top: u(e.TOP),
        right: u(e.RIGHT),
        bottom: u(e.BOTTOM),
        left: u(e.LEFT),
        values: c,
        propType: d,
      },
      p = m;
    l.default = p;
  },
  98,
);
