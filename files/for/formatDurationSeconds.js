__d(
  "formatDurationSeconds",
  ["fbt", "padNumber"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = Math.floor(e / 3600),
        n = Math.floor((e / 60) % 60),
        o = Math.floor(e % 60);
      return t
        ? s._(/*BTDS*/ "{hours}:{minutes}:{seconds}", [
            s._param("hours", t),
            s._param("minutes", r("padNumber")(n, 2)),
            s._param("seconds", r("padNumber")(o, 2)),
          ])
        : s._(/*BTDS*/ "{minutes}:{seconds}", [
            s._param("minutes", n),
            s._param("seconds", r("padNumber")(o, 2)),
          ]);
    }
    l.default = e;
  },
  226,
);
