__d(
  "handleMarketingMessagesSACCampaignUpdate",
  [
    "AdsCampaignRecordAccessors",
    "AdsDataAtom",
    "AdsPlacementRawSpecUtils",
    "AdsUEditorCampaignMessageMarketingSetOrClearSettingsFromUpstreamChangeAction",
    "AdsUEditorCampaignPlacementResetAction",
    "AdsUEditorCampaignPlacementSetAction",
    "MarketingMessagesCampaignCategoryUtils",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "getOnlyAdsCustomAudiences",
    "immutable",
    "isMessageMarketingEnabledFromCampaign",
    "isMessengerMarketingMessageEnabledFromCampaign",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, a, l, s) {
      var u = o(
        "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
      ).convertCampaignRecordToPlacementSpec(t);
      if (
        s !== !0 &&
        !o("AdsPlacementRawSpecUtils").isRawPlacementSpecAutomatic(u)
      )
        return t;
      var c = o(
          "MarketingMessagesCampaignCategoryUtils",
        ).isMarketingMessagesOnlyFromCampaignTargeting(t),
        d = o(
          "MarketingMessagesCampaignCategoryUtils",
        ).isMarketingMessagesEnabledFromCampaignTargeting(t),
        m = t;
      return (
        c
          ? ((e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
              r("AdsUEditorCampaignPlacementResetAction").dispatch(
                { campaignIDs: [n], eligibilityInformation: l, hostID: a },
                {
                  line: "71",
                  module: "handleMarketingMessagesSACCampaignUpdate.js",
                  moduleID: i.id,
                },
              );
            }),
            (m = r("AdsCampaignRecordAccessors").targeting.custom_audiences.set(
              r("immutable").fromJS(
                o("getOnlyAdsCustomAudiences").getOnlyAdsCustomAudiences(m),
              ),
              m,
            )))
          : d &&
            (o(
              "isMessengerMarketingMessageEnabledFromCampaign",
            ).isMessengerMarketingMessageEnabledFromCampaign(t) &&
              (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  r("AdsUEditorCampaignPlacementSetAction").dispatch(
                    {
                      campaignIDs: [n],
                      addGroups: [],
                      removeGroups: ["messenger/marketing_messages"],
                      removePlatforms: [],
                      eligibilityInformation: l,
                      hostID: a,
                    },
                    {
                      line: "85",
                      module: "handleMarketingMessagesSACCampaignUpdate.js",
                      moduleID: i.id,
                    },
                  );
                },
              ),
            o(
              "isMessageMarketingEnabledFromCampaign",
            ).isMessageMarketingEnabledFromCampaign(t) &&
              (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  r(
                    "AdsUEditorCampaignMessageMarketingSetOrClearSettingsFromUpstreamChangeAction",
                  ).dispatch(
                    { campaignIDs: [n], hostID: a },
                    {
                      line: "97",
                      module: "handleMarketingMessagesSACCampaignUpdate.js",
                      moduleID: i.id,
                    },
                  );
                },
              )),
        m
      );
    }
    l.handleMarketingMessagesSACCampaignUpdate = s;
  },
  98,
);
