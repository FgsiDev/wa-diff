__d(
  "AdsUEditorAdgroupSetMessageAtIndexReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAppSmartAppPromotionDLOAdgroupFieldMutators",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsDLOLanguageUtils",
    "AdsMultiMediaUtils",
    "AdsMutators",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsTextGenerationGatingUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupBodyAdlabelMatchUtils",
    "AdsUEditorAdgroupBodyMutators",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "AdsUEditorAdgroupPromoAdCreativeReducerMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetMessageAtIndexDataActionFlux",
    "AdsUEditorAdgroupShopifyPromoCodePrimaryTextMutators",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupUpcomingEventDetailsDateDetectionUtil",
    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
    "AdsUnifiedCreativeAPIFields",
    "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupOCRTextSelector",
    "adsUEditorAdgroupPromoAdRelayStoreSelector",
    "adsUEditorAdgroupShopifyShopAdsPromotionEligibilitySelector",
    "adsUEditorAdgroupsEligibleForEventDetectionSelector",
    "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
    "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
    "adsUEditorIsAdgroupMultiUploadEligibleSelector",
    "adsUeditorBulkSelectedLinkTypeSelector",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
        {
          account: r("adsUEditorAccountSelector"),
          linkTypeMap: o("adsUeditorBulkSelectedLinkTypeSelector")
            .adsUEditorAdsAdObjectLinkTypeMapSelector,
          parentData: o(
            "AdsUEditorAdgroupSelectors",
          ).adObjectsList.mapTransform(
            o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
          ),
          plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
            o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
              .getAdgroupSpecPathPlugin,
          ),
          promoAdDefaultOptinStatus: r(
            "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
          ),
          resolvedCatalogId: o("adsUEditorAdgroupPromoAdRelayStoreSelector")
            .resolvedPromoCodesCatalogIdSelector,
          shopifyShopAdsPromotionsEligibility: o(
            "adsUEditorAdgroupShopifyShopAdsPromotionEligibilitySelector",
          ).adsUEditorAdgroupShopifyShopAdsPromotionEligibilitySelector,
          remindersAdsDefaultOptIn: r(
            "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
          ),
          eligibleForEventDetection: r(
            "adsUEditorAdgroupsEligibleForEventDetectionSelector",
          ),
          ocrText: r("adsUEditorAdgroupOCRTextSelector"),
          isMultiUploadEligible: o(
            "adsUEditorIsAdgroupMultiUploadEligibleSelector",
          ).adsUEditorIsAdgroupMSSMultiTextEligibleSelector,
        },
        function (e, t, n) {
          var r = n.account,
            a = n.eligibleForEventDetection,
            i = n.isMultiUploadEligible,
            l = n.linkTypeMap,
            u = n.ocrText,
            c = n.parentData,
            d = n.plugins,
            m = n.promoAdDefaultOptinStatus,
            p = n.remindersAdsDefaultOptIn,
            _ = n.resolvedCatalogId,
            f = n.shopifyShopAdsPromotionsEligibility,
            g = o(
              "AdsTextGenerationGatingUtils",
            ).isEligibleForTextUnification();
          return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
            return s(
              e,
              t.message,
              t.assetIndex,
              r,
              l,
              d,
              m,
              _,
              f,
              p,
              c == null ? void 0 : c.get(e.id),
              a,
              u,
              i === !0,
              g ? t.targetAudience : void 0,
              g ? t.uuid : void 0,
              g ? t.textActionType : void 0,
              g ? t.language : void 0,
              g ? t.assetSource : void 0,
              g,
            );
          });
        },
        o("AdsUEditorAdgroupSetMessageAtIndexDataActionFlux").actionType,
      ),
    };
    function s(e, t, n, a, i, l, s, c, d, m, p, _, f, g, h, y, C, b, v, S) {
      var R,
        L,
        E,
        k,
        I,
        T,
        D,
        x = o(
          "AdsUEditorAdgroupUpcomingEventMetadataMutators",
        ).updateAdForUpcomingEventMetadata(
          e,
          i == null ? void 0 : i[e.id],
          t,
          o("AdsUEditorAdgroupUpcomingEventDetailsDateDetectionUtil")
            .DetectedDateExtractionField.PRIMARY_TEXT,
          r("nullthrows")(l.get(e.id)),
          m,
          _,
          (R = p == null ? void 0 : p.campaignGroup.objective) != null
            ? R
            : null,
          (L = p == null ? void 0 : p.campaign.optimization_goal) != null
            ? L
            : null,
          f,
          (E = p == null ? void 0 : p.campaign) != null ? E : null,
          (k = p == null ? void 0 : p.campaignGroup) != null ? k : null,
        ),
        $ =
          p != null
            ? o(
                "AdsUEditorAdgroupPromoAdCreativeReducerMutators",
              ).updateAdgroupOptInPromoAndExtractCode(
                {
                  adgroup: x,
                  campaign: p == null ? void 0 : p.campaign,
                  campaignGroup: p == null ? void 0 : p.campaignGroup,
                },
                r("nullthrows")(l.get(e.id)),
                n,
                t,
                "AD_CREATIVE_PRIMARY_TEXT",
                d,
                s,
                c,
              )
            : x;
      if (g)
        return (
          ($ = o(
            "AdsUEditorAdgroupMultiMediaSpecMutators",
          ).maySetMultiTextInMSSForMultiMediaAtIndex(
            $,
            o("AdsMultiMediaUtils").MultiMediaTextType.MESSAGE,
            t,
            n,
          )),
          $
        );
      var P = d.isShopifyShopAds;
      if (
        (n === 0 &&
          P === !0 &&
          d.shouldUpdatePromotionalMetadataManualCouponCodes &&
          ($ = o(
            "AdsUEditorAdgroupShopifyPromoCodePrimaryTextMutators",
          ).mutateShopifyPromoCodeManualCouponCodesDataFromPrimaryText(t, e)),
        !o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e))
      ) {
        var N,
          M,
          w =
            n >= 0
              ? n
              : (N =
                    e == null ||
                    (M = e.creative) == null ||
                    (M = M.asset_feed_spec) == null ||
                    (M = M.bodies) == null
                      ? void 0
                      : M.size) != null
                ? N
                : 0,
          A = o("AdsAssetFeedUtils").isAAAFromRecord(e),
          F = A
            ? o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(e)
            : null;
        return (
          A && F != null
            ? (($ = o(
                "AdsAppSmartAppPromotionDLOAdgroupFieldMutators",
              ).updateBodyText($, F, F, w, t)),
              ($ = r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.autotranslate.delete($)))
            : ($ = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                $,
                r("nullthrows")(l.get(e.id)),
                r("AdsUnifiedCreativeAPIFields").message,
                w,
                "text",
                t,
              )),
          S === !0 &&
            ($ = u($, r("nullthrows")(l.get(e.id)), w, {
              actionType: C,
              assetSource: v,
              language: b,
              targetAudience: h,
              uuid: y,
            })),
          $
        );
      }
      $ = r(
        "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
      )($, r("nullthrows")(l.get(e.id)), a);
      var O = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getDefaultTargetRuleLabel($, "body_label"),
        B =
          (I = o("AdsUEditorAdgroupBodyMutators").getBodyAssetsFromLabel(
            $,
            O,
          )) != null
            ? I
            : r("immutable").List(),
        W =
          (T =
            (D = $.creative) == null || (D = D.asset_feed_spec) == null
              ? void 0
              : D.bodies) != null
            ? T
            : r("immutable").List(),
        q = o("AdsAssetFeedFieldUtils").findTargetAssetsIndex(W, B),
        U = n >= 0 ? n : B.size;
      if (B.size === U) {
        var V = B.size >= 1 ? q.last() : -1,
          H = r("nullthrows")(l.get(e.id));
        (($ = o("AdsAssetFeedMutationUtils").insertAssetFieldAtIndex(
          $,
          H,
          r("AdsUnifiedCreativeAPIFields").message,
          V + 1,
          "text",
          t,
        )),
          ($ = o("AdsAssetFeedMutationUtils").setAssetAdLabelAtIndex(
            $,
            H,
            r("AdsUnifiedCreativeAPIFields").message,
            V + 1,
            O,
          )));
      } else {
        var G = q.get(U),
          z = o(
            "AdsUEditorAdgroupBodyAdlabelMatchUtils",
          ).hasBodyWithSameAdlabels(W, G);
        if (n === 0 || z)
          $ = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            $,
            r("nullthrows")(l.get(e.id)),
            r("AdsUnifiedCreativeAPIFields").message,
            G,
            "text",
            t,
          );
        else {
          var j = o("AdsAssetFeedMutationUtils").isolateAssetWithLabel(
              $,
              r("nullthrows")(l.get(e.id)),
              r("AdsUnifiedCreativeAPIFields").message,
              G,
              "adlabels",
              O,
              !0,
            ),
            K = j.adgroupWithIsolatedAsset,
            Q = j.isolatedAssetIndex;
          $ = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            K,
            r("nullthrows")(l.get(e.id)),
            r("AdsUnifiedCreativeAPIFields").message,
            Q,
            "text",
            t,
          );
        }
      }
      return (
        S === !0 &&
          ($ = u($, r("nullthrows")(l.get(e.id)), U, {
            actionType: C,
            assetSource: v,
            language: b,
            targetAudience: h,
            uuid: y,
          })),
        $
      );
    }
    function u(e, t, n, a) {
      var i = e,
        l = a.actionType,
        s = a.assetSource,
        u = a.language,
        c = a.targetAudience,
        d = a.uuid;
      return (
        c != null &&
          (i = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            i,
            t,
            r("AdsUnifiedCreativeAPIFields").message,
            n,
            "target_audience",
            c,
          )),
        d != null &&
          (i = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            i,
            t,
            r("AdsUnifiedCreativeAPIFields").message,
            n,
            "uuid",
            d,
          )),
        l != null &&
          (i = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            i,
            t,
            r("AdsUnifiedCreativeAPIFields").message,
            n,
            "action_type",
            l,
          )),
        u != null &&
          (i = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            i,
            t,
            r("AdsUnifiedCreativeAPIFields").message,
            n,
            "language",
            u,
          )),
        s != null &&
          (i = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            i,
            t,
            r("AdsUnifiedCreativeAPIFields").message,
            n,
            "asset_source",
            s,
          )),
        i
      );
    }
    var c = e;
    l.default = c;
  },
  98,
);
