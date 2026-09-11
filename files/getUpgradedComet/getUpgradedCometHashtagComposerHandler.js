__d(
  "getUpgradedCometHashtagComposerHandler",
  [
    "FBLogger",
    "LexicalHashtag",
    "LexicalText",
    "LexicalUtils",
    "getHashtagRegexString",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new RegExp(r("getHashtagRegexString")(), "i");
    function s(t) {
      if (!t.hasNodes([o("LexicalHashtag").HashtagNode]))
        throw r("FBLogger")("outline_ufi").mustfixThrow(
          "HashtagPlugin: HashtagNode not registered on editor",
        );
      var n = function (t) {
          return o("LexicalHashtag").$createHashtagNode(t.getTextContent());
        },
        a = function (n) {
          var t = e.exec(n);
          if (t === null) return null;
          var r = t[3].length + 1,
            o = t.index + t[1].length,
            a = o + r;
          return { end: a, start: o };
        };
      return o("LexicalUtils").mergeRegister.apply(
        void 0,
        o("LexicalText").registerLexicalTextEntity(
          t,
          a,
          o("LexicalHashtag").HashtagNode,
          n,
        ),
      );
    }
    l.default = s;
  },
  98,
);
