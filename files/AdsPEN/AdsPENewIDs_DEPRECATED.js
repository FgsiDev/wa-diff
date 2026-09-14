__d(
  "AdsPENewIDs_DEPRECATED",
  [
    "AdsAdgroupDraftFragmentStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupDraftFragmentStore",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = +e < 0,
        r = "" + e;
      return (
        (t =
          t ||
          n("AdsCampaignGroupDraftFragmentStore").isNew(r) ||
          n("AdsCampaignDraftFragmentStore").isNew(r) ||
          n("AdsAdgroupDraftFragmentStore").isNew(r)),
        t
      );
    }
    i.isNew = e;
  },
  66,
);
