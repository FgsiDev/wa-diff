__d(
  "adsUEditorTextGenDefaultAddEligibilitySelector",
  [
    "AdsShouldUseDefaultAddTextVariationsProvider",
    "adsCreateSelector",
    "adsUEditorAccountIDSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAccountIDSelector"),
          r("AdsShouldUseDefaultAddTextVariationsProvider").toFluxSelector(),
        ],
        function (t, n) {
          return n.get(t);
        },
        { name: i.id + ".adsUEditorTextGenDefaultAddEligibilitySelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
