__d(
  "areAnySelectedCampaignsMarketingMessagesOnlySelectorImplLogic",
  ["isMarketingMessagesPlacementOnlyFromPlacementSpec"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.length === 0
        ? !1
        : e.some(
            o("isMarketingMessagesPlacementOnlyFromPlacementSpec")
              .isMarketingMessagesPlacementOnlyFromPlacementSpec,
          );
    }
    l.areAnySelectedCampaignsMarketingMessagesOnlySelectorImplLogic = e;
  },
  98,
);
