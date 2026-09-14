__d(
  "AdsPEPublishStartedLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          t.asyncRequestSetID == null
            ? r("adsMgmtLogger")(
                "async_request_set_id_missing_on_publish_start",
              )
            : r("adsMgmtLogger")("add_real_publish_id_on_publish_start", {
                publish_ids: [t.asyncRequestSetID || ""],
              });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
