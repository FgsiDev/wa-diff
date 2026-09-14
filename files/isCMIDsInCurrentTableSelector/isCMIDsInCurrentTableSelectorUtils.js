__d(
  "isCMIDsInCurrentTableSelectorUtils",
  ["AdsMgmtCustomMetricsStringOperations"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e
        .map(o("AdsMgmtCustomMetricsStringOperations").getCMIDFromColumnID)
        .filter(Boolean);
      return t != null
        ? n.some(function (e) {
            var n = t.get(e);
            return (
              n != null &&
              n.permissionType === "shared" &&
              n.deletionTime != null &&
              n.deletor != null
            );
          })
        : !1;
    }
    l.isCMIDsInCurrentTable = e;
  },
  98,
);
