__d(
  "getCometComposerMentionsSearchForLexical",
  ["Lexical", "getCometComposerMentionsSearchText"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = e.anchor;
      if (o.type !== "text") return null;
      var a = o.getNode();
      return (n != null && !n()) || (n == null && !a.isSimpleText())
        ? null
        : r("getCometComposerMentionsSearchText")(
            a.getTextContent(),
            o.offset,
            t,
          );
    }
    function s(t, n, r) {
      return (
        r === void 0 && (r = !1),
        t.getEditorState().read(function () {
          var t = o("Lexical").$getSelection();
          return o("Lexical").$isRangeSelection(t) ? e(t, r, n) : null;
        })
      );
    }
    l.default = s;
  },
  98,
);
