__d(
  "SUITypeaheadUniform.business",
  ["cssVar", "createBUITypeStyle"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        input: {
          backgroundColor: "#FFFFFF",
          borderColor: "#dddfe2",
          errorBorderColor: "#fa3e3e",
          focusedBorderColor: "#4080ff",
          typeStyle: r("createBUITypeStyle")({
            color: "#1d2129",
            fontSize: "12px",
          }),
          height: 28,
        },
        disabled: {
          backgroundColor: "#F5F6F7",
          borderColor: "#DADDE1",
          color: "#BEC3C9",
        },
        dropdown: {
          backgroundColor: "#FFFFFF",
          borderColor: "#ced0d4",
          boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.2)",
          itemPadding: {
            bottom: "8px",
            left: "12px",
            right: "12px",
            top: "8px",
          },
        },
        highlight: { backgroundColor: "#f6f7f9" },
      },
      u = e;
    l.default = u;
  },
  98,
);
