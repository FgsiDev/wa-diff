__d(
  "getCometMentionReplacementRange",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      for (var r = n, o = r; o <= t.length; o++)
        e.substr(-o) === t.substr(0, o) && (r = o);
      return r;
    }
    function l(e, t) {
      return t === e.length || /[\s,.;:!?()[\]{}<>]/.test(e.charAt(t));
    }
    function s(t, n, r, o) {
      var a = r.leadOffset,
        i = r.replaceableString.charAt(0),
        s = i === "@" || i === "\uFF20" ? i : "",
        u = s + n,
        c = a + u.length;
      if (
        a >= 0 &&
        a < o &&
        c > o &&
        c <= t.length &&
        t.slice(a, c) === u &&
        l(t, c)
      )
        return { endOffset: c, startOffset: a };
      var d = t.slice(0, o),
        m = Math.min(
          r.replaceableString.length,
          Math.max(0, o - Math.max(0, r.leadOffset)),
        ),
        p = e(d, n, m),
        _ = o - p;
      return _ < 0 ? null : { endOffset: o, startOffset: _ };
    }
    i.default = s;
  },
  66,
);
