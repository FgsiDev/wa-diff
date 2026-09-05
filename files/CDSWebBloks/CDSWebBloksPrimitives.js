__d(
  "CDSWebBloksPrimitives",
  [
    "CDSWebBloksContainerConfigs",
    "WebBloksCDSCloseScreen",
    "WebBloksCDSDismissCdsBottomSheet",
    "WebBloksCDSGlimmer",
    "WebBloksCDSNavbar",
    "WebBloksCDSOpenCdsBottomSheet",
    "WebBloksCDSOpenScreen",
    "WebBloksCDSPopScreen",
    "WebBloksCDSPopup",
    "WebBloksCDSPushScreen",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
        "bk.data.screen.navbar.Cds": r("WebBloksCDSNavbar"),
        "bk.components.cds.internal.Popup": r("WebBloksCDSPopup"),
        "bk.components.cds.Glimmer": r("WebBloksCDSGlimmer"),
      },
      s = {
        "bk.action.cds.CloseScreen": r("WebBloksCDSCloseScreen"),
        "bk.action.cds.DismissCdsBottomSheet": r(
          "WebBloksCDSDismissCdsBottomSheet",
        ),
        "bk.action.cds.OpenCdsBottomSheet": r("WebBloksCDSOpenCdsBottomSheet"),
        "bk.action.cds.OpenScreen": r("WebBloksCDSOpenScreen"),
        "bk.action.cds.PopScreen": r("WebBloksCDSPopScreen"),
        "bk.action.cds.PushScreen": r("WebBloksCDSPushScreen"),
      };
    ((l.CONTAINER_CONFIGS = o("CDSWebBloksContainerConfigs").CONTAINER_CONFIGS),
      (l.COMPONENTS = e),
      (l.ACTIONS = s));
  },
  98,
);
