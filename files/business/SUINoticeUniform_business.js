__d(
  "SUINoticeUniform.business",
  ["cssVar", "ix", "Image.react", "createBUITypeStyle", "react"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = {
        textStyle: r("createBUITypeStyle")({
          color: "#5B5C5E",
          fontSize: "12px",
        }),
        type: {
          error: {
            icon: c.jsx(r("Image.react"), { src: u("407620") }),
            iconBackgroundColor: "#CE002F",
            messageBackgroundColor: "#FFFFFF",
            messageBorderColor: "#DADCDE",
          },
          information: {
            icon: c.jsx(r("Image.react"), { src: u("403743") }),
            iconBackgroundColor: "#066CD2",
            messageBackgroundColor: "#FFFFFF",
            messageBorderColor: "#DADCDE",
          },
          success: {
            icon: c.jsx(r("Image.react"), { src: u("376185") }),
            iconBackgroundColor: "#099A32",
            messageBackgroundColor: "#FFFFFF",
            messageBorderColor: "#DADCDE",
          },
          warning: {
            icon: c.jsx(r("Image.react"), { src: u("390679") }),
            iconBackgroundColor: "#FBA000",
            messageBackgroundColor: "#FFFFFF",
            messageBorderColor: "#DADCDE",
          },
        },
      },
      m = d;
    l.default = m;
  },
  98,
);
