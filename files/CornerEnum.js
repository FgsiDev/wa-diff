__d(
  "CornerEnum",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
      TopLeft: "topLeft",
      TopRight: "topRight",
      BottomRight: "bottomRight",
      BottomLeft: "bottomLeft",
    });
    function l(t) {
      switch (t) {
        case e.TopLeft:
          return "topLeft";
        case e.TopRight:
          return "topRight";
        case e.BottomRight:
          return "bottomRight";
        case e.BottomLeft:
          return "bottomLeft";
      }
    }
    var s = [l(e.TopLeft), l(e.TopRight), l(e.BottomRight), l(e.BottomLeft)],
      u = {
        topLeft: l(e.TopLeft),
        topRight: l(e.TopRight),
        bottomRight: l(e.BottomRight),
        bottomLeft: l(e.BottomLeft),
        values: s,
      },
      c = u;
    i.default = c;
  },
  66,
);
