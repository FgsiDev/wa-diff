__d(
  "AdsPETableSelectionLoggerHelper",
  [
    "invariant",
    "AdsDataAtom",
    "AdsPEFluxAdSelectionDownKeyActionFlux",
    "AdsPEFluxAdSelectionIdClickedActionFlux",
    "AdsPEFluxAdSelectionUpKeyActionFlux",
    "AdsPEFluxCampaignGroupSelectionDownKeyActionFlux",
    "AdsPEFluxCampaignGroupSelectionIdClickedActionFlux",
    "AdsPEFluxCampaignGroupSelectionUpKeyActionFlux",
    "AdsPEFluxCampaignSelectionDownKeyActionFlux",
    "AdsPEFluxCampaignSelectionIdClickedActionFlux",
    "AdsPEFluxCampaignSelectionUpKeyActionFlux",
    "AdsSelectorUtils",
    "adsMgmtAdgroupSelectionSelector",
    "adsMgmtCampaignGroupSelectionSelector",
    "adsMgmtCampaignSelectionSelector",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e, u;
    function c(t) {
      var n = t.actionType;
      switch (n) {
        case o("AdsPEFluxAdSelectionIdClickedActionFlux").actionType:
        case o("AdsPEFluxAdSelectionDownKeyActionFlux").actionType:
        case o("AdsPEFluxAdSelectionUpKeyActionFlux").actionType:
          return (
            (u || (u = r("AdsDataAtom"))).waitFor(
              (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens([
                r("adsMgmtAdgroupSelectionSelector"),
              ]),
            ),
            {
              action_type: n,
              current_action_items_count: r("adsMgmtAdgroupSelectionSelector")()
                .size,
            }
          );
        case o("AdsPEFluxCampaignSelectionIdClickedActionFlux").actionType:
        case o("AdsPEFluxCampaignSelectionDownKeyActionFlux").actionType:
        case o("AdsPEFluxCampaignSelectionUpKeyActionFlux").actionType:
          return (
            (u || (u = r("AdsDataAtom"))).waitFor(
              (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens([
                r("adsMgmtCampaignSelectionSelector"),
              ]),
            ),
            {
              action_type: n,
              current_action_items_count: r(
                "adsMgmtCampaignSelectionSelector",
              )().size,
            }
          );
        case o("AdsPEFluxCampaignGroupSelectionIdClickedActionFlux").actionType:
        case o("AdsPEFluxCampaignGroupSelectionDownKeyActionFlux").actionType:
        case o("AdsPEFluxCampaignGroupSelectionUpKeyActionFlux").actionType:
          return (
            (u || (u = r("AdsDataAtom"))).waitFor(
              (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens([
                r("adsMgmtCampaignGroupSelectionSelector"),
              ]),
            ),
            {
              action_type: n,
              current_action_items_count: r(
                "adsMgmtCampaignGroupSelectionSelector",
              )().size,
            }
          );
      }
      s(0, 2895, t);
    }
    l.getTableSelectionData = c;
  },
  98,
);
