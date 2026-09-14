__d(
  "AdsMgmtTableColumnConfigGroupLevelOverrides",
  [
    "AdsInsightsActionTypeAttributionWindiow",
    "AdsMgmtCAWByCostDeprecationUtils",
    "AdsMgmtColumn",
    "adsInsightsColumnConfigsGetDescriptor",
    "adsMgmtTableColumnConfigActionFieldTypeOverrides",
    "isEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        r("AdsMgmtColumn").cpc,
        r("AdsMgmtColumn").cpm,
        r("AdsMgmtColumn").cpp,
      ],
      u = [
        {
          isApplicable: function (t) {
            return r(
              "AdsInsightsActionTypeAttributionWindiow",
            ).INLINE_AND_NON_INLINE.includes(
              r("adsInsightsColumnConfigsGetDescriptor")(t.id).actionType,
            );
          },
          getProps: function () {
            return { supportInlineAttributionColumn: !0 };
          },
        },
        {
          isApplicable: r("adsMgmtTableColumnConfigActionFieldTypeOverrides")
            .isApplicable,
          getProps: r("adsMgmtTableColumnConfigActionFieldTypeOverrides")
            .getProps,
        },
        {
          isApplicable: function (n) {
            return !(e || (e = r("isEmpty")))(
              r("adsInsightsColumnConfigsGetDescriptor")(n.id).customMetricsID,
            );
          },
          getProps: function () {
            return { isSortable: !1 };
          },
        },
        {
          isApplicable: function (t) {
            return c(t.id);
          },
          getProps: function () {
            return { isInverseProportionalIndicator: !0 };
          },
        },
        {
          isApplicable: function (t) {
            return o(
              "AdsMgmtCAWByCostDeprecationUtils",
            ).isCostOrRoasRelatedColumn(t.id);
          },
          getProps: function () {
            return {
              supportedAttributionWindows: o("AdsMgmtCAWByCostDeprecationUtils")
                .ATTRIBUTION_SETTINGS_SUPPORTED_FOR_COST_METRICS,
            };
          },
        },
      ];
    function c(e) {
      return e.startsWith("cost_per_") || s.includes(e);
    }
    var d = u;
    l.default = d;
  },
  98,
);
