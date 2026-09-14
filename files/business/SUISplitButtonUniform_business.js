__d(
  "SUISplitButtonUniform.business",
  ["cssVar", "ix", "Image.react", "SUIGlyphIcon.react", "react"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = {
        chevronPadding: "4px",
        use: {
          confirm: {
            chevron: c.jsx(r("Image.react"), { src: u("483254") }),
            dividerColor: "#FFFFFF",
          },
          default: {
            chevron: c.jsx(r("SUIGlyphIcon.react"), {
              srcDefault: u("481883"),
              srcDisabled: u("482773"),
            }),
            dividerColor: "#CCD0D5",
          },
          special: {
            chevron: c.jsx(r("Image.react"), { src: u("483254") }),
            dividerColor: "#FFFFFF",
          },
          flat: {
            chevron: c.jsx(r("SUIGlyphIcon.react"), {
              srcDefault: u("481883"),
              srcDisabled: u("482773"),
            }),
            dividerColor: "#DADDE1",
          },
          flatWhite: {
            chevron: c.jsx(r("Image.react"), { src: u("483254") }),
            dividerColor: "#FFFFFF",
          },
        },
      },
      m = d;
    l.default = m;
  },
  98,
);
