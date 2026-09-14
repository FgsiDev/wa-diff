__d(
  "AdsDraftDraftPublishCompletedDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("canvas_draft_draft_publish_completed", {
            canvasID: t.draftID,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
