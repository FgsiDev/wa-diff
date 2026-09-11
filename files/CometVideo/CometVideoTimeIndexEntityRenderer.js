__d(
  "CometVideoTimeIndexEntityRenderer",
  [
    "CometVideoTimeIndexEntityRenderer_entity.graphql",
    "FDSLink.react",
    "react",
    "react-compiler-runtime",
    "useCometVideoPlayerStateAndController",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    e !== void 0 || (e = n("CometVideoTimeIndexEntityRenderer_entity.graphql"));
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.entity,
        a = e.node,
        i = r("useCometVideoPlayerStateAndController")();
      if (n.time_index == null || i == null) return a;
      var l;
      t[0] !== n.time_index || t[1] !== i
        ? ((l = function () {
            n.time_index != null && i.controller.seek(n.time_index);
          }),
          (t[0] = n.time_index),
          (t[1] = i),
          (t[2] = l))
        : (l = t[2]);
      var s;
      t[3] !== a
        ? ((s = u.jsx("strong", { children: a })), (t[3] = a), (t[4] = s))
        : (s = t[4]);
      var c;
      return (
        t[5] !== l || t[6] !== s
          ? ((c = u.jsx(r("FDSLink.react"), {
              onClick: l,
              ref: d,
              children: s,
            })),
            (t[5] = l),
            (t[6] = s),
            (t[7] = c))
          : (c = t[7]),
        c
      );
    }
    function d(e) {
      var t = null;
      e &&
        ((e.onmousedown = function () {
          t = document.activeElement;
        }),
        (e.onmouseup = function () {
          (e.blur(), t && t.focus());
        }));
    }
    var m = function (t, n) {
      return u.jsx(c, { entity: n, node: t });
    };
    l.default = m;
  },
  98,
);
