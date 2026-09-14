__d(
  "getHelpTrayDeprecationExperimentScope",
  ["MAIBASurfacesUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e != null && o("MAIBASurfacesUtils").ADS_MANAGER_SURFACES.has(e)
        ? "AMD"
        : e === "MBS"
          ? "MBS"
          : e === "Business Support"
            ? "BSH"
            : null;
    }
    l.default = e;
  },
  98,
);
