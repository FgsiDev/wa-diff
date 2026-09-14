__d(
  "AdsUEditorAdgroupSetSAOffOptinStatusReducerPlugin",
  [
    "AdDraftFragmentSource",
    "AdsAdgroupDraftFragmentStore",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsBulkValueUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupEmailCaptureMutators",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupOnsiteDestinationsMutators",
    "AdsUEditorAdgroupPromoAdMutatorUtils",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetSAOffOptinStatusActionFlux",
    "AdsUEditorAdgroupShopAdsUtils",
    "AdsUEditorAdgroupTurnoffPromoAdMutator",
    "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
    "ShopsAdsOffsiteCheckoutAdsLoggingUtils",
    "ShopsAdsOffsiteCheckoutAdsUtils",
    "adsUEditorAdgroupProductCatalogIDSelector",
    "adsUEditorAdgroupUniversalStorefrontsSelector",
    "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
    "adsUEditorPreloadedIdentityToStorefrontSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = r("AdDraftFragmentSource")).CLICK_AD_DUPLICATE,
        e.CLICK_CAMPAIGN_DUPLICATE,
        e.CLICK_CAMPAIGN_GROUP_DUPLICATE,
        e.CLICK_AD_DUPLICATE_BY_IMAGES,
        e.DUPLICATE_AD_FROM_CLIPBOARD,
        e.DUPLICATE_CAMPAIGN_FROM_CLIPBOARD,
        e.DUPLICATE_CAMPAIGN_GROUP_FROM_CLIPBOARD,
        e.DUPLICATE_UPGRADE_AD_FROM_CLIPBOARD,
        e.DUPLICATE_UPGRADE_CAMPAIGN_FROM_CLIPBOARD,
        e.DUPLICATE_UPGRADE_CAMPAIGN_GROUP_FROM_CLIPBOARD,
      ];
    function u(e, t, n, a, i, l) {
      var s,
        u = l.adgroupProductCatalogIDLoadObject,
        c = l.adsUEditorAdgroupUniversalStorefronts,
        d = l.identityToStorefrontMap,
        m = l.onsiteDestinations,
        p = r("AdsAdgroupSemanticFields").instagramActorID.get(i, e),
        _ = r("AdsAdgroupSemanticFields").pageID.get(i, e),
        f = o("AdsUEditorAdgroupMutators").maybeUpdateSAOffDestinationSpec(
          e,
          n,
          a,
          o("AdsBulkValueUtils").getUniformValueOrDefault(u.getValue(), null),
          d == null ? void 0 : d.getValue(),
          _,
          p,
          o("ShopsAdsOffsiteCheckoutAdsUtils").SAOffDefaultingTrigger
            .INITIAL_LOAD,
          c == null ? void 0 : c.getValue(),
        );
      return ((s = f.creative) == null || (s = s.destination_spec) == null
        ? void 0
        : s.destination_type) === "WEBSITE_AND_SHOP"
        ? o("AdsMutators").chain(function (e) {
            var r, a;
            if (
              ((r =
                e == null ||
                (a = e.creative) == null ||
                (a = a.asset_feed_spec) == null ||
                (a = a.onsite_destinations) == null
                  ? void 0
                  : a.size) != null
                ? r
                : 0) > 0
            )
              return e;
            var l = o(
                "AdsUEditorAdgroupOnsiteDestinationsMutators",
              ).getStorefrontsForAdgroup(
                e,
                i,
                d == null ? void 0 : d.getValue(),
              ),
              s =
                t.storefronts != null
                  ? o("AdsBulkValueUtils").getUniformValue(t.storefronts, null)
                  : l,
              u = o(
                "AdsUEditorAdgroupOnsiteDestinationsMutators",
              ).getSuggestedOnsiteDestinationDetails(e, i, s, m);
            return o(
              "AdsUEditorAdgroupOnsiteDestinationsMutators",
            ).updateOnsiteDestinationsWithLinkType(e, n, null, s, u, !0, !0);
          })(f)
        : f;
    }
    function c(e, t, n, r, a) {
      var i = a.identityToStorefrontMap,
        l = a.onsiteDestinations;
      return o("AdsMutators").chain(
        function (e) {
          return o("AdsUEditorAdgroupMutators").setAdsCreativeDestinationSpec(
            e,
            "WEBSITE_AND_SHOP",
            t.destination_guidances_applied,
            "OPT_IN",
            "MANUAL",
          );
        },
        function (e) {
          var a, s;
          if (
            ((a =
              e == null ||
              (s = e.creative) == null ||
              (s = s.asset_feed_spec) == null ||
              (s = s.onsite_destinations) == null
                ? void 0
                : s.size) != null
              ? a
              : 0) > 0
          )
            return e;
          var u = o(
              "AdsUEditorAdgroupOnsiteDestinationsMutators",
            ).getStorefrontsForAdgroup(e, r, i == null ? void 0 : i.getValue()),
            c =
              t.storefronts != null
                ? o("AdsBulkValueUtils").getUniformValue(t.storefronts, null)
                : u,
            d = o(
              "AdsUEditorAdgroupOnsiteDestinationsMutators",
            ).getSuggestedOnsiteDestinationDetails(e, r, c, l);
          return o("AdsMutators").chain(
            function (e) {
              return o("AdsUEditorAdgroupTurnoffPromoAdMutator").turnOffPromo(
                e,
                o("AdsUEditorAdgroupTurnoffPromoAdMutator")
                  .PromoAdDefaultOptOutCallsite.ENABLE_SA_OFF,
              );
            },
            function (e) {
              return o(
                "AdsUEditorAdgroupOnsiteDestinationsMutators",
              ).updateOnsiteDestinationsWithLinkType(e, n, null, c, d, !0, !0);
            },
          )(e);
        },
      )(e);
    }
    function d(e, t, n, a, i) {
      return o("AdsMutators").chain(
        o("AdsUEditorAdgroupMutators").setSAOffOptOut,
        function (e) {
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.destination_spec.native_commerce_experience.shop.enroll_status.set(
            "OPT_OUT",
            e,
          );
        },
        function (e) {
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.destination_spec.native_commerce_experience.shop.action_metadata.type.set(
            "MANUAL",
            e,
          );
        },
        o("AdsUEditorAdgroupShopAdsUtils").deleteAssetFeedSpecOnsiteDestination,
        function (e) {
          return i != null
            ? o(
                "AdsUEditorAdgroupPromoAdMutators",
              ).updatePromoAdForDefaultOptIn(
                { adgroup: e, campaign: t, campaignGroup: n },
                null,
                a,
                i,
                o("AdsUEditorAdgroupPromoAdMutatorUtils")
                  .PromoAdDefaultOptInCallSite.OPT_OUT_SAOFF,
              )
            : e;
        },
        function (e) {
          return i != null
            ? o(
                "AdsUEditorAdgroupEmailCaptureMutators",
              ).updateEmailCaptureForDefaultOptIn(
                { adgroup: e, campaign: t, campaignGroup: n },
                null,
                i,
                o("AdsUEditorAdgroupPromoAdMutatorUtils")
                  .PromoAdDefaultOptInCallSite.OPT_OUT_SAOFF,
              )
            : e;
        },
      )(e);
    }
    var m = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            onsiteDestinations: r(
              "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
            ).toFluxSelector(),
            identityToStorefrontMap: o(
              "adsUEditorPreloadedIdentityToStorefrontSelector",
            ).preloadedIdentityToStorefrontSelector,
            adgroupProductCatalogIDLoadObject: r(
              "adsUEditorAdgroupProductCatalogIDSelector",
            ),
            promoAdDefaultOptinStatus: r(
              "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
            ),
            adsUEditorAdgroupUniversalStorefronts: o(
              "adsUEditorAdgroupUniversalStorefrontsSelector",
            ).adsUEditorAdgroupUniversalStorefrontsSelector,
          },
          function (e, t, n) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var a = n.parentData,
                i = n.promoAdDefaultOptinStatus,
                l = a.get(e.id);
              if (l == null) {
                var m;
                return (
                  o(
                    "ShopsAdsOffsiteCheckoutAdsLoggingUtils",
                  ).logSAOffDOIEarlyReturn(
                    e.id,
                    (m = t == null ? void 0 : t.logSource) != null ? m : "",
                  ),
                  e
                );
              }
              var p = l.campaign,
                _ = l.campaignGroup,
                f = l.specPlugin;
              if (t.logSource === "w+s_defaulting_initial") {
                var g = r("AdsAdgroupDraftFragmentStore").isNew(e.id);
                if (!g) return e;
                var h = r("AdsAdgroupDraftFragmentStore").getSourceSelector()(
                    e.id,
                  ),
                  y = h != null && s.includes(h);
                return y ? e : u(e, t, p, _, f, n);
              } else
                return t.optinStatus === !0
                  ? c(e, t, p, f, n)
                  : d(e, p, _, f, i);
            });
          },
          r("AdsUEditorAdgroupSetSAOffOptinStatusActionFlux").actionType,
        ),
      },
      p = m;
    l.default = p;
  },
  98,
);
