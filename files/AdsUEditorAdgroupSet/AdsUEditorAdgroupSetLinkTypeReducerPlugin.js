__d(
  "AdsUEditorAdgroupSetLinkTypeReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupCallToActionValueRecord",
    "AdsAPIAdgroupPaths",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupTypeUtils",
    "AdsAppUrlUtils",
    "AdsAssetFeedUtils",
    "AdsBrandAwarenessUtils",
    "AdsBulkValueUtils",
    "AdsCallAddonUtils",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsChildAttachmentsUtils",
    "AdsDCOImageCropDoFUtils",
    "AdsDLOLanguageMutators",
    "AdsDynamicAdCustomizationLanguageMutators",
    "AdsDynamicAdsUtils",
    "AdsInstagramUsernameStore",
    "AdsInterfacesLogger",
    "AdsMobileAppObjectivesUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPageStore",
    "AdsPromotedObjectTypes",
    "AdsRemoveCTAEventFieldsForPlacementCustomizedAds",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupOnsiteDestinationsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetLinkTypeDataActionFlux",
    "AdsUEditorAdgroupSetLinkTypeMutator",
    "AdsUEditorAdgroupSetLinkTypeMutatorUtils",
    "AdsUEditorAdgroupShopAdsUtils",
    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
    "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorInstagramUtils",
    "AdsUEditorLiveVideoMutators",
    "AdsUEditorMessagingAppsAdgroupMutators",
    "AdsUEditorSelectors",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "AdsUEditorUnifiedCreationAwarenessUtils",
    "AdsUEditorWebToAppMutators",
    "AdsWhatsAppUtils",
    "ApiAdObjectTypes",
    "ConstUriUtils",
    "ProductBrowsingAdsUtils",
    "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
    "XVanityURLControllerRouteBuilder",
    "adsCallToActionGetDefaultCallToActionType",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupIsPostClickExperienceSelector",
    "gkx",
    "immutable",
    "justknobx",
    "nullthrows",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")(
        "AdsClickToCallPhoneNumberPrefillStore",
      ).__setRef("AdsUEditorAdgroupSetLinkTypeReducerPlugin"),
      s = "BUY_TICKETS";
    function u() {
      return r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE";
    }
    var c = "SHOP_NOW",
      d = "CALL_NOW",
      m = "WHATSAPP_MESSAGE",
      p = r("immutable").List();
    function _(e, t, n, a, i, l) {
      if (!a) return e;
      var s = e;
      return (
        l || (s = r("AdsAdgroupSemanticFields").callToActionType.set(t, e, n)),
        i
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.template_url_spec.config.app_id.set("", s)
          : o("AdsUEditorCallToActionMutators").setCallToActionValueAppLink(
              s,
              t,
              "",
            )
      );
    }
    function f(e, t, n, a, i) {
      var l = r("AdsAdgroupSemanticFields").callToActionType.set(n, e, c);
      l = o("AdsUEditorAdgroupMutators").setAdsCreativeDestinationSpec(
        l,
        "WEBSITE_AND_SHOP",
        null,
        "OPT_IN",
        "MANUAL",
      );
      var s =
          a != null ? o("AdsBulkValueUtils").getUniformValue(a, null) : null,
        u = o(
          "AdsUEditorAdgroupOnsiteDestinationsMutators",
        ).getSuggestedOnsiteDestinationDetails(e, n, s, i);
      return o(
        "AdsUEditorAdgroupOnsiteDestinationsMutators",
      ).updateOnsiteDestinationsWithLinkType(
        l,
        t,
        "website_and_shops",
        s,
        u,
        !0,
        !0,
      );
    }
    function g(t, n, a) {
      var i,
        l,
        s,
        u,
        c,
        m,
        p = t,
        _ =
          (i = t.creative) == null || (i = i.object_story_spec) == null
            ? void 0
            : i.page_id,
        f =
          (l = t.creative) == null || (l = l.object_story_spec) == null
            ? void 0
            : l.video_data,
        g = o("AdsBrandAwarenessUtils").isBrandObjective(
          (s = n.pivots) == null ? void 0 : s.objective,
        );
      if (
        (r("AdsInterfacesLogger").log({
          eventName: "call_ads_phone_number_prefill_eligible",
          data:
            ((c = {}),
            (c.objective = (u = n.pivots) == null ? void 0 : u.objective),
            c),
        }),
        _ != null)
      ) {
        var h = r("nullthrows")(
          r("XVanityURLControllerRouteBuilder")
            .buildUri({ vanity: _ })
            .qualifyDomain(o("ConstUriUtils").getUri("https://facebook.com/")),
        ).toString();
        f ||
          (p = p.setIn(
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.LINK,
            h,
          ));
        var y = null;
        if (
          (e.onReadyImmediately(function (e) {
            var n = e.get({ adAccountID: t.account_id, pageID: _ });
            n.hasValueWithoutError() && (y = n.getValueEnforcing());
          }),
          y != null)
        ) {
          var C, b;
          (r("AdsInterfacesLogger").log({
            eventName: "call_ads_phone_number_prefill_success",
            data:
              ((b = {}),
              (b.objective = (C = n.pivots) == null ? void 0 : C.objective),
              b),
          }),
            (p = p.setIn(
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CALL_TO_ACTION.VALUE.LINK,
              y,
            )),
            a &&
              g &&
              (p = o(
                "AdsUEditorAdgroupChildAttachmentsMutators",
              ).mutateChildAttachments(n, p, function (e) {
                return e.setIn(["call_to_action", "value"], y);
              })));
        }
        a &&
          g &&
          (p = o(
            "AdsUEditorAdgroupChildAttachmentsMutators",
          ).mutateChildAttachments(n, p, function (e) {
            return e.setIn(["link"], h).setIn(["call_to_action", "type"], d);
          }));
      }
      return (
        o("AdsAssetFeedUtils").isPACAdgroupFromRecord(p) &&
          (g ||
            ((m = n.pivots) == null ? void 0 : m.objective) ===
              o("AdsAPIObjectives").LINK_CLICKS) &&
          ((p = r("AdsAdgroupSemanticFields").callToAction.delete(n, p)),
          (p = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(
            p,
          ))),
        r("AdsAdgroupSemanticFields").callToActionType.set(n, p, d)
      );
    }
    function h(e, t, n) {
      var a,
        i = e;
      o("AdsAPIAdgroupRecordUtils").isTemplateCreative(i)
        ? (i = o(
            "AdsDynamicAdCustomizationLanguageMutators",
          ).removeCustomizationRuleSpec(i))
        : (i = o("AdsDLOLanguageMutators").removeAdgroupTranslations(i, t));
      var l =
        (a = i.creative) == null || (a = a.object_story_spec) == null
          ? void 0
          : a.video_data;
      (l ||
        (i = i.setIn(
          r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.LINK,
          o("AdsWhatsAppUtils").getDefaultCTALink(),
        )),
        n &&
          (i = o(
            "AdsUEditorAdgroupChildAttachmentsMutators",
          ).mutateChildAttachments(t, i, function (e) {
            return e
              .setIn(["link"], o("AdsWhatsAppUtils").getDefaultCTALink())
              .setIn(["call_to_action", "value", "app_destination"], "WHATSAPP")
              .setIn(["call_to_action", "type"], m);
          })));
      var s =
        r("AdsAdgroupSemanticFields").callToActionValue.get(t, i) ||
        o(
          "AdsAPIAdgroupCallToActionValueRecord",
        ).createEmptyCallToActionValueFromAdgroup(i);
      return (
        (s = s.set("app_destination", "WHATSAPP")),
        (s = s.set("link", o("AdsWhatsAppUtils").getDefaultCTALink())),
        (i = r("AdsAdgroupSemanticFields").callToActionValue.set(t, i, s)),
        r("AdsAdgroupSemanticFields").callToActionType.set(t, i, m)
      );
    }
    function y(e, t, n) {
      var a = e;
      if (
        ((a = o(
          "AdsRemoveCTAEventFieldsForPlacementCustomizedAds",
        ).removeCTAEventFieldsForPlacementCustomizedAds(a, t)),
        (a = r("AdsAdgroupSemanticFields").callToAction.delete(t, a)),
        (a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_to_actions.delete(a)),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.additional_data.page_welcome_message.get(
          a,
        ) != null &&
          r("gkx")("6189") &&
          (a = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.additional_data.page_welcome_message.delete(
            a,
          )),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.additional_data.is_click_to_message.get(
          a,
        ) === !0 &&
          (a = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.additional_data.is_click_to_message.delete(
            a,
          )),
        o("AdsAssetFeedUtils").isPACIXAdFromRecord(e) || n === !0)
      ) {
        var i,
          l,
          s =
            ((i = e.creative) == null || (i = i.asset_feed_spec) == null
              ? void 0
              : i.link_urls) &&
            r("immutable").fromJS(
              (l = e.creative) == null || (l = l.asset_feed_spec) == null
                ? void 0
                : l.link_urls.map(function (e) {
                    return e.set("website_url", "");
                  }),
            );
        a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.link_urls.set(s, a);
      }
      a = o(
        "AdsUEditorAdgroupUpcomingEventMetadataMutators",
      ).removeUpcomingEventMetadataDisabledReason(a, "INCOMPATIBLE_CTA_TYPE");
      var u = r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE";
      return r("AdsAdgroupSemanticFields").callToActionType.set(
        t,
        a,
        r("immutable").List([u]),
      );
    }
    function C(e, t) {
      var n,
        a,
        i,
        l = e;
      (o("AdsAPIAdgroupRecordUtils").isTemplateCreative(l)
        ? (l = o(
            "AdsDynamicAdCustomizationLanguageMutators",
          ).removeCustomizationRuleSpec(l))
        : (l = o("AdsDLOLanguageMutators").removeAdgroupTranslations(l, t)),
        (l = o(
          "AdsRemoveCTAEventFieldsForPlacementCustomizedAds",
        ).removeCTAEventFieldsForPlacementCustomizedAds(l, t)));
      var s =
          ((n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.call_to_actions) || p,
        u = s
          .setIn(["0", "type"], m)
          .setIn(["0", "value", "app_destination"], "WHATSAPP");
      l = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.call_to_actions.set(u, l);
      var c =
          (a = l.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.link_urls,
        d = (c || []).reduce(function (e, t) {
          return t.get("adlabels") != null ? e.concat(t.get("adlabels")) : e;
        }, r("immutable").List()),
        _ = r("immutable").fromJS([
          ((i = {}),
          (i.website_url = o("AdsWhatsAppUtils").getDefaultCTALink()),
          (i.display_url = ""),
          (i.adlabels = d),
          i),
        ]);
      return (
        (l = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.link_urls.set(_, l)),
        r("AdsAdgroupSemanticFields").callToActionType.set(
          t,
          l,
          r("immutable").List([m]),
        )
      );
    }
    function b(e, t) {
      var n,
        a = e;
      return (
        (a = r("AdsAdgroupSemanticFields").callToActionType.set(
          t,
          a,
          r("immutable").List([s]),
        )),
        (a = r("AdsAdgroupSemanticFields").callToAction.set(
          t,
          a,
          r("immutable").fromJS([((n = {}), (n.type = s), n)]),
        )),
        o(
          "AdsRemoveCTAEventFieldsForPlacementCustomizedAds",
        ).removeCTAEventFieldsForPlacementCustomizedAds(a, t)
      );
    }
    var v = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            isPCE: o("adsUEditorAdgroupIsPostClickExperienceSelector")
              .isPostClickExperienceSelector,
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            adAccount: r("adsUEditorAccountSelector"),
            bulkIsODAXCampaignGroup: o(
              "AdsUEditorSelectors",
            ).campaignGroup.bulkByAccessorToJS(function (e) {
              return e.is_odax_campaign_group;
            }),
            onsiteDestinations: r(
              "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
            ).toFluxSelector(),
          },
          function (e, t, n) {
            var a = n.adAccount,
              i = n.bulkIsODAXCampaignGroup,
              l = n.isPCE,
              c = n.onsiteDestinations,
              d = n.parentData,
              m = o("AdsBulkValueUtils").getUniformValueOrDefault(i, !1);
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                i,
                p,
                v,
                S,
                R,
                L = e,
                E = r("nullthrows")(d.get(L.id)),
                k = E.campaign,
                I = E.campaignGroup,
                T = E.specPlugin,
                D =
                  (n = k.promoted_object) == null
                    ? void 0
                    : n.full_funnel_objective;
              (t.enableThirdPartyDeeplink != null &&
                (L = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.template_url_spec.config.enable_third_party_deeplink.set(
                  t.enableThirdPartyDeeplink,
                  L,
                )),
                t.linkType !== "external" &&
                  (L = o(
                    "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
                  ).clearWebsiteDestinationOptimization(L)));
              var x =
                  (i = L.creative) == null || (i = i.object_story_spec) == null
                    ? void 0
                    : i.page_id,
                $ = r("AdsPageStore").get(x != null ? x : ""),
                P =
                  (p =
                    $ == null || (v = $.connected_instagram_account) == null
                      ? void 0
                      : v.user_igid) != null
                    ? p
                    : "",
                N = o("AdsUEditorInstagramUtils").getAppLinkForInstagramDirect(
                  P,
                ),
                M = D || I.objective,
                w =
                  (S = o(
                    "AdsUEditorUnifiedCreationAwarenessUtils",
                  ).getCTXDefaultDestinationFromSource(
                    $ == null ? void 0 : $.ctx_account_based_default_source,
                    !1,
                    o("AdsBrandAwarenessUtils").isBrandObjective(M) && m,
                  )) != null
                    ? S
                    : r("AdCampaignDestination").MESSENGER,
                A = o("AdsAPICampaignRecordUtils").getPromotedObjectType(M, k),
                F = o("AdsODAXUtils").maybeTranslateObjective(
                  D || I.objective,
                  A,
                  k.optimization_goal,
                ),
                O = o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(L),
                B =
                  o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(L),
                W = r("AdsAdgroupSemanticFields").callToActionType.get(T, L),
                q =
                  (R = r("adsCallToActionGetDefaultCallToActionType")(F, A)) !=
                  null
                    ? R
                    : u(),
                U = o("AdsDynamicAdsUtils").isDynamicAd(L),
                V = o(
                  "AdsUEditorAdgroupSetLinkTypeMutatorUtils",
                ).getIsConversionsWebsiteDynamicFlow(F, A, U),
                H = A === r("AdsPromotedObjectTypes").REMINDER,
                G = t.linkType === "app" && H,
                z =
                  A === r("AdsPromotedObjectTypes").LIVE_VIDEO &&
                  o("AdsCampaignLiveVideoAdsUtils").isInstagramLiveVideoAd(
                    k.destination_type,
                  ) &&
                  o(
                    "AdsCampaignLiveVideoAdsUtils",
                  ).getIsCustomizableCTAIgLvaEnabled(),
                j = o("AdsBrandAwarenessUtils").isBrandObjective(M),
                K = o("AdsBulkValueUtils").getUniformValueOrDefault(
                  t.oldlinkType,
                  null,
                ),
                Q =
                  t.linkType === "external" &&
                  K === t.linkType &&
                  r("justknobx")._("5041");
              if (
                ((L = o(
                  "AdsUEditorAdgroupShopAdsUtils",
                ).deleteAssetFeedSpecOnsiteDestinationAndShopSpec(L)),
                (L = o(
                  "ProductBrowsingAdsUtils",
                ).maybeUpdateProductBrowsingSpec(
                  L,
                  !1,
                  null,
                  I,
                  k,
                  "main_destination_dropdown",
                  t.linkType,
                )),
                (L = o("AdsUEditorAdgroupMutators").setSAOffOptOut(L)),
                B)
              )
                switch (t.linkType) {
                  case "external":
                    return Q
                      ? L
                      : (A === r("AdsPromotedObjectTypes").REMINDER &&
                          (L = o(
                            "AdsUEditorAdgroupSetLinkTypeMutator",
                          ).clearReminderAppFields(L)),
                        j &&
                          (L = o(
                            "AdsUEditorAdgroupSetLinkTypeMutator",
                          ).clearAwarenessWithULFields(L)),
                        y(L, T, H));
                  case "website_and_shops":
                    ((L = o(
                      "AdsUEditorAdgroupMutators",
                    ).setAdsCreativeDestinationSpec(
                      L,
                      "WEBSITE_AND_SHOP",
                      null,
                      "OPT_IN",
                      "MANUAL",
                    )),
                      (L = y(L, T)));
                    {
                      var X =
                          t.storefronts != null
                            ? o("AdsBulkValueUtils").getUniformValue(
                                t.storefronts,
                                null,
                              )
                            : null,
                        Y = o(
                          "AdsUEditorAdgroupOnsiteDestinationsMutators",
                        ).getSuggestedOnsiteDestinationDetails(L, T, X, c);
                      return o(
                        "AdsUEditorAdgroupOnsiteDestinationsMutators",
                      ).updateOnsiteDestinationsWithLinkType(
                        L,
                        k,
                        "website_and_shops",
                        X,
                        Y,
                        !0,
                        !0,
                      );
                    }
                  case "event":
                    return b(L, T);
                  case "whatsapp":
                    return C(L, T);
                  case "messaging_apps":
                    return (
                      (L = o(
                        "AdsRemoveCTAEventFieldsForPlacementCustomizedAds",
                      ).removeCTAEventFieldsForPlacementCustomizedAds(L, T)),
                      o(
                        "AdsUEditorMessagingAppsAdgroupMutators",
                      ).placementCustomizationAdToMessagingAppsLink(
                        L,
                        T,
                        o(
                          "AdsUEditorUnifiedCreationAwarenessUtils",
                        ).adCampaignDestinationTypeToString(w),
                        o(
                          "AdsUEditorUnifiedCreationAwarenessUtils",
                        ).getValueLinkFromMessageType(w, N),
                        o(
                          "AdsUEditorUnifiedCreationAwarenessUtils",
                        ).getCallToActionTypeFromMessageType(w),
                        o(
                          "AdsUEditorUnifiedCreationAwarenessUtils",
                        ).getLinkFromMessageType(w),
                      )
                    );
                }
              var J =
                o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(L);
              O &&
                !J &&
                t.linkType !== "external" &&
                t.linkType !== "website_and_shops" &&
                t.linkType !== "whatsapp" &&
                F !== o("AdsAPIObjectives").APP_INSTALLS &&
                !G &&
                (L = o(
                  "AdsUEditorAdgroupAssetFeedMutators",
                ).convertFromAssetFeedSpec(
                  o("AdsAdgroupTypeUtils").isVideoAd(L)
                    ? r("ApiAdObjectTypes").VIDEO
                    : o("AdsAPIAdgroupRecordUtils").getObjectType(L),
                  L,
                  F,
                ));
              var Z = o("AdsDCOImageCropDoFUtils").isAdgroupOptInImageCropDof(
                L,
              );
              (Z &&
                t.linkType === "event" &&
                (L = o("AdsDCOImageCropDoFUtils").setAdgroupOptOutImageCropDoF(
                  L,
                  T,
                )),
                t.linkType !== "external" &&
                  (L = o("AdsCallAddonUtils").clearCallExtensionFields(L, T)),
                t.linkType !== "external" &&
                  (L = o(
                    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                  ).cleanWebsiteExtensionFields(L)));
              var ee = o("AdsChildAttachmentsUtils").isCarouselAd(L);
              switch (
                (z &&
                  ((L = o(
                    "AdsUEditorCallToActionMutators",
                  ).deleteCallToActionValueAppLink(L, T)),
                  (L = o(
                    "AdsUEditorCallToActionMutators",
                  ).deleteCallToActionValueAppDestination(L, T)),
                  (L = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.call_to_action.delete(L))),
                t.linkType)
              ) {
                case "app":
                  if (
                    ((L = o("AdsUEditorWebToAppMutators").clearWebToAppFields(
                      L,
                    )),
                    (L = o(
                      "AdsUEditorAdgroupSetLinkTypeMutator",
                    ).clearExternalLinkFields(
                      L,
                      T,
                      !V && F !== o("AdsAPIObjectives").APP_INSTALLS && !G,
                    )),
                    M !== o("AdsAPIObjectives").LINK_CLICKS &&
                      M !== o("AdsAPIObjectives").OUTCOME_TRAFFIC &&
                      o("AdsMobileAppObjectivesUtils").isMobileAppObjective(
                        M,
                        A,
                      ))
                  ) {
                    var te,
                      ne =
                        k == null || (te = k.promoted_object) == null
                          ? void 0
                          : te.object_store_url;
                    ne != null &&
                      r("AdsAppUrlUtils").isAppStoreURL(ne) &&
                      (L = o(
                        "AdsUEditorCallToActionMutators",
                      ).setCallToActionLink({
                        link: ne,
                        adgroup: L,
                        specPlugin: T,
                      }));
                  }
                  return _(
                    L,
                    T,
                    U ? W : q,
                    l,
                    ee || (H && B),
                    (G || F === o("AdsAPIObjectives").APP_INSTALLS) &&
                      W instanceof r("immutable").List,
                  );
                case "event":
                  return (
                    (L = o(
                      "AdsUEditorAdgroupSetLinkTypeMutator",
                    ).clearMovieLinkFields(L, T)),
                    (L = o(
                      "AdsUEditorAdgroupSetLinkTypeMutator",
                    ).clearExternalLinkFields(L, T, !0)),
                    (L = o(
                      "AdsUEditorAdgroupSetLinkTypeMutator",
                    ).clearPhoneCallLinkFields(L, T, ee, !0, M)),
                    (L = o(
                      "AdsUEditorAdgroupSetLinkTypeMutator",
                    ).clearAppFields(L, l, ee)),
                    (L = o(
                      "AdsUEditorAdgroupSetLinkTypeMutator",
                    ).clearWhatsAppFields(L, T, ee)),
                    (L = o(
                      "AdsUEditorUnifiedCreationAdgroupMutators",
                    ).clearMessagingAppsFields(
                      L,
                      T,
                      ee,
                      m,
                      M,
                      void 0,
                      A,
                      k.optimization_goal,
                    )),
                    r("AdsAdgroupSemanticFields").callToActionType.set(T, L, s)
                  );
                case "external": {
                  if (Q) return L;
                  (H &&
                    (L = o(
                      "AdsUEditorAdgroupSetLinkTypeMutator",
                    ).clearReminderAppFields(L)),
                    j &&
                      (L = o(
                        "AdsUEditorAdgroupSetLinkTypeMutator",
                      ).clearAwarenessWithULFields(L)));
                  var re =
                    !o(
                      "AdsUEditorAdgroupSetLinkTypeMutatorUtils",
                    ).isOldLinkTypeWebsiteOrWebsiteAndShop(K) && !V;
                  return (
                    (L = o(
                      "AdsUEditorAdgroupSetLinkTypeMutator",
                    ).setExternalLinkType(
                      L,
                      a,
                      I,
                      k,
                      l,
                      ee,
                      T,
                      M,
                      m,
                      re,
                      A,
                      W,
                    )),
                    z &&
                      ((L = r("AdsAdgroupSemanticFields").callToActionType.set(
                        T,
                        L,
                        "LEARN_MORE",
                      )),
                      (L = o(
                        "AdsUEditorCallToActionMutators",
                      ).setCallToActionValueAppDestination(
                        L,
                        T,
                        "INSTAGRAM_LIVE_WEBSITE",
                      ))),
                    L
                  );
                }
                case "live_video": {
                  var oe = null;
                  if (
                    (H
                      ? (oe = "JOIN_LIVE_VIDEO")
                      : z && (oe = "WATCH_LIVE_VIDEO"),
                    oe == null)
                  )
                    return L;
                  (H &&
                    (L = o(
                      "AdsUEditorAdgroupSetLinkTypeMutator",
                    ).clearReminderAppFields(L)),
                    j &&
                      (L = o(
                        "AdsUEditorAdgroupSetLinkTypeMutator",
                      ).clearAwarenessWithULFields(L)),
                    (L = r("AdsAdgroupSemanticFields").callToActionType.set(
                      T,
                      L,
                      oe,
                    )));
                  var ae = r("AdsAdgroupSemanticFields").instagramActorID.get(
                    T,
                    L,
                  );
                  if (ae != null) {
                    var ie = r("AdsInstagramUsernameStore").getForAdgroup(
                      ae,
                      L.id,
                    );
                    if (ie != null) {
                      var le = o("AdsAPIAdgroupRecordUtils").getPostEditMode(L);
                      L = o("AdsUEditorLiveVideoMutators").setCTALinkAndAppLink(
                        {
                          adgroup: L,
                          callToActionType: oe,
                          specPlugin: T,
                          instagramAccount: ie,
                          postEditMode: le,
                        },
                      );
                    }
                  }
                  return L;
                }
                case "website_and_shops": {
                  var se,
                    ue,
                    ce = !o(
                      "AdsUEditorAdgroupSetLinkTypeMutatorUtils",
                    ).isOldLinkTypeWebsiteOrWebsiteAndShop(K);
                  return (
                    (L = (ue = o(
                      "AdsUEditorAdgroupSetLinkTypeMutator",
                    )).clearMovieLinkFields(L, T, ce)),
                    (L = ue.clearEventLinkFields(L, T, ce)),
                    (L = ue.clearPhoneCallLinkFields(L, T, ee, ce, M)),
                    (L = ue.clearWhatsAppFields(L, T, ee, ce)),
                    (L = o(
                      "AdsUEditorUnifiedCreationAdgroupMutators",
                    ).clearMessagingAppsFields(
                      L,
                      T,
                      ee,
                      m,
                      M,
                      ce,
                      A,
                      k.optimization_goal,
                    )),
                    (L = ue.clearAppFields(L, l, ee)),
                    f(L, k, T, (se = t.storefronts) != null ? se : null, c)
                  );
                }
                case "phone_call": {
                  var ue;
                  return (
                    (L = (ue = o(
                      "AdsUEditorAdgroupSetLinkTypeMutator",
                    )).clearMovieLinkFields(L, T)),
                    (L = ue.clearExternalLinkFields(L, T, !0)),
                    (L = ue.clearEventLinkFields(L, T)),
                    (L = ue.clearWhatsAppFields(L, T, ee)),
                    (L = o(
                      "AdsUEditorUnifiedCreationAdgroupMutators",
                    ).clearMessagingAppsFields(
                      L,
                      T,
                      ee,
                      m,
                      M,
                      void 0,
                      A,
                      k.optimization_goal,
                    )),
                    (L = g(L, T, ee)),
                    (L = ue.clearAppFields(L, l, ee)),
                    L
                  );
                }
                case "whatsapp": {
                  var ue;
                  return (
                    (L = (ue = o(
                      "AdsUEditorAdgroupSetLinkTypeMutator",
                    )).clearMovieLinkFields(L, T)),
                    (L = ue.clearExternalLinkFields(L, T, !0)),
                    (L = ue.clearEventLinkFields(L, T)),
                    (L = ue.clearPhoneCallLinkFields(L, T, ee, !0, M)),
                    (L = h(L, T, ee)),
                    (L = ue.clearAppFields(L, l, ee)),
                    z &&
                      (L = o(
                        "AdsUEditorCallToActionMutators",
                      ).setCallToActionValueAppDestination(
                        L,
                        T,
                        "INSTAGRAM_LIVE_WHATSAPP",
                      )),
                    L
                  );
                }
                case "messaging_apps": {
                  var ue, de;
                  return (
                    (L = (ue = o(
                      "AdsUEditorAdgroupSetLinkTypeMutator",
                    )).clearMovieLinkFields(L, T)),
                    (L = ue.clearExternalLinkFields(L, T, !0)),
                    (L = ue.clearEventLinkFields(L, T)),
                    (L = ue.clearPhoneCallLinkFields(L, T, ee, !0, M)),
                    (L = ue.clearAppFields(L, l, ee)),
                    (L = o(
                      "AdsUEditorUnifiedCreationAdgroupMutators",
                    ).setMessagingAppFields(
                      L,
                      T,
                      m,
                      M,
                      ee,
                      (de = o(
                        "AdsUEditorUnifiedCreationAwarenessUtils",
                      )).adCampaignDestinationTypeToString(w),
                      de.getValueLinkFromMessageType(w, N),
                      de.getCallToActionTypeFromMessageType(w),
                      de.getLinkFromMessageType(w),
                      de.getHeadlineFromMessageType(w),
                      A,
                      k.optimization_goal,
                    )),
                    L
                  );
                }
                case "web_to_app":
                  return (
                    (L = o(
                      "AdsUEditorAdgroupSetLinkTypeMutator",
                    ).clearAppFields(L, l, ee)),
                    o("AdsUEditorWebToAppMutators").setWebToAppFields(L, l)
                  );
              }
              return L;
            });
          },
          o("AdsUEditorAdgroupSetLinkTypeDataActionFlux").actionType,
        ),
      },
      S = v;
    l.default = S;
  },
  98,
);
