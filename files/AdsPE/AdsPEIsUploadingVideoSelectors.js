__d(
  "AdsPEIsUploadingVideoSelectors",
  [
    "AdsVideoBackgroundUploadUtils",
    "adsCreateSelector",
    "adsSingleVideoUploadSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
    "adsUEditorSelectedCampaignGroupIDsSelector",
    "adsUEditorSelectedCampaignIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsSingleVideoUploadSelector"),
          r("adsUEditorSelectedCampaignIDsSelector"),
        ],
        function (t, n) {
          var e = t;
          return o(
            "AdsVideoBackgroundUploadUtils",
          ).areCurrentCampaignsUploadingVideo(n, e);
        },
        { name: i.id + ".areSelectedCampaignsUploadingVideo" },
      ),
      s = r("adsCreateSelector")(
        [
          r("adsSingleVideoUploadSelector"),
          o("adsUEditorSelectedCampaignGroupIDsSelector")
            .adsUEditorSelectedCampaignGroupIDsSelector,
        ],
        function (t, n) {
          var e = t;
          return o(
            "AdsVideoBackgroundUploadUtils",
          ).areCurrentCampaignGroupsUploadingVideo(n, e);
        },
        { name: i.id + ".areSelectedCampaignGroupsUploadingVideo" },
      ),
      u = r("adsCreateSelector")(
        [
          r("adsSingleVideoUploadSelector"),
          r("adsUEditorSelectedAdgroupIDsSelector"),
        ],
        function (t, n) {
          var e = t;
          return o(
            "AdsVideoBackgroundUploadUtils",
          ).areCurrentAdgroupsUploadingVideo(n, e);
        },
        { name: i.id + ".areSelectedAdgroupsUploadingVideo" },
      );
    ((l.areSelectedCampaignsUploadingVideo = e),
      (l.areSelectedCampaignGroupsUploadingVideo = s),
      (l.areSelectedAdgroupsUploadingVideo = u));
  },
  98,
);
