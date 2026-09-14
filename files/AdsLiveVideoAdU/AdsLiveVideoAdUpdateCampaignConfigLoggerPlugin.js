__d(
  "AdsLiveVideoAdUpdateCampaignConfigLoggerPlugin",
  [
    "AdsLiveVideoAdUtils",
    "AdsUEditorCampaignLiveVideoSectionLoggingUtils",
    "XFBLiveVideoAdType.facebook",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          o(
            "AdsUEditorCampaignLiveVideoSectionLoggingUtils",
          ).logLiveVideoSectionAdsManagerEvent("lva_update_campaign_config", {
            account_id: t.accountID.toString(),
            campaign_ids: t.campaignIDs.toLocaleString(),
            toggle_state: o(
              "AdsLiveVideoAdUtils",
            ).LiveVideoAdConfigUpdateAction.getName(t.updateAction),
            live_video_config: r("XFBLiveVideoAdType.facebook").getName(
              t.liveVideoAdType,
            ),
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
