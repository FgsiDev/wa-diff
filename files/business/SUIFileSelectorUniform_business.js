__d(
  "SUIFileSelectorUniform.business",
  ["cssVar", "createBUITypeStyle"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        backgroundColor: { default: "#FFFFFF", hovering: "#FFFFFF" },
        borderColor: { default: "#dddfe2", error: "#fa3e3e" },
        typeStyles: {
          content: r("createBUITypeStyle")({
            color: "#4b4f56",
            fontSize: "12px",
          }),
          header: r("createBUITypeStyle")({
            color: "#1d2129",
            fontSize: "24px",
            fontWeight: "bold",
          }),
        },
      },
      u = e;
    l.default = u;
  },
  98,
);
