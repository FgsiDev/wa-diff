__d(
  "AdsUEditorAdgroupSetPagePostReducerPluginUtils",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAdgroupFBStoryMutator",
    "AdsAdgroupRecordAccessors",
    "AdsCTWAAutogenCatalogSelectionMutators",
    "AdsCreativeFormatMutatorUtils",
    "AdsCreativeSiteLinksAPICallUtils",
    "AdsEditingAdgroupEditorContext",
    "AdsExistingPostCTAUtils",
    "AdsFBStoryCallToActionEligibility",
    "AdsLinkTypeUtils",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMultiDestinationUtils",
    "AdsMutators",
    "AdsPagePostUtils",
    "AdsPageStore",
    "AdsPageUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAudiosAdsMutators",
    "AdsUEditorAdgroupCallAddOnDefaultingMutator",
    "AdsUEditorAdgroupEmailCaptureMutators",
    "AdsUEditorAdgroupOnsiteDestinationsMutators",
    "AdsUEditorAdgroupPromoAdMutatorUtils",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "AdsUEditorUnifiedCreationAwarenessUtils",
    "ApiDynamicCreativeOptimizationTypes",
    "ClickToMessageCTDFeatureGating",
    "PEFunnelLogger",
    "PromoAdsAdsManagerAdCreativeUtils",
    "PromoAdsAdsManagerDefaultOptInUtils",
    "WAMOStatusAdsManagerUtils",
    "WebToWAExistingPostUtils",
    "WebToWhatsappUtils",
    "WebToXDefaultingUtils",
    "WebToXFeatureGating",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsCallToActionGetDefaultCallToActionType",
    "adsCallToActionGetTypesForAdgroup",
    "adsCampaignPromotedObjectSelector",
    "adsPlacementCustomizationConvertToStaticAdWithExistingPost",
    "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
    "adsUEditorCreativeSiteLinksNoticeDataSelector",
    "gkx",
    "isTruthy",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r = t.campaignGroupObjective,
        a = t.defaultingResult,
        i = t.page,
        l = t.specPathPlugin,
        s = e,
        u = a.type;
      switch (u) {
        case "whatsapp":
          s = o(
            "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
          ).setWhatsAppWebsiteExtensionType(s, l);
          break;
        case "instagram_direct":
          s = o(
            "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
          ).setInstagramDirectWebsiteExtensionType(s, l);
          break;
        case "messenger":
          s = o(
            "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
          ).setMessengerWebsiteExtensionType(s, l);
          break;
        case "messaging_apps":
          s = o(
            "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
          ).setMessagingAppsWebsiteExtensionType(
            s,
            [].concat((n = a.multiDestinationType) != null ? n : []),
            l,
            r,
          );
          break;
        case "phone_call":
          s = o(
            "AdsUEditorAdgroupCallAddOnDefaultingMutator",
          ).applyCallAddOnDefaultBrowserAddOn(
            s,
            i == null ? void 0 : i.phone_number_prefill,
            o("AdsPageUtils").getPageID(e),
            l,
          );
          break;
      }
      return s;
    }
    function s(e, t) {
      var n,
        a,
        i = t == null || (n = t.call_to_action) == null ? void 0 : n.type,
        l = t == null || (a = t.call_to_action) == null ? void 0 : a.value;
      if (i == null)
        return o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.call_to_action_type.delete,
          r("AdsAdgroupRecordAccessors").creative.call_to_action.delete,
        )(e);
      var s = r("AdsAdgroupRecordAccessors").creative.call_to_action_type.set(
        i,
        e,
      );
      return (
        (s = r("AdsAdgroupRecordAccessors").creative.call_to_action.type.set(
          i,
          s,
        )),
        l != null &&
          (l.link != null &&
            (s = r(
              "AdsAdgroupRecordAccessors",
            ).creative.call_to_action.value.link.set(l.link, s)),
          l.app_link != null &&
            (s = r(
              "AdsAdgroupRecordAccessors",
            ).creative.call_to_action.value.app_link.set(l.app_link, s)),
          l.app_destination != null &&
            (s = r(
              "AdsAdgroupRecordAccessors",
            ).creative.call_to_action.value.app_destination.set(
              l.app_destination,
              s,
            )),
          l.page != null &&
            (s = r(
              "AdsAdgroupRecordAccessors",
            ).creative.call_to_action.value.page.set(l.page, s))),
        s
      );
    }
    function u(t, n, a, i, l, u, c, d, m, p, _, f, g, h) {
      var y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F;
      (g === void 0 && (g = !1), h === void 0 && (h = !1));
      var O = o(
          "AdsMultiDestinationUtils",
        ).isMultiDestinationMessagingOrProfileVisits(n.destination_type),
        B = _.post,
        W = B == null ? void 0 : B.object_story_spec;
      if ((B == null ? void 0 : B.is_fb_stories) === !0 && W != null) {
        var q,
          U,
          V,
          H = o(
            "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
          ).getAdgroupSpecPathPlugin({
            adgroup: t,
            campaign: n,
            campaignGroup: a,
          }),
          G = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
            adgroup: t,
            campaign: n,
            campaignGroup: a,
          }),
          z = o(
            "AdsAdgroupFBStoryMutator",
          ).updateAdgroupWithSelectedFBStoryMutator(t, W, {
            preserveAssetFeedSpec: O,
          }),
          j =
            (q =
              (U = W.photo_data) == null ||
              (U = U.call_to_action) == null ||
              (U = U.value) == null
                ? void 0
                : U.link) != null
              ? q
              : (V = W.video_data) == null ||
                  (V = V.call_to_action) == null ||
                  (V = V.value) == null
                ? void 0
                : V.link,
          K = r("adsCallToActionGetTypesForAdgroup")(
            { adgroup: z, campaign: n, campaignGroup: a },
            i.capabilities,
            void 0,
            a.buying_type,
          ),
          Q = o("AdsFBStoryCallToActionEligibility").getFBStoryCallToActionType(
            {
              callToActionLink: j,
              campaignDestination: n.destination_type,
              defaultCallToActionType: r(
                "adsCallToActionGetDefaultCallToActionType",
              )(a.objective, G),
              isCTMAd: o(
                "AdsMetadataConnectedSourcesUtils",
              ).isCTMAdByCampaignGroupAndCampaign(n, a),
              messagingAppDestination: o(
                "AdsLinkTypeUtils",
              ).getCurrentMessagingType(t, H),
              promotedObjectType: G,
              supportedCallToActionTypes: K,
            },
          );
        return o(
          "AdsAdgroupFBStoryMutator",
        ).updateAdgroupWithSelectedFBStoryCallToActionMutator(z, W, Q);
      }
      var X = o("AdsPagePostUtils").getPostIdFromPagePostId_BROKEN(
          _.pagePostID,
        ),
        Y = o("AdsPageUtils").getPageID(t),
        J = (y = _.post) == null ? void 0 : y.message,
        Z = (C = t.creative) == null ? void 0 : C.object_story_id,
        ee =
          ((b = t.creative) == null
            ? void 0
            : b.branded_content_boosting_type) != null,
        te = o("AdsExistingPostCTAUtils").isExistingPostWithDLGK(
          !0,
          a.objective,
          o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
            campaign: n,
            campaignGroup: a,
          }),
        ),
        ne =
          r("justknobx")._("3367") &&
          Z != null &&
          Z === _.pagePostID &&
          !o(
            "AdsUEditorMessagingDestinationUtils",
          ).isClickToMessageAdDestination(n.destination_type) &&
          !ee,
        re = o("AdsMutators").chain(
          function (e) {
            return o("AdsCreativeFormatMutatorUtils").mutateCreativeMediaType(
              e,
              "EXISTING_POST",
            );
          },
          function (e) {
            return r("AdsAdgroupRecordAccessors").creative.object_story_id.set(
              _.pagePostID,
              e,
            );
          },
          ne
            ? function (e) {
                return e;
              }
            : r("AdsAdgroupRecordAccessors").creative.body.set(J),
          r("AdsAdgroupRecordAccessors").creative.branded_content.testimonial
            .delete,
        )(t);
      if (
        (_.objectType &&
          (re = r("AdsAdgroupRecordAccessors").creative.object_type.set(
            _.objectType,
            re,
          )),
        (re = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.instagram_story_id.delete,
          r("AdsAdgroupRecordAccessors").creative.interactive_components_spec
            .delete,
          r("AdsAdgroupRecordAccessors").creative.object_id.delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.delete,
          r("AdsAdgroupRecordAccessors").creative.portrait_customizations
            .delete,
          r("AdsAdgroupRecordAccessors").creative.source_instagram_media_id
            .delete,
          r("AdsAdgroupRecordAccessors").creative.instant_checkout_setting
            .delete,
          r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
            .ad_handle_type.delete,
          te
            ? function (e) {
                return e;
              }
            : r("AdsAdgroupRecordAccessors").creative.call_to_action.delete,
          function (e) {
            return o(
              "AdsUEditorMessagingDestinationUtils",
            ).isClickToMessageAdDestination(n.destination_type)
              ? r(
                  "AdsAdgroupRecordAccessors",
                ).creative.existing_post_title.delete(e)
              : e;
          },
        )(re)),
        g)
      ) {
        var oe;
        re = o("AdsMutators").chain(
          function (e) {
            return r(
              "AdsAdgroupRecordAccessors",
            ).creative.source_facebook_post_id.set(X, e);
          },
          (oe = r("AdsAdgroupRecordAccessors")).creative.object_story_spec
            .delete,
          oe.creative.effective_instagram_media_id.delete,
          oe.creative.effective_instagram_story_id.delete,
          oe.creative.effective_object_story_id.delete,
          oe.creative.object_id.delete,
          function (e) {
            return r("AdsAdgroupRecordAccessors").creative.object_story_id.set(
              _.pagePostID,
              e,
            );
          },
        )(re);
      } else
        re = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.source_facebook_post_id
            .delete,
        )(re);
      if (!O)
        re = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete,
        )(re);
      else if (
        o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
          n.destination_type,
        ) &&
        (((v = re.creative) == null || (v = v.asset_feed_spec) == null
          ? void 0
          : v.call_to_actions) == null ||
          ((S = re.creative) == null || (S = S.asset_feed_spec) == null
            ? void 0
            : S.optimization_type) == null ||
          ((R = re.creative) == null ||
          (R = R.asset_feed_spec) == null ||
          (R = R.additional_data) == null
            ? void 0
            : R.is_click_to_message) == null) &&
        r("gkx")("22630")
      ) {
        var ae, ie, le;
        (((ae = re.creative) == null || (ae = ae.asset_feed_spec) == null
          ? void 0
          : ae.call_to_actions) == null &&
          (re = o("AdsUEditorUnifiedCreationAdgroupMutators").setCTAValues(
            re,
            n.destination_type,
            null,
            Y,
          )),
          ((ie = re.creative) == null || (ie = ie.asset_feed_spec) == null
            ? void 0
            : ie.optimization_type) == null &&
            (re = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.optimization_type.set(
              r("ApiDynamicCreativeOptimizationTypes")
                .DOF_MESSAGING_DESTINATION,
              re,
            )),
          ((le = re.creative) == null ||
          (le = le.asset_feed_spec) == null ||
          (le = le.additional_data) == null
            ? void 0
            : le.is_click_to_message) == null &&
            (re = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.additional_data.is_click_to_message.set(
              !0,
              re,
            )));
      }
      _.objective !== r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
        (re = r("AdsAdgroupRecordAccessors").creative.product_set_id.delete(
          re,
        ));
      var se = { campaign: n, campaignGroup: a, adgroup: re },
        ue = o(
          "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
        ).getAdgroupSpecPathPlugin(se);
      ((re = o(
        "adsAutomaticFlowMutationSetDoFSpec",
      ).adsStandardEnhancementsExistingPostSpecMutator(
        i,
        se,
        l,
        _.post,
        void 0,
        void 0,
        _.posts,
      )),
        (re = o(
          "AdsCTWAAutogenCatalogSelectionMutators",
        ).maybeRestoreCTWAAutogenProductExtensionsAfterDoFReset(
          t,
          re,
          _.shouldPreserveCTWAX2PProductExtensions === !0 &&
            o("AdsMetadataConnectedSourcesUtils").isCTWADestinationByCampaign(
              n,
            ) &&
            !o(
              "AdsMetadataConnectedSourcesUtils",
            ).isCTMAdByCampaignGroupAndCampaign(n, a),
          _.pagePostID,
        )),
        O ||
          (re = r("adsPlacementCustomizationConvertToStaticAdWithExistingPost")(
            re,
          )),
        (re = o("AdsUEditorAdgroupAudiosAdsMutators").maybeRemoveAudioSwap(
          re,
        )));
      var ce =
          (L = _.post) == null || (L = L.partnership_ads_identities) == null
            ? void 0
            : L.secondary_identities,
        de = r("isTruthy")(ce) && ce.length > 0,
        me = _.posts != null && _.posts.length > 1,
        pe = o(
          "PromoAdsAdsManagerAdCreativeUtils",
        ).getFirstCouponCodeFromAdgroup(re, ue);
      r("justknobx")._("5401") &&
        (re = o(
          "adsAutomaticFlowMutationSetDoFSpec",
        ).adsUseSMCProductExtensionExistingPostSpecMutator(
          _.post,
          re,
          n.destination_type,
          f,
        ));
      var _e =
        (E = re.creative) == null ||
        (E = E.degrees_of_freedom_spec) == null ||
        (E = E.creative_features_spec) == null
          ? void 0
          : E.product_extensions;
      re = o(
        "adsAutomaticFlowMutationSetDoFSpec",
      ).adsSetProductExtensionsExistingPostMutator(
        re,
        de,
        o("AdsMetadataConnectedSourcesUtils").isCTWADestinationByCampaign(n),
        o("AdsMetadataConnectedSourcesUtils").isEligibleForCtdPeByCampaign(n) &&
          o(
            "ClickToMessageCTDFeatureGating",
          ).enableCTDProductExtensionsIGPlacement(!0),
        h,
      );
      var fe =
        (k = re.creative) == null ||
        (k = k.degrees_of_freedom_spec) == null ||
        (k = k.creative_features_spec) == null
          ? void 0
          : k.product_extensions;
      if (_e == null && fe != null) {
        var ge,
          he,
          ye = {
            adgroup_id: re.id,
            campaign_group_id: a.id,
            campaign_id: n.id,
            object_creation_source: "existing_post",
            object_level: "ad_level",
          },
          Ce = {
            entry_point: "existing_post_mutation",
            opt_in_source:
              (ge =
                (he = re.creative) == null ||
                (he = he.creative_sourcing_spec) == null ||
                (he = he.catalog) == null ||
                (he = he.action_metadata) == null
                  ? void 0
                  : he.type) != null
                ? ge
                : "DEFAULT",
          };
        fe.enroll_status === "OPT_IN"
          ? o("PEFunnelLogger").logL1DataConsentDefaultOn(ye, Ce)
          : o("PEFunnelLogger").logL1DataConsentDefaultOff(ye, Ce);
      }
      var be =
          (I = _.post) == null ||
          (I = I.call_to_action) == null ||
          (I = I.value) == null
            ? void 0
            : I.link,
        ve =
          (T = t.creative) == null || (T = T.creative_sourcing_spec) == null
            ? void 0
            : T.site_links_spec,
        Se = r("adsUEditorCreativeSiteLinksNoticeDataSelector")(
          r("AdsEditingAdgroupEditorContext"),
        ),
        Re = r("adsCampaignPromotedObjectSelector")(n.id);
      (r("justknobx")._("3185") &&
        (ve == null || ve.size === 0) &&
        ((D = Se.getValue()) == null ? void 0 : D.defaultOnType) == null &&
        o(
          "AdsMetadataConnectedSourcesUtils",
        ).isEligibleForSiteExtensionsByCampaignAndAdgroup(n, a, t) &&
        o("AdsCreativeSiteLinksAPICallUtils")
          .loadDomainAndSiteLinksWithMutation(
            n,
            be,
            i.account_id,
            t.id,
            Re,
            "AdsUEditorAdgroupSetPagePostReducerPluginUtils",
            Y,
          )
          .then(function () {})
          .catch(function () {}),
        (re = o(
          "adsAutomaticFlowMutationSetDoFSpec",
        ).adsSetSiteExtensionsExistingPostMutator(t, re)),
        c != null &&
          ((re = o(
            "AdsUEditorAdgroupPromoAdMutators",
          ).updatePromoAdForDefaultOptIn(
            { adgroup: re, campaign: n, campaignGroup: a },
            i,
            o(
              "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
            ).getAdgroupSpecPathPlugin({
              adgroup: re,
              campaign: n,
              campaignGroup: a,
            }),
            c,
            o("AdsUEditorAdgroupPromoAdMutatorUtils")
              .PromoAdDefaultOptInCallSite.SET_EXISTING_POST,
            pe,
          )),
          (re = o(
            "AdsUEditorAdgroupEmailCaptureMutators",
          ).updateEmailCaptureForDefaultOptIn(
            { adgroup: re, campaign: n, campaignGroup: a },
            i,
            c,
            o("AdsUEditorAdgroupPromoAdMutatorUtils")
              .PromoAdDefaultOptInCallSite.SET_EXISTING_POST,
          ))));
      var Le = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
          campaign: n,
          campaignGroup: a,
        }),
        Ee = (x = d.get(_.pagePostID)) == null ? void 0 : x.getValue(),
        ke =
          Ee == null || ($ = Ee.call_to_action) == null || ($ = $.value) == null
            ? void 0
            : $.link;
      if (
        ke != null &&
        (Le === r("AdsPromotedObjectTypes").WEB_AND_SHOP ||
          ((P = t.creative) == null || (P = P.destination_spec) == null
            ? void 0
            : P.destination_type) === "WEBSITE_AND_SHOP")
      ) {
        var Ie,
          Te = {
            facebookStorefront:
              Y != null
                ? p == null || (Ie = p.getValue()) == null
                  ? void 0
                  : Ie.get(Y)
                : null,
            instagramStorefront: null,
          },
          De = o(
            "AdsUEditorAdgroupOnsiteDestinationsMutators",
          ).getFirstDestinationID(
            Te,
            m,
            ke,
            _.adgroupIDs,
            null,
            null,
            null,
            X,
            null,
          );
        re = o(
          "AdsUEditorAdgroupOnsiteDestinationsMutators",
        ).updateOnsiteDestinationsWithLinkType(
          re,
          n,
          "website_and_shops",
          Te,
          De,
          !0,
          !0,
        );
      }
      var xe =
          (N = _.post) == null || (N = N.call_to_action) == null
            ? void 0
            : N.type,
        $e =
          (M = _.post) == null || (M = M.call_to_action) == null
            ? void 0
            : M.value,
        Pe = $e == null ? void 0 : $e.lead_gen_form_id;
      if (
        (xe != null &&
        (n.destination_type ===
          r("AdCampaignDestination").WEBSITE_AND_LEAD_FORM ||
          (n.destination_type === r("AdCampaignDestination").ON_AD &&
            (_.objective === r("AdsAPIObjectives").LEAD_GENERATION ||
              _.objective === r("AdsAPIObjectives").OUTCOME_LEADS)))
          ? ((re = r(
              "AdsAdgroupRecordAccessors",
            ).creative.call_to_action.type.set(xe, re)),
            (re = r(
              "AdsAdgroupRecordAccessors",
            ).creative.call_to_action_type.set(xe, re)),
            (re = r(
              "AdsAdgroupRecordAccessors",
            ).creative.call_to_action.value.lead_gen_form_id.set(Pe, re)))
          : g && (re = s(re, _.post)),
        Le === r("AdsPromotedObjectTypes").WEB_AND_APP)
      ) {
        var Ne,
          Me = $e == null ? void 0 : $e.android_url,
          we = $e == null ? void 0 : $e.ios_url,
          Ae = (Ne = $e == null ? void 0 : $e.link) != null ? Ne : "";
        ((re = r(
          "AdsAdgroupRecordAccessors",
        ).creative.omnichannel_link_spec.app.platform_specs.ios.url.set(
          we,
          re,
        )),
          (re = r(
            "AdsAdgroupRecordAccessors",
          ).creative.omnichannel_link_spec.app.platform_specs.android.url.set(
            Me,
            re,
          )),
          (re = r(
            "AdsAdgroupRecordAccessors",
          ).creative.omnichannel_link_spec.web.url.set(Ae, re)));
      }
      var Fe = o("WebToXFeatureGating").enableWebToIGD(a, n, t, !0),
        Oe = o("WebToXFeatureGating").enableWebToM(a, n, t, !0);
      if (
        !o("WAMOStatusAdsManagerUtils").isOnlyWAMOStatusSelectedFromCampaign(
          n,
        ) &&
        o(
          "WebToWAExistingPostUtils",
        ).isWebToXEligibleForExistingPostsSelectedCTA(
          Ee == null || (w = Ee.call_to_action) == null ? void 0 : w.type,
        ) &&
        o("WebToWhatsappUtils").isWebToXEligibleForSingleCreative(
          { campaignGroup: a, campaign: n, adgroup: re },
          ue,
        ) &&
        (Fe || Oe) &&
        !o(
          "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
        ).isPromoAdOptedInForAdgroup(
          re,
          n,
          a,
          !0,
          !0,
          r("justknobx")._("5721"),
        ) &&
        !(
          r("justknobx")._("5755") &&
          o(
            "PromoAdsAdsManagerDefaultOptInUtils",
          ).isAdgroupEligibleForPromoDefaultOptIn(
            { adgroup: re, campaign: n, campaignGroup: a },
            i,
            c,
            pe,
          )
        )
      ) {
        var Be,
          We = Y != null ? r("AdsPageStore").getLoadObject(Y).getValue() : null,
          qe = o("WebToXDefaultingUtils").enableBrowserAddOnDefaultingType(
            i,
            [t.id],
            a,
            n,
            t,
            _.hostID,
            We,
            "post_selections",
            n == null ||
              (Be = n.toJS()) == null ||
              (Be = Be.targeting) == null ||
              (Be = Be.geo_locations) == null
              ? void 0
              : Be.countries,
            n == null ? void 0 : n.optimization_goal,
          );
        ((re = e(re, {
          defaultingResult: qe,
          specPathPlugin: ue,
          page: We,
          campaignGroupObjective: a.objective,
        })),
          (re = o(
            "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
          ).setPageWelcomeMessageOnWebsiteExtensionTypeSelection(
            re,
            Y,
            qe.type,
            a.objective,
          )));
      }
      var Ue =
        (A =
          (F = _.posts) == null
            ? void 0
            : F.some(function (e) {
                return e.is_instagram_post === !0;
              })) != null
          ? A
          : !1;
      if (
        me &&
        Ue &&
        !O &&
        o("AdsUEditorMessagingDestinationUtils").isClickToMessageAdDestination(
          n.destination_type,
        )
      ) {
        var Ve = o(
            "AdsUEditorUnifiedCreationAwarenessUtils",
          ).getCallToActionTypeFromMessageType(n.destination_type),
          He = o(
            "AdsUEditorUnifiedCreationAwarenessUtils",
          ).getToplineMessageTypeForMD(n.destination_type),
          Ge = o(
            "AdsUEditorUnifiedCreationAwarenessUtils",
          ).getLinkFromMessageType(n.destination_type);
        ((re = r("AdsAdgroupRecordAccessors").creative.call_to_action.type.set(
          Ve,
          re,
        )),
          (re = r(
            "AdsAdgroupRecordAccessors",
          ).creative.call_to_action.value.app_destination.set(He, re)),
          (re = r(
            "AdsAdgroupRecordAccessors",
          ).creative.call_to_action.value.link.set(Ge, re)));
      }
      return re;
    }
    l.updatedAdgroupWithSelectedPagePost = u;
  },
  98,
);
