__d(
  "adsUEditorAdgroupConnectedSourcesEligibilitySelector",
  [
    "AdsObjectTypeUtils",
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector",
    "adsUEditorAdgroupConnectedSourcesPromoEligibilitySelector",
    "adsUEditorAdgroupConnectedSourcesSiteLinkEligibilitySelector",
    "adsUEditorAdgroupIsEligiblePCAUnifiedL1Selector",
    "adsUEditorAdgroupIsPCAUnifiedFormatSelector",
    "adsUEditorCampaignMMOnlyPlacementSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        o("adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector")
          .adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector,
        o("adsUEditorAdgroupConnectedSourcesSiteLinkEligibilitySelector")
          .adsUEditorAdgroupConnectedSourcesSiteLinkEligibilitySelector,
        o("adsUEditorAdgroupConnectedSourcesPromoEligibilitySelector")
          .adsUEditorAdgroupConnectedSourcesPromoEligibilitySelector,
        r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
        o("adsUEditorCampaignMMOnlyPlacementSelector")
          .areAnySelectedCampaignsMarketingMessagesOnlySelector,
        r("adsUEditorAdgroupIsPCAUnifiedFormatSelector"),
        o("adsUEditorAdgroupIsEligiblePCAUnifiedL1Selector")
          .adsUEditorAdgroupIsEligiblePCAUnifiedL1Selector,
      ],
      function (t, n, r, a, i, l, s) {
        return l ||
          i ||
          a.some(function (e) {
            var t = e.campaignGroup;
            return o("AdsObjectTypeUtils").isMessageCampaign(t);
          })
          ? !1
          : s || t || n || r;
      },
      { name: i.id + ".adsUEditorAdgroupConnectedSourcesEligibilitySelector" },
    );
    l.adsUEditorAdgroupConnectedSourcesEligibilitySelector = e;
  },
  98,
);
