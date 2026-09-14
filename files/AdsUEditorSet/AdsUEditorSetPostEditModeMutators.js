__d(
  "AdsUEditorSetPostEditModeMutators",
  [
    "AdsAPIAdgroupCreativeRecord",
    "AdsAPIAdgroupLinkDataRecord",
    "AdsAPIAdgroupObjectStorySpecRecord",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAdBuilderMockupCompatibleUtils",
    "AdsAdgroupGenerativeAssetSpecMutators",
    "AdsAdgroupLinkPostFormatMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
    "AdsAssetFeedUtils",
    "AdsBrandAwarenessUtils",
    "AdsCampaignGroupRecordAccessors",
    "AdsDCOUtils",
    "AdsDataAtom",
    "AdsEditorPostEditMode",
    "AdsExistingPostCTAUtils",
    "AdsGetStandardTemplateDefaultJSONHelperForWhatsAppAutofillMessage",
    "AdsInstagramActorIDUtils",
    "AdsInstagramUserIdMigrationUtils",
    "AdsInterfacesLogger",
    "AdsLinkTypeUtils",
    "AdsMessengerConstants",
    "AdsMessengerExistingPostEntrypointTypes",
    "AdsMessengerVisualEditorUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsObjectTypeUtils",
    "AdsPCAUnifiedFormatAdSetupUtils",
    "AdsPagePostUtils",
    "AdsProfileVisitExtensionTypeUtils",
    "AdsPromotedObjectTypes",
    "AdsThreadsUserIDUtils",
    "AdsUEditorAdgroupEmailCaptureMutators",
    "AdsUEditorAdgroupMediaSourcingSpecMutators",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "AdsUEditorAdgroupMultiPostSpecMutators",
    "AdsUEditorAdgroupObjectiveMutators",
    "AdsUEditorAdgroupPromoAdMutatorUtils",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorInstagramProfileMutators",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorMockupMutationUtils",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "AdsUEditorUnifiedProfileVisitsAdgroupMutators",
    "AdsUnifiedProfileVisitUtils",
    "AdsWhatsAppUtils",
    "ApiDynamicCreativeOptimizationTypes",
    "BrandedContentAdsUtils",
    "ConstUriUtils",
    "Instant",
    "PromoAdsAdsManagerAdCreativeUtils",
    "XVanityURLControllerRouteBuilder",
    "adsACOConvertToACOAd",
    "adsACOIsACOAdgroup",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsUEditorGetShouldEnableAPlusCUseExistingPostByDefaultGetValueSelector",
    "cr:9968",
    "gkx",
    "immutable",
    "isFalsey",
    "isTruthy",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "account",
        "accountBlockLists",
        "campaign",
        "campaignGroup",
        "hostID",
        "mockupAdObjects",
        "placementEligibilityInformation",
        "prefillersExtraData",
        "promoAdDefaultOptinStatus",
      ],
      s = [
        "account",
        "accountBlockLists",
        "campaign",
        "campaignGroup",
        "hostID",
        "prefillersExtraData",
        "previewSharingAdObjects",
      ],
      u,
      c = r("AdsAPIAdgroupLinkDataRecord")
        .getSpec()
        .call_to_action.getSpec().value,
      d = new c({ app_destination: "MESSENGER" }),
      m = new (r("AdsAPIAdgroupObjectStorySpecRecord"))(),
      p = new (r("AdsAPIAdgroupCreativeRecord"))(),
      _ = 86400;
    function f(e) {
      var t,
        n = e.account,
        a = e.adgroup,
        i = e.cachedCreative,
        l = e.cachedMetadata,
        s = e.campaign,
        u = e.campaignGroup,
        c = e.enableNewBrandedContentFlow,
        d = e.instagramAccount,
        p = e.objective,
        _ = e.pages,
        f = e.promoAdDefaultOptinStatus,
        b = e.promotedObjectType,
        v = e.specPathPlugin,
        S = o("AdsInstagramActorIDUtils").getInstagramActorID(a),
        L = o("AdsInstagramActorIDUtils").getInstagramUserID(a),
        E = o("AdsThreadsUserIDUtils").getThreadsUserID(a),
        k = o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(a),
        I = r("adsACOIsACOAdgroup")(a),
        D =
          c === !0
            ? o("AdsAPIAdgroupRecordUtils").getPrimaryPageIDInSpec(a, v)
            : o("AdsAPIAdgroupRecordUtils").getPageID(a, v),
        x = P(a),
        $ = N(a),
        A = r("AdsAdgroupRecordAccessors").creative.authorization_category.get(
          a,
        ),
        F = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.set(m),
        )(a),
        O;
      (i &&
        ((F = r("AdsAdgroupRecordAccessors").creative.set(i, F)),
        (O = o("AdsObjectTypeUtils").getObjectTypeFromCreativeSpecType(F))),
        l && (F = r("AdsAdgroupRecordAccessors").metadata.set(l, F)),
        (F = h(F, u, b)),
        r("isTruthy")(O) ||
          (O = o("AdsObjectTypeUtils").getDefaultObjectType(p)),
        r("isTruthy")(A) &&
          (F = r(
            "AdsAdgroupRecordAccessors",
          ).creative.authorization_category.set(A, F)),
        (F = M(F, x)),
        o(
          "AdsUnifiedProfileVisitUtils",
        ).getUnifiedProfileVisitsDestinationContainsIG(
          s == null ? void 0 : s.destination_type,
        ) && (F = w(F, $, v, r("AdsEditorPostEditMode").INLINE)),
        r("gkx")("8986") &&
          (F = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.threads_user_id.set(E)(F)),
        (F = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.object_type.set(O),
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.page_id.set(
            r("isTruthy")(D) ? D : void 0,
          ),
          o(
            "AdsInstagramUserIdMigrationUtils",
          ).IGIDV2MigrationAccessors.creative.object_story_spec.instagram_user_id.set(
            S,
            L,
          ),
        )(F)),
        (F = y(F, b, v, D)));
      var B = (i == null ? void 0 : i.mockup_id) != null,
        W = (t = a.creative) == null ? void 0 : t.product_set_id;
      (W != null &&
        !B &&
        (F = r("AdsAdgroupRecordAccessors").creative.product_set_id.set(W, F)),
        k && (F = o("AdsDCOUtils").convertStorySpecAdToDCOAd(F, p)),
        I && !B && (F = o("adsACOConvertToACOAd").adsACOConvertToACOAd(F)),
        o(
          "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
        ).isUnifiedCreativePhotoDataSupported(a) &&
          (F = r("AdsAdgroupRecordAccessors").creative.uca_draft_version.set(
            1,
            F,
          )),
        (F = C(F, b, v, D, p)));
      var q = r(
          "AdsAdgroupRecordAccessors",
        ).creative.branded_content_boosting_type.get(a),
        U = o("AdsLinkTypeUtils").isWhatsAppLinkTypeSelected(F, v);
      if (
        ((F = o(
          "AdsUEditorAdgroupMultiPostSpecMutators",
        ).adsDeleteMultiPostSpecMutator(F)),
        (F = R(a, F)),
        U)
      )
        return F;
      var V = o(
        "PromoAdsAdsManagerAdCreativeUtils",
      ).getFirstCouponCodeFromAdgroup(F, v);
      return (
        f != null &&
          s != null &&
          u != null &&
          ((F = o(
            "AdsUEditorAdgroupPromoAdMutators",
          ).updatePromoAdForDefaultOptIn(
            { adgroup: F, campaign: s, campaignGroup: u },
            n,
            v,
            f,
            o("AdsUEditorAdgroupPromoAdMutatorUtils")
              .PromoAdDefaultOptInCallSite.SET_INLINE_CREATION,
            V,
          )),
          (F = o(
            "AdsUEditorAdgroupEmailCaptureMutators",
          ).updateEmailCaptureForDefaultOptIn(
            { adgroup: F, campaign: s, campaignGroup: u },
            n,
            f,
            o("AdsUEditorAdgroupPromoAdMutatorUtils")
              .PromoAdDefaultOptInCallSite.SET_INLINE_CREATION,
          ))),
        (F = T(!0, a, F, q, c)),
        (F = o(
          "AdsAdgroupGenerativeAssetSpecMutators",
        ).adsDeleteGenAIAssetSpecMutator(F)),
        (F = o(
          "AdsUEditorAdgroupMediaSourcingSpecMutators",
        ).mayRemoveCAGandMSSpecForRelatedMedia(F)),
        (F = o(
          "AdsUEditorAdgroupMediaSourcingSpecMutators",
        ).mayDeletePushMetadataIdsSpec(F)),
        (F = o(
          "AdsUEditorAdgroupMultiMediaSpecMutators",
        ).mayDeleteMultiMediaContentFromMSS(F)),
        (F = g(F, {
          campaign: s,
          campaignGroup: u,
          instagramAccount: d,
          pageID: D,
          pages: _,
          promotedObjectType: b,
          specPathPlugin: v,
        })),
        F
      );
    }
    function g(e, t) {
      var n,
        a,
        i,
        l = t.campaign,
        s = t.campaignGroup,
        u = t.instagramAccount,
        c = t.pageID,
        d = t.pages,
        m = t.promotedObjectType,
        p = t.specPathPlugin,
        _ = e;
      if (
        (m === r("AdsPromotedObjectTypes").PHONE_CALL &&
          (_ = o("AdsMutators").chain(
            function (e) {
              return r("AdsAdgroupSemanticFields").callToActionType.set(
                p,
                e,
                "CALL_NOW",
              );
            },
            function (e) {
              var t, n;
              return r("AdsAdgroupSemanticFields").linkURL.set(
                p,
                e,
                (t =
                  (n = r("XVanityURLControllerRouteBuilder")
                    .buildUri({ vanity: c })
                    .qualifyDomain(
                      o("ConstUriUtils").getUri("https://facebook.com/"),
                    )) == null
                    ? void 0
                    : n.toString()) != null
                  ? t
                  : "",
              );
            },
          )(_)),
        o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
          l == null ? void 0 : l.destination_type,
        ) &&
          ((n = _) == null ||
          (n = n.creative) == null ||
          (n = n.asset_feed_spec) == null ||
          (n = n.additional_data) == null
            ? void 0
            : n.is_click_to_message) !== !0 &&
          r("qex")._("4331") === !0)
      ) {
        var f;
        _ = L({
          adgroup: _,
          campaign: l,
          campaignGroupPromotedPageID:
            s == null || (f = s.promoted_object) == null ? void 0 : f.page_id,
          instagramAccount: u,
          objective: s == null ? void 0 : s.objective,
          pages: d,
          postEditMode: r("AdsEditorPostEditMode").INLINE,
          specPlugin: p,
          pageID: c,
        });
      }
      return (
        !o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
          l == null ? void 0 : l.destination_type,
        ) &&
          (((a = _) == null ||
          (a = a.creative) == null ||
          (a = a.asset_feed_spec) == null
            ? void 0
            : a.optimization_type) ===
            r("ApiDynamicCreativeOptimizationTypes")
              .DOF_MESSAGING_DESTINATION ||
            ((i = _) == null ||
            (i = i.creative) == null ||
            (i = i.asset_feed_spec) == null ||
            (i = i.additional_data) == null
              ? void 0
              : i.is_click_to_message) === !0) &&
          r("qex")._("4331") === !0 &&
          (_ = E({ adgroup: _, campaign: l })),
        _
      );
    }
    function h(e, t, n) {
      return t != null &&
        o("AdsPCAUnifiedFormatAdSetupUtils").shouldSetupAdGroupAsPcaUnified(
          t,
        ) &&
        n === r("AdsPromotedObjectTypes").PIXEL
        ? r("AdsAdgroupRecordAccessors").metadata.is_pca_unified_format_ad.set(
            !0,
            e,
          )
        : e;
    }
    function y(e, t, n, a) {
      if (
        t !== r("AdsPromotedObjectTypes").MESSENGER ||
        r("AdsAdgroupSemanticFields").pageWelcomeMessage.get(n, e) != null
      )
        return e;
      var i = JSON.stringify(
        o("AdsMessengerVisualEditorUtils").getStandardTemplateDefaultJSON(a),
      );
      return o("AdsMutators").chain(
        function (e) {
          return r("AdsAdgroupSemanticFields").callToActionType.set(
            n,
            e,
            "MESSAGE_PAGE",
          );
        },
        function (e) {
          return r("AdsAdgroupSemanticFields").callToActionValue.set(n, e, d);
        },
        function (e) {
          return r("AdsAdgroupSemanticFields").linkURL.set(
            n,
            e,
            o("AdsMessengerConstants").EMPTY_MESSENGER_LINK,
          );
        },
        function (e) {
          return r("AdsAdgroupSemanticFields").headline.set(
            n,
            e,
            o("AdsMessengerConstants").DEFAULT_HEADLINE.toString(),
          );
        },
        function (e) {
          return r("AdsAdgroupSemanticFields").pageWelcomeMessage.set(n, e, i);
        },
      )(e);
    }
    function C(e, t, n, a, i) {
      if (t !== r("AdsPromotedObjectTypes").WHATSAPP) return e;
      var l = null;
      if (o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(e)) {
        var s;
        l =
          (s = e.creative) == null ||
          (s = s.asset_feed_spec) == null ||
          (s = s.link_urls) == null ||
          (s = s.get(0)) == null
            ? void 0
            : s.get("website_url");
      } else l = r("AdsAdgroupSemanticFields").linkURL.get(n, e);
      return r("isFalsey")(l) ? b(e, n, a, i) : e;
    }
    function b(e, t, n, a) {
      return o("AdsMutators").chain(
        function (e) {
          return o("AdsUEditorCallToActionMutators").setCallToAction({
            callToActionType: "WHATSAPP_MESSAGE",
            pages: null,
            cachedCallToActionLink: null,
            adgroup: e,
            campaignGroupPromotedPageID: r("isTruthy")(n) ? n : void 0,
            objective: a,
            promotedObjectType: r("AdsPromotedObjectTypes").WHATSAPP,
            specPlugin: t,
          });
        },
        function (e) {
          var n = o("AdsWhatsAppUtils").getDefaultCTALink();
          if (o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(e)) {
            var a;
            return o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)
              ? o(
                  "AdsUEditorUnifiedCreationAdgroupMutators",
                ).updateAssetFeedSpecLinkURL(e, n)
              : r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.link_urls.set(
                  r("immutable").fromJS([((a = {}), (a.website_url = n), a)]),
                  e,
                );
          }
          return r("AdsAdgroupSemanticFields").linkURL.set(t, e, n);
        },
        function (e) {
          return o(
            "AdsUEditorCallToActionMutators",
          ).setCallToActionValueAppDestination(e, t, "WHATSAPP");
        },
        function (e) {
          return r("AdsAdgroupSemanticFields").pageWelcomeMessage.get(t, e) ==
            null && r("isTruthy")(n)
            ? k(e, n, t)
            : e;
        },
      )(e);
    }
    function v(e) {
      var t,
        a,
        i,
        l,
        s,
        c = e.account,
        d = e.adgroup,
        m = e.cachedCreative,
        f = e.cachedPageID,
        g = e.campaign,
        h = e.campaignGroup,
        y = e.defaultPagePost,
        C = e.enableNewBrandedContentFlow,
        b = e.instagramAccount,
        v = e.isInstagramProfileVisitAd,
        k = e.pages,
        D = e.promoAdDefaultOptinStatus,
        x = e.promotedObjectType,
        $ = e.skipLoadingPrexistingPost,
        A = e.specPathPlugin,
        F = o("AdsInstagramActorIDUtils").getInstagramActorID(d),
        O = o("AdsInstagramActorIDUtils").getInstagramUserID(d),
        B = o("AdsThreadsUserIDUtils").getThreadsUserID(d),
        W = o("AdsAPIAdgroupRecordUtils").getPageID(d, A),
        q = o("AdsAPIAdgroupRecordUtils").getPagePostID(d),
        U = o("AdsAPIAdgroupRecordUtils").getObjectType(d),
        V = P(d),
        H = N(d),
        G = (s = r(
          "AdsAdgroupRecordAccessors",
        )).creative.authorization_category.get(d),
        z = s.creative.marketing_message_structured_spec.get(d),
        j = s.creative.omnichannel_link_spec.get(d),
        K = s.creative.applink_treatment.get(d),
        Q = o("AdsExistingPostCTAUtils").isExistingPostWithDLGK(
          !0,
          h == null ? void 0 : h.objective,
          x,
        )
          ? r("AdsAdgroupRecordAccessors").creative.call_to_action.get(d)
          : null,
        X = function (t) {
          return Q != null
            ? r("AdsAdgroupRecordAccessors").creative.call_to_action.set(Q, t)
            : t;
        },
        Y = d;
      (o("AdsBrandAwarenessUtils").isBrandObjective(
        h == null ? void 0 : h.objective,
      ) &&
        (h == null ? void 0 : h.is_odax_campaign_group) === !0 &&
        (Y = o(
          "AdsUEditorUnifiedCreationAdgroupMutators",
        ).cleanUpMessagingRelatedSpecForAwareness(Y)),
        (Y = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.set(p),
          r("AdsAdgroupRecordAccessors").metadata.carousel_style.set("others"),
        )(Y)),
        (Y = o(
          "AdsAdgroupLinkPostFormatMutators",
        ).removeCreativeAssetGroupsSpecField(Y)),
        (Y = o(
          "AdsAdgroupGenerativeAssetSpecMutators",
        ).adsDeleteGenAIAssetSpecMutator(Y)),
        (Y = o(
          "AdsUEditorAdgroupMediaSourcingSpecMutators",
        ).mayRemoveCAGandMSSpecForRelatedMedia(Y)),
        (Y = o(
          "AdsUEditorAdgroupMediaSourcingSpecMutators",
        ).mayDeletePushMetadataIdsSpec(Y)),
        (Y = o(
          "AdsUEditorAdgroupMultiMediaSpecMutators",
        ).mayDeleteMultiMediaContentFromMSS(Y)),
        (Y = r(
          "AdsAdgroupRecordAccessors",
        ).metadata.is_pca_unified_format_ad.delete(Y)));
      var J = o("PromoAdsAdsManagerAdCreativeUtils").getCouponCodeFromAdgroup(
        Y,
        A,
        o("PromoAdsAdsManagerAdCreativeUtils").PromoCodeExtractionField
          .PRIMARY_TEXT,
      );
      if (
        (D != null &&
          g != null &&
          h != null &&
          ((Y = o(
            "AdsUEditorAdgroupPromoAdMutators",
          ).updatePromoAdForDefaultOptIn(
            { adgroup: Y, campaign: g, campaignGroup: h },
            c,
            A,
            D,
            o("AdsUEditorAdgroupPromoAdMutatorUtils")
              .PromoAdDefaultOptInCallSite.SET_EXISTING_POST_FORMAT,
            babelHelpers.extends({}, J, { source: "AD_CREATIVE_PRIMARY_TEXT" }),
          )),
          (Y = o(
            "AdsUEditorAdgroupEmailCaptureMutators",
          ).updateEmailCaptureForDefaultOptIn(
            { adgroup: Y, campaign: g, campaignGroup: h },
            c,
            D,
            o("AdsUEditorAdgroupPromoAdMutatorUtils")
              .PromoAdDefaultOptInCallSite.SET_EXISTING_POST_FORMAT,
          ))),
        r("isFalsey")($) && m != null && W === f)
      ) {
        var Z, ee, te;
        ((Y = r("AdsAdgroupRecordAccessors").creative.set(m, Y)),
          (Y = L({
            adgroup: Y,
            campaign: g,
            campaignGroupPromotedPageID:
              h == null || (Z = h.promoted_object) == null ? void 0 : Z.page_id,
            instagramAccount: b,
            objective: h == null ? void 0 : h.objective,
            pages: k,
            postEditMode: r("AdsEditorPostEditMode").EXISTING,
            specPlugin: A,
            pageID: W,
          })),
          !o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
            g == null ? void 0 : g.destination_type,
          ) &&
            (((ee = Y) == null ||
            (ee = ee.creative) == null ||
            (ee = ee.asset_feed_spec) == null
              ? void 0
              : ee.optimization_type) ===
              r("ApiDynamicCreativeOptimizationTypes")
                .DOF_MESSAGING_DESTINATION ||
              ((te = Y) == null ||
              (te = te.creative) == null ||
              (te = te.asset_feed_spec) == null ||
              (te = te.additional_data) == null
                ? void 0
                : te.is_click_to_message) === !0) &&
            r("qex")._("4331") === !0 &&
            (Y = E({ adgroup: Y, campaign: g })));
        var ne = r(
          "AdsAdgroupRecordAccessors",
        ).creative.branded_content_boosting_type.get(d);
        return (
          (Y = T(!1, d, Y, ne, C)),
          o(
            "AdsUnifiedProfileVisitUtils",
          ).getUnifiedProfileVisitsDestinationContainsIG(
            g == null ? void 0 : g.destination_type,
          ) && (Y = w(Y, H, A, r("AdsEditorPostEditMode").EXISTING)),
          (Y = R(d, Y)),
          (Y = M(Y, V)),
          r("isTruthy")(G) &&
            !r("justknobx")._("1420") &&
            (Y = r(
              "AdsAdgroupRecordAccessors",
            ).creative.authorization_category.set(G, Y)),
          X(Y)
        );
      }
      var re = o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(Y),
        oe = y == null ? void 0 : y.pagePost.id,
        ae = y == null || (t = y.pagePost.from) == null ? void 0 : t.id,
        ie = y == null ? void 0 : y.pagePost.type,
        le = y == null ? void 0 : y.createdTime,
        se = le != null && o("Instant").now() - le < _;
      if (r("isFalsey")($) && r("isTruthy")(q) && !re)
        Y = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.object_story_id.set(q),
          r("AdsAdgroupRecordAccessors").creative.object_type.set(U),
        )(Y);
      else if (
        r("isFalsey")($) &&
        se &&
        r("isTruthy")(ae) &&
        r("isTruthy")(oe) &&
        r("isTruthy")(ie) &&
        W === ae
      ) {
        var ue,
          ce = o("AdsPagePostUtils").convertTypeToCreativeObjectType(ie);
        ((Y = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.object_story_id.set(oe),
          r("AdsAdgroupRecordAccessors").creative.object_type.set(ce),
        )(Y)),
          r("AdsInterfacesLogger").log({
            eventName: "ctx_existing_post_selected_from_entry_point",
            data:
              ((ue = {}),
              (ue.page_id = W),
              (ue.message = "setToUsingExistingPost"),
              (ue.source = r(
                "AdsMessengerExistingPostEntrypointTypes",
              ).STICKY_DEFAULTING),
              (ue.adgroup_id = d.id),
              (ue.campaign_destination_type =
                g == null ? void 0 : g.destination_type),
              ue),
          }),
          (u || (u = r("AdsDataAtom"))).addPostDispatchCallback(function () {
            n("cr:9968")();
          }),
          (o("AdsUEditorMessagingDestinationUtils").isCTM(
            g == null ? void 0 : g.destination_type,
          ) ||
            o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
              g == null ? void 0 : g.destination_type,
            )) &&
            (Y = I(Y, g == null ? void 0 : g.destination_type, ae, A)),
          c != null &&
            g != null &&
            h != null &&
            (Y = o(
              "adsAutomaticFlowMutationSetDoFSpec",
            ).adsStandardEnhancementsExistingPostSpecMutator(
              c,
              { campaign: g, campaignGroup: h, adgroup: Y },
              r(
                "adsUEditorGetShouldEnableAPlusCUseExistingPostByDefaultGetValueSelector",
              )(),
              y == null ? void 0 : y.pagePost,
            )));
      } else
        Y = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.object_id.set(
            r("isTruthy")(W) ? W : void 0,
          ),
          r("AdsAdgroupRecordAccessors").creative.object_type.set(U),
        )(Y);
      (r("isTruthy")(G) &&
        (Y = r("AdsAdgroupRecordAccessors").creative.authorization_category.set(
          G,
          Y,
        )),
        r("isTruthy")(z) &&
          (Y = r(
            "AdsAdgroupRecordAccessors",
          ).creative.marketing_message_structured_spec.set(z, Y)),
        (Y = L({
          adgroup: Y,
          campaign: g,
          campaignGroupPromotedPageID:
            h == null || (a = h.promoted_object) == null ? void 0 : a.page_id,
          instagramAccount: b,
          objective: h == null ? void 0 : h.objective,
          pages: k,
          postEditMode: r("AdsEditorPostEditMode").EXISTING,
          specPlugin: A,
          pageID: W,
        })),
        !o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
          g == null ? void 0 : g.destination_type,
        ) &&
          (((i = Y) == null ||
          (i = i.creative) == null ||
          (i = i.asset_feed_spec) == null
            ? void 0
            : i.optimization_type) ===
            r("ApiDynamicCreativeOptimizationTypes")
              .DOF_MESSAGING_DESTINATION ||
            ((l = Y) == null ||
            (l = l.creative) == null ||
            (l = l.asset_feed_spec) == null ||
            (l = l.additional_data) == null
              ? void 0
              : l.is_click_to_message) === !0) &&
          r("qex")._("4331") === !0 &&
          (Y = E({ adgroup: Y, campaign: g })));
      var de = r(
        "AdsAdgroupRecordAccessors",
      ).creative.branded_content_boosting_type.get(d);
      if (
        ((Y = T(!1, d, Y, de, C)),
        (Y = R(d, Y)),
        (Y = S(d, Y)),
        v === !0 &&
          b != null &&
          (Y = o("AdsUEditorInstagramProfileMutators").setCTALinkAndAppLink({
            adgroup: Y,
            specPlugin: A,
            instagramAccount: b,
            postEditMode: r("AdsEditorPostEditMode").EXISTING,
          })),
        r("gkx")("8986") &&
          (Y = r("AdsAdgroupRecordAccessors").creative.threads_user_id.set(B)(
            Y,
          )),
        r("isTruthy")(j) && x === r("AdsPromotedObjectTypes").WEB_AND_APP)
      ) {
        if (j == null) {
          var me,
            pe =
              g == null ||
              (me = g.promoted_object) == null ||
              (me = me.omnichannel_object) == null ||
              (me = me.app) == null
                ? void 0
                : me.first(),
            _e = pe == null ? void 0 : pe.get("application_id");
          j = r("immutable").fromJS({ app: { application_id: _e } });
        }
        ((Y = r("AdsAdgroupRecordAccessors").creative.omnichannel_link_spec.set(
          j,
          Y,
        )),
          (Y = r("AdsAdgroupRecordAccessors").creative.applink_treatment.set(
            K,
            Y,
          )));
      }
      return (
        o(
          "AdsUnifiedProfileVisitUtils",
        ).getUnifiedProfileVisitsDestinationContainsIG(
          g == null ? void 0 : g.destination_type,
        ) && (Y = w(Y, H, A, r("AdsEditorPostEditMode").EXISTING)),
        (Y = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.mockup_id.delete,
          o(
            "AdsInstagramUserIdMigrationUtils",
          ).IGIDV2MigrationAccessors.creative.instagram_user_id.set(F, O),
        )(Y)),
        X(M(Y, V))
      );
    }
    function S(e, t) {
      var n = r("AdsAdgroupRecordAccessors").creative.contextual_multi_ads.get(
        e,
      );
      return r("AdsAdgroupRecordAccessors").creative.contextual_multi_ads.set(
        n,
        t,
      );
    }
    function R(e, t) {
      var n = r("AdsAdgroupRecordAccessors").creative.biz_ai.get(e);
      return n != null
        ? r("AdsAdgroupRecordAccessors").creative.biz_ai.set(n, t)
        : t;
    }
    function L(e) {
      var t = e.adgroup,
        n = e.campaign,
        a = e.campaignGroupPromotedPageID,
        i = e.instagramAccount,
        l = e.objective,
        s = e.pageID,
        u = e.pages,
        c = e.postEditMode,
        d = e.specPlugin,
        m = t;
      return (
        n != null &&
        o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
          n.destination_type,
        )
          ? ((m = o("AdsUEditorUnifiedCreationAdgroupMutators").setCTAValues(
              m,
              n.destination_type,
            )),
            (m = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.additional_data.is_click_to_message.set(
              !0,
              m,
            )),
            (m =
              o("AdsAssetFeedUtils").isPACAdgroupFromRecord(t) ||
              o("AdsAssetFeedUtils").isTextOnlyDofAdgroupFromSpec(t)
                ? m
                : r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.asset_feed_spec.optimization_type.set(
                    r("ApiDynamicCreativeOptimizationTypes")
                      .DOF_MESSAGING_DESTINATION,
                    m,
                  )))
          : n != null &&
            l != null &&
            o(
              "AdsUnifiedProfileVisitUtils",
            ).getIsUnifiedProfileVisitsDestination(n.destination_type) &&
            (m = o(
              "AdsUEditorUnifiedProfileVisitsAdgroupMutators",
            ).setUnifiedProfileVisitsCTAFieldsForDestination({
              adgroup: m,
              campaignGroupPromotedPageID: a,
              destination: n.destination_type,
              instagramAccount: i,
              objective: l,
              pages: u,
              postEditMode: c,
              specPlugin: d,
              pageID: s,
            })),
        m
      );
    }
    function E(e) {
      var t,
        n,
        a = e.adgroup,
        i = e.campaign,
        l = a;
      return (
        i != null &&
          !o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
            i.destination_type,
          ) &&
          ((a == null ||
          (t = a.creative) == null ||
          (t = t.asset_feed_spec) == null
            ? void 0
            : t.optimization_type) ===
            r("ApiDynamicCreativeOptimizationTypes")
              .DOF_MESSAGING_DESTINATION ||
            (a == null ||
            (n = a.creative) == null ||
            (n = n.asset_feed_spec) == null ||
            (n = n.additional_data) == null
              ? void 0
              : n.is_click_to_message) === !0) &&
          ((l = o("AdsUEditorUnifiedCreationAdgroupMutators").setCTAValues(
            l,
            i.destination_type,
          )),
          (l = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.additional_data.is_click_to_message.delete(
            l,
          )),
          (l = o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(
            a,
          )
            ? r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.optimization_type.delete(l)
            : l)),
        l
      );
    }
    function k(e, t, n) {
      var o = JSON.stringify(
        r("AdsGetStandardTemplateDefaultJSONHelperForWhatsAppAutofillMessage")(
          t,
        ),
      );
      return r("AdsAdgroupSemanticFields").pageWelcomeMessage.set(n, e, o);
    }
    function I(e, t, n, a) {
      var i = JSON.stringify(
        o("AdsMessengerVisualEditorUtils").getStandardTemplateDefaultJSON(n, t),
      );
      return r("AdsAdgroupSemanticFields").pageWelcomeMessage.set(a, e, i);
    }
    function T(e, t, n, a, i) {
      if (r("isFalsey")(i)) return n;
      var l = null;
      switch (a) {
        case "CREATOR_INLINE":
        case "CREATOR_BOOST":
          l = e ? "CREATOR_INLINE" : "CREATOR_BOOST";
          break;
        case "SPONSOR_INLINE":
        case "SPONSOR_BOOST":
          l = e ? "SPONSOR_INLINE" : "SPONSOR_BOOST";
          break;
      }
      var s = n;
      ((s = r(
        "AdsAdgroupRecordAccessors",
      ).creative.branded_content_boosting_type.set(l, s)),
        (s = r(
          "AdsAdgroupRecordAccessors",
        ).creative.instagram_branded_content.delete(s)));
      var u = r(
        "AdsAdgroupRecordAccessors",
      ).creative.instagram_branded_content.get(t);
      (r("isTruthy")(u) &&
        (s = r(
          "AdsAdgroupRecordAccessors",
        ).creative.instagram_branded_content.set(u, s)),
        (s = r(
          "AdsAdgroupRecordAccessors",
        ).creative.facebook_branded_content.delete(s)));
      var c = r(
        "AdsAdgroupRecordAccessors",
      ).creative.facebook_branded_content.get(t);
      (r("isTruthy")(c) &&
        (s = r(
          "AdsAdgroupRecordAccessors",
        ).creative.facebook_branded_content.set(c, s)),
        (s = r("AdsAdgroupRecordAccessors").creative.branded_content.delete(
          s,
        )));
      var d = r("AdsAdgroupRecordAccessors").creative.branded_content.get(t);
      (r("isTruthy")(d) &&
        (s = r("AdsAdgroupRecordAccessors").creative.branded_content.set(d, s)),
        (s = r(
          "AdsAdgroupRecordAccessors",
        ).creative.branded_content.ui_version.set(1, s)));
      var m = r(
        "AdsAdgroupRecordAccessors",
      ).creative.branded_content.ad_format.get(t);
      return (
        (s = r(
          "AdsAdgroupRecordAccessors",
        ).creative.branded_content.ad_format.set(
          m != null
            ? m
            : o("BrandedContentAdsUtils").getDefaultPartnershipAdFormat(),
          s,
        )),
        s
      );
    }
    function D(e, t) {
      var n = t.objective,
        a = t,
        i = o("AdsODAXUtils").maybeTranslateObjective(
          n,
          o("AdsAPICampaignRecordUtils").getPromotedObjectType(n, e),
          e.optimization_goal,
        );
      return (
        n !== i &&
          (a = r("AdsCampaignGroupRecordAccessors").objective.set(i, a)),
        a
      );
    }
    function x(t) {
      var n,
        a = t.account,
        i = t.accountBlockLists,
        l = t.campaign,
        s = t.campaignGroup,
        u = t.hostID,
        c = t.mockupAdObjects,
        d = t.placementEligibilityInformation,
        m = t.prefillersExtraData,
        p = t.promoAdDefaultOptinStatus,
        _ = babelHelpers.objectWithoutPropertiesLoose(t, e),
        g = _.adgroup,
        h = D(l, s),
        y = h.objective;
      if (o("AdsODAXUtils").isODAXSpecificObjective(s.objective)) {
        var C =
          c != null &&
          !o("AdsAdBuilderMockupCompatibleUtils").isMockupCompatible(
            c.adgroup,
            babelHelpers.extends({}, d, { objective: y }),
            o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(g),
          );
        if (C) return g;
      }
      if (c != null) {
        var b,
          v = o("AdsUEditorMockupMutationUtils").prepareMockupAdObjects(c, {
            objective: y,
            placementEligibilityInformation: d,
          }),
          S = v.adgroup,
          R = v.campaign,
          L = v.campaignGroup,
          E = (b = S.creative) == null ? void 0 : b.mockup_id,
          k = o("AdsUEditorAdgroupObjectiveMutators").getAdgroupExtraData(
            S,
            R,
            L,
          ),
          I = o("AdsUEditorAdgroupObjectiveMutators").getAdgroupExtraData(
            S,
            l,
            h,
          ),
          T = o("AdsUEditorAdgroupObjectiveMutators").removeEmptyTrackingSpec(
            o("AdsUEditorAdgroupObjectiveMutators").convertAdgroup(S, g.id, {
              account: a,
              accountBlockList: i,
              hostID: u,
              newAdgroupExtraData: I,
              oldAdgroupExtraData: k,
              prefillersExtraData: m,
            }),
          );
        ((T = o(
          "AdsUEditorMockupMutationUtils",
        ).maybePerformPostConvertionActions({
          oldAdgroup: g,
          newAdgroup: T,
          campaign: l,
          campaignGroup: h,
          mockupAdgroup: S,
        })),
          (T = o("AdsUEditorMockupMutationUtils").maybeSetWhatsLinkType({
            account: a,
            oldAdgroup: S,
            newAdgroup: T,
            newAdgroupSpecPlugin: I.adgroupSpecPathPlugin,
            oldAdgroupSpecPlugin: k.adgroupSpecPathPlugin,
            campaign: l,
            campaignGroup: h,
          })),
          (T = o(
            "AdsUEditorMockupMutationUtils",
          ).maybeSetMarketingMessageStructuredSpec({
            oldAdgroup: g,
            newAdgroup: T,
            campaign: l,
          })),
          (T = r("AdsAdgroupRecordAccessors").creative.mockup_id.set(E, T)));
        var x = T.creative,
          $ = T.metadata,
          P = f(
            babelHelpers.extends({}, _, {
              cachedCreative: x,
              cachedMetadata: $,
              campaign: l,
              campaignGroup: h,
              promoAdDefaultOptinStatus: p,
            }),
          );
        return (
          o(
            "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
          ).isUnifiedCreativePhotoDataSupported(g) &&
            (P = r("AdsAdgroupRecordAccessors").creative.uca_draft_version.set(
              0,
              P,
            )),
          (P = o(
            "AdsAdgroupLinkPostFormatMutators",
          ).removeCreativeAssetGroupsSpecField(P)),
          (P = o(
            "AdsAdgroupGenerativeAssetSpecMutators",
          ).adsDeleteGenAIAssetSpecMutator(P)),
          (P = o(
            "AdsUEditorAdgroupMediaSourcingSpecMutators",
          ).mayRemoveCAGandMSSpecForRelatedMedia(P)),
          (P = o(
            "AdsUEditorAdgroupMediaSourcingSpecMutators",
          ).mayDeletePushMetadataIdsSpec(P)),
          (P = o(
            "AdsUEditorAdgroupMultiMediaSpecMutators",
          ).mayDeleteMultiMediaContentFromMSS(P)),
          P
        );
      }
      var N = (n = _.cachedCreative) == null ? void 0 : n.mockup_id;
      return N != null
        ? r("AdsAdgroupRecordAccessors").creative.mockup_id.set(
            N,
            f(
              babelHelpers.extends({}, _, {
                campaign: l,
                campaignGroup: h,
                promoAdDefaultOptinStatus: p,
              }),
            ),
          )
        : o("AdsMutators").chain(
            function (e) {
              return o(
                "AdsAdgroupLinkPostFormatMutators",
              ).removeCreativeAssetGroupsSpecField(e);
            },
            function (e) {
              return o(
                "AdsAdgroupGenerativeAssetSpecMutators",
              ).adsDeleteGenAIAssetSpecMutator(e);
            },
            function (e) {
              return o(
                "AdsUEditorAdgroupMediaSourcingSpecMutators",
              ).mayRemoveCAGandMSSpecForRelatedMedia(e);
            },
            function (e) {
              return o(
                "AdsUEditorAdgroupMediaSourcingSpecMutators",
              ).mayDeletePushMetadataIdsSpec(e);
            },
            function (e) {
              return o(
                "AdsUEditorAdgroupMultiMediaSpecMutators",
              ).mayDeleteMultiMediaContentFromMSS(e);
            },
          )(_.adgroup);
    }
    function $(e) {
      var t = e.account,
        n = e.accountBlockLists,
        r = e.campaign,
        a = e.campaignGroup,
        i = e.hostID,
        l = e.prefillersExtraData,
        u = e.previewSharingAdObjects,
        c = babelHelpers.objectWithoutPropertiesLoose(e, s),
        d = c.adgroup;
      if (u == null) return c.adgroup;
      var m = D(r, a),
        p = u.adgroup,
        _ = u.campaign,
        g = u.campaignGroup,
        h = o("AdsUEditorAdgroupObjectiveMutators").getAdgroupExtraData(
          p,
          _,
          g,
        ),
        y = o("AdsUEditorAdgroupObjectiveMutators").getAdgroupExtraData(
          p,
          r,
          m,
        ),
        C = o("AdsUEditorAdgroupObjectiveMutators").removeEmptyTrackingSpec(
          o("AdsUEditorAdgroupObjectiveMutators").convertAdgroup(p, d.id, {
            account: t,
            accountBlockList: n,
            hostID: i,
            newAdgroupExtraData: y,
            oldAdgroupExtraData: h,
            prefillersExtraData: l,
          }),
        );
      return (
        (C = o(
          "AdsUEditorMockupMutationUtils",
        ).maybePerformPostConvertionActions({
          oldAdgroup: d,
          newAdgroup: C,
          campaign: r,
          campaignGroup: m,
          mockupAdgroup: p,
        })),
        f(
          babelHelpers.extends({}, c, {
            cachedCreative: C.creative,
            cachedMetadata: C.metadata,
            campaign: r,
            campaignGroup: m,
          }),
        )
      );
    }
    function P(e) {
      var t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.page_whatsapp_number_id.get(e),
        n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.whatsapp_business_phone_number_id.get(e),
        o = r(
          "AdsAdgroupRecordAccessors",
        ).creative.wamo_whatsapp_identity_spec.wamo_whatsapp_identity_id.get(e);
      return {
        pageWhatsAppNumberId: t,
        whatsAppBusinessPhoneNumberId: n,
        wamoWhatsAppIdentityId: o,
      };
    }
    function N(e) {
      return o(
        "AdsProfileVisitExtensionTypeUtils",
      ).isProfileVisitWhatsAppExtensionTypeSelected(e)
        ? "whatsapp"
        : "none";
    }
    function M(e, t) {
      var n = e;
      return (
        t.pageWhatsAppNumberId != null &&
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.page_whatsapp_number_id.set(t.pageWhatsAppNumberId, n)),
        t.whatsAppBusinessPhoneNumberId != null &&
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.whatsapp_business_phone_number_id.set(
            t.whatsAppBusinessPhoneNumberId,
            n,
          )),
        t.wamoWhatsAppIdentityId != null &&
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.wamo_whatsapp_identity_spec.wamo_whatsapp_identity_id.set(
            t.wamoWhatsAppIdentityId,
            n,
          )),
        n
      );
    }
    function w(e, t, n, r) {
      return t === "whatsapp"
        ? A(e, n, r)
        : t === "none"
          ? o(
              "AdsUEditorCallToActionMutators",
            ).deleteCallToActionValueInstagramProfileDestination(e, n, r)
          : e;
    }
    function A(e, t, n) {
      var a = o("AdsUEditorCallToActionMutators").setCallToActionType(
        e,
        "VIEW_INSTAGRAM_PROFILE",
        t,
      );
      return (
        (a = o(
          "AdsUEditorCallToActionMutators",
        ).setCallToActionValueInstagramProfileDestination(
          a,
          "WHATSAPP_MESSAGE",
          t,
        )),
        n === r("AdsEditorPostEditMode").EXISTING &&
          (a = o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.call_to_action.type.set(
              "VIEW_INSTAGRAM_PROFILE",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.call_to_action.value.instagram_profile_cta_destination.set(
              "WHATSAPP_MESSAGE",
            ),
          )(a)),
        a
      );
    }
    ((l.EMPTY_OBJECT_STORY_SPEC = m),
      (l.setToUsingInlineCreation = f),
      (l.setToUsingExistingPost = v),
      (l.setMultiDestinationSpecs = L),
      (l.setDefaultPageWelcomeMessageSpecsForWhatsApp = k),
      (l.setToUsingMockup = x),
      (l.setToUsingPreviewSharingLink = $));
  },
  98,
);
