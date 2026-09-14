__d(
  "AdsUEditorAdgroupChangeLeadGenDestinationReducerPlugin",
  [
    "AdsAPIAdgroupPaths",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAdgroupLinkPostFormatMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsCallAddonUtils",
    "AdsCampaignRecordAccessors",
    "AdsClickToCallPhoneNumberUtils",
    "AdsDCODegreesOfFreedomUtils",
    "AdsInstagramUserIdMigrationUtils",
    "AdsLeadGenDestinationType",
    "AdsManagerIGLoginUtils",
    "AdsMutators",
    "AdsODAXAdgroupReducerUtils",
    "AdsODAXUtils",
    "AdsPageStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupCallAdsMutators",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
    "AdsUEditorAdgroupLeadNurtureChannelsMutator",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupTurnoffPromoAdMutator",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignChangeLeadGenDestinationActionFlux",
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUEditorInstagramMutators",
    "AdsUEditorMultiDestinationAdgroupMutators",
    "ApiAdObjectTypes",
    "ApiDynamicCreativeOptimizationTypes",
    "CallAdsConfigurationUtils",
    "ConstUriUtils",
    "IGAccessUsability26H1ClientExperimentUtils",
    "LoadObject",
    "XVanityURLControllerRouteBuilder",
    "adsACOIsACOAdgroup",
    "adsACORemoveACOSpec",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsCreateSelector",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupDefaultProductSetIDSelector",
    "adsUEditorAdgroupDefaultProductSetVerticalSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
    "isTruthy",
    "nullthrows",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")(
        "AdsClickToCallPhoneNumberPrefillStore",
      ).__setRef("AdsUEditorAdgroupChangeLeadGenDestinationReducerPlugin"),
      s = r("adsCreateSelector")(
        [],
        function () {
          return function () {
            return r("LoadObject").loading({ creatorModuleID: i.id });
          };
        },
        { name: i.id + ".getPhoneNumberPrefillSelector" },
      );
    e.onReadyImmediately(function (e) {
      s = e.fluxGetSelector();
    });
    var u = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            contextualDiscoveryAdsEligibilityState: r(
              "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
            ),
            defaultInstagramID: o("AdsUEditorCampaignInstagramSelectors")
              .eligibleInstagramAccountIDWithBusiness,
            defaultInstagramUserID: o("AdsUEditorCampaignInstagramSelectors")
              .eligibleInstagramAccountIDV2WithBusiness,
            defaultProductSetID: r(
              "adsUEditorAdgroupDefaultProductSetIDSelector",
            ),
            defaultProductSetVertical: r(
              "adsUEditorAdgroupDefaultProductSetVerticalSelector",
            ),
            getPage: r("AdsPageStore").getSelector,
            getPhoneNumberPrefill: s,
            getShouldEnableAutomaticFlowByDefault: r(
              "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
            ),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.contextualDiscoveryAdsEligibilityState,
              l = n.defaultInstagramID,
              s = n.defaultInstagramUserID,
              u = n.defaultProductSetID,
              c = n.defaultProductSetVertical,
              d = n.getPage,
              m = n.getPhoneNumberPrefill,
              p = n.getShouldEnableAutomaticFlowByDefault,
              _ = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var f,
                  g,
                  h = r("nullthrows")(_.get(n)),
                  y = h.campaign,
                  C = h.campaignGroup,
                  b = h.specPlugin,
                  v =
                    (f = e.creative) == null ||
                    (f = f.object_story_spec) == null
                      ? void 0
                      : f.page_id,
                  S =
                    (g = e.creative) == null ||
                    (g = g.object_story_spec) == null
                      ? void 0
                      : g.video_data,
                  R = o(
                    "AdsUEditorCampaignAdObjectsUtils",
                  ).getPromotedObjectType({ campaign: y, campaignGroup: C }),
                  L = o("AdsODAXUtils").maybeTranslateObjective(
                    C.objective,
                    R,
                    y.optimization_goal,
                  ),
                  E = o(
                    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                  ).createExistingPostRetentionOriginalData(e, b),
                  k = o(
                    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                  ).shouldRetainCreativeData(y.campaign_creation_source)
                    ? e
                    : null;
                return o("AdsMutators").chain(
                  function (e) {
                    return t.leadGenDestination ===
                      r("AdsLeadGenDestinationType").PHONE_CALL
                      ? o(
                          "AdsUEditorInstagramMutators",
                        ).maybeSetAdgroupCreativeInstagramAccountID(e, b, l, s)
                      : e;
                  },
                  function (e) {
                    return t.shouldSetOnAdDestination === !0 &&
                      (t.leadGenDestination ===
                        r("AdsLeadGenDestinationType").PHONE_CALL ||
                        t.leadGenDestination ===
                          r("AdsLeadGenDestinationType").INSTANT_FORM) &&
                      o("AdsAssetFeedUtils").hasLanguageCustomizationFromRecord(
                        e,
                      )
                      ? o(
                          "AdsUEditorAdgroupAssetFeedMutators",
                        ).convertFromAssetFeedSpec(
                          o("AdsAssetFeedUtils").getTargetObjectType(e),
                          e,
                          o("AdsODAXUtils").maybeTranslateObjective(
                            C.objective,
                            o(
                              "AdsAPICampaignRecordUtils",
                            ).getPromotedObjectType(C.objective, y),
                            y.optimization_goal,
                          ),
                        )
                      : e;
                  },
                  function (e) {
                    var n;
                    return t.shouldSetOnAdDestination === !0 &&
                      ((n = e.creative) == null ||
                      (n = n.asset_feed_spec) == null
                        ? void 0
                        : n.optimization_type) ===
                        r("ApiDynamicCreativeOptimizationTypes").ACO_AUTOFLOW &&
                      t.leadGenDestination ===
                        r("AdsLeadGenDestinationType").PHONE_CALL
                      ? o(
                          "AdsUEditorAdgroupAssetFeedMutators",
                        ).convertFromAssetFeedSpec(
                          r("ApiAdObjectTypes").SHARE,
                          e,
                          o("AdsODAXUtils").maybeTranslateObjective(
                            C.objective,
                            o(
                              "AdsAPICampaignRecordUtils",
                            ).getPromotedObjectType(C.objective, y),
                            y.optimization_goal,
                          ),
                        )
                      : e;
                  },
                  function (e) {
                    return t.shouldSetOnAdDestination === !0 &&
                      o("AdsDCODegreesOfFreedomUtils").isTextLiquidityEnabled(
                        e,
                      ) &&
                      t.leadGenDestination ===
                        r("AdsLeadGenDestinationType").PHONE_CALL
                      ? r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.degrees_of_freedom_spec.delete(e)
                      : e;
                  },
                  function (e) {
                    if (
                      t.leadGenDestination ===
                        r("AdsLeadGenDestinationType").PHONE_CALL &&
                      o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e) &&
                      t.shouldSetOnAdDestination === !0
                    ) {
                      var n = e;
                      ((n = o(
                        "AdsInstagramUserIdMigrationUtils",
                      ).IGIDV2MigrationAccessors.creative.instagram_user_id.delete(
                        n,
                      )),
                        (n = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.object_id.delete(n)),
                        (n = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.object_story_id.delete(n)),
                        (n = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.object_type.set(
                          r("ApiAdObjectTypes").SHARE,
                          n,
                        )));
                      var a =
                        v != null
                          ? v
                          : r(
                              "AdsCampaignRecordAccessors",
                            ).promoted_object.page_id.get(y);
                      return (
                        a != null &&
                          (n = r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.object_story_spec.page_id.set(a, n)),
                        n
                      );
                    }
                    return e;
                  },
                  function (e) {
                    return o(
                      "AdsUEditorMultiDestinationAdgroupMutators",
                    ).cleanMultiDestAdSpecOnConversionLocationChange(e);
                  },
                  function (e) {
                    return (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e) ||
                      o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(
                        e,
                      )) &&
                      t.leadGenDestination !==
                        r("AdsLeadGenDestinationType").INSTANT_FORM
                      ? r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.asset_feed_spec.delete(e)
                      : e;
                  },
                  function (e) {
                    return t.leadGenDestination ===
                      r("AdsLeadGenDestinationType").PHONE_CALL &&
                      r("adsACOIsACOAdgroup")(e)
                      ? r("adsACORemoveACOSpec")(e)
                      : e;
                  },
                  function (e) {
                    if (
                      t.leadGenDestination ===
                      r("AdsLeadGenDestinationType").PHONE_CALL
                    ) {
                      var n = r(
                        "AdsAdgroupSemanticFields",
                      ).childAttachments.delete(b, e);
                      return (
                        (n = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.portrait_customizations.delete(n)),
                        (n = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.object_story_spec.link_data.multi_share_end_card.delete(
                          n,
                        )),
                        (n = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.object_story_spec.link_data.multi_share_optimized.delete(
                          n,
                        )),
                        n
                      );
                    }
                    return e;
                  },
                  function (e) {
                    if (
                      t.leadGenDestination ===
                      r("AdsLeadGenDestinationType").PHONE_CALL
                    ) {
                      var n = e;
                      return (
                        (n = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.product_set_id.delete(n)),
                        (n = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.object_story_spec.template_data.delete(n)),
                        n
                      );
                    }
                    return e;
                  },
                  function (e) {
                    return t.leadGenDestination ===
                      r("AdsLeadGenDestinationType").PHONE_CALL
                      ? o("AdsUEditorCallToActionMutators").setCallToActionType(
                          e,
                          "CALL_NOW",
                          b,
                        )
                      : o("AdsUEditorCallToActionMutators").setCallToActionType(
                          e,
                          "SIGN_UP",
                          b,
                        );
                  },
                  function (e) {
                    return t.leadGenDestination ===
                      r("AdsLeadGenDestinationType").PHONE_CALL
                      ? r("AdsAdgroupSemanticFields").displayURL.isSupported(
                          b,
                          e,
                        ) &&
                        r(
                          "AdsAdgroupSemanticFields",
                        ).callToActionValue.isSupported(b, e)
                        ? o("AdsMutators").chain(
                            function (e) {
                              return r(
                                "AdsAdgroupSemanticFields",
                              ).displayURL.delete(b, e);
                            },
                            function (e) {
                              return r(
                                "AdsAdgroupSemanticFields",
                              ).callToActionValue.delete(b, e);
                            },
                          )(e)
                        : e
                      : e
                          .deleteIn(
                            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                              .LINK_DATA.CALL_TO_ACTION.VALUE.LINK,
                          )
                          .deleteIn(
                            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                              .LINK_DATA.LINK,
                          )
                          .deleteIn(
                            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                              .LINK_DATA.CALL_TO_ACTION.VALUE.APP_DESTINATION,
                          );
                  },
                  function (e) {
                    return r(
                      "AdsAdgroupSemanticFields",
                    ).pageWelcomeMessage.delete(b, e);
                  },
                  function (e) {
                    return (t.leadGenDestination ===
                      r("AdsLeadGenDestinationType").AUTOMATED_CHAT ||
                      t.leadGenDestination ===
                        r("AdsLeadGenDestinationType").INSTAGRAM) &&
                      o("AdsManagerIGLoginUtils").getIsIGLogin(a) &&
                      o(
                        "IGAccessUsability26H1ClientExperimentUtils",
                      ).isIGAccessUsability26H1EnabledClient(
                        "change_lead_gen_destination_reducer",
                        "frontend",
                      )
                      ? o(
                          "AdsUEditorCallToActionMutators",
                        ).deleteCallToActionValueLeadGenFormID(e, b)
                      : e;
                  },
                  function (e) {
                    return o("AdsODAXAdgroupReducerUtils").maybeClearOffer(
                      e,
                      t.shouldSetOnAdDestination === !0,
                    );
                  },
                  function (e) {
                    if (
                      t.leadGenDestination ===
                      r("AdsLeadGenDestinationType").PHONE_CALL
                    ) {
                      var n =
                        v != null
                          ? v
                          : r(
                              "AdsCampaignRecordAccessors",
                            ).promoted_object.page_id.get(y);
                      if (n != null && !S) {
                        var a, i;
                        return e.setIn(
                          r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                            .LINK_DATA.LINK,
                          (a =
                            (i = r("XVanityURLControllerRouteBuilder")
                              .buildUri({ vanity: n })
                              .qualifyDomain(
                                o("ConstUriUtils").getUri(
                                  "https://facebook.com/",
                                ),
                              )) == null
                              ? void 0
                              : i.toString()) != null
                            ? a
                            : "",
                        );
                      }
                      return e;
                    } else
                      return r("AdsAdgroupSemanticFields").linkURL.set(
                        b,
                        e,
                        "http://fb.me",
                      );
                  },
                  function (e) {
                    var t = r("isTruthy")(v)
                      ? m({ adAccountID: a.account_id, pageID: v }).getValue()
                      : null;
                    return o(
                      "AdsClickToCallPhoneNumberUtils",
                    ).maybeSetDefaultPhoneNumberForCallNowCTA({
                      account: a,
                      adgroup: e,
                      objective: L,
                      page: r("isTruthy")(v) ? d(v) : null,
                      prefillPhoneNumber: t,
                      promotedObjectType: R,
                      specPlugin: b,
                    });
                  },
                  function (e) {
                    return o("AdsCallAddonUtils").clearCallExtensionFields(
                      e,
                      b,
                    );
                  },
                  function (e) {
                    return t.leadGenDestination ===
                      r("AdsLeadGenDestinationType").PHONE_CALL
                      ? o(
                          "AdsUEditorAdgroupLeadNurtureChannelsMutator",
                        ).cleanLeadNurtureChannelsField(e)
                      : e;
                  },
                  function (e) {
                    if (
                      t.leadGenDestination !==
                      r("AdsLeadGenDestinationType").INSTAGRAM
                    ) {
                      var n = e;
                      return (
                        (n = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.object_story_spec.link_data.call_to_action.value.app_link.delete(
                          n,
                        )),
                        (n = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.object_story_spec.link_data.multi_share_end_card.delete(
                          n,
                        )),
                        n
                      );
                    }
                    return e;
                  },
                  function (e) {
                    if (
                      t.leadGenDestination !==
                      r("AdsLeadGenDestinationType")
                        .MULTI_DESTINATION_FORM_MESSENGER
                    ) {
                      var n = e;
                      return (
                        (n = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.object_story_spec.link_data.attachment_style.delete(
                          n,
                        )),
                        n
                      );
                    }
                    return e;
                  },
                  function (e) {
                    return t.leadGenDestination ===
                      r("AdsLeadGenDestinationType")
                        .MULTI_DESTINATION_FORM_MESSENGER ||
                      t.leadGenDestination ===
                        r("AdsLeadGenDestinationType").INSTAGRAM
                      ? o(
                          "adsAutomaticFlowMutationSetDoFSpec",
                        ).adsDeleteStandardEnhancementSpecMutator(e)
                      : o(
                          "adsAutomaticFlowMutationSetDoFSpec",
                        ).adsAutomaticFlowLiteSpecMutator(
                          a,
                          { campaign: y, campaignGroup: C, adgroup: e },
                          p,
                        );
                  },
                  function (e) {
                    return v == null ||
                      t.leadGenDestination !==
                        r("AdsLeadGenDestinationType").PHONE_CALL
                      ? e
                      : o(
                          "CallAdsConfigurationUtils",
                        ).maybeDefaultCallAdsConfiguration(
                          e,
                          d(v),
                          C.objective,
                          y == null ? void 0 : y.destination_type,
                          o(
                            "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
                          ).convertCampaignRecordToPlacementSpec(y),
                        );
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
                    ).updateContextualDiscoveryAdsEligibilitySpec(e, {
                      shouldOptIn: (i == null ? void 0 : i.shouldOptIn) === !0,
                      isExplicitOptOut: i == null ? void 0 : i.isExplicitOptOut,
                      shouldRenderCheckbox:
                        i == null ? void 0 : i.shouldRenderCheckbox,
                      actionMetadataType:
                        i == null ? void 0 : i.actionMetadataType,
                    });
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupTurnoffPromoAdMutator",
                    ).turnOffPromo(
                      e,
                      o("AdsUEditorAdgroupTurnoffPromoAdMutator")
                        .PromoAdDefaultOptOutCallsite
                        .CHANGE_LEADGEN_DESTINATION,
                    );
                  },
                  function (e) {
                    return o(
                      "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
                    ).hasSpecificOrigin(e, "creative_asset_groups")
                      ? o(
                          "AdsAdgroupLinkPostFormatMutators",
                        ).removeCreativeAssetGroupsSpecField(e)
                      : e;
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupCallAdsMutators",
                    ).defaultPhoneCallAdgroupFromStaticToDynamicSingleMedia(
                      L,
                      R,
                      a,
                      _,
                      e,
                      u,
                      c,
                    );
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                    ).retainExistingPost({
                      account: a,
                      adgroup: e,
                      campaign: y,
                      campaignGroup: C,
                      specPathPlugin: b,
                      getPage: d,
                      originalData: E,
                    });
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                    ).retainCreativeData({ adgroup: e, oldAdgroup: k });
                  },
                )(e);
              },
            );
          },
          o("AdsUEditorCampaignChangeLeadGenDestinationActionFlux").actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
