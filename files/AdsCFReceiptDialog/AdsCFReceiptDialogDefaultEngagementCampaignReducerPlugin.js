__d(
  "AdsCFReceiptDialogDefaultEngagementCampaignReducerPlugin",
  ["loadCrepePackageSelectionEntryPointStoreUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.data.defaultToEngagementCampaign;
          if (e === !0) {
            var o = r("loadCrepePackageSelectionEntryPointStoreUtils")();
            return t.merge({
              defaultToEngagementCampaign: e,
              entryPointReference: o,
              isDialogProcessing: !1,
              isDialogShown: !1,
              isPackageSelectionDialogShown: !0,
            });
          }
          return t;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
