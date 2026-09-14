__d(
  "AdsUEditorAdgroupSetDynamicCreativeOptimizationToggleReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdAssetSelectorTypes",
    "AdsAdgroupLinkPostFormatMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsBrandAwarenessUtils",
    "AdsChildAttachmentsUtils",
    "AdsDCOUtils",
    "AdsDynamicAdsFormatUtils",
    "AdsFormatEligibilityConstants",
    "AdsInteractivePollRemoveSpecUtils",
    "AdsLinkTypeUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupAudiosAdsMutators",
    "AdsUEditorAdgroupDynamicMutators",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "AdsUEditorAdgroupOfferMutators",
    "AdsUEditorAdgroupOnsiteDestinationsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupShopAdsUtils",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetDynamicCreativeOptimizationToggleActionFlux",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "AdsWhatsAppDestinationUtils",
    "CagLaunchStatusUtils",
    "ClickToMessageCTMAdoptionFeatureGating",
    "adsACOIsACOAdgroup",
    "adsACORemoveACOSpec",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsInteractivePollHasFbFeedVideoPollSpec",
    "adsPlacementAssetMutationConvertFromAssetFeedSpec",
    "adsUEditorAccountSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
        {
          account: r("adsUEditorAccountSelector"),
          parentData: o(
            "AdsUEditorAdgroupSelectors",
          ).adObjectsList.mapTransform(
            o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
          ),
          eligibilityInformation: o("AdsUEditorCampaignSelectors")
            .eligibilityInformationSelector,
          plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
            o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
              .getAdgroupSpecPathPlugin,
          ),
          getShouldEnableAutomaticFlowByDefault: r(
            "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
          ),
        },
        function (e, t, n) {
          var a = n.account,
            i = n.eligibilityInformation,
            l = n.getShouldEnableAutomaticFlowByDefault,
            u = n.parentData,
            c = n.plugins,
            d = o("AdsODAXUtils").maybeTranslateObjective(
              i.objective,
              i.promotedObjectType,
              i.optimizationGoal,
            );
          return t.isInDynamicCreativeOptimization
            ? o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e, n) {
                var l = e,
                  s = r("nullthrows")(c.get(n)),
                  m = r("nullthrows")(u.get(n)),
                  p = m.campaign,
                  _ = m.campaignGroup;
                o("AdsAPIAdgroupRecordUtils").isFlexibleFormatAd(l) &&
                  (l = o(
                    "AdsAdgroupLinkPostFormatMutators",
                  ).removeCreativeAssetGroupsSpecField(l));
                var f = o(
                  "AdsUEditorCampaignAdObjectsUtils",
                ).getPromotedObjectType({ campaign: p, campaignGroup: _ });
                if (
                  o("CagLaunchStatusUtils").isEligibleForCAGFlow(
                    a,
                    _.objective,
                    f,
                  )
                )
                  return o(
                    "AdsAdgroupLinkPostFormatMutators",
                  ).changeToCreativeAssetGroups(a, l, p, _, _.objective, f);
                if (
                  (o("AdsLinkTypeUtils").isMessagingAppsLinkTypeSelected(
                    l,
                    s,
                  ) &&
                    ((o("AdsBrandAwarenessUtils").isBrandObjective(d) &&
                      (_ == null ? void 0 : _.is_odax_campaign_group) === !0) ||
                      o(
                        "ClickToMessageCTMAdoptionFeatureGating",
                      ).isEligibleForCTXL1EngagementVideoViews(
                        i.promotedObjectType,
                        i.objective,
                      )) &&
                    (l = o(
                      "AdsUEditorUnifiedCreationAdgroupMutators",
                    ).clearMessagingAppsFields(
                      l,
                      s,
                      o("AdsChildAttachmentsUtils").isCarouselAd(l),
                      (_ == null ? void 0 : _.is_odax_campaign_group) === !0,
                      i.objective,
                      void 0,
                      i.promotedObjectType,
                    )),
                  t.adgroupIDsToRetain.includes(n))
                ) {
                  var g, h;
                  if (
                    ((l = r("adsACOIsACOAdgroup")(l)
                      ? r("adsACORemoveACOSpec")(l)
                      : l),
                    (l = o(
                      "AdsUEditorAdgroupShopAdsUtils",
                    ).deleteAssetFeedSpecOnsiteDestinationAndShopSpec(l)),
                    o("AdsAPIAdgroupRecordUtils").isTemplateCreative(l))
                  ) {
                    var y = o(
                        "AdsDynamicAdsFormatUtils",
                      ).getIsDynamicAdSingleMediaFormat(l),
                      C = o(
                        "AdsDynamicAdsFormatUtils",
                      ).getIsDynamicAdCarouselMediaFormat(l);
                    (y || C) &&
                      (l = o(
                        "AdsUEditorAdgroupDynamicMutators",
                      ).transformAdgroupFromTemplateToSingleMediaLinkData(
                        l,
                        p,
                        _,
                        d,
                      ));
                  }
                  var b = o("AdsChildAttachmentsUtils").isCarouselAd(l);
                  return (
                    (l = o(
                      "AdsUEditorAdgroupAudiosAdsMutators",
                    ).removeAudiosField(l)),
                    o(
                      "AdsWhatsAppDestinationUtils",
                    ).isEligibleForL1WhatsAppDestination(
                      d,
                      null,
                      i.promotedObjectType,
                      i.optimizationGoal,
                    ) &&
                      o("AdsAssetFeedUtils").isPACAdgroupFromRecord(l) &&
                      o("AdsLinkTypeUtils").isWhatsAppLinkTypeSelected(l, s) &&
                      (l = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.asset_feed_spec.call_to_actions.delete(l)),
                    b &&
                      o(
                        "AdsFormatEligibilityConstants",
                      ).OBJECTIVES_INCOMPATIBLE_WITH_DC_CAROUSEL.includes(d) &&
                      (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(l) &&
                        (l = r(
                          "adsPlacementAssetMutationConvertFromAssetFeedSpec",
                        )(
                          o("AdsAdAssetSelectorTypes").AdsAssetSelectorFormat
                            .carousel,
                          l,
                          d,
                        )),
                      (l = o(
                        "AdsAdgroupLinkPostFormatMutators",
                      ).changeToSingleLinkPostFormat(d, l, f, p, _))),
                    (l = o("AdsDCOUtils").convertStorySpecAdToDCOAd(l, d, {
                      hostID: t.hostID,
                    })),
                    r("AdsAdgroupSemanticFields").offerID.isSupported(s, l) &&
                      (l = o(
                        "AdsUEditorAdgroupOfferMutators",
                      ).removeOfferIDState(l, s, d)),
                    (l = o("AdsMutators").chain(
                      r("AdsAdgroupRecordAccessors").creative.object_story_spec
                        .template_data.delete,
                      r("AdsAdgroupRecordAccessors").creative.product_set_id
                        .delete,
                    )(l)),
                    r("adsInteractivePollHasFbFeedVideoPollSpec")(l, i.spec) &&
                      (l = o(
                        "AdsInteractivePollRemoveSpecUtils",
                      ).removeFbFeedVideoPollSpecFromAdgroupRecord(l)),
                    (l = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.portrait_customizations.delete(l)),
                    (l = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.mockup_id.delete(l)),
                    (((g = l.creative) != null &&
                      (g = g.degrees_of_freedom_spec) != null &&
                      (g = g.creative_features_spec) != null &&
                      g.standard_enhancements) ||
                      ((h = l.creative) != null &&
                        (h = h.degrees_of_freedom_spec) != null &&
                        (h = h.creative_features_spec) != null &&
                        h.carousel_to_video)) &&
                      (l = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.degrees_of_freedom_spec.creative_features_spec.delete(
                        l,
                      )),
                    (l = o(
                      "AdsUEditorAdgroupMultiMediaSpecMutators",
                    ).mayDeleteMultiMediaContentFromMSS(l)),
                    l
                  );
                } else
                  return r("AdsAdgroupRecordAccessors").status.set(
                    "ARCHIVED",
                    l,
                  );
              })
            : s(e, t, d, c, u, a, l);
        },
        o("AdsUEditorCampaignSetDynamicCreativeOptimizationToggleActionFlux")
          .actionType,
      ),
    };
    function s(e, t, n, a, i, l, s) {
      return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e, u) {
        var c,
          d = e;
        ((d = o(
          "AdsAdgroupLinkPostFormatMutators",
        ).removeCreativeAssetGroupsSpecField(d)),
          (d = o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(d)
            ? o("AdsUEditorAdgroupAssetFeedMutators").convertFromAssetFeedSpec(
                o(
                  "AdsAPIAdgroupRecordUtils",
                ).getAssetFeedSpecDestinationObjectType(d),
                d,
                n,
              )
            : d));
        var m = r("nullthrows")(i.get(u)),
          p = m.campaign,
          _ = m.campaignGroup,
          f =
            (c = p.promoted_object) == null ||
            (c = c.omnichannel_object) == null ||
            (c = c.onsite) == null
              ? void 0
              : c.first().toJS().commerce_merchant_settings_id;
        if (f !== null) {
          var g = r("nullthrows")(a.get(u)),
            h = t.adgroupIDToLinkType.get(u),
            y = o(
              "AdsUEditorAdgroupOnsiteDestinationsMutators",
            ).getStorefrontsForAdgroup(d, g, t.identityToStorefront, f);
          d = o(
            "AdsUEditorAdgroupOnsiteDestinationsMutators",
          ).updateOnsiteDestinationsWithLinkType(d, p, h, y, null, !0, !0);
        }
        return (
          (d = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.degrees_of_freedom_type.delete(d)),
          (d = o(
            "adsAutomaticFlowMutationSetDoFSpec",
          ).adsAutomaticFlowLiteSpecMutator(
            l,
            { campaign: p, campaignGroup: _, adgroup: d },
            s,
          )),
          d
        );
      });
    }
    var u = e;
    l.default = u;
  },
  98,
);
