__d(
  "AdsUEditorAdgroupSetCampaignAppReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupConnectedSourcesMutators",
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupUtils",
    "AdsAppUrlUtils",
    "AdsAppUtils",
    "AdsAssetFeedUtils",
    "AdsAutomaticFlowUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsOmnichannelTrackingSpecsUtils",
    "AdsPostClickUtils",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupCachedUtils",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetAppDeepLinkSelectorReducerUtils",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignPromotedObjectSetAppDataActionFlux",
    "AdsUEditorCampaignSetAppActionFlux",
    "AdsUEditorWebsiteMutators",
    "CreativeAssetGroupsFlowSafeUtils",
    "adsAssetFeedHasCallToActionValue",
    "adsCallToActionGetDefaultCallToActionType",
    "adsStoreToSelector",
    "gkx",
    "immutable",
    "isEmpty",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t) {
      return t === !0
        ? o("AdsAdgroupConnectedSourcesMutators").clearStaleAppInfoMutator(e)
        : e;
    }
    function c(e, t, n, a, i, l, s, u) {
      var c =
        r("AdsAppUtils").hasUnifiedAppStoreForTrafficOrSalesObjective(t, n) &&
        a != null &&
        a.size !== 0;
      if (!c || a == null) return e;
      var d = o(
        "AdsUEditorCallToActionMutators",
      ).setCallToActionValueObjectStoreURLs(e, u, Array.from(a));
      return (
        (d = i
          ? o("AdsUEditorWebsiteMutators").setWebsiteURL({
              adgroup: d,
              campaignGroupPromotedPageID: l,
              objective: s,
              promotedObjectType: n,
              specPlugin: u,
              websiteURL: a.first() || "",
            })
          : d),
        r("AdsAppUtils").hasUnifiedAppStoreForSalesObjective(t, n) &&
          (d = o(
            "AdsUEditorAdgroupChildAttachmentsMutators",
          ).mutateChildAttachments(u, d, function (e) {
            return e.setIn(["link"], a.first() || "");
          })),
        d
      );
    }
    function d(e, t, n) {
      var o;
      if (e != null) return e;
      if (t.collaborative_ads_partner_info == null || !r("justknobx")._("5665"))
        return null;
      var a =
        n == null ||
        (o = n.promoted_object) == null ||
        (o = o.omnichannel_object) == null ||
        (o = o.app) == null ||
        (o = o.get(0)) == null
          ? void 0
          : o.get("application_id");
      return a != null ? String(a) : null;
    }
    var m = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            campaignGroups: (s = o(
              "AdsUEditorAdgroupSelectors",
            )).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
            ),
            promotedObjectTypes: s.adObjectsList.mapTransform(
              o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType,
            ),
            plugins: s.adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
            cachedStoreState: r("adsStoreToSelector")(
              r("AdsUEditorAdgroupCachedUIStore"),
            ),
            campaigns: s.adObjectsList.mapTransform(function (e) {
              return e.campaign;
            }),
          },
          function (t, n, a) {
            var i = a.cachedStoreState,
              l = a.campaignGroups,
              s = a.campaigns,
              m = a.plugins,
              _ = a.promotedObjectTypes;
            return o("AdsMutators").mutateEach(
              t,
              n.adgroupIDs,
              function (t, a) {
                var f,
                  g,
                  h,
                  y,
                  C = r("nullthrows")(l.get(a)),
                  b = s.get(a),
                  v = r("nullthrows")(m.get(a)),
                  S = r("nullthrows")(_.get(a)),
                  R = C.objective,
                  L = o("AdsODAXUtils").maybeTranslateObjective(
                    R,
                    S,
                    b == null ? void 0 : b.optimization_goal,
                  ),
                  E = (f = C.promoted_object) == null ? void 0 : f.page_id,
                  k =
                    n.hasPromotedObjectTypeChanged &&
                    o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(t)
                      ? o(
                          "AdsUEditorAdgroupAssetFeedMutators",
                        ).convertFromAssetFeedSpec(
                          o("AdsAssetFeedUtils").getTargetObjectType(t),
                          t,
                          L,
                        )
                      : t;
                if (!o("AdsAPIAdgroupRecordUtils").isCollectionsAd(t, v)) {
                  var I,
                    T,
                    D = o(
                      "AdsAssetFeedUtils",
                    ).shouldAddObjectStoreURLForTrafficAndPromotedApp(R, S),
                    x =
                      (I = k.creative) == null ||
                      (I = I.object_story_spec) == null ||
                      (I = I.link_data) == null
                        ? void 0
                        : I.link,
                    $ =
                      (e || (e = r("isEmpty")))(x) ||
                      r("AdsAppUrlUtils").isAppStoreURL(x);
                  ((!D || $) &&
                    (k = o("AdsUEditorWebsiteMutators").setWebsiteURL({
                      adgroup: k,
                      campaignGroupPromotedPageID: E,
                      objective: L,
                      promotedObjectType: S,
                      specPlugin: v,
                      websiteURL: n.url || "",
                    })),
                    D &&
                      (k =
                        n.url != null
                          ? o(
                              "AdsUEditorCallToActionMutators",
                            ).setCallToActionValueObjectStoreURLs(k, v, [n.url])
                          : k),
                    (k = c(
                      k,
                      R,
                      S,
                      b == null || (T = b.promoted_object) == null
                        ? void 0
                        : T.object_store_urls,
                      $,
                      E,
                      L,
                      v,
                    )));
                }
                if (b != null) {
                  var P,
                    N =
                      b == null || (P = b.promoted_object) == null
                        ? void 0
                        : P.application_id;
                  N != null &&
                    o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(
                      t,
                    ) &&
                    r("adsAssetFeedHasCallToActionValue")(
                      t,
                      0,
                      "application",
                    ) &&
                    (k = o(
                      "AdsUEditorCallToActionMutators",
                    ).setCallToActionValueField(k, v, "application", N));
                }
                k = u(k, n.hasAppChanged);
                var M = r("adsCallToActionGetDefaultCallToActionType")(R, S),
                  w = o(
                    "AdsUEditorAdgroupCachedUtils",
                  ).getCachedCallToActionLink(i, a, M);
                if (
                  ((k =
                    n.hasPromotedObjectTypeChanged &&
                    !o("AdsAPIAdgroupRecordUtils").isCollectionsAd(t, v)
                      ? o("AdsUEditorCallToActionMutators").setCallToAction({
                          callToActionType: M,
                          cachedCallToActionLink: w,
                          adgroup: k,
                          campaignGroupPromotedPageID: E,
                          objective: L,
                          promotedObjectType: S,
                          specPlugin: v,
                        })
                      : k),
                  o(
                    "CreativeAssetGroupsFlowSafeUtils",
                  ).isFormatCreativeAssetGroupsFromAdgroupRecord(k) && b)
                ) {
                  var A;
                  k = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).setCagCallToActionValueByValueTypeForAllGroups(
                    k,
                    (A = b.promoted_object) == null
                      ? void 0
                      : A.object_store_url,
                    "link",
                    v,
                  );
                }
                var F = o(
                  "AdsOmnichannelTrackingSpecsUtils",
                ).updateAppTrackingSpecs(
                  (g = t.tracking_specs) == null ? void 0 : g.toJS(),
                  d(n.appID, C, b),
                );
                if (
                  ((k = r("AdsAdgroupRecordAccessors").tracking_specs.set(
                    r("immutable").fromJS(F),
                    k,
                  )),
                  n.productSetID != null &&
                    ((h = n.app) == null ? void 0 : h.app_id) != null)
                ) {
                  var O;
                  k = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.template_url_spec.config.app_id.set(
                    String((O = n.app) == null ? void 0 : O.app_id),
                  )(t);
                }
                if (
                  o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t) &&
                  r("gkx")("5824")
                ) {
                  var B;
                  ((k = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.call_to_action.value.link.set(
                    (B = n.app) == null ? void 0 : B.object_store_url,
                  )(t)),
                    o("AdsAutomaticFlowUtils").isFBExistingPostAd(t) &&
                      (k = p(k)));
                }
                var W =
                  o("AdsAdgroupUtils").hasAppLink(t) ||
                  o("AdsAdgroupUtils").hasAppID(t) ||
                  o("AdsAdgroupUtils").hasAppProductPageID(t);
                if (
                  o("AdsPostClickUtils").isBAUSalesDynamicAd(t, C) &&
                  ((y = n.app) == null ? void 0 : y.app_id) != null &&
                  W &&
                  o("AdsPostClickUtils").isUnifiedCardForDeeplinksApp()
                ) {
                  var q;
                  k = o(
                    "AdsUEditorAdgroupSetAppDeepLinkSelectorReducerUtils",
                  ).setAppDeepLinkSelectorReducerPluginMutator(
                    t,
                    (q = n.app) == null ? void 0 : q.app_id,
                  );
                }
                return k;
              },
            );
          },
          [
            o("AdsUEditorCampaignSetAppActionFlux").actionType,
            o("AdsUEditorCampaignPromotedObjectSetAppDataActionFlux")
              .actionType,
          ],
        ),
      },
      p = function (t) {
        var e,
          n = t,
          o =
            (e = r("AdsAdgroupRecordAccessors").creative.object_story_id.get(
              n,
            )) == null
              ? void 0
              : e.split("_")[0];
        return (
          (n = r("AdsAdgroupRecordAccessors").creative.object_story_id.delete(
            n,
          )),
          (n = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(
            n,
          )),
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.delete(n)),
          (n = r("AdsAdgroupRecordAccessors").creative.media_type.delete(n)),
          (n = r("AdsAdgroupRecordAccessors").creative.body.delete(n)),
          (n = r("AdsAdgroupRecordAccessors").creative.object_type.set("SHARE")(
            n,
          )),
          (n = r("AdsAdgroupRecordAccessors").creative.object_id.set(o)(n)),
          n
        );
      },
      _ = m;
    l.default = _;
  },
  98,
);
