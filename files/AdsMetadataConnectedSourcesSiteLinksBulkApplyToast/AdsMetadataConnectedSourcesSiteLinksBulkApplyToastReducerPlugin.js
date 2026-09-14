__d(
  "AdsMetadataConnectedSourcesSiteLinksBulkApplyToastReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t, n) {
        return {
          id: "updateBulkApplySuccess",
          cardType: "info",
          canDismiss: !0,
          bodyText: n,
          header: t,
          dismissTimer: 4e3,
          "data-testid":
            "ads-metadata-connected-sources-bulk-apply-success-toast",
        };
      },
      l = {
        reduce: function (n, r) {
          if (
            r.showAdsToast === !0 &&
            r.toastHeader != null &&
            r.toastDescription != null
          ) {
            var t = e(r.toastHeader, r.toastDescription);
            return n.find(function (e) {
              return e.id === t.id;
            })
              ? n
              : n.concat([t]);
          }
          return n;
        },
      },
      s = l;
    i.default = s;
  },
  66,
);
