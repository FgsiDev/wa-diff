__d(
  "AdsMetadataConnectedSourcesSourceUrlReducerPlugin",
  [
    "AdsAccountSettingsIdProvider",
    "AdsAdgroupConnectedSourcesMutators",
    "AdsConnectedSourcesEPACatalogDefaultOn",
    "AdsCreativeSiteLinksAPICallUtils",
    "AdsEPAWebsiteUrlPEDefaultOn",
    "AdsEditingAdgroupEditorContext",
    "AdsFlexibleFormatAdexUtils",
    "AdsMetadataConnectedSourcesSetSourceUrlActionFlux",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMutators",
    "AdsSFMediaPickerDataProvider",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetFeaturedOfferingSpecMutator",
    "AdsUEditorAdgroupSetWebsiteSummarySpecMutator",
    "AdsUserSettingsDataManager",
    "ads-lib-urllib",
    "adsCampaignPromotedObjectSelector",
    "adsUEditorAdgroupDynamicFlexibleIdentityShopSelectorExtraDataSelector",
    "adsUEditorAdgroupWebsiteSummaryExtensionEligibilitySelector",
    "adsUEditorCreativeSiteLinksNoticeDataSelector",
    "adsUEditorFeaturedOfferingEligibilitySelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            userSettingsID: r("AdsAccountSettingsIdProvider").toFluxSelector(),
            targetingCountries: o(
              "adsUEditorAdgroupDynamicFlexibleIdentityShopSelectorExtraDataSelector",
            ).targetingCountrySelector,
            mediaPickerData: r("AdsSFMediaPickerDataProvider").toFluxSelector(),
            isWebsiteSummaryExtensionEligible: o(
              "adsUEditorAdgroupWebsiteSummaryExtensionEligibilitySelector",
            ).adsUEditorAdgroupWebsiteSummaryExtensionEligibilitySelector,
            isFeaturedOfferingEligible: o(
              "adsUEditorFeaturedOfferingEligibilitySelector",
            ).adsUEditorFeaturedOfferingEligibilitySelector,
          },
          function (e, t, n) {
            var a,
              i = n.isFeaturedOfferingEligible,
              l = n.isWebsiteSummaryExtensionEligible,
              s = n.mediaPickerData,
              u = n.parentData,
              c = n.targetingCountries,
              d = n.userSettingsID,
              m =
                (a = r("ads-lib-urllib").cleanupUrl(t.sourceUrl)) != null
                  ? a
                  : "";
            return (
              d != null &&
                t.isRemovingPrefilledUrl === !0 &&
                r("AdsUserSettingsDataManager").setUrlPrefillRemovalTimestamp(
                  d,
                  Date.now(),
                ),
              o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e, n) {
                var a, d, p, _;
                if (t.catalogReDefaultOnly === !0) {
                  var f = o(
                    "AdsEPAWebsiteUrlPEDefaultOn",
                  ).resolveEPAPECatalogMatchRung(e, m, !0);
                  return f == null || !f.isEnabled
                    ? e
                    : o(
                        "AdsConnectedSourcesEPACatalogDefaultOn",
                      ).applyEPACatalogDefaultOn(e, f.urlForPE);
                }
                var g = r("nullthrows")(u.get(n)),
                  h = g.campaign,
                  y = g.campaignGroup,
                  C = g.specPlugin,
                  b = r("adsCampaignPromotedObjectSelector")(h.id),
                  v = o(
                    "AdsAdgroupConnectedSourcesMutators",
                  ).setSourceUrlAndDestinationUrlMutator(e, h, y, C, m),
                  S = o(
                    "AdsConnectedSourcesEPACatalogDefaultOn",
                  ).hasManualCatalogOptOut(v)
                    ? null
                    : o(
                        "AdsEPAWebsiteUrlPEDefaultOn",
                      ).resolveEPAPECatalogMatchRung(v, m, !1);
                if (S != null && S.isEnabled) {
                  var R,
                    L,
                    E = S.urlForPE,
                    k =
                      (R =
                        (L = e.creative) == null ||
                        (L = L.creative_sourcing_spec) == null
                          ? void 0
                          : L.source_url) != null
                        ? R
                        : "";
                  k !== "" && k !== E
                    ? (v = o(
                        "AdsConnectedSourcesEPACatalogDefaultOn",
                      ).applyEPACatalogReDefaultOn(v, E))
                    : (v = o(
                        "AdsConnectedSourcesEPACatalogDefaultOn",
                      ).applyEPACatalogDefaultOn(v, E));
                }
                if (l && t.accountID != null) {
                  var I,
                    T,
                    D =
                      (I =
                        (T = e.creative) == null ||
                        (T = T.creative_sourcing_spec) == null
                          ? void 0
                          : T.source_url) != null
                        ? I
                        : "";
                  v = o(
                    "AdsUEditorAdgroupSetWebsiteSummarySpecMutator",
                  ).setWebsiteSummaryDefaultingAdgroupField(
                    v,
                    t.accountID,
                    m,
                    m !== D,
                  );
                }
                i &&
                  o(
                    "AdsFlexibleFormatAdexUtils",
                  ).passGKForCombinedFeaturedOfferings(!0) &&
                  !o("AdsMetadataConnectedSourcesUtils").isSiteLinksOptedIn(
                    v,
                  ) &&
                  (v = o(
                    "AdsUEditorAdgroupSetFeaturedOfferingSpecMutator",
                  ).setFeaturedOfferingDefaultAdgroupField(v, m));
                var x =
                    (a = e.creative) == null ||
                    (a = a.object_story_spec) == null
                      ? void 0
                      : a.page_id,
                  $ = r("adsUEditorCreativeSiteLinksNoticeDataSelector")(
                    r("AdsEditingAdgroupEditorContext"),
                  );
                return (
                  (((d = e.creative) == null ||
                  (d = d.creative_sourcing_spec) == null
                    ? void 0
                    : d.site_links_spec) == null ||
                    ((p = e.creative) == null ||
                    (p = p.creative_sourcing_spec) == null
                      ? void 0
                      : p.site_links_spec.size) === 0) &&
                    ((_ = $.getValue()) == null ? void 0 : _.defaultOnType) ==
                      null &&
                    t.accountID != null &&
                    o("AdsCreativeSiteLinksAPICallUtils")
                      .loadSiteLinksWithMutation(
                        h,
                        m,
                        t.accountID,
                        e.id,
                        b,
                        "AdsMetadataConnectedSourcesSourceUrlReducerPlugin",
                        c,
                        x,
                        o(
                          "AdsMetadataConnectedSourcesUtils",
                        ).getMediaPickerImageHash(s),
                      )
                      .then(function () {})
                      .catch(function () {}),
                  v
                );
              })
            );
          },
          [r("AdsMetadataConnectedSourcesSetSourceUrlActionFlux").actionType],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
