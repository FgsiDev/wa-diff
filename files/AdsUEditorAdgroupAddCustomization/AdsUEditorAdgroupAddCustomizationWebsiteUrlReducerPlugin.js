__d(
  "AdsUEditorAdgroupAddCustomizationWebsiteUrlReducerPlugin",
  [
    "AdsAdgroupCallToActionMutatorsAdapter",
    "AdsAdgroupConnectedSourcesMutators",
    "AdsCallToActionTypesUtils",
    "AdsCreativeSiteLinksAPICallUtils",
    "AdsEditingAdgroupEditorContext",
    "AdsImageInfoStore",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMutators",
    "AdsPCAConsolidationUtils",
    "AdsSAInDAUtils",
    "AdsSFMediaPickerDataProvider",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAddCustomizationWebsiteUrlActionFlux",
    "AdsUEditorAdgroupOnsiteDestinationsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupUrlMutators",
    "AdsUEditorWebsiteAndAppMutators",
    "FBLogger",
    "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
    "adsCampaignPromotedObjectSelector",
    "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupDynamicFlexibleIdentityShopSelectorExtraDataSelector",
    "adsUEditorCreativeSiteLinksNoticeDataSelector",
    "adsUEditorShouldCallSDDAndUpdateShopDestinationSelector",
    "gkx",
    "isInstagramARURL",
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
            getImage: r("AdsImageInfoStore").getFullSizeSelector,
            mediaPickerData: r("AdsSFMediaPickerDataProvider").toFluxSelector(),
            targetingCountries: o(
              "adsUEditorAdgroupDynamicFlexibleIdentityShopSelectorExtraDataSelector",
            ).targetingCountrySelector,
            shouldCallSDDAndUpdateShopDestination: r(
              "adsUEditorShouldCallSDDAndUpdateShopDestinationSelector",
            ),
            onsiteDestinations: r(
              "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
            ).toFluxSelector(),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.getImage,
              l = n.mediaPickerData,
              s = n.onsiteDestinations,
              u = n.parentData,
              c = n.shouldCallSDDAndUpdateShopDestination,
              d = n.targetingCountries;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = u.get(e.id),
                m = n.campaign,
                p = n.campaignGroup,
                _ = n.specPlugin;
              return (
                _ ||
                  r("FBLogger")("am_feature_pac").mustfix(
                    "[PAC] ParentData not be null when AdsUEditorAdgroupAddCustomizationWebsiteUrlReducerPlugin",
                  ),
                o("AdsMutators").chain(
                  function (e) {
                    var n,
                      i = r(
                        "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
                      )(e, _, a),
                      l = { website_url: t.websiteUrl };
                    return (
                      o("AdsPCAConsolidationUtils").isPCAVariation(m) &&
                        (m == null || (n = m.promoted_object) == null
                          ? void 0
                          : n.variation) === "PRODUCT_SET_AND_OMNICHANNEL" &&
                        o(
                          "AdsSAInDAUtils",
                        ).isSAInDAEnabledUsingCampaignAndAdgroup(m, e) &&
                        o("AdsPCAConsolidationUtils")
                          .getEligibleOptimizationGoalsForOmnichannel()
                          .includes(m.optimization_goal) &&
                        (i = o(
                          "AdsUEditorWebsiteAndAppMutators",
                        ).setOmnichannelLinkSpecWebsiteURL(i, t.websiteUrl)),
                      o(
                        "AdsUEditorAdgroupUrlMutators",
                      ).addPlacementCustomizationUrl(
                        i,
                        _,
                        t.placements,
                        l,
                        t.isDefaultPlacementAsset,
                        t.isWebandAppPACUsage,
                      )
                    );
                  },
                  function (e) {
                    var n = e;
                    return (
                      r("isInstagramARURL")(t.websiteUrl)
                        ? (n = o(
                            "AdsAdgroupCallToActionMutatorsAdapter",
                          ).setCallToAction("TRY_IN_CAMERA", n))
                        : o("AdsCallToActionTypesUtils").getCTATypeFromAdgroup(
                            e,
                          ) === "TRY_IN_CAMERA" &&
                          (n = o(
                            "AdsAdgroupCallToActionMutatorsAdapter",
                          ).setCallToAction(
                            r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
                            n,
                          )),
                      n
                    );
                  },
                  function (e) {
                    var n,
                      i =
                        (n = e.creative) == null ||
                        (n = n.creative_sourcing_spec) == null
                          ? void 0
                          : n.source_url,
                      s = o(
                        "AdsMetadataConnectedSourcesUtils",
                      ).isEligibleForSiteExtensionsByCampaignAndAdgroup(
                        m,
                        p,
                        e,
                      );
                    if (
                      (i == null ||
                        i === "" ||
                        o(
                          "AdsCreativeSiteLinksAPICallUtils",
                        ).shouldFixInvalidSourceUrl(
                          e,
                          i,
                          e.id,
                          t.websiteUrl,
                          "pac",
                        )) &&
                      s
                    ) {
                      var u,
                        c,
                        _,
                        f = o(
                          "AdsAdgroupConnectedSourcesMutators",
                        ).setSourceUrlMutator(e, t.websiteUrl),
                        g = r("adsUEditorCreativeSiteLinksNoticeDataSelector")(
                          r("AdsEditingAdgroupEditorContext"),
                        );
                      if (
                        ((u = e.creative) == null ||
                        (u = u.creative_sourcing_spec) == null
                          ? void 0
                          : u.site_links_spec) == null ||
                        (((c = e.creative) == null ||
                        (c = c.creative_sourcing_spec) == null
                          ? void 0
                          : c.site_links_spec.size) === 0 &&
                          ((_ = g.getValue()) == null
                            ? void 0
                            : _.defaultOnType) == null)
                      ) {
                        var h,
                          y = r("adsCampaignPromotedObjectSelector")(m.id),
                          C =
                            (h = e.creative) == null ||
                            (h = h.object_story_spec) == null
                              ? void 0
                              : h.page_id;
                        o("AdsCreativeSiteLinksAPICallUtils")
                          .loadSiteLinksWithMutation(
                            m,
                            t.websiteUrl,
                            a.account_id,
                            e.id,
                            y,
                            "AdsUEditorAdgroupAddCustomizationWebsiteUrlReducerPlugin",
                            d,
                            C,
                            o(
                              "AdsMetadataConnectedSourcesUtils",
                            ).getMediaPickerImageHash(l),
                          )
                          .then(function () {})
                          .catch(function () {});
                      }
                      return f;
                    }
                    return e;
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupOnsiteDestinationsMutators",
                    ).updateOnsiteDestinationsForWebsiteURLUpdate(
                      e,
                      m,
                      _,
                      c,
                      a.account_id,
                      i,
                      s,
                      t.storefronts,
                      t.websiteUrl,
                      t.adgroupIDs,
                      "website_and_shops",
                    );
                  },
                )(e)
              );
            });
          },
          o("AdsUEditorAdgroupAddCustomizationWebsiteUrlActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
