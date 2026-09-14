__d(
  "AdsAdObjectLiveStoreUtils",
  [
    "AdsAdgroupDraftFragmentStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupDraftFragmentStore",
    "LoadObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, o) {
      var e, a, l;
      switch (o) {
        case "campaign":
          l = n("AdsCampaignGroupDraftFragmentStore");
          break;
        case "ad_set":
          l = n("AdsCampaignDraftFragmentStore");
          break;
        case "ad":
          l = n("AdsAdgroupDraftFragmentStore");
          break;
      }
      return (e = l) != null && e.get(t).isLoading()
        ? r("LoadObject").loading({ creatorModuleID: i.id })
        : (a = l) != null && a.isNew(t)
          ? r("LoadObject").withValue(void 0, { creatorModuleID: i.id })
          : null;
    };
    l.getDraft = e;
  },
  98,
);
