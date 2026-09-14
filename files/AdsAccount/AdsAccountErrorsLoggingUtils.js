__d(
  "AdsAccountErrorsLoggingUtils",
  ["$InternalEnum", "AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored(["RHR", "TOOLTIP"]),
      s = function (t) {
        var e;
        r("AdsInterfacesLogger").log({
          eventName: "account_status_publish_block_cta_click",
          data:
            ((e = {}),
            (e.message = JSON.stringify({ context: t.context })),
            (e.account_status = t.accountStatus),
            e),
        });
      };
    ((l.PublishBlockCTAContext = e), (l.logAccountErrorCTAClick = s));
  },
  98,
);
