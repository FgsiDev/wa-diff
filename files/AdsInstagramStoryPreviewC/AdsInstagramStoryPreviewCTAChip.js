__d(
  "AdsInstagramStoryPreviewCTAChip",
  ["react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        chip: {
          borderStartStartRadius: "x1ua1ujl",
          borderStartEndRadius: "xksyday",
          borderEndEndRadius: "xshg46c",
          borderEndStartRadius: "xlej2ay",
          color: "xg32yw2",
          fontSize: "x1pg5gke",
          justifyContent: "xl56j7k",
          marginTop: "x1ok221b",
          paddingInlineEnd: "xf159sx",
          paddingInlineStart: "xmzvs34",
          paddingTop: "x1nn3v0j",
          paddingBottom: "x1120s5i",
          position: "x10l6tqk",
          $$css: !0,
        },
        chipBackgroundColor: function (t) {
          return [
            { backgroundColor: t != null ? "xl8spv7" : t, $$css: !0 },
            { "--x-backgroundColor": t != null ? t : void 0 },
          ];
        },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(7),
        a = t.backgroundColor,
        i = t.text,
        l = a === void 0 ? "#1c1e21" : a,
        s;
      n[0] !== l
        ? ((s = (e || (e = r("stylex"))).props(
            c.chip,
            c.chipBackgroundColor(l),
          )),
          (n[0] = l),
          (n[1] = s))
        : (s = n[1]);
      var d;
      n[2] !== i
        ? ((d = u.jsx("span", { children: i })), (n[2] = i), (n[3] = d))
        : (d = n[3]);
      var m;
      return (
        n[4] !== s || n[5] !== d
          ? ((m = u.jsx("div", babelHelpers.extends({}, s, { children: d }))),
            (n[4] = s),
            (n[5] = d),
            (n[6] = m))
          : (m = n[6]),
        m
      );
    }
    l.default = d;
  },
  98,
);
