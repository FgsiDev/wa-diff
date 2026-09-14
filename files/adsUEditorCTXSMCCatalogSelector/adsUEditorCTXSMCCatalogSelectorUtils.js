__d(
  "adsUEditorCTXSMCCatalogSelectorUtils",
  ["AdCampaignDestination", "AdsUEditorMessagingDestinationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      if (e.length === 0) return !1;
      var n = e[0],
        a = n.campaign.destination_type,
        i = (t = n.adgroup.creative) == null ? void 0 : t.call_to_action_type;
      return o("AdsUEditorMessagingDestinationUtils").isCTMAd(
        a != null ? a : r("AdCampaignDestination").UNDEFINED,
        e,
        i != null ? i : "NO_BUTTON",
      );
    }
    l.adsUEditorIsCampaignCTMAd = e;
  },
  98,
);
