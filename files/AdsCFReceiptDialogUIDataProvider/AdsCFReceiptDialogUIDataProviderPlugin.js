__d(
  "AdsCFReceiptDialogUIDataProviderPlugin",
  ["AdsCFConstants", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        adgroupSectionMode:
          o("AdsCFConstants").QuickCreateSectionMode.CREATE_NEW_ADGROUP,
        campaignGroupSectionMode:
          o("AdsCFConstants").QuickCreateSectionMode.CREATE_NEW_CAMPAIGN_GROUP,
        campaignSectionMode:
          o("AdsCFConstants").QuickCreateSectionMode.CREATE_NEW_CAMPAIGN,
        defaultToEngagementCampaign: !1,
        entryPointReference: null,
        hasSelectionChanged: !1,
        hasViewedAdgroupPage: !1,
        hasViewedCampaignPage: !1,
        isDialogProcessing: !1,
        isDialogShown: !1,
        isMockupImportEnabled: !1,
        isPackageSelectionDialogShown: !1,
        isPCAUnificationDialogShown: !1,
        isQuickCreateMode: !1,
        openReceiptDialogSource: "",
        overRideCampaignGroupSectionMode: !1,
        quickCreateStartLevel: "campaign",
      },
      s = r("immutable").Record(e),
      u = { initialState: s() },
      c = u;
    l.default = c;
  },
  98,
);
