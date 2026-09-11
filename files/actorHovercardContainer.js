__d(
  "actorHovercardContainer",
  ["ActorHovercard.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      return e == null
        ? null
        : function (n) {
            return s.jsx(r("ActorHovercard.react"), {
              actorID: e,
              position: "below",
              children: n.children,
            });
          };
    }
    l.default = u;
  },
  98,
);
