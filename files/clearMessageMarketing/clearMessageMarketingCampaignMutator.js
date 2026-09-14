__d(
  "clearMessageMarketingCampaignMutator",
  [
    "AdsAPITargetFields",
    "AdsAutomaticPlacementMutationBehavior",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementReducerUtils",
    "AdsUEditorMessagingDestinationUtils",
    "AdsWhatsAppFeatureGating",
    "getOnlyAdsCustomAudiences",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n =
        o("AdsUEditorMessagingDestinationUtils").destinationIncludesWhatsApp(
          e.destination_type,
        ) && o("AdsWhatsAppFeatureGating").shouldApplyPWANMismatchFixBundle();
      return o("AdsMutators").chain(
        function (e) {
          return n
            ? e
            : r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.whats_app_business_phone_number_id.delete(e);
        },
        r("AdsCampaignRecordAccessors").promoted_object
          .whatsapp_business_account_id.delete,
        r("AdsCampaignRecordAccessors").targeting.custom_audiences.set(
          r("immutable").fromJS(
            o("getOnlyAdsCustomAudiences").getOnlyAdsCustomAudiences(e),
          ),
        ),
        r("AdsCampaignRecordAccessors").targeting.subscriber_universe
          .whatsapp_subscriber_source.delete,
        function (e) {
          return r(
            "AdsCampaignRecordAccessors",
          ).targeting.subscriber_universe.whatsapp_subscriber_pool.delete(e);
        },
        function (e) {
          return o("AdsPlacementReducerUtils").updatePlacementSpec(
            o("AdsPlacementAPISpecWriterUtils").removeGroupAnyway(
              e,
              "whatsapp/marketing_messages",
              t,
              r("AdsAPITargetFields").WHATSAPP_POSITIONS,
              "whatsapp",
              r("AdsAutomaticPlacementMutationBehavior").KEEP_AUTOMATIC,
            ),
          );
        },
      )(e);
    }
    l.default = e;
  },
  98,
);
