__d(
  "SUISelectorOptionUniform.business",
  ["cssVar", "ix", "SUIGlyphIcon.react", "createBUITypeStyle", "react"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = {
        activeBackgroundColor: "#DADDE1",
        activeColor: "#1C1E21",
        color: "#1C1E21",
        descriptionColor: "#606770",
        descriptionSelectedColor: "#606770",
        disabledBackgroundColor: "#F5F6F7",
        disabledColor: "#606770",
        highlightedBackgroundColor: "#F5F6F7",
        highlightedColor: "#1C1E21",
        iconMargin: { left: "0", right: "8px" },
        padding: { bottom: "6px", left: "32px", right: "24px", top: "6px" },
        paddingWhenNoValue: {
          bottom: "6px",
          left: "12px",
          right: "24px",
          top: "6px",
        },
        selectedBackgroundColor: "#ECF3FF",
        selectedColor: "#1C1E21",
        selectedIcon: c.jsx(r("SUIGlyphIcon.react"), {
          srcDefault: u("495838"),
          style: { position: "relative", top: -1 },
        }),
        selectedIconMarginRight: "8px",
        selectedTypeStyle: r("createBUITypeStyle")({
          color: "#1C1E21",
          fontSize: "12px",
          fontWeight: "bold",
        }),
        typeStyle: r("createBUITypeStyle")({
          color: "#1C1E21",
          fontSize: "12px",
          fontWeight: "normal",
        }),
      },
      m = d;
    l.default = m;
  },
  98,
);
