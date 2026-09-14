__d(
  "AdsMessengerVideoUploadErrorDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("messenger_visual_editor_video_upload_error", {
            error_message: t.error && t.error.message,
            stack_trace: t.error && t.error.stack,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
