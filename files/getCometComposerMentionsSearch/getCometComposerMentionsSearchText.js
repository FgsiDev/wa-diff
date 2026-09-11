__d(
  "getCometComposerMentionsSearchText",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 4,
      l = /^[^\s@,.;:!?()[\]{}<>]+/,
      s = /^(\s+)([^\s@,.;:!?()[\]{}<>]+)/;
    function u(e) {
      var t = e.charAt(0);
      return (
        t !== "" && t.toLocaleUpperCase() === t && t.toLocaleLowerCase() !== t
      );
    }
    function c(t, n) {
      var r = t.slice(0, n),
        o = r.lastIndexOf("@");
      if (o < 0 || (o > 0 && !/\s|\(/.test(r.charAt(o - 1)))) return "";
      var a = r.slice(o + 1);
      if (/[@,.;:!?()[\]{}<>\n]/.test(a)) return "";
      var i = a.trim().split(/\s+/).filter(Boolean),
        c = Math.max(0, e - i.length);
      if (c === 0) return "";
      var d = t.slice(n),
        m = "",
        p = a !== "" && !/\s$/.test(a);
      if (p) {
        var _ = l.exec(d);
        _ != null && ((m += _[0]), (d = d.slice(_[0].length)));
      } else {
        var f = l.exec(d);
        if (f == null || !u(f[0])) return "";
        ((m += f[0]), (d = d.slice(f[0].length)), c--);
      }
      for (; c > 0; ) {
        var g = s.exec(d);
        if (g == null || !u(g[2])) break;
        var h = g[1] + g[2];
        ((m += h), (d = d.slice(h.length)), c--);
      }
      return m;
    }
    function d(e, t, n) {
      var r = e.slice(0, t);
      return n ? r + c(e, t) : r;
    }
    i.default = d;
  },
  66,
);
