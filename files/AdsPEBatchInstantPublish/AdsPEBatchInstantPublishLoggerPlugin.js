__d(
  "AdsPEBatchInstantPublishLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("batch_instant_publish_requested", {
            action_type: t.actionType,
            object_ids: t.campaignGroupIDs
              .concat(t.campaignIDs)
              .concat(t.adgroupIDs),
            event_source: t.eventSource,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
