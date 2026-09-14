__d(
  "getHashtagMatches",
  ["getHashtagRegex"],
  function (t, n, r, o, a, i) {
    var e = n("getHashtagRegex")();
    function l(t, n) {
      for (var r = t.getText(), o, a, i, l; (o = e.exec(r)) !== null; )
        ((a = o.index + o[1].length),
          (i = o[2]),
          (l = o[3]),
          n(a, a + i.length + l.length));
    }
    i.default = l;
  },
  66,
);
