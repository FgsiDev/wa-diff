__d(
  "AdsUEditorAdgroupSetPageUtils",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupPaths",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIOptimizationGoals",
    "AdsAdGroupLocalStoreExtensionMutators",
    "AdsAdgroupDynamicPartnerContentDefaultOnMutator",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsBulkValueUtils",
    "AdsCallAddonUtils",
    "AdsCampaignRecordAccessors",
    "AdsClickToCallPhoneNumberUtils",
    "AdsDynamicAdsUtils",
    "AdsEditorPostEditMode",
    "AdsInstagramApplicabilityUtils",
    "AdsInstagramUserIdMigrationUtils",
    "AdsLinkPostFormat",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPostDefaultingExperimentUtils",
    "AdsPromoAdsEmailCaptureSettingGKStore",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupBizAIDefaultOptInMutator",
    "AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils",
    "AdsUEditorAdgroupCallAdsConfigurationUtils",
    "AdsUEditorAdgroupEmailCaptureMutators",
    "AdsUEditorAdgroupInstagramUtils",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupOnsiteDestinationsMutators",
    "AdsUEditorAdgroupPromoAdMutatorStoreUtils",
    "AdsUEditorAdgroupPromoAdMutatorUtils",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupSetPageDefaultingPostMutator",
    "AdsUEditorAdgroupSetPageRecommendedPostMutator",
    "AdsUEditorAdgroupShopAdsUtils",
    "AdsUEditorAdgroupTurnOffEmailCaptureMutator",
    "AdsUEditorAdgroupTurnoffPromoAdMutator",
    "AdsUEditorAdgroupWebsiteAndCallDefaultingMutator",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCrossChannelShopsAdsCommon",
    "BizAIStickySignalsUtils",
    "CallAdsConfigurationUtils",
    "PromoAdsAdsManagerEmailCaptureGenericCodeGatingUtils",
    "PromoAdsAdsManagerGatingAndExperimentUtils",
    "PromoAdsAdsManagerUtils",
    "PromoAdsEmailCaptureUnificationGatingUtils",
    "ShopsAdsOffsiteCheckoutAdsUtils",
    "XVanityURLController",
    "adsUEditorAdgroupBizAISectionSelector",
    "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
    "gkx",
    "isTruthy",
    "nullthrows",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, c, d, m, p, _, f) {
      var g, h, y, C, b, v, S, R, L, E, k, I;
      (m === void 0 && (m = !0),
        p === void 0 && (p = null),
        _ === void 0 && (_ = null),
        f === void 0 && (f = !1));
      var T = d.account,
        D = d.adgroupProductCatalogIDLoadObject,
        x = d.defaultPagePost,
        $ = d.destinationLinkType,
        P = d.getPage,
        N = d.isPolitcalCategoryAvailable,
        M = d.isShopsAdsIncentiveProgram,
        w = d.pagesInAuthorizations,
        A = d.parentData,
        F = d.placementSpecsMap,
        O = d.regulatedCategories,
        B = r("nullthrows")(
          A.get(t),
          "Parent data (campaign, campaignGroup, specPlugin) must exist for the given adgroup ID",
        ),
        W = B.campaign,
        q = B.campaignGroup,
        U = B.specPlugin,
        V = q.objective,
        H = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
          campaign: W,
          campaignGroup: q,
        }),
        G = o("AdsUEditorCampaignAdObjectsUtils").getOptimizationGoal({
          campaign: W,
          campaignGroup: q,
        }),
        z =
          o("AdsAPIAdgroupRecordUtils").getPostEditMode(e, T) ===
            r("AdsEditorPostEditMode").EXISTING &&
          (((g = e.creative) == null ? void 0 : g.object_story_id) != null ||
            ((h = e.creative) == null ? void 0 : h.source_instagram_media_id) !=
              null),
        j = e;
      ((j = r("AdsAdgroupSemanticFields").phoneDataID.delete(U, j)),
        (j = o(
          "AdsUEditorAdgroupCallAdsConfigurationUtils",
        ).clearBizAICallScreeningConfig(j)),
        W.destination_type === r("AdCampaignDestination").PHONE_CALL &&
          (j = o("CallAdsConfigurationUtils").maybeDefaultCallAdsConfiguration(
            j,
            P(i),
            V,
            W.destination_type,
            F.get(t),
          )));
      var K = (y = P(i)) == null ? void 0 : y.phone_number_prefill;
      W.destination_type ===
        r("AdCampaignDestination").WEBSITE_AND_PHONE_CALL &&
        (K != null &&
          (j = o("AdsCallAddonUtils").setPhoneNumberAndCallDestinationType(
            j,
            K,
          )),
        (j = o(
          "AdsUEditorAdgroupWebsiteAndCallDefaultingMutator",
        ).applyWebsiteAndCallDefaultBusinessHours(j, i, {
          skipIfAlreadySet: !0,
        })));
      var Q = o("AdsAPIAdgroupRecordUtils").isExistingPostAd(j);
      Q &&
        ((C = j.creative) == null || (C = C.branded_content) == null
          ? void 0
          : C.ui_version) === 1 &&
        (j = o("AdsUEditorAdgroupMutators").clearIdentityAndPartnershipAdFields(
          j,
        ));
      var X = r("isTruthy")(
        (b = e.creative) == null || (b = b.object_story_spec) == null
          ? void 0
          : b.link_data,
      );
      (X &&
        H === r("AdsPromotedObjectTypes").PHONE_CALL &&
        (j = j.setIn(
          r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.LINK,
          r("XVanityURLController")
            .getURIBuilder()
            .setString("vanity", i)
            .getURI()
            .setProtocol("https")
            .setDomain("facebook.com")
            .toString(),
        )),
        (j = o(
          "AdsClickToCallPhoneNumberUtils",
        ).maybeSetDefaultPhoneNumberForCallNowCTA({
          account: T,
          adgroup: j,
          objective: V,
          page: P(i),
          promotedObjectType: H,
          prefillPhoneNumber: K,
          specPlugin: U,
        })),
        (j = r("AdsAdgroupSemanticFields").callToActionValue.set(
          U,
          j,
          (v = r("AdsAdgroupSemanticFields").callToActionValue.get(U, j)) ==
            null
            ? void 0
            : v.delete("lead_gen_form_id"),
        )));
      var Y = r("AdsAdgroupSemanticFields").instagramActorID.get(U, e);
      if (
        (r("AdsInstagramApplicabilityUtils").hasPlacementForPlatform(
          F.get(t),
          "instagram",
        ) ||
        r("AdsInstagramApplicabilityUtils").hasPlacementForPlatform(
          F.get(t),
          "threads",
        )
          ? (c[t] = Y)
          : (r("AdsInstagramApplicabilityUtils").hasPlacementForPlatform(
              F.get(t),
              "instagram",
            ) ||
              (j = o("AdsMutators").chain(
                o("AdsInstagramUserIdMigrationUtils").IGIDV2MigrationAccessors
                  .creative.instagram_user_id.delete,
                o("AdsInstagramUserIdMigrationUtils").IGIDV2MigrationAccessors
                  .creative.object_story_spec.instagram_user_id.delete,
              )(j)),
            r("AdsInstagramApplicabilityUtils").hasPlacementForPlatform(
              F.get(t),
              "threads",
            ) ||
              (j = o("AdsMutators").chain(
                r("AdsAdgroupRecordAccessors").creative.threads_user_id.delete,
                r("AdsAdgroupRecordAccessors").creative.object_story_spec
                  .threads_user_id.delete,
              )(j))),
        r("gkx")("952") &&
          r("AdsAdgroupSemanticFields").pageID.get(U, e) !== i &&
          (j = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.ncs_testimonial.delete(j)),
        (j = o("AdsUEditorAdgroupMutators").maybeUpdateSAOffDestinationSpec(
          j,
          W,
          q,
          o("AdsBulkValueUtils").getUniformValueOrDefault(D.getValue(), null),
          l,
          i,
          Y,
          o("ShopsAdsOffsiteCheckoutAdsUtils").SAOffDefaultingTrigger
            .FB_IDENTITY_CHANGE,
        )),
        (o("AdsBulkValueUtils").getUniformValue($) === "website_and_shops" ||
          ((S = e.creative) == null || (S = S.destination_spec) == null
            ? void 0
            : S.destination_type) === "WEBSITE_AND_SHOP") &&
          (j = s(j, W, U, i, l, $)),
        H === r("AdsPromotedObjectTypes").GROUP &&
          (j = o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
              .link.delete,
            r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
              .call_to_action.value.link.delete,
            r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
              .call_to_action.value.group_id.delete,
          )(j)),
        o("AdsAPICampaignRecordUtils").isScheduledLiveVideoAd(W))
      ) {
        var J;
        j = o("AdsMutators").chain(
          (J = r("AdsAdgroupRecordAccessors")).creative.object_story_spec
            .video_data.event_id.delete,
          J.creative.object_story_spec.video_data.video_id.delete,
          J.creative.object_story_spec.video_data.image_url.delete,
          J.creative.object_story_spec.video_data.message.delete,
          J.creative.object_story_spec.video_data.title.delete,
          J.creative.object_story_spec.video_data.call_to_action.delete,
        )(j);
      }
      var Z = r("gkx")("20002"),
        ee =
          (H === r("AdsPromotedObjectTypes").PIXEL ||
            H === r("AdsPromotedObjectTypes").WEBSITE ||
            H === r("AdsPromotedObjectTypes").MOBILE_APP ||
            G === r("AdsAPIOptimizationGoals").THRUPLAY ||
            G ===
              r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS) &&
          (!Z ||
            ((R = j) == null || (R = R.creative) == null
              ? void 0
              : R.media_type) !== "SCHEDULED_LIVE_VIDEO");
      ee &&
        (j = o(
          "AdsUEditorAdgroupSetPageDefaultingPostMutator",
        ).setUseLiveVideoPostDefaulting(j, U, i, T, W, q));
      var te = F.get(j.id);
      if (
        ((j = o("AdsUEditorAdgroupMutators").adgroupProcessing(
          i,
          j,
          N,
          w,
          H,
          o("AdsODAXUtils").maybeTranslateObjective(V, H, null),
          O,
          U,
          n.length === 1 ? x : null,
          T,
          q,
          W,
          P(i),
          te != null ? [te] : [],
          f,
        )),
        (((L = e.creative) != null &&
          (L = L.asset_feed_spec) != null &&
          L.promotional_metadata) ||
          o(
            "PromoAdsAdsManagerGatingAndExperimentUtils",
          ).isPromoAdsAlwaysOnEnabled(!1)) &&
          ((E = e.creative) == null || (E = E.object_story_spec) == null
            ? void 0
            : E.page_id) !== i)
      ) {
        var ne,
          re =
            (ne = e.creative) == null ||
            (ne = ne.asset_feed_spec) == null ||
            (ne = ne.promotional_metadata) == null
              ? void 0
              : ne.product_catalog_id_for_email_capture;
        j = u(j, W, q, U, i, T, re);
      }
      (m &&
        o("AdsUEditorAdgroupInstagramUtils").initiateInstagramDefaulting(
          T,
          c,
          i,
          a,
          l,
          M,
          p,
          _,
        ),
        (j = o(
          "AdsAdGroupLocalStoreExtensionMutators",
        ).onAdgroupSelectedPageSetChangedLocalStoreExtensionMutator(
          W,
          q,
          j,
          P(i),
        )));
      var oe =
          d.isCatalogSelected &&
          o("AdsBulkValueUtils").getUniformValue(d.linkPostFormat, null) ===
            r("AdsLinkPostFormat").MULTIPLE &&
          !d.isPartnershipAdsToggleOn,
        ae =
          ((k = j.creative) == null ||
          (k = k.degrees_of_freedom_spec) == null ||
          (k = k.creative_features_spec) == null ||
          (k = k.dynamic_partner_content) == null
            ? void 0
            : k.enroll_status) === "OPT_IN";
      (oe && !ae && (oe = !1),
        (j = oe
          ? o(
              "AdsAdgroupDynamicPartnerContentDefaultOnMutator",
            ).AdsAddDynamicPartnerContentSpecMutator(j)
          : o(
              "AdsAdgroupDynamicPartnerContentDefaultOnMutator",
            ).AdsDeleteDynamicPartnerContentSpecMutator(j)));
      var ie =
        ((I = j.creative) == null ||
        (I = I.degrees_of_freedom_spec) == null ||
        (I = I.creative_features_spec) == null ||
        (I = I.biz_ai) == null
          ? void 0
          : I.enroll_status) === "OPT_IN";
      if (ie) {
        var le,
          se = P(i),
          ue = (le = se.is_eligible_for_biz_ai_aplusc) != null ? le : !1;
        ue ||
          (j = o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
              .creative_features_spec.biz_ai.delete,
          )(j));
      }
      var ce = r("qex")._("2821") === !0;
      if (ce) {
        var de = P(i),
          me = o(
            "adsUEditorAdgroupBizAISectionSelector",
          ).isEligibleforBizAIL1Section(
            H,
            V,
            de.is_eligible_for_biz_ai_aplusc === !0,
            T == null ? void 0 : T.sales_segment_v2,
          ),
          pe = o("BizAIStickySignalsUtils").computeBizAIDefaultOptInEligibility(
            j,
            me,
            T == null ? void 0 : T.account_id,
            T == null ? void 0 : T.sales_segment_v2,
          );
        j = o(
          "AdsUEditorAdgroupBizAIDefaultOptInMutator",
        ).updateBizAIDefaultOptIn(
          j,
          pe,
          o("AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils")
            .BizAIDefaultOptInCallSite.UPDATE_PAGE,
        );
      }
      return (
        o("AdsPostDefaultingExperimentUtils").isEnabled() &&
          (j = o(
            "AdsUEditorAdgroupSetPageRecommendedPostMutator",
          ).setRecommendedPost(T, j, W, q, U, i, P, "page_switch", z)),
        j
      );
    }
    function s(e, t, n, a, i, l) {
      var s;
      if (((s = e.creative) == null ? void 0 : s.shop_spec) != null) return e;
      var u = r("AdsAdgroupSemanticFields").instagramActorID.get(n, e),
        c = i == null ? void 0 : i.get(a),
        d = u != null ? (i == null ? void 0 : i.get(u)) : null,
        m = { facebookStorefront: c, instagramStorefront: d },
        p = o("AdsDynamicAdsUtils").isDynamicAd(e);
      return p ||
        !o("AdsUEditorCrossChannelShopsAdsCommon").areCatalogsMatching(c, d)
        ? o(
            "AdsUEditorAdgroupShopAdsUtils",
          ).deleteAssetFeedSpecOnsiteDestination(e)
        : o(
            "AdsUEditorAdgroupOnsiteDestinationsMutators",
          ).updateOnsiteDestinationsWithLinkType(
            e,
            t,
            o("AdsBulkValueUtils").getUniformValue(l),
            m,
            null,
            !0,
            !0,
          );
    }
    function u(e, t, n, a, i, l, s) {
      s === void 0 && (s = null);
      var u = e;
      o(
        "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
      ).isPromoAdOptedInWithProductCatalogForAdgroup(u)
        ? (u = o(
            "AdsUEditorAdgroupPromoAdMutators",
          ).refreshPromotionalMetadataOnCatalogChange(
            { adgroup: u, campaign: t, campaignGroup: n },
            l,
            a,
            !1,
          ))
        : (o(
            "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
          ).isPromoAdOptedInForAdgroup(u, t, n, !1) ||
            !o(
              "AdsUEditorAdgroupPromoAdMutatorStoreUtils",
            ).isPromoAdsAlwaysOnForAdgroup(u, t, n, !0)) &&
          (u = o(
            "AdsUEditorAdgroupPromoAdMutators",
          ).mutateUpdatePromoAdsDataFromPageId(
            { adgroup: u, campaign: t, campaignGroup: n },
            a,
            l,
          ));
      var c = o(
        "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
      ).isEmailCaptureOptedInForAdgroup(u, t, n);
      if (
        c &&
        o(
          "PromoAdsEmailCaptureUnificationGatingUtils",
        ).isEmailCaptureOfferUnificationEnabled()
      )
        return o(
          "AdsUEditorAdgroupEmailCaptureMutators",
        ).refreshEmailCaptureMetadataOnCatalogChange(
          { adgroup: u, campaign: t, campaignGroup: n },
          l,
        );
      if (
        !c &&
        o(
          "AdsUEditorAdgroupPromoAdMutatorStoreUtils",
        ).isEmailCaptureAlwaysOnForAdgroup(u, t, n, !0)
      )
        return u;
      var d = null,
        m = null;
      if (t != null) {
        var p;
        if (
          ((d = r("AdsCampaignRecordAccessors").promoted_object.pixel_id.get(
            t,
          )),
          d == null)
        ) {
          var _,
            f =
              (_ = r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.omnichannel_object.pixel.get(t)) == null ||
              (_ = _.first()) == null
                ? void 0
                : _.get("pixel_id");
          f != null && typeof f == "string" && (d = f);
        }
        m =
          (p = r(
            "AdsCampaignRecordAccessors",
          ).promoted_object.product_set_id.get(t)) != null
            ? p
            : r("AdsAdgroupRecordAccessors").creative.product_set_id.get(e);
      }
      var g = {
          account_id: l.account_id,
          page_id: i,
          pixel_id: d != null ? d : null,
          catalog_id: s,
          product_set_id: m != null ? m : null,
        },
        h = r("AdsPromoAdsEmailCaptureSettingGKStore").get(g).getValue();
      return !o(
        "PromoAdsAdsManagerGatingAndExperimentUtils",
      ).isPharmaHoldout() &&
        (r("isTruthy")(h == null ? void 0 : h.is_unique_code_offer) ||
          o(
            "PromoAdsAdsManagerEmailCaptureGenericCodeGatingUtils",
          ).isGenericCodeOpenBetaEnabled()) &&
        o(
          "PromoAdsAdsManagerUtils",
        ).shouldShowEmailCaptureFieldForAdgroupAccordingToFormat({
          adgroup: u,
          campaign: t,
          campaignGroup: n,
        })
        ? o(
            "AdsUEditorAdgroupEmailCaptureMutators",
          ).mutateEmailCaptureFromSetting(
            u,
            h,
            !0,
            !0,
            o("AdsUEditorAdgroupPromoAdMutatorUtils")
              .PromoAdDefaultOptInCallSite.UPDATE_PAGE,
            s,
          )
        : o("AdsUEditorAdgroupTurnOffEmailCaptureMutator").turnOffEmailCapture(
            u,
            !0,
            o("AdsUEditorAdgroupTurnoffPromoAdMutator")
              .PromoAdDefaultOptOutCallsite.UPDATE_PAGE,
          );
    }
    l.setAdgroupPage = e;
  },
  98,
);
