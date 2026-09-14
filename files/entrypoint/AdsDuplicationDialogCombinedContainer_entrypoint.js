__d(
  "AdsDuplicationDialogCombinedContainer.entrypoint",
  [
    "AdsDuplicationDialogBau.entrypoint",
    "AdsDuplicationDialogUpgradeCombinedContainer.entrypoint",
    "JSResourceForInteraction",
    "NestedRelayEntryPointBuilderUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getPreloadProps: function (t) {
          return {
            entryPoints: babelHelpers.extends(
              {
                bau: o(
                  "NestedRelayEntryPointBuilderUtils",
                ).NestedRelayEntryPoint({
                  entryPoint: r("AdsDuplicationDialogBau.entrypoint"),
                  entryPointParams: t.bauVariables,
                }),
              },
              t.upgrade != null
                ? {
                    upgrade: o(
                      "NestedRelayEntryPointBuilderUtils",
                    ).NestedRelayEntryPoint({
                      entryPoint: r(
                        "AdsDuplicationDialogUpgradeCombinedContainer.entrypoint",
                      ),
                      entryPointParams: t.upgrade,
                    }),
                  }
                : {},
            ),
          };
        },
        root: r("JSResourceForInteraction")(
          "AdsDuplicationDialogCombinedEntrypointSwitch.react",
        ).__setRef("AdsDuplicationDialogCombinedContainer.entrypoint"),
      },
      s = e;
    l.default = s;
  },
  98,
);
