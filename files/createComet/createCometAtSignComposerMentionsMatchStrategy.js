__d(
  "createCometAtSignComposerMentionsMatchStrategy",
  ["createCometMentionMatchStrategy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["@", "\\uff20"].join("");
    function s(t) {
      var n = t.minMatchLength;
      return r("createCometMentionMatchStrategy")({
        minMatchLength: n,
        name: "AtSignComposerMentionStrategy(" + n.toString() + ")",
        triggers: e,
      });
    }
    l.default = s;
  },
  98,
);
