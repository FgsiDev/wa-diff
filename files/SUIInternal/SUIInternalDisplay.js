__d(
  "SUIInternalDisplay",
  ["cx"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return (e === "block" ? "_4yee" : "") + (e === "inline" ? " _4yef" : "");
    }
    function u(e) {
      return (
        (e === "block" ? "_4yee" : "") +
        (e === "inline" ? " _8y30" : "") +
        (e === "inlineBlock" ? " _4yef" : "")
      );
    }
    function c(e) {
      return e === "truncateInline"
        ? "_4yeg"
        : e === "truncateInlineBlock"
          ? "_8y2_"
          : e === "truncateBlock"
            ? "_3tep"
            : u(e);
    }
    function d(e) {
      return (e === "block" ? "_4yeh" : "") + (e === "inline" ? " _4yei" : "");
    }
    ((l.get = e),
      (l.getLiteral = u),
      (l.getLiteralWithTruncate = c),
      (l.getFlex = d));
  },
  98,
);
