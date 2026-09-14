__d(
  "AdsUEditorAdgroupSetHeadlineAtIndexReducerPlugin",
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
    "AdsTextGenerationAdSpecAssetSourceMutationUtil",
    "AdsTextGenerationGatingUtils",
    "AdsTextGenerationSuggestionsProvider",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupHeadlineMutators",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "AdsUEditorAdgroupPromoAdCreativeReducerMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetHeadlineAtIndexDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupUpcomingEventDetailsDateDetectionUtil",
    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
    "AdsUnifiedCreativeAPIFields",
    "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
    "adsTextGenerationEligibilitySelector",
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
          textSuggestions: r(
            "AdsTextGenerationSuggestionsProvider",
          ).toFluxSelector(),
          isEligibleForTextGen: r("adsTextGenerationEligibilitySelector"),
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
          var a = n.account,
            i = n.eligibleForEventDetection,
            l = n.isEligibleForTextGen,
            c = n.isMultiUploadEligible,
            d = n.linkTypeMap,
            m = n.ocrText,
            p = n.parentData,
            _ = n.plugins,
            f = n.promoAdDefaultOptinStatus,
            g = n.remindersAdsDefaultOptIn,
            h = n.resolvedCatalogId,
            y = n.shopifyShopAdsPromotionsEligibility,
            C = n.textSuggestions,
            b = o(
              "AdsTextGenerationGatingUtils",
            ).isEligibleForTextUnification();
          return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
            var n,
              v,
              S,
              R,
              L,
              E,
              k,
              I,
              T =
                (n = e.creative) == null ||
                (n = n.asset_feed_spec) == null ||
                (n = n.titles) == null ||
                (n = n.get(t.assetIndex)) == null
                  ? void 0
                  : n.get("text"),
              D = p == null ? void 0 : p.get(e.id),
              x = o(
                "AdsUEditorAdgroupUpcomingEventMetadataMutators",
              ).updateAdForUpcomingEventMetadata(
                e,
                d == null ? void 0 : d[e.id],
                t.headline,
                o("AdsUEditorAdgroupUpcomingEventDetailsDateDetectionUtil")
                  .DetectedDateExtractionField.HEADLINE,
                r("nullthrows")(_.get(e.id)),
                g,
                i,
                (v = D == null ? void 0 : D.campaignGroup.objective) != null
                  ? v
                  : null,
                (S = D == null ? void 0 : D.campaign.optimization_goal) != null
                  ? S
                  : null,
                m,
                (R = D == null ? void 0 : D.campaign) != null ? R : null,
                (L = D == null ? void 0 : D.campaignGroup) != null ? L : null,
              ),
              $ =
                D != null
                  ? o(
                      "AdsUEditorAdgroupPromoAdCreativeReducerMutators",
                    ).updateAdgroupOptInPromoAndExtractCode(
                      {
                        adgroup: x,
                        campaign: D == null ? void 0 : D.campaign,
                        campaignGroup: D == null ? void 0 : D.campaignGroup,
                      },
                      r("nullthrows")(_.get(e.id)),
                      t.assetIndex,
                      t.headline,
                      "AD_CREATIVE_HEADLINE",
                      y,
                      f,
                      h,
                    )
                  : x;
            if (c === !0)
              return (
                ($ = o(
                  "AdsUEditorAdgroupMultiMediaSpecMutators",
                ).maySetMultiTextInMSSForMultiMediaAtIndex(
                  $,
                  o("AdsMultiMediaUtils").MultiMediaTextType.HEADLINE,
                  t.headline,
                  t.assetIndex,
                )),
                $
              );
            if (!o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e))
              return s(
                e,
                $,
                r("nullthrows")(_.get(e.id)),
                T,
                t,
                (l == null ? void 0 : l.isEligible()) === !0,
                C,
                b,
              );
            var P = r(
                "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
              )($, r("nullthrows")(_.get(e.id)), a),
              N = o(
                "AdsPlacementAssetTargetingRuleUtils",
              ).getDefaultTargetRuleLabel(P, "title_label"),
              M =
                (E = o(
                  "AdsUEditorAdgroupHeadlineMutators",
                ).getHeadlineAssetsFromLabel(P, N)) != null
                  ? E
                  : r("immutable").List(),
              w =
                (k =
                  (I = P.creative) == null || (I = I.asset_feed_spec) == null
                    ? void 0
                    : I.titles) != null
                  ? k
                  : r("immutable").List(),
              A = o("AdsAssetFeedFieldUtils").findTargetAssetsIndex(w, M),
              F = t.assetIndex >= 0 ? t.assetIndex : M.size,
              O;
            if (M.size === F) {
              var B = M.size >= 1 ? A.last() : -1;
              ((O = B + 1),
                (P = o("AdsAssetFeedMutationUtils").insertAssetFieldAtIndex(
                  P,
                  r("nullthrows")(_.get(e.id)),
                  r("AdsUnifiedCreativeAPIFields").headline,
                  B + 1,
                  "text",
                  t.headline,
                )),
                (P = o("AdsAssetFeedMutationUtils").setAssetAdLabelAtIndex(
                  P,
                  _.get(P.id),
                  r("AdsUnifiedCreativeAPIFields").headline,
                  B + 1,
                  N,
                )));
            } else {
              var W = A.get(F);
              if (F === 0)
                ((O = W),
                  (P = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                    P,
                    r("nullthrows")(_.get(e.id)),
                    r("AdsUnifiedCreativeAPIFields").headline,
                    W,
                    "text",
                    t.headline,
                  )));
              else {
                var q = o("AdsAssetFeedMutationUtils").isolateAssetWithLabel(
                    P,
                    r("nullthrows")(_.get(e.id)),
                    r("AdsUnifiedCreativeAPIFields").headline,
                    W,
                    "adlabels",
                    N,
                    !0,
                  ),
                  U = q.adgroupWithIsolatedAsset,
                  V = q.isolatedAssetIndex;
                ((O = V),
                  (P = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                    U,
                    r("nullthrows")(_.get(e.id)),
                    r("AdsUnifiedCreativeAPIFields").headline,
                    V,
                    "text",
                    t.headline,
                  )));
              }
            }
            return (
              (l == null ? void 0 : l.isEligible()) === !0 &&
                (P = o(
                  "AdsTextGenerationAdSpecAssetSourceMutationUtil",
                ).maybeSetAssetSourceAtIndex(
                  P,
                  r("nullthrows")(_.get(e.id)),
                  r("AdsUnifiedCreativeAPIFields").headline,
                  O,
                  C,
                  T,
                  t.assetSource,
                )),
              b &&
                (P = u(P, r("nullthrows")(_.get(e.id)), O != null ? O : 0, t)),
              P
            );
          });
        },
        o("AdsUEditorAdgroupSetHeadlineAtIndexDataActionFlux").actionType,
      ),
    };
    function s(e, t, n, a, i, l, s, c) {
      var d,
        m =
          i.assetIndex >= 0
            ? i.assetIndex
            : (
                (e == null ||
                (d = e.creative) == null ||
                (d = d.asset_feed_spec) == null
                  ? void 0
                  : d.titles) || r("immutable").List()
              ).size,
        p,
        _ = o("AdsAssetFeedUtils").isAAAFromRecord(e),
        f = _
          ? o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(e)
          : null;
      return (
        _ && f != null
          ? ((p = o(
              "AdsAppSmartAppPromotionDLOAdgroupFieldMutators",
            ).updateTitleText(t, f, f, m, i.headline)),
            (p = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.autotranslate.delete(p)))
          : (p = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
              t,
              n,
              r("AdsUnifiedCreativeAPIFields").headline,
              m,
              "text",
              i.headline,
            )),
        l &&
          (p = o(
            "AdsTextGenerationAdSpecAssetSourceMutationUtil",
          ).maybeSetAssetSourceAtIndex(
            p,
            n,
            r("AdsUnifiedCreativeAPIFields").headline,
            m,
            s,
            a,
            i.assetSource,
          )),
        c
          ? u(p, n, m, i)
          : i.assetSource != null
            ? o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                p,
                n,
                r("AdsUnifiedCreativeAPIFields").headline,
                m,
                "asset_source",
                i.assetSource,
              )
            : p
      );
    }
    function u(e, t, n, a) {
      var i = e,
        l = a.assetSource;
      return (
        l != null &&
          (i = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            i,
            t,
            r("AdsUnifiedCreativeAPIFields").headline,
            n,
            "asset_source",
            l,
          )),
        a.targetAudience != null &&
          (i = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            i,
            t,
            r("AdsUnifiedCreativeAPIFields").headline,
            n,
            "target_audience",
            a.targetAudience,
          )),
        a.uuid != null &&
          (i = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            i,
            t,
            r("AdsUnifiedCreativeAPIFields").headline,
            n,
            "uuid",
            a.uuid,
          )),
        a.textActionType != null &&
          (i = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            i,
            t,
            r("AdsUnifiedCreativeAPIFields").headline,
            n,
            "action_type",
            a.textActionType,
          )),
        a.language != null &&
          (i = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            i,
            t,
            r("AdsUnifiedCreativeAPIFields").headline,
            n,
            "language",
            a.language,
          )),
        i
      );
    }
    var c = e;
    l.default = c;
  },
  98,
);
