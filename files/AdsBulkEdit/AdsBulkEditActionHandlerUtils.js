__d(
  "AdsBulkEditActionHandlerUtils",
  ["AdsBulkEditUtils", "LoadObject", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("immutable").Map();
      return (
        t.forEach(function (t) {
          var o = e.rows.get(t).current;
          n = n.set(t, r("LoadObject").withValue(o, { creatorModuleID: i.id }));
        }),
        n
      );
    }
    function s(e, t, n, r, a) {
      var i = n.rows,
        l = n.changedColumnsByRowMap;
      return (
        t.forEach(function (t) {
          var n = r.get(t).getValueEnforcing(),
            a = i.get(t);
          i = i.set(t, {
            original: a.original,
            current: n,
            isDraftObject: a.isDraftObject,
          });
          var s = o("AdsBulkEditUtils").getEqualityComparator(e),
            u = !s(n, a.original);
          l = o("AdsBulkEditUtils").getUpdatedChangedColumnsByRowMap(
            u,
            l,
            e,
            t,
          );
        }),
        n.merge({ rows: i, changedColumnsByRowMap: l })
      );
    }
    ((l.convertToDraftStoreStateShape = e), (l.mergeState = s));
  },
  98,
);
