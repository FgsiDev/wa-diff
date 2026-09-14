__d(
  "SUIThreeStateCheckboxInputUniform.business",
  [
    "cssVar",
    "ix",
    "SUIGlyphIcon.react",
    "autoFlipStyleProps",
    "createBUITypeStyle",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = {
        activeCheckboxBackgroundColor: "#EBEDF0",
        activeCheckboxBorderColor: "#DADDE1",
        checkboxBackgroundColor: "#FFFFFF",
        checkboxBorderColor: "#DADDE1",
        checkedIcon: c.jsx(r("SUIGlyphIcon.react"), {
          srcDefault: u("495429"),
          srcDisabled: u("492920"),
          style: r("autoFlipStyleProps")({ left: "0", top: "0" }),
        }),
        disabledLabelColor: "#BEC3C9",
        disabledCheckboxBackgroundColor: "#EBEDF0",
        labelColor: "#1C1E21",
        partiallyCheckedIcon: c.jsx(r("SUIGlyphIcon.react"), {
          srcDefault: u("495440"),
          srcDisabled: u("492942"),
          style: r("autoFlipStyleProps")({ left: "0", top: "0" }),
        }),
        typeStyle: r("createBUITypeStyle")({
          color: "#1C1E21",
          fontSize: "12px",
        }),
      },
      m = d;
    l.default = m;
  },
  98,
);
