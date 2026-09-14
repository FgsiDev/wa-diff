__d(
  "adsReplaceDuplicatedErrors",
  [
    "errorCode",
    "AdsAPIAdgroupPaths",
    "UsabilityFlow63Utils",
    "shallowArrayEqual",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = new Map([
        [1443135, [1443128]],
        [1815500, [1815017]],
        [2131024, [1815500, 2490460]],
        [2446387, [1815538]],
        [1443122, [1487897, 1443048]],
        [1885800, [1815520]],
        [1487212, [1443048]],
      ]),
      u = 2446458,
      c = 2061015,
      d = [
        r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.LINK,
        ["link"],
      ];
    function m(e) {
      var t = e.path;
      return (
        +e.key === c &&
        t != null &&
        d.some(function (e) {
          return r("shallowArrayEqual")(t, e);
        })
      );
    }
    function p(t) {
      var n = new Set(),
        r = [],
        a = [];
      t.forEach(function (t) {
        var r = +t.key;
        if (e.has(r)) {
          var o;
          (o = e.get(r)) == null ||
            o.forEach(function (e) {
              return n.add(e);
            });
        }
      });
      var i =
        t.some(function (e) {
          return +e.key === u;
        }) && o("UsabilityFlow63Utils").is3COWebURLErrorImprovementsEnabled();
      return n.size === 0 && !i
        ? { visibleErrors: t, hiddenErrors: a }
        : (t.forEach(function (e) {
            n.has(+e.key) || (i && m(e)) ? a.push(e) : r.push(e);
          }),
          { visibleErrors: r, hiddenErrors: a });
    }
    l.default = p;
  },
  98,
);
