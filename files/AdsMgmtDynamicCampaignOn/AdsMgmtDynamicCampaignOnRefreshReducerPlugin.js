__d(
  "AdsMgmtDynamicCampaignOnRefreshReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return n.specificIDs_ONLY_FOR_SEV_KIT != null
            ? t.deleteMulti(n.specificIDs_ONLY_FOR_SEV_KIT, [
                "issues_info",
                "delivery_status",
              ])
            : n.allLevels === !0 || n.adLevel === "campaign"
              ? t.clear()
              : t;
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
