__d(
  "CometStickerPickerCard.entrypoint",
  [
    "CometStickerPickerCardQuery$Parameters",
    "CometStickerPickerStickerSearchCard.entrypoint",
    "JSResourceForInteraction",
    "NestedRelayEntryPointBuilderUtils",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("JSResourceForInteraction")(
        "CometStickerPickerCard.react",
      ).__setRef("CometStickerPickerCard.entrypoint"),
      s = {
        getPreloadProps: function (t) {
          var e = t.feedbackID,
            n = t.flyoutTagsCount,
            a = t.flyoutTagsCursor,
            i = t.stickerInterface,
            l = {
              flyoutTagsCount: n,
              flyoutTagsCursor: a,
              stickerInterface: i,
            };
          return {
            entryPoints: {
              stickerSearchEntrypointReference: o(
                "NestedRelayEntryPointBuilderUtils",
              ).NestedRelayEntryPoint({
                entryPoint: r("CometStickerPickerStickerSearchCard.entrypoint"),
                entryPointParams: l,
              }),
            },
            extraProps: { feedbackTargetID: e, stickerInterface: i },
            queries: {
              stickerPickerQueryReference: {
                parameters: r("CometStickerPickerCardQuery$Parameters"),
                variables: {
                  feedbackID: e,
                  scale: o("WebPixelRatio").get(),
                  stickerInterface: i,
                },
              },
            },
          };
        },
        root: e,
      };
    l.default = s;
  },
  98,
);
