__d(
  "AdsPEGroupSelector",
  [
    "AdsMgmt2026H1ExperimentUtils",
    "AdsPEGroupConstants",
    "AdsPEGroupProvider",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("adsCreateSelector")(
      [r("AdsPEGroupProvider").toFluxSelector()],
      function (t) {
        return o(
          "AdsMgmt2026H1ExperimentUtils",
        ).getIsAccountInCAI2026H1GroupingWithoutExposure()
          ? t
          : o("AdsPEGroupConstants").ADS_PE_GROUP_DEFAULTS;
      },
      { name: i.id + ".adsPEGroupSelector" },
    );
    l.adsPEGroupSelector = e;
  },
  98,
);
