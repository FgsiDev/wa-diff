__d(
  "AdsPEExportPresetBatchCreateErrorReducerPlugin",
  ["fbt", "AdsError", "AdsErrorUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = r("AdsError").createError(
            "export_preset",
            s._(/*BTDS*/ "Failed to create export preset: {error message}", [
              s._param(
                "error message",
                o("AdsErrorUtils").getMessages(Array.from(n.errors.values())),
              ),
            ]),
          );
          return t.remove(e.key).set(e.key, e);
        },
      },
      u = e;
    l.default = u;
  },
  226,
);
