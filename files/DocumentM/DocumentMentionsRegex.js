__d(
  "DocumentMentionsRegex",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;",
      l = "\\b[A-Z][^\\s" + e + "]",
      s = { PUNCTUATION: e, NAME: l },
      u = s;
    i.default = u;
  },
  66,
);
