__d(
  "CometUFICommentEditHistoryDialog.entrypoint",
  [
    "CometUFICommentEditHistoryDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getPreloadProps: function (t) {
          var e = t.commentID;
          return {
            queries: {
              root: {
                options: { fetchPolicy: "network-only" },
                parameters: n(
                  "CometUFICommentEditHistoryDialogQuery$Parameters",
                ),
                variables: { commentID: e, scale: o("WebPixelRatio").get() },
              },
            },
          };
        },
        root: r("JSResourceForInteraction")(
          "CometUFICommentEditHistoryDialog.react",
        ).__setRef("CometUFICommentEditHistoryDialog.entrypoint"),
      },
      s = e;
    l.default = s;
  },
  98,
);
