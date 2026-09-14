__d(
  "AdsUEditorAdgroupSetMediaOptimizationMutator",
  ["AdsAdgroupRecordAccessors", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a) {
      var i,
        l = r("AdsAdgroupRecordAccessors").creative.media_optimization_spec
          .videos,
        s = r("immutable").Map({
          enroll_status: o ? "OPT_IN" : "OPT_OUT",
          action_metadata: r("immutable").Map({ type: a }),
        }),
        u = (i = l.get(e)) != null ? i : r("immutable").List(),
        c = u.findIndex(function (e) {
          return (e == null ? void 0 : e.get("video_id")) === t;
        }),
        d = a === "DEFAULT";
      if (d && c !== -1) {
        var m,
          p,
          _ = (m = u.get(c)) == null || (m = m.toJS()) == null ? void 0 : m[n];
        if (
          _ != null &&
          ((p = _.action_metadata) == null ? void 0 : p.type) !== "DEFAULT"
        )
          return e;
      }
      var f =
          c === -1
            ? r("immutable").Map().set("video_id", t)
            : r("immutable").Map(u.get(c)),
        g = f.set(n, s),
        h = c === -1 ? u.push(g) : u.set(c, g);
      return l.set(h, e);
    }
    function s(e, t) {
      var n = r("AdsAdgroupRecordAccessors").creative.media_optimization_spec,
        o = n.videos,
        a = o.get(e);
      if (a == null || a.size === 0) return e;
      var i =
        t == null
          ? a.clear()
          : a.filter(function (e) {
              return (e == null ? void 0 : e.get("video_id")) === t;
            });
      return i.size === a.size ? e : i.size === 0 ? n.delete(e) : o.set(i, e);
    }
    ((l.setVideoOptimizationEnrollment = e),
      (l.pruneVideoOptimizationEntries = s));
  },
  98,
);
