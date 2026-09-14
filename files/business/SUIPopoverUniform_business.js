__d(
  "SUIPopoverUniform.business",
  ["cssVar", "ix", "SUIGlyphIcon.react", "createBUITypeStyle", "react"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = {
        backgroundColor: "#FFFFFF",
        border: "1px solid #DADCDE",
        boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.2)",
        icon: c.jsx(r("SUIGlyphIcon.react"), {
          srcDefault: u("403741"),
          srcHover: u("403742"),
        }),
        footer: { borderTop: "1px solid #DADCDE" },
        showArrow: !0,
        title: {
          typeStyle: r("createBUITypeStyle")({
            color: "#1C1D1D",
            fontSize: "14px",
            fontWeight: "bold",
          }),
        },
        typeStyle: r("createBUITypeStyle")({
          color: "#1C1D1D",
          fontSize: "12px",
          fontWeight: "normal",
        }),
      },
      m = d;
    l.default = m;
  },
  98,
);
