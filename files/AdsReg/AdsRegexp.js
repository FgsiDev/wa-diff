__d(
  "AdsRegexp",
  ["escapeRegex", "flattenArray"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return new RegExp(r("escapeRegex")(e), t);
    }
    function s(t, n, r) {
      var o = e(n, r),
        a = t.split(o),
        i = t.match(o) || [];
      return { delimiters: i, parts: a };
    }
    function u(e, t, n, o) {
      var a = s(e, t, o),
        i = a.parts;
      return r("flattenArray")(
        i.map(function (e, t) {
          return [e, n];
        }),
      )
        .slice(0, -1)
        .join("");
    }
    ((l.safeRegExp = e),
      (l.getTokensForTextReplacement = s),
      (l.getReplacedText = u));
  },
  98,
);
