__d(
  "DuplicationUpgradeRelayEntrypointController",
  [
    "AdsDuplicationDialogUpgradeCombinedContainer.entrypoint",
    "AdsManagerRelayEntrypointController",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("AdsManagerRelayEntrypointController"))(
        r("AdsDuplicationDialogUpgradeCombinedContainer.entrypoint"),
        void 0,
        {
          maxRetainedEntrypoints: 50,
          shouldRetainPreviousEntrypoints: r("gkx")("25399"),
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
