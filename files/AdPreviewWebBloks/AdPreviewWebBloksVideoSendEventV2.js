__d(
  "AdPreviewWebBloksVideoSendEventV2",
  ["AdPreviewWebBloksGlobalRefMap", "WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = n == null ? void 0 : n.get("media_id"),
        a = o(
          "AdPreviewWebBloksGlobalRefMap",
        ).webBloksVideoPlayerIDToRefMap.get(r);
      if (a != null && a.current)
        switch (t) {
          case "play":
            a.current.play().catch(function () {
              throw new (o("WebBloksErrors").WebBloksError)(
                "Failed to play video",
              );
            });
            break;
          case "pause":
            a.current.pause();
            break;
          case "mute":
            a.current.muted = !0;
            break;
          case "unmute":
            a.current.muted = !1;
            break;
          default:
            break;
        }
    }
    l.default = e;
  },
  98,
);
