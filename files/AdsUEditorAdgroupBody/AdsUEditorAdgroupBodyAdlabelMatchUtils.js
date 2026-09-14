__d(
  "AdsUEditorAdgroupBodyAdlabelMatchUtils",
  ["immutable", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          var n = new Set();
          if (e instanceof r("immutable").Map) {
            var o = e.get("adlabels");
            o instanceof r("immutable").List &&
              o.forEach(function (e) {
                if (e instanceof r("immutable").Map) {
                  var t = e.get("name");
                  typeof t == "string" && n.add(t);
                }
              });
          }
          t.push(n);
        }),
        t
      );
    }
    function s(t, n) {
      if (!r("justknobx")._("2737") || n == null) return !1;
      var o = e(t),
        a = o[n];
      return a == null || a.size === 0
        ? !1
        : o.some(function (e, t) {
            if (t === n || e.size !== a.size) return !1;
            for (var r of a) if (!e.has(r)) return !1;
            return !0;
          });
    }
    ((l.extractBodyAdlabelNameSets = e), (l.hasBodyWithSameAdlabels = s));
  },
  98,
);
