__d(
  "WebBloksAdPreviewVideoV2",
  ["AdPreviewWebBloksGlobalRefMap", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef;
    function m(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.node,
        r = n.get("video_versions"),
        a = r == null ? void 0 : r[0],
        i = d(null),
        l;
      if (t[0] !== n) {
        var u;
        ((l =
          (u = n.get("player_identifier")) == null
            ? void 0
            : u.get("media_id")),
          (t[0] = n),
          (t[1] = l));
      } else l = t[1];
      var m = l,
        p,
        _;
      (t[2] !== m
        ? ((p = function () {
            if (m != null)
              return (
                i.current != null &&
                  !o(
                    "AdPreviewWebBloksGlobalRefMap",
                  ).webBloksVideoPlayerIDToRefMap.has(m) &&
                  o(
                    "AdPreviewWebBloksGlobalRefMap",
                  ).webBloksVideoPlayerIDToRefMap.set(m, i),
                function () {
                  o(
                    "AdPreviewWebBloksGlobalRefMap",
                  ).webBloksVideoPlayerIDToRefMap.delete(m);
                }
              );
          }),
          (_ = [i, m]),
          (t[2] = m),
          (t[3] = p),
          (t[4] = _))
        : ((p = t[3]), (_ = t[4])),
        c(p, _));
      var f = a == null ? void 0 : a.get("url");
      if (f == null) return null;
      var g;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = { className: "xh8yej3 x67bb7w" }), (t[5] = g))
        : (g = t[5]);
      var h;
      return (
        t[6] !== f
          ? ((h = s.jsx(
              "video",
              babelHelpers.extends({}, g, {
                controls: !0,
                controlsList:
                  "nofullscreen nodownload noremoteplayback noplaybackrate",
                disablePictureInPicture: !0,
                muted: !0,
                ref: i,
                src: f,
              }),
            )),
            (t[6] = f),
            (t[7] = h))
          : (h = t[7]),
        h
      );
    }
    l.default = m;
  },
  98,
);
