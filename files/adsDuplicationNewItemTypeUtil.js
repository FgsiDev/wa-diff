__d(
  "adsDuplicationNewItemTypeUtil",
  ["AdsPECreationMode"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e != null)
        switch (e) {
          case r("AdsPECreationMode").DuplicateAdgroupByImages:
          case r("AdsPECreationMode").DuplicateAdgroups:
            return "ad";
          case r("AdsPECreationMode").DuplicateCampaigns:
            return "ad_set";
          case r("AdsPECreationMode").DuplicateCampaignGroups:
            return "campaign";
          default:
            return;
        }
    }
    l.default = e;
  },
  98,
);
