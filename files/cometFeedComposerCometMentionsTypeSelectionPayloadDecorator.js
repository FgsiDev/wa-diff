__d(
  "cometFeedComposerCometMentionsTypeSelectionPayloadDecorator",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.entries,
        n = t.filter(function (e) {
          return l(e);
        }),
        r = t.filter(function (e) {
          return !l(e);
        });
      return babelHelpers.extends({}, e, { entries: n.concat(r) });
    }
    function l(e) {
      return (
        e.type === "entry" &&
        (e.rawData.type === "MENTION_TYPE_SELECTION" ||
          e.rawData.type === "MENTION_TYPE_RESET")
      );
    }
    i.default = e;
  },
  66,
);
