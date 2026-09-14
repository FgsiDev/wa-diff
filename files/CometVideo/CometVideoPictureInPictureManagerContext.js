__d(
  "CometVideoPictureInPictureManagerContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).createContext,
      u = s({ closeDocPip: function () {}, isInDocPip: !1 }),
      c = s({
        closeDocPipPlayer: function () {},
        openDocPipPlayer: function (t) {},
        openPipPlayer: function () {},
        setController: function () {},
        setPipControlsConfig: function () {},
        setPipPortableVideoID: function () {},
      }),
      d = s({
        hasNextChainedVideo: !1,
        hasPrevChainedVideo: !1,
        isPipEnabled: !1,
        registerOnPipSkip: function () {},
        registerOnPipSkipPrev: function () {},
        triggerPipSkip: function () {},
        triggerPipSkipPrev: function () {},
      });
    function m() {
      return !1;
    }
    function p() {
      return !1;
    }
    ((l.CometDocumentPipStateContext = u),
      (l.CometVideoPictureInPictureManagerAPIContext = c),
      (l.CometVideoPictureInPictureManagerContext = d),
      (l.isInPictureInPictureExp = m),
      (l.isInPictureInPictureExpControlGroup = p));
  },
  98,
);
