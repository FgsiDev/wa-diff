__d(
  "BUIAdoptionUtils",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      switch (e) {
        case "small":
        case "medium":
          return "small";
        case "large":
          return "medium";
        case "xlarge":
        case "xxlarge":
          return "large";
        case void 0:
          return;
        default:
          s(0, 11814, e);
      }
    }
    function u(e) {
      switch (e) {
        case "success":
          return "success";
        case "notify":
          return "information";
        case "recommend":
          return "warning";
        case "warn":
          return "error";
        case "quiet":
          return "information";
        case void 0:
          return;
        default:
          s(0, 11815, e);
      }
    }
    function c(e) {
      return function (t) {
        return e({ value: t });
      };
    }
    ((l.convertSizeToFDSSize = e),
      (l.convertUseToType = u),
      (l.convertSelectorXUIOnChangeToSUIOnChange = c));
  },
  98,
);
