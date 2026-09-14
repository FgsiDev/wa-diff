__d(
  "AdPreviewWebBloksPrimitives",
  [
    "AdPreviewWebBloksVideoSendEventV2",
    "WebBloksAdPreviewVideoV2",
    "WebBloksFBSearchVideo",
    "emptyFunction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        "bk.components.VideoV2": r("WebBloksAdPreviewVideoV2"),
        "bk.components.fb.search.Video": r("WebBloksFBSearchVideo"),
      },
      u = {
        "bk.action.immersive.ads.SponsoredClickHandler": (e =
          r("emptyFunction")),
        "fb.action.logging.AutomatedLoggingEvent": e,
        "bk.action.animated.CancelWithToken": e,
        "bk.action.animated.StartWithToken": e,
        "bk.action.video.SendEventV2": r("AdPreviewWebBloksVideoSendEventV2"),
      },
      c = {};
    ((l.COMPONENTS = s), (l.ACTIONS = u), (l.EXTENSION_HANDLERS = c));
  },
  98,
);
