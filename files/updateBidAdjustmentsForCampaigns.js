__d(
  "updateBidAdjustmentsForCampaigns",
  ["AdsCampaignRecordAccessors", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
      var e = r("AdsCampaignRecordAccessors").bid_adjustments.user_groups.get(
        t,
      );
      return (
        typeof e == "string" && (e = JSON.parse(e)),
        e != null &&
          Object.prototype.hasOwnProperty.call(e, "weight") &&
          (e = e.weight),
        o("AdsMutators").chain(
          r(
            "AdsCampaignRecordAccessors",
          ).bid_adjustments.delete_user_groups.set(n != null),
          r("AdsCampaignRecordAccessors").bid_adjustments.user_groups.set(e),
        )(t)
      );
    };
    l.updateBidAdjustmentsForCampaigns = e;
  },
  98,
);
