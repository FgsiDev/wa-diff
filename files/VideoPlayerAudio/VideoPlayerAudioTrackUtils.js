__d(
  "VideoPlayerAudioTrackUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t, n) {
      if (n != null) {
        var e = String(t).substring(0, 2);
        try {
          return new Intl.DisplayNames([e], { type: "language" }).of(n);
        } catch (e) {
          return;
        }
      }
    };
    i.getIntlDisplayName = e;
  },
  66,
);
