__d(
  "nl2br",
  ["DOM"],
  function (t, n, r, o, a, i, l) {
    var e = /(\r\n|[\r\n])/;
    function s(t) {
      return t.split(e).map(function (t) {
        return e.test(t) ? r("DOM").create("br") : t;
      });
    }
    l.default = s;
  },
  98,
);
