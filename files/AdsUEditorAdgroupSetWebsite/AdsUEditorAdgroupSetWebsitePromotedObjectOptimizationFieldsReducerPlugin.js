__d(
  "AdsUEditorAdgroupSetWebsitePromotedObjectOptimizationFieldsReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupTrackingSpecUpdateUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupEmailCaptureMutators",
    "AdsUEditorAdgroupPromoAdMutatorUtils",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
    "AdsUEditorPromotedObjectSetWebsiteOptimizationFieldsDataActionFlux",
    "DestinationOptimizationUtils.react",
    "ProductBrowsingAdsUtils",
    "PromoAdsEmailCaptureUnificationGatingUtils",
    "ShopsAdsOffsiteCheckoutAdsDefaultingUtils",
    "ShopsAdsOffsiteCheckoutAdsUtils",
    "adsPCMLogConversionDomainMutation",
    "adsSignalSourceContainersSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupProductCatalogIDSelector",
    "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
    "adsUEditorAdgroupSetPageReducerExtraDataSelector",
    "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
    "adsUEditorPreloadedIdentityToStorefrontSelector",
    "userSettingsSelector",
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
          accountContainersMapLO: o(
            "adsSignalSourceContainersSelector",
          ).createSignalContainersSelector("website"),
          identitiesToStorefrontLO: o(
            "adsUEditorPreloadedIdentityToStorefrontSelector",
          ).preloadedIdentityToStorefrontSelector,
          promoAdDefaultOptinStatus: r(
            "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
          ),
          adgroupProductCatalogIDLoadObject: r(
            "adsUEditorAdgroupProductCatalogIDSelector",
          ),
          extraData: r("adsUEditorAdgroupSetPageReducerExtraDataSelector"),
          userSettings: r("userSettingsSelector"),
        },
        function (e, t, n) {
          var a = n.account,
            i = n.accountContainersMapLO,
            l = n.adgroupProductCatalogIDLoadObject,
            u = n.extraData,
            c = n.identitiesToStorefrontLO,
            d = n.parentData,
            m = n.promoAdDefaultOptinStatus,
            p = n.userSettings;
          return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
            var n,
              _,
              f = e,
              g = t.availableDomains.filter(function (e) {
                return !e.isInCooldown;
              }),
              h = d.get(e.id);
            if (
              (g.length === 1
                ? (r("adsPCMLogConversionDomainMutation")({
                    adgroupID: e.id,
                    oldDomain: e.conversion_domain,
                    newDomain: g[0].domain,
                    source: "l2",
                  }),
                  (f = r("AdsAdgroupRecordAccessors").conversion_domain.set(
                    g[0].domain,
                    f,
                  )))
                : (r("adsPCMLogConversionDomainMutation")({
                    adgroupID: e.id,
                    oldDomain: e.conversion_domain,
                    newDomain: null,
                    source: "l2",
                  }),
                  (f = r("AdsAdgroupRecordAccessors").conversion_domain.delete(
                    f,
                  ))),
              t.websiteOptimizationObject.pixel_id != null &&
                t.websiteOptimizationObject.product_set_id != null)
            )
              return f;
            var y = i
                .map(function (e) {
                  return Array.from(e.values());
                })
                .hasValueWithoutError()
                ? i
                    .map(function (e) {
                      return Array.from(e.values());
                    })
                    .getValueEnforcing()
                : [],
              C = y.find(function (e) {
                var n, r;
                return (
                  ((n = e.cluster) == null ? void 0 : n.dataSetID) ===
                    t.websiteOptimizationObject.pixel_id ||
                  ((r = e.cluster) == null ? void 0 : r.pixelID) ===
                    t.websiteOptimizationObject.pixel_id ||
                  e.id === t.websiteOptimizationObject.pixel_id
                );
              });
            ((f = o(
              "AdsAdgroupTrackingSpecUpdateUtils",
            ).mergeWithNewPixelTrackingSpec(
              s(
                t.websiteOptimizationObject,
                (n =
                  C == null || (_ = C.cluster) == null ? void 0 : _.pixelID) !=
                  null
                  ? n
                  : null,
              ),
              f,
            )),
              h != null &&
                (o(
                  "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
                ).isPromoAdOptedInWithProductCatalogForAdgroup(f)
                  ? (f = o(
                      "AdsUEditorAdgroupPromoAdMutators",
                    ).refreshPromotionalMetadataOnCatalogChange(
                      {
                        adgroup: f,
                        campaign: h.campaign,
                        campaignGroup: h.campaignGroup,
                      },
                      a,
                      h.specPlugin,
                      !1,
                    ))
                  : m != null &&
                    (f = o(
                      "AdsUEditorAdgroupPromoAdMutators",
                    ).updatePromoAdForDefaultOptIn(
                      {
                        adgroup: f,
                        campaign: h.campaign,
                        campaignGroup: h.campaignGroup,
                      },
                      a,
                      h.specPlugin,
                      m,
                      o("AdsUEditorAdgroupPromoAdMutatorUtils")
                        .PromoAdDefaultOptInCallSite.SET_WEBSITE_OPTIMIZATION,
                    )),
                o(
                  "PromoAdsEmailCaptureUnificationGatingUtils",
                ).isEmailCaptureOfferUnificationEnabled() &&
                o(
                  "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
                ).isEmailCaptureOptedInForAdgroup(
                  f,
                  h.campaign,
                  h.campaignGroup,
                )
                  ? (f = o(
                      "AdsUEditorAdgroupEmailCaptureMutators",
                    ).refreshEmailCaptureMetadataOnCatalogChange(
                      {
                        adgroup: f,
                        campaign: h.campaign,
                        campaignGroup: h.campaignGroup,
                      },
                      a,
                      !1,
                    ))
                  : m != null &&
                    (f = o(
                      "AdsUEditorAdgroupEmailCaptureMutators",
                    ).updateEmailCaptureForDefaultOptIn(
                      {
                        adgroup: f,
                        campaign: h.campaign,
                        campaignGroup: h.campaignGroup,
                      },
                      a,
                      m,
                      o("AdsUEditorAdgroupPromoAdMutatorUtils")
                        .PromoAdDefaultOptInCallSite.SET_WEBSITE_OPTIMIZATION,
                    ))));
            var b =
                t.websiteOptimizationObject.custom_event_type === "PURCHASE",
              v = h == null ? void 0 : h.campaignGroup,
              S = v == null ? void 0 : v.objective;
            if (!b)
              f = o(
                "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
              ).clearWebsiteDestinationOptimization(f);
            else if (
              S === r("AdsAPIObjectives").OUTCOME_SALES &&
              o(
                "DestinationOptimizationUtils.react",
              ).destinationOptimizationEnableAdgroupInfo(e) &&
              o(
                "DestinationOptimizationUtils.react",
              ).destinationOptimizationExistingPostGK()
            ) {
              var R;
              f = o(
                "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
              ).setWebsiteDestinationOptimizationStatus(
                f,
                !0,
                !1,
                !1,
                o("DestinationOptimizationUtils.react")
                  .DestinationOptimizationEditSource.PRE_CONDITION_DEFAULTING,
                (R = p == null ? void 0 : p.getValue()) != null ? R : null,
              );
            }
            return (
              (f = o("ProductBrowsingAdsUtils").maybeUpdateProductBrowsingSpec(
                f,
                !1,
                void 0,
                h == null ? void 0 : h.campaignGroup,
                h == null ? void 0 : h.campaign,
                "promoted_object_optimization_change",
              )),
              (f = o(
                "ShopsAdsOffsiteCheckoutAdsDefaultingUtils",
              ).maybeDefaultSAOffIdentitiesAndOptIn(
                t.hostID,
                b,
                d,
                c,
                l,
                u,
                f,
                o("ShopsAdsOffsiteCheckoutAdsUtils").SAOffDefaultingTrigger
                  .CUSTOM_EVENT_TYPE_CHANGE,
              )),
              f
            );
          });
        },
        o("AdsUEditorPromotedObjectSetWebsiteOptimizationFieldsDataActionFlux")
          .actionType,
      ),
    };
    function s(e, t) {
      var n,
        r = e.custom_conversion_id,
        o = e.custom_event_type,
        a = e.lead_ads_form_event_source_type,
        i = e.pixel_id;
      if (a === "onsite_crm_single_event") return [];
      if (i != null && o != null) {
        var l;
        return [
          ((l = {}),
          (l["action.type"] = ["offsite_conversion"]),
          (l.fb_pixel = [t != null ? t : i]),
          l),
        ];
      }
      if (r != null) {
        var s;
        return [
          ((s = {}),
          (s["action.type"] = ["offsite_conversion"]),
          (s.custom_conversion = [r]),
          s),
        ];
      }
      return [((n = {}), (n["action.type"] = ["offsite_conversion"]), n)];
    }
    var u = e;
    l.default = u;
  },
  98,
);
