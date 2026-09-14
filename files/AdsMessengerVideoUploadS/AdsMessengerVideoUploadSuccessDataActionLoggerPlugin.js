__d(
  "AdsMessengerVideoUploadSuccessDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("messenger_visual_editor_video_upload_success", {
            messenger_video_id: t.videoID,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
