__d(
  "adsUEditorAdgroupAPlusCProductExtensionFirstEligibleProductSetSelector",
  [
    "adsCreateSelector",
    "adsUEditorAdgroupAPlusCProductExtensionFirstEligibleProductSetUtils",
    "adsUEditorAdgroupAPlusCProductExtensionProductSetSelectors",
    "adsUEditorPcaUnificationSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("adsUEditorPcaUnificationSelectors")
            .isPcaUnificationWs1EnabledSelector,
          o("adsUEditorAdgroupAPlusCProductExtensionProductSetSelectors")
            .adgroupPCAUnificationProductSetByCatalogSelector,
          o("adsUEditorAdgroupAPlusCProductExtensionProductSetSelectors")
            .adgroupAPlusCProductExtensionFirstEligibleProductSetByAccountSelector,
        ],
        function (t, n, r) {
          return o(
            "adsUEditorAdgroupAPlusCProductExtensionFirstEligibleProductSetUtils",
          ).adsUEditorAdgroupAPlusCProductExtensionFirstEligibleProductSetLogic(
            t,
            n,
            r,
          );
        },
        {
          name:
            i.id +
            ".adsUEditorAdgroupAPlusCProductExtensionFirstEligibleProductSetSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
