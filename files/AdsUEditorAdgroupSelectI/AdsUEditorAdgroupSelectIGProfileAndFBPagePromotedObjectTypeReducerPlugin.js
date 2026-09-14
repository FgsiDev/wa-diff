__d(
  "AdsUEditorAdgroupSelectIGProfileAndFBPagePromotedObjectTypeReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPICampaignRecordUtils",
    "AdsAssetFeedUtils",
    "AdsEditorPostEditMode",
    "AdsIGIDv2SemanticFields",
    "AdsInstagramUsernameStore",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPageStore",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupCachedUtils",
    "AdsUEditorAdgroupClearDataMutatorsUtils",
    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
    "AdsUEditorAdgroupProfileVisitExtensionTypesMutator",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUEditorCampaignSelectIGProfileAndFBPagePromotedObjectTypeDataActionFlux",
    "AdsUEditorSetPostEditModeMutators",
    "AdsUEditorUnifiedProfileVisitsAdgroupMutators",
    "AdsWhatsAppUtils",
    "ClickToMessageCTWAFeatureGating",
    "adsStoreToSelector",
    "adsUEditorAccountSelector",
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
            cachedStoreState: r("adsStoreToSelector")(
              r("AdsUEditorAdgroupCachedUIStore"),
            ),
            getPage: r("AdsPageStore").getSelector,
            getInstagramAccount: r("AdsInstagramUsernameStore")
              .getForAdgroupSelector,
            defaultInstagramID: o("AdsUEditorCampaignInstagramSelectors")
              .eligibleInstagramAccountIDWithBusiness,
            defaultInstagramUserID: o("AdsUEditorCampaignInstagramSelectors")
              .eligibleInstagramAccountIDV2WithBusiness,
          },
          function (e, t, n) {
            var a = n.account,
              i = n.cachedStoreState,
              l = n.defaultInstagramID,
              s = n.defaultInstagramUserID,
              u = n.getInstagramAccount,
              c = n.getPage,
              d = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var m,
                  p = r("nullthrows")(d.get(n)),
                  _ = p.campaign,
                  f = p.campaignGroup,
                  g = p.specPlugin,
                  h = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                    f.objective,
                    _,
                  ),
                  y = o("AdsAPICampaignRecordUtils").getDestinationType(_),
                  C = o("AdsODAXUtils").maybeTranslateObjective(
                    f.objective,
                    h,
                    _.optimization_goal,
                  ),
                  b =
                    (m = e.creative) == null ||
                    (m = m.object_story_spec) == null
                      ? void 0
                      : m.page_id,
                  v = l,
                  S = s,
                  R = o("AdsUEditorAdgroupCachedUtils").getCreative(
                    i,
                    n,
                    r("AdsEditorPostEditMode").INLINE,
                  ),
                  L = o("AdsUEditorAdgroupCachedUtils").getMetadata(i, n),
                  E = o(
                    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                  ).createExistingPostRetentionOriginalData(e, g),
                  k =
                    t.isCopyPageLikes === !0 ||
                    o(
                      "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                    ).shouldRetainCreativeData(_.campaign_creation_source)
                      ? e
                      : null;
                return o("AdsMutators").chain(
                  function (e) {
                    return o(
                      "AdsIGIDv2SemanticFields",
                    ).IGIDV2SemanticFields.instagramUserID.set(g, e, v, S);
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupClearDataMutatorsUtils",
                    ).clearData({
                      adgroup: e,
                      adgroupID: n,
                      cachedStoreState: i,
                      effectiveObjective: C,
                      specPlugin: g,
                    });
                  },
                  function (e) {
                    return o(
                      "AdsUEditorSetPostEditModeMutators",
                    ).setToUsingInlineCreation({
                      adgroup: e,
                      campaign: _,
                      campaignGroup: f,
                      cachedCreative: R,
                      cachedMetadata: L,
                      objective: C,
                      specPathPlugin: g,
                    });
                  },
                  function (e) {
                    var t,
                      a = new Map();
                    b != null && a.set(b, c(b));
                    var i = v != null ? u(v, n) : null,
                      l = o(
                        "AdsUEditorUnifiedProfileVisitsAdgroupMutators",
                      ).setUnifiedProfileVisitsCTAFieldsForDestination({
                        adgroup: e,
                        campaignGroupPromotedPageID:
                          (t = f.promoted_object) == null ? void 0 : t.page_id,
                        destination: y,
                        instagramAccount: i,
                        objective: C,
                        pageID: b,
                        pages: a,
                        postEditMode: r("AdsEditorPostEditMode").INLINE,
                        specPlugin: g,
                      });
                    if (y === r("AdCampaignDestination").INSTAGRAM_PROFILE) {
                      var s,
                        d,
                        m,
                        p =
                          (s =
                            (d = _.promoted_object) == null
                              ? void 0
                              : d.page_id) != null
                            ? s
                            : b,
                        h = p != null ? c(p) : null,
                        S = o("AdsWhatsAppUtils").hasSMBNumberConnected(h),
                        R =
                          (m =
                            h == null
                              ? void 0
                              : h.is_ptwa_defaulting_intent_am) != null
                            ? m
                            : !1;
                      o("ClickToMessageCTWAFeatureGating").enablePTWADefaulting(
                        r("AdsPromotedObjectTypes").INSTAGRAM_PROFILE,
                        S,
                        f.objective,
                        n,
                        e.account_id,
                        b,
                        R,
                        h == null ? void 0 : h.ptwa_defaulting_cas_segment_am,
                      ) &&
                        (l = o(
                          "AdsUEditorAdgroupProfileVisitExtensionTypesMutator",
                        ).setProfileVisitExtensionType(
                          l,
                          "WHATSAPP_MESSAGE",
                          g,
                        ));
                    }
                    return l;
                  },
                  function (e) {
                    return o(
                      "AdsAssetFeedUtils",
                    ).hasPlacementCustomizationFromRecord(e)
                      ? o(
                          "AdsUEditorAdgroupAssetFeedMutators",
                        ).removeMissingAdlabelsFromCustomizationRules(e)
                      : e;
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                    ).retainExistingPost({
                      account: a,
                      adgroup: e,
                      campaign: _,
                      campaignGroup: f,
                      specPathPlugin: g,
                      getPage: c,
                      originalData: E,
                    });
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                    ).retainCreativeData({
                      adgroup: e,
                      oldAdgroup: k,
                      retain_image: t.isCopyPageLikes === !0,
                    });
                  },
                )(e);
              },
            );
          },
          o(
            "AdsUEditorCampaignSelectIGProfileAndFBPagePromotedObjectTypeDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
