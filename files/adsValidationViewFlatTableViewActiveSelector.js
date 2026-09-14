__d(
  "adsValidationViewFlatTableViewActiveSelector",
  ["AdsPEColumnsStore", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [r("AdsPEColumnsStore")],
        function () {
          var e;
          return (
            ((e = r("AdsPEColumnsStore").get()) == null ? void 0 : e.preset) ===
            "VALIDATION_VIEW"
          );
        },
        { name: i.id + ".adsValidationViewFlatTableViewActiveSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
