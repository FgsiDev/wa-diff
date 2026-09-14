__d(
  "adsCampaignGroupMessageMarketingBusinessTierInfraSelector",
  [
    "AdFLEXBusinessTierConfig",
    "LoadObject",
    "MessageMarketingBusinessTierInfraDataProvider",
    "adsCreateSelector",
    "adsUEditorSelectedCampaignGroupIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("adsCreateSelector")(
        [
          r("MessageMarketingBusinessTierInfraDataProvider").toFluxSelector(),
          o("adsUEditorSelectedCampaignGroupIDsSelector")
            .adsUEditorSelectedCampaignGroupIDsSelector,
        ],
        function (t, n) {
          var e =
            r("AdFLEXBusinessTierConfig") == null
              ? void 0
              : r("AdFLEXBusinessTierConfig").get();
          return e == null
            ? r("LoadObject").withValue(null, { creatorModuleID: i.id })
            : e.getBusinessTierForCampaignGroups(t, n);
        },
        {
          name:
            i.id + ".adsCampaignGroupMessageMarketingBusinessTierInfraSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
