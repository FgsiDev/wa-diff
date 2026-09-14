__d(
  "adsUEditorSelectedCampaignsAreEligibleForMarketingMessagesSelector",
  [
    "adsCreateSelector",
    "adsGetMessageMarketingUpstreamSettingsFromCampaignIDSelector",
    "adsUEditorSelectedCampaignIDsSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedCampaignIDsSelector"),
          o("adsGetMessageMarketingUpstreamSettingsFromCampaignIDSelector")
            .adsGetMessageMarketingUpstreamSettingsFromCampaignIDSelector,
        ],
        function (t, n) {
          return r("immutable").Map(
            t.map(function (e) {
              return [e, n(e)];
            }),
          );
        },
        {
          name:
            i.id +
            ".adsUEditorSelectedCampaignsAreEligibleForMarketingMessagesSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
