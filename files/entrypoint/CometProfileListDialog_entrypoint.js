__d(
  "CometProfileListDialog.entrypoint",
  [
    "CometProfileListDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.listType,
          r = t.sourceID;
        return {
          queries: {
            cometMutualFriendsQueryReference: {
              parameters: n("CometProfileListDialogQuery$Parameters"),
              variables: {
                listType: e,
                scale: o("WebPixelRatio").get(),
                sourceID: r,
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "CometProfileListDialog.react",
      ).__setRef("CometProfileListDialog.entrypoint"),
    };
    l.default = e;
  },
  98,
);
