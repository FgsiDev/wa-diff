__d(
  "AdsDuplicationDialogUpgradeCombinedContainer.entrypoint",
  [
    "AdsDuplicationDialogUpgradeCombinedEntrypointModalQuery$Parameters",
    "JSResourceForInteraction",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
        getPreloadProps: function (t) {
          return {
            queries: {
              root: {
                parameters: n(
                  "AdsDuplicationDialogUpgradeCombinedEntrypointModalQuery$Parameters",
                ),
                variables: t,
              },
            },
          };
        },
        root: r("JSResourceForInteraction")(
          "AdsDuplicationDialogUpgradeCombinedEntrypointModal.react",
        ).__setRef("AdsDuplicationDialogUpgradeCombinedContainer.entrypoint"),
      },
      s = e;
    l.default = s;
  },
  98,
);
