__d(
  "DuplicationCombinedRelayEntrypointController",
  [
    "AdsDuplicationDialogCombinedContainer.entrypoint",
    "AdsManagerRelayEntrypointController",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("AdsManagerRelayEntrypointController"))(
        r("AdsDuplicationDialogCombinedContainer.entrypoint"),
        void 0,
        { maxRetainedEntrypoints: 3, shouldRetainPreviousEntrypoints: !0 },
      ),
      s = e;
    l.default = s;
  },
  98,
);
