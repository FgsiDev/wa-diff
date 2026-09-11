__d(
  "createCometMentionMatchStrategy",
  ["DocumentMentionsRegex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e =
        "(?:\\.[ |$]| [" +
        r("DocumentMentionsRegex").PUNCTUATION +
        "] ?| |[" +
        r("DocumentMentionsRegex").PUNCTUATION +
        "] ?|)",
      s = 75;
    function u(e, t, n) {
      var r = "[^" + e + t + "\\s]",
        o = new RegExp(
          "(^|\\s|\\()([" + e + "]((?:" + r + n + "){0," + s + "}))$",
        ),
        a = 50,
        i = new RegExp("(^|\\s|\\()([" + e + "]((?:" + r + "){0," + a + "}))$");
      return { regex: o, regexAlias: i };
    }
    function c(t) {
      var n = t.minMatchLength,
        o = t.name,
        a = t.triggers,
        i = t.disallowedChars,
        l = i === void 0 ? r("DocumentMentionsRegex").PUNCTUATION : i,
        s = t.disallowedTerms,
        c = t.validJoins,
        d = c === void 0 ? e : c,
        m = u(a, l, d),
        p = m.regex,
        _ = m.regexAlias;
      return {
        findMentionableString: function (t) {
          var e = p.exec(t);
          if ((e === null && (e = _.exec(t)), e !== null)) {
            var r = e[1],
              o = e[3];
            if (s != null && s.includes(o.toLowerCase())) return null;
            if (o.length >= n)
              return {
                leadOffset: e.index + r.length,
                matchingString: o,
                replaceableString: e[2],
              };
          }
          return null;
        },
        name: o,
      };
    }
    l.default = c;
  },
  98,
);
