__d(
  "iterateEmoticons",
  ["EmoticonsList"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      for (
        var r, a, i, l, s, u = e;
        u && ((i = o("EmoticonsList").regexp.exec(u)), i);
      )
        ((a = i.index + i[1].length),
          (l = u.substr(0, a)),
          (r = i[2]),
          (s = u.substr(a + r.length)),
          n(l),
          t(r, o("EmoticonsList").emotes[r]),
          (u = s));
      n(u);
    }
    l.default = e;
  },
  98,
);
