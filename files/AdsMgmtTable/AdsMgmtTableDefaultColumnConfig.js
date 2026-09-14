__d(
  "AdsMgmtTableDefaultColumnConfig",
  ["AdsInsightsSortDirection", "AdsObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        align: "right",
        defaultSortingOrder: r("AdsInsightsSortDirection").DESC,
        fields: [],
        fieldsForExport: [],
        fixed: !1,
        hasEmptyFooter: !1,
        isBeta: !1,
        isMovable: !0,
        isRemovable: !0,
        isResizable: !0,
        isSortable: !0,
        objectTypes: [
          (e = r("AdsObjectTypes")).ACCOUNT,
          e.CAMPAIGN_GROUP,
          e.CAMPAIGN,
          e.ADGROUP,
          e.CREATIVE,
        ],
        showInSelector: !0,
        supportAttributionWindow: !1,
        supportBenchmark: !1,
        supportInlineAttributionColumn: !1,
      };
    l.default = s;
  },
  98,
);
