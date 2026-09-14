__d(
  "AdsAdgroupWebsiteAdsCTALinkDefaultingReducerPlugin",
  [
    "AdsAPIAdgroupCallToActionValueRecord",
    "AdsAPIAdgroupPaths",
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupConnectedSourcesMutators",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupWebsiteAdsCTALinkDefaultingActionFlux",
    "AdsAdgroupWebsiteLinkPostTypeMutators",
    "AdsAssetFeedUtils",
    "AdsEditingAdgroupEditorContext",
    "AdsFBStorySelectionProvider",
    "AdsFBStorySelectionReader",
    "AdsMutators",
    "AdsObjectTypeUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "adsCampaignPromotedObjectSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupDynamicFlexibleIdentityShopSelectorExtraDataSelector",
    "adsUEditorCreativeSiteLinksNoticeDataSelector",
    "gkx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE";
    }
    var s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            account: r("adsUEditorAccountSelector"),
            storySelections: r("AdsFBStorySelectionProvider").toFluxSelector(),
            targetingCountries: o(
              "adsUEditorAdgroupDynamicFlexibleIdentityShopSelectorExtraDataSelector",
            ).targetingCountrySelector,
          },
          function (t, n, a) {
            var i = a.account,
              l = a.parentData,
              s = a.storySelections,
              u = a.targetingCountries;
            return o("AdsMutators").mutateEach(
              t,
              n.adgroupIDs,
              function (t, a) {
                var c, d, m, p;
                if (
                  o(
                    "AdsFBStorySelectionReader",
                  ).getFBStorySelectionFromProviderData(
                    s,
                    a,
                    (c = t.creative) == null ? void 0 : c.object_story_spec,
                  ) != null
                )
                  return t;
                var _ = r("nullthrows")(l.get(a)),
                  f = _.campaign,
                  g = _.specPlugin,
                  h = o(
                    "AdsAdgroupWebsiteLinkPostTypeMutators",
                  ).convertToHasWebsiteLinkFormat(t, g),
                  y = o("AdsAssetFeedUtils").isPACAdgroupFromRecord(t),
                  C = o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(t),
                  b = o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(t),
                  v = o(
                    "AdsAPIAdgroupRecordUtils",
                  ).isFlexibleFormatAdOrCreativeAssetGroup(t),
                  S = o("AdsObjectTypeUtils").isTemplateCreative(t);
                if (y || C || b || v || S) return t;
                var R = (d = h.creative) == null ? void 0 : d.object_story_spec,
                  L = R == null ? void 0 : R.video_data;
                if (L) {
                  var E =
                    r("AdsAdgroupSemanticFields").callToActionValue.get(g, h) ||
                    o(
                      "AdsAPIAdgroupCallToActionValueRecord",
                    ).createEmptyCallToActionValueFromAdgroup(h);
                  E = E.set("link", n.weblink);
                  try {
                    h = r("AdsAdgroupSemanticFields").callToActionValue.set(
                      g,
                      h,
                      E,
                    );
                  } catch (e) {
                    return t;
                  }
                  h = r("AdsAdgroupSemanticFields").callToActionType.set(
                    g,
                    h,
                    e(),
                  );
                } else {
                  if (!R) return t;
                  ((h = h.setIn(
                    r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                      .LINK,
                    n.weblink,
                  )),
                    (h = r("AdsAdgroupSemanticFields").callToActionType.set(
                      g,
                      h,
                      e(),
                    )));
                }
                return (
                  (h = o(
                    "AdsAdgroupConnectedSourcesMutators",
                  ).syncSourceUrlIfUnsetMutator(h, n.weblink)),
                  o(
                    "AdsAdgroupConnectedSourcesMutators",
                  ).triggerSiteLinksIfEligible(
                    h,
                    n.weblink,
                    f,
                    i.account_id,
                    r("adsCampaignPromotedObjectSelector")(f.id),
                    u,
                    (m = h.creative) == null ||
                      (m = m.object_story_spec) == null
                      ? void 0
                      : m.page_id,
                    ((p = r("adsUEditorCreativeSiteLinksNoticeDataSelector")(
                      r("AdsEditingAdgroupEditorContext"),
                    ).getValue()) == null
                      ? void 0
                      : p.defaultOnType) != null,
                    "AdsAdgroupWebsiteAdsCTALinkDefaultingReducerPlugin",
                  ),
                  h
                );
              },
            );
          },
          r("AdsAdgroupWebsiteAdsCTALinkDefaultingActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
