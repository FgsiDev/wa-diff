__d(
  "archivedCMsSelectorUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e != null
        ? e.filter(function (e) {
            return (
              e.permissionType === "shared" &&
              e.deletionTime != null &&
              e.deletor != null
            );
          })
        : [];
    }
    i.archivedCMs = e;
  },
  66,
);
