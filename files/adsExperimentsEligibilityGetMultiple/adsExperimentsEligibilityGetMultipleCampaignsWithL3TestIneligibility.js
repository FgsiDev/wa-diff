__d(
  "adsExperimentsEligibilityGetMultipleCampaignsWithL3TestIneligibility",
  ["AdsExperimentsBudgetUtils", "adsExperimentsIsCampaignGroupMultiCampaign"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = e.campaignGroup;
      if (
        (n == null ? void 0 : n.id) == null ||
        (t == null ? void 0 : t.adAccount) == null
      )
        return null;
      var a = o("AdsExperimentsBudgetUtils").isCBOEnabled(n);
      return a
        ? r("adsExperimentsIsCampaignGroupMultiCampaign")(n.id, t.adAccount)
            .mapValue(function (e) {
              if (e) return { campaignGroupID: n.id };
            })
            .getValue()
        : null;
    }
    l.default = e;
  },
  98,
);
