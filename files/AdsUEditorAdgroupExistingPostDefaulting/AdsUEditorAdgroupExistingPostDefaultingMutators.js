__d(
  "AdsUEditorAdgroupExistingPostDefaultingMutators",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsEditingAdgroupEditorContext",
    "AdsPagePostProvider",
    "AdsUEditorAdgroupSetInstagramPostV2ReducerPluginUtils",
    "AdsUEditorAdgroupSetPagePostReducerPluginUtils",
    "AdsUEditorHostIDs",
    "AdsUEditorMessagingDestinationUtils",
    "CTMSMCCatalogAdAdoptionLogger",
    "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
    "adsUEditorAMCatalogAdEligibleSMCFeaturesSelector",
    "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
    "adsUEditorGetShouldEnableAPlusCUseExistingPostByDefaultGetValueSelector",
    "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultGetValueSelector",
    "adsUEditorPreloadedIdentityToStorefrontSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s, u, c, d) {
      d === void 0 && (d = !1);
      var m = i,
        p = o("AdsAPIAdgroupRecordUtils").getObjectType(m),
        _ = l.destination_type;
      if (n)
        m = o(
          "AdsUEditorAdgroupSetInstagramPostV2ReducerPluginUtils",
        ).updateAdgroupWithSelectedInstagramPostV2(
          m,
          l,
          s,
          a,
          r(
            "adsUEditorGetShouldEnableAPlusCUseExistingPostByDefaultGetValueSelector",
          )(),
          r(
            "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultGetValueSelector",
          )(),
          {
            hostID: r("AdsUEditorHostIDs").CREATION,
            adgroupIDs: [m.id],
            objectType: p,
            postID: t.id,
            pageID: e,
            bulkPromotedObject: c,
            isMultiDestinationAd: o(
              "AdsUEditorMessagingDestinationUtils",
            ).isMultiDestination(_),
            post: t,
          },
          d,
        );
      else if (c && u) {
        var f,
          g,
          h =
            o(
              "adsUEditorAMCatalogAdEligibleSMCFeaturesSelector",
            ).adsUEditorAMCatalogAdEligibleBoostPostVersionSelector(
              r("AdsEditingAdgroupEditorContext"),
            ) === "L1_CATALOG_PRODUCT_SELECTOR_BOOST_POST_TEST";
        ((m = o(
          "AdsUEditorAdgroupSetPagePostReducerPluginUtils",
        ).updatedAdgroupWithSelectedPagePost(
          m,
          l,
          s,
          a,
          r(
            "adsUEditorGetShouldEnableAPlusCUseExistingPostByDefaultGetValueSelector",
          )(),
          r(
            "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultGetValueSelector",
          )(),
          r("adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector")(
            r("AdsEditingAdgroupEditorContext"),
          ),
          r("AdsPagePostProvider")(),
          r("ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider")(),
          o(
            "adsUEditorPreloadedIdentityToStorefrontSelector",
          ).adsUEditorAdgroupWebsiteAndShopIdentityToStorefrontSelector(
            r("AdsEditingAdgroupEditorContext"),
          ),
          {
            hostID: r("AdsUEditorHostIDs").CREATION,
            adgroupIDs: [m.id],
            objectType: p,
            pagePostID: (f = t.promotable_id) != null ? f : e + "_" + t.id,
            objective: u,
            post: t,
          },
          h,
          void 0,
          d,
        )),
          o("CTMSMCCatalogAdAdoptionLogger").logSMCProductSelectionAMEvents(
            o("CTMSMCCatalogAdAdoptionLogger").CtmSMCCatalogAdAdoptionMessage
              .AdCreativeComponentUseExistingPostDefaultPost,
            e,
            a == null ? void 0 : a.account_id,
            m.id,
            null,
            null,
            (g = t.promotable_id) != null ? g : e + "_" + t.id,
          ));
      }
      return m;
    }
    l.setPost = e;
  },
  98,
);
