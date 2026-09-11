__d(
  "cometMentionsLexicalCreateNodeStrategy",
  [
    "CometLexicalGenericEntityNode",
    "cometBaseMentionsLexicalCreateNodeStrategy",
    "cometMentionsDataEntryText",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("cometBaseMentionsLexicalCreateNodeStrategy")(function (e) {
        return o(
          "CometLexicalGenericEntityNode",
        ).$createCometLexicalGenericEntityNode({
          id: e.key,
          text: r("cometMentionsDataEntryText")(e),
          type: "Actor",
        });
      }),
      s = e;
    l.default = s;
  },
  98,
);
