__d(
  "getHashtagRegexString",
  ["getHashtagRegexStringChars"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = r("getHashtagRegexStringChars")(),
        t = e.alpha,
        n = e.alphanumeric,
        o = e.hashChars,
        a = "[" + t + "]",
        i = "[" + n + "]",
        l = "^|$|[^&/" + n + "]",
        s = "[" + o + "]",
        u = "(" + l + ")(" + s + ")(" + i + "*" + a + i + "*)";
      return u;
    }
    l.default = e;
  },
  98,
);
