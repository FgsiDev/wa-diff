__d(
  "adsOriginalCampaignSelector",
  [
    "AdsCampaignDraftFragmentStore",
    "AdsPECampaignLiveTableStore",
    "adsCreateOriginalAdObjectSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateOriginalAdObjectSelector")({
        draftStore: r("AdsCampaignDraftFragmentStore"),
        liveStore: r("AdsPECampaignLiveTableStore"),
      }),
      s = e;
    l.default = s;
  },
  98,
);
