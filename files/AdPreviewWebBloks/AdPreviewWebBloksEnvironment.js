__d(
  "AdPreviewWebBloksEnvironment",
  [
    "AdPreviewWebBloksPrimitives",
    "WebBloksEnvironment",
    "WebBloksFontOverrides",
    "WebBloksHasteEnvironment",
    "adPreviewMinificationMap",
    "adPreviewSignatureUnminificationMap",
    "adPreviewTraversalKeys",
    "adPreviewVersioningId",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = function () {
              return o(
                "WebBloksHasteEnvironment",
              ).createWebBloksHasteEnvironment(
                {
                  minificationMap: r("adPreviewMinificationMap"),
                  signatureUnminificationMap: r(
                    "adPreviewSignatureUnminificationMap",
                  ),
                },
                {
                  disableHistoryStack: !0,
                  embedded: !0,
                  fontFamilyMappings: babelHelpers.extends(
                    {},
                    o("WebBloksFontOverrides").WBLOKS_RESET_FDS_FONTS,
                    o("WebBloksFontOverrides").WBLOKS_RESET_SYSTEM_FONTS,
                  ),
                  actions: o("AdPreviewWebBloksPrimitives").ACTIONS,
                  components: o("AdPreviewWebBloksPrimitives").COMPONENTS,
                  extensionHandlers: o("AdPreviewWebBloksPrimitives")
                    .EXTENSION_HANDLERS,
                  traversalKeys: r("adPreviewTraversalKeys"),
                  versioningID: r("adPreviewVersioningId"),
                },
                e,
              );
            }),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        o("WebBloksEnvironment").useWebBloksEnvironmentStore(n)
      );
    }
    l.useAdPreviewWebBloksEnvironment = e;
  },
  98,
);
