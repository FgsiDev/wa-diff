__d(
  "AdsDuplicationDialogBau.entrypoint",
  ["AdsDuplicationDialogInnerQuery$Parameters", "JSResourceForInteraction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getPreloadProps: function (t) {
          return {
            queries: {
              root: {
                parameters: n("AdsDuplicationDialogInnerQuery$Parameters"),
                variables: t,
              },
            },
          };
        },
        root: r("JSResourceForInteraction")(
          "AdsDuplicationDialogBauEntrypointRoot.react",
        ).__setRef("AdsDuplicationDialogBau.entrypoint"),
      },
      s = e;
    l.default = s;
  },
  98,
);
