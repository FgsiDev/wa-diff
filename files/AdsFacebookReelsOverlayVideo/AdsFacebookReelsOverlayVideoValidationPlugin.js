__d(
  "AdsFacebookReelsOverlayVideoValidationPlugin",
  ["FacebookReelsOverlayVideoValidator"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "adsVideoValidation",
        key: "fbReelsOverlayVideo",
        getErrors: function (t, n) {
          return o(
            "FacebookReelsOverlayVideoValidator",
          ).validateFacebookReelsOverlayVideo(t, n);
        },
        platform: "facebook",
        position: "facebook_reels_overlay",
      },
      s = e;
    l.default = s;
  },
  98,
);
