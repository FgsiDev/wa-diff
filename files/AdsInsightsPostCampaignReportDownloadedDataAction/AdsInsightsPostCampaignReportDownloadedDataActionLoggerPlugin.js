__d(
  "AdsInsightsPostCampaignReportDownloadedDataActionLoggerPlugin",
  [
    "AdsInsightsPostCampaignReportDownloadedDataActionFlux",
    "adsMgmtCurrentNavigationEvent",
    "adsMgmtLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            "ads_insights_post_campaign_report_downloaded",
            babelHelpers.extends(
              {
                action_type: o(
                  "AdsInsightsPostCampaignReportDownloadedDataActionFlux",
                ).actionType,
                object_ids: t.campaignGroupIDs
                  .concat(t.campaignIDs)
                  .concat(t.adgroupIDs),
                object_level: t.objectLevel,
              },
              t.logData,
              r("adsMgmtCurrentNavigationEvent")(),
            ),
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
