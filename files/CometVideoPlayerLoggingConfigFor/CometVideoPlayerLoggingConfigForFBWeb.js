__d(
  "CometVideoPlayerLoggingConfigForFBWeb",
  [
    "CometVideoPlayerLoggingConfigForDisabledLogging",
    "FBVideoMetadataProvider",
    "MediaPlaybackLogFlusher",
    "cr:1414",
    "cr:1448",
    "cr:1624",
    "cr:1655",
    "cr:2929",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (e == null ? void 0 : e.disableLogging) === !0
        ? o(
            "CometVideoPlayerLoggingConfigForDisabledLogging",
          ).createCometVideoPlayerLoggingConfigForDisabledLogging()
        : {
            loggingToSigmateCreateStateMachineLogger:
              n("cr:1414") != null &&
              (n("cr:1448") != null ||
                n("cr:1624") != null ||
                n("cr:1655") != null ||
                n("cr:2929") != null)
                ? function (e) {
                    return n("cr:1414")(
                      babelHelpers.extends({}, e, {
                        logEngagementAudioOn: n("cr:1448"),
                        logEngagementPause: n("cr:1624"),
                        logPlayInterval: n("cr:2929"),
                        logVideoCompletion: n("cr:1655"),
                      }),
                    );
                  }
                : void 0,
            loggingToSNAPLCreateLogFlusher: function (t, n) {
              return new (r("MediaPlaybackLogFlusher"))(t, n);
            },
            loggingToSNAPLCreateMetadataProvider: o("FBVideoMetadataProvider")
              .createFBVideoMetadataProvider,
            loggingToSNAPLEnabled:
              (e == null ? void 0 : e.withFBWebSNAPLGK) === !0
                ? r("gkx")("1460")
                : void 0,
          };
    }
    l.createCometVideoPlayerLoggingConfigForFBWeb = e;
  },
  98,
);
