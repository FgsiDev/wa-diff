__d(
  "AdsUEditorCampaignLiveVideoSectionLoggingUtils",
  ["requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("LiveBoostingFalcoEvent").__setRef(
      "AdsUEditorCampaignLiveVideoSectionLoggingUtils",
    );
    function s(t, n) {
      e.onReady(function (e) {
        return e.log(function () {
          return { event: t, extra_data: n, surface: "ads_manager" };
        });
      });
    }
    l.logLiveVideoSectionAdsManagerEvent = s;
  },
  98,
);
