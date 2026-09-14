__d(
  "SUIButtonUniform.business",
  ["cssVar", "createBUITypeStyle"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        height: { normal: 28, short: 24, tall: 36 },
        padding: {
          normal: { button: "12px", icon: "8px", onlyIcon: "6px" },
          short: { button: "8px", icon: "4px", onlyIcon: "4px" },
          tall: { button: "20px", icon: "8px", onlyIcon: "10px" },
        },
        typeStyle: r("createBUITypeStyle")({
          color: "#444950",
          fontSize: "12px",
          fontWeight: "bold",
        }),
        use: {
          default: {
            active: {
              background: "#DADDE1",
              borderColor: "#DADDE1",
              color: "#444950",
            },
            disabled: {
              background: "#F5F6F7",
              borderColor: "#EBEDF0",
              color: "#BEC3C9",
            },
            hover: {
              background: "#EBEDF0",
              borderColor: "#DADDE1",
              color: "#444950",
            },
            normal: {
              background: "#F5F6F7",
              borderColor: "#DADDE1",
              color: "#444950",
            },
          },
          confirm: {
            active: {
              background: "#043B87",
              borderColor: "#043B87",
              color: "#FFFFFF",
            },
            disabled: {
              background: "#B0D5FF",
              borderColor: "#B0D5FF",
              color: "#FFFFFF",
            },
            hover: {
              background: "#0E52B0",
              borderColor: "#0E52B0",
              color: "#FFFFFF",
            },
            normal: {
              background: "#1877F2",
              borderColor: "#1877F2",
              color: "#FFFFFF",
            },
          },
          special: {
            active: {
              background: "#006900",
              borderColor: "#006900",
              color: "#FFFFFF",
            },
            disabled: {
              background: "#86DF81",
              borderColor: "#86DF81",
              color: "#FFFFFF",
            },
            hover: {
              background: "#008C00",
              borderColor: "#008C00",
              color: "#FFFFFF",
            },
            normal: {
              background: "#00A400",
              borderColor: "#00A400",
              color: "#FFFFFF",
            },
          },
          flat: {
            active: {
              background: "rgba(0, 0, 0, 0.1)",
              borderColor: "transparent",
              color: "#444950",
            },
            disabled: {
              background: "transparent",
              borderColor: "transparent",
              color: "#BEC3C9",
            },
            hover: {
              background: "rgba(0, 0, 0, 0.05)",
              borderColor: "transparent",
              color: "#444950",
            },
            normal: {
              background: "transparent",
              borderColor: "transparent",
              color: "#444950",
            },
          },
          flatWhite: {
            active: {
              background: "rgba(255, 255, 255, 0.1)",
              borderColor: "transparent",
              color: "#FFFFFF",
            },
            disabled: {
              background: "transparent",
              borderColor: "transparent",
              color: "rgba(255, 255, 255, 0.4)",
            },
            hover: {
              background: "rgba(255, 255, 255, 0.05)",
              borderColor: "transparent",
              color: "#FFFFFF",
            },
            normal: {
              background: "transparent",
              borderColor: "transparent",
              color: "#FFFFFF",
            },
          },
        },
      },
      u = e;
    l.default = u;
  },
  98,
);
