__d(
  "AdsAdgroupPrefillerUtils",
  [
    "invariant",
    "AdsUEditorAdgroupCreativePluginAdObjectsUtils",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "flattenArray",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n) {
      var o = r("immutable").Set(
        t.map(function (e) {
          return e.key;
        }),
      );
      o.size === t.length || s(0, 4093);
      var a = r("flattenArray")(
          t.map(function (t) {
            return (
              n.has(t.key) || s(0, 4094, t.key),
              t.genPaths(e, n.get(t.key))
            );
          }),
        ),
        i = e.current.adgroup,
        l = e.original.adgroup;
      return i.withMutations(function (e) {
        a.forEach(function (t) {
          e.setIn(t.current, l.getIn(t.original));
        });
      });
    }
    function u(e, t, n) {
      n === void 0 && (n = []);
      var r = o(
          "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
        ).getAdgroupSpecPathPlugin(e.current),
        a = o(
          "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
        ).getAdgroupSpecPathPlugin(e.original),
        i = t.getPath(e.current.adgroup, r),
        l = t.getPath(e.original.adgroup, a),
        s = i ? [].concat(i, n) : null,
        u = l ? [].concat(l, n) : null;
      return { current: s, original: u };
    }
    function c(e) {
      return {
        current: o(
          "AdsUEditorAdgroupCreativePluginAdObjectsUtils",
        ).getAdgroupCreativePlugin(e.current),
        original: o(
          "AdsUEditorAdgroupCreativePluginAdObjectsUtils",
        ).getAdgroupCreativePlugin(e.original),
      };
    }
    ((l.prefillUsingPrefillers = e),
      (l.genPathsForUnifiedField = u),
      (l.genAdgroupCreativePlugins = c));
  },
  98,
);
