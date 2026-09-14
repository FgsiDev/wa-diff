__d(
  "adsUEditorAdgroupIsSlvaPaScheduledLiveVideoAdSelector",
  [
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAccountSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsGetUniformValueSelector")(
            o("AdsUEditorSelectors").campaign.bulkByAccessorToJS(function (e) {
              var t;
              return (t = e.live_video_ad_campaign_config) == null
                ? void 0
                : t.live_video_ad_type;
            }),
          ),
        ],
        function (t) {
          return t === "SCHEDULED_LIVE";
        },
        { name: i.id + ".isScheduledLiveVideoAdSelector" },
      ),
      s = r("adsCreateSelector")(
        [r("adsUEditorAccountSelector")],
        function (t) {
          var e;
          return (
            ((e = t.live_video_advertiser_details) == null
              ? void 0
              : e.is_slva_pa_enabled) === !0
          );
        },
        { name: i.id + ".isSlvaPaEnabledSelector" },
      ),
      u = r("adsCreateSelector")(
        [s, e],
        function (t, n) {
          return t && n;
        },
        { name: i.id + ".isSlvaPaScheduledLiveVideoAdSelector" },
      );
    ((l.isScheduledLiveVideoAdSelector = e),
      (l.isSlvaPaEnabledSelector = s),
      (l.isSlvaPaScheduledLiveVideoAdSelector = u));
  },
  98,
);
