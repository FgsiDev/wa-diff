__d(
  "mergeSets",
  ["unionSets"],
  function (t, n, r, o, a, i, l) {
    function e() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return r("unionSets").apply(null, t.filter(Boolean));
    }
    l.default = e;
  },
  98,
);
