__d(
  "AdsPEExportPresetBatchDeletedReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return t.deleteMultipleValueOrError(n.ids);
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
