__d(
  "AdsExperimentsLightweightTestEligibilityIsEligibleUtils",
  ["AdsAdvantageAudienceUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
      var e = n.entrySource,
        r = n.isFromPublish;
      if (!r && e === "LightweightCTAEntrypointButton") return null;
      var a = t.campaign;
      if (
        (a == null ? void 0 : a.id) != null &&
        o("AdsAdvantageAudienceUtils").isCampaignAdavantageAudienceEnabled(a)
      )
        return { campaignIDs: new Set([a.id]) };
    };
    l.isAdvantagePlusAudienceAlreadyEnabled = e;
  },
  98,
);
