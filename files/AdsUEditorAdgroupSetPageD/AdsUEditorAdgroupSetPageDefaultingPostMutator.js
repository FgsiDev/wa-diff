__d(
  "AdsUEditorAdgroupSetPageDefaultingPostMutator",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsEditingAdgroupEditorContext",
    "AdsPagePostProvider",
    "AdsUEditorAdgroupSetPagePostReducerPluginUtils",
    "AdsUEditorExistingPostUtils",
    "AdsUEditorHostIDs",
    "AdsUEditorSetPostEditModeMutators",
    "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
    "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
    "adsUEditorGetShouldEnableAPlusCUseExistingPostByDefaultGetValueSelector",
    "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultGetValueSelector",
    "adsUEditorPreloadedIdentityToStorefrontSelector",
    "cr:27504",
    "isTruthy",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, a, i, l, s, u) {
      if ((u === void 0 && (u = !1), n("cr:27504") == null)) return e;
      var c = t.pivots,
        d = c.objective,
        m = c.promotedObjectType,
        p = n("cr:27504").shouldDefaultToExistingPost(
          a,
          i == null ? void 0 : i.account_id,
          e,
          d,
          l.optimization_goal,
        ),
        _ = p.postToDefaultTo,
        f = p.shouldDefault;
      if (r("isTruthy")(a) && f) {
        var g = r("AdsAdgroupRecordAccessors").creative.object_type.get(e),
          h = o("AdsUEditorExistingPostUtils").convertToExistingPostAd(
            e,
            r("nullthrows")(a),
          );
        ((h = r("AdsAdgroupRecordAccessors").creative.object_type.set(g, h)),
          (h = o("AdsUEditorSetPostEditModeMutators").setToUsingExistingPost({
            adgroup: h,
            cachedCreative: null,
            cachedPageID: null,
            defaultPagePost: null,
            specPathPlugin: t,
            campaign: l,
            campaignGroup: s,
          })));
        var y = n("cr:27504").getPostFromPostId(_, a);
        if (y) {
          var C = o("AdsAPIAdgroupRecordUtils").getObjectType(h);
          if (m && d) {
            var b;
            h = o(
              "AdsUEditorAdgroupSetPagePostReducerPluginUtils",
            ).updatedAdgroupWithSelectedPagePost(
              h,
              l,
              s,
              i,
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
                adgroupIDs: [h.id],
                objectType: C,
                pagePostID: (b = y.promotable_id) != null ? b : a + "_" + y.id,
                objective: d,
                post: y,
              },
              !1,
              void 0,
              u,
            );
          }
        }
        return h;
      }
      return e;
    }
    l.setUseLiveVideoPostDefaulting = e;
  },
  98,
);
