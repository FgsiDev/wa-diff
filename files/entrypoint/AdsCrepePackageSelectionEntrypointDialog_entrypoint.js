__d(
  "AdsCrepePackageSelectionEntrypointDialog.entrypoint",
  [
    "AdsCrepePackageSelectionEntrypointDialogQuery$Parameters",
    "JSResourceForInteraction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getPreloadProps: function (t) {
          var e = t.accountID,
            n = t.contentRequest,
            o = t.requestId;
          return {
            queries: {
              queryRef: {
                parameters: r(
                  "AdsCrepePackageSelectionEntrypointDialogQuery$Parameters",
                ),
                variables: { accountID: e, contentRequest: n, requestId: o },
              },
            },
          };
        },
        root: r("JSResourceForInteraction")(
          "AdsCrepePackageSelectionEntrypointDialog.react",
        ).__setRef("AdsCrepePackageSelectionEntrypointDialog.entrypoint"),
      },
      s = e;
    l.default = s;
  },
  98,
);
