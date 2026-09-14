__d(
  "AdsPEInstantDeleteLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            "instant_delete_publish_requested",
            babelHelpers.extends(
              {
                action_type: t.actionType,
                object_ids: t.campaignGroupIDs
                  .concat(t.campaignIDs)
                  .concat(t.adgroupIDs),
                event_source: t.eventSource,
              },
              t.logData,
            ),
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
