__d(
  "AdsUEditorAdgroupSelectDonationPromotedObjectTypeReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsDCODegreesOfFreedomUtils",
    "AdsDynamicAdsFormatUtils",
    "AdsInstagramUserIdMigrationUtils",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupDynamicMutators",
    "AdsUEditorAdgroupOfferMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupShopAdsUtils",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignSelectDonationPromotedObjectTypeDataActionFlux",
    "AdsUEditorMessengerMutators",
    "AdsUEditorWebsiteAndAppMutators",
    "AdsUEditorWebsiteMutators",
    "ApiAdObjectTypes",
    "adsACOIsACOAdgroup",
    "adsACORemoveACOSpec",
    "adsCallToActionGetDefaultCallToActionType",
    "adsUEditorDynamicAdsRemoveSingleMediaIfUnsupported",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                var n = r("nullthrows")(i.get(t)),
                  a = n.campaign,
                  l = n.campaignGroup,
                  s = n.specPlugin,
                  u = r(
                    "AdsAdgroupSemanticFields",
                  ).multiShareEndCard.isSupported(s, e),
                  c = o(
                    "AdsUEditorCampaignAdObjectsUtils",
                  ).getPromotedObjectType({ campaign: a, campaignGroup: l }),
                  d = r("adsCallToActionGetDefaultCallToActionType")(
                    l.objective,
                    c,
                  );
                return o("AdsMutators").chain(
                  function (e) {
                    return o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)
                      ? o("AdsMutators").chain(
                          o("AdsInstagramUserIdMigrationUtils")
                            .IGIDV2MigrationAccessors.creative.instagram_user_id
                            .delete,
                          r("AdsAdgroupRecordAccessors").creative
                            .object_story_id.delete,
                          r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.object_type.set(
                            r("ApiAdObjectTypes").SHARE,
                          ),
                          r("AdsAdgroupRecordAccessors").metadata.delete,
                          r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.object_story_spec.link_data.call_to_action.type.set(
                            d || "DONATE",
                          ),
                        )(e)
                      : e;
                  },
                  function (e) {
                    var t;
                    return o("AdsMutators").chain(
                      (t = r("AdsAdgroupRecordAccessors")).creative.shop_spec
                        .delete,
                      t.creative.object_story_spec.page_id.delete,
                      o("AdsInstagramUserIdMigrationUtils")
                        .IGIDV2MigrationAccessors.creative.object_story_spec
                        .instagram_user_id.delete,
                      t.creative.product_set_id.delete,
                      t.creative.asset_feed_spec.delete,
                      t.creative.object_story_spec.link_data.child_attachments
                        .delete,
                      t.creative.object_story_spec.link_data
                        .post_click_configuration.delete,
                      t.creative.object_story_spec.link_data.retailer_item_ids
                        .delete,
                      t.creative.mockup_id.delete,
                    )(e);
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupShopAdsUtils",
                    ).deleteAssetFeedSpecOnsiteDestinationAndShopSpec(e);
                  },
                  function (e) {
                    return r("adsACOIsACOAdgroup")(e)
                      ? r("adsACORemoveACOSpec")(e)
                      : e;
                  },
                  function (e) {
                    return r(
                      "adsUEditorDynamicAdsRemoveSingleMediaIfUnsupported",
                    )(e, { campaign: a, campaignGroup: l });
                  },
                  function (e) {
                    return o(
                      "AdsUEditorMessengerMutators",
                    ).deleteMessengerDestinationFields({
                      adgroup: e,
                      specPlugin: s,
                      supportPageEndCard: u,
                    });
                  },
                  function (e) {
                    return o(
                      "AdsUEditorWebsiteAndAppMutators",
                    ).deleteAdgroupFields(e, s);
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupOfferMutators",
                    ).removeOfferIDState(e, s, l.objective);
                  },
                  function (e) {
                    if (o("AdsAPIAdgroupRecordUtils").isTemplateCreative(e)) {
                      var t = o(
                          "AdsDynamicAdsFormatUtils",
                        ).getIsDynamicAdSingleMediaFormat(e),
                        n = o(
                          "AdsDynamicAdsFormatUtils",
                        ).getIsDynamicAdCarouselMediaFormat(e);
                      if (t || n)
                        return o(
                          "AdsUEditorAdgroupDynamicMutators",
                        ).transformAdgroupFromTemplateToSingleMediaLinkData(
                          e,
                          a,
                          l,
                          l.objective,
                        );
                    }
                    return e;
                  },
                  function (e) {
                    return o("AdsDCODegreesOfFreedomUtils").hasODAXSupportedDOF(
                      e,
                    )
                      ? r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.degrees_of_freedom_spec.delete(e)
                      : e;
                  },
                  function (e) {
                    var t;
                    return o("AdsUEditorWebsiteMutators").setWebsiteURL({
                      adgroup: e,
                      campaignGroupPromotedPageID:
                        (t = l.promoted_object) == null ? void 0 : t.page_id,
                      objective: l.objective,
                      promotedObjectType: r("AdsPromotedObjectTypes").DONATION,
                      specPlugin: s,
                      websiteURL: "http://fb.com/donate",
                    });
                  },
                  function (e) {
                    var t;
                    return o("AdsUEditorCallToActionMutators").setCallToAction({
                      callToActionType: d,
                      pages: null,
                      cachedCallToActionLink: null,
                      adgroup: e,
                      campaignGroupPromotedPageID:
                        (t = l.promoted_object) == null ? void 0 : t.page_id,
                      objective: l.objective,
                      promotedObjectType: r("AdsPromotedObjectTypes").DONATION,
                      specPlugin: s,
                    });
                  },
                  function (e) {
                    return o(
                      "AdsAssetFeedUtils",
                    ).hasPlacementCustomizationFromRecord(e)
                      ? o(
                          "AdsUEditorAdgroupAssetFeedMutators",
                        ).removeMissingAdlabelsFromCustomizationRules(e)
                      : e;
                  },
                )(e);
              },
            );
          },
          o("AdsUEditorCampaignSelectDonationPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
