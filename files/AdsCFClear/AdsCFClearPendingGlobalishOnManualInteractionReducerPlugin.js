__d(
  "AdsCFClearPendingGlobalishOnManualInteractionReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = t.pendingGlobalishRelatedMediaMap;
          if (e == null) return t;
          var r = e;
          for (var o of n.adgroupIDs) r = r.delete(o);
          return r === e
            ? t
            : babelHelpers.extends({}, t, {
                pendingGlobalishRelatedMediaMap: r,
              });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
