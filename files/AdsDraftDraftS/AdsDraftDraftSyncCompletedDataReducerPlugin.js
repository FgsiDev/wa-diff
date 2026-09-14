__d(
  "AdsDraftDraftSyncCompletedDataReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return t
            .set("hasCurrentAdObjectEverSynced", !0)
            .set("hasPreviousAdObjectEverSynced", !1);
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
