__d(
  "adsUEditorGetShouldEnableConnectedSourcesCatalogByDefaultGetValueSelector",
  [
    "AdsBulkValueUtils",
    "AdsInterfacesLogger",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMidFunnelExpansionProductExtensionUtils",
    "PEDefaultOnExclusions",
    "PERelevanceUtils",
    "ProductSetAPIClientUtils",
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorAccountIDSelector",
    "adsUEditorAdgroupAPlusCProductExtensionFirstEligibleProductSetSelector",
    "adsUEditorAdgroupIsEligiblePCAUnifiedL1Selector",
    "adsUEditorAdgroupIsEngagementOnYourAdSetupSelector",
    "adsUEditorAdgroupIsLLMRelevanceInScopeSelector",
    "adsUEditorAdgroupWebsiteUrlValueSelector",
    "adsUEditorCTXSMCCatalogSelector",
    "adsUEditorIsEligibleForCTMCatalogProductSelector",
    "adsUEditorSelectedAdgroupsHaveMessageMarketingEnabledSelector",
    "gkx",
    "userSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { optInSource: "DEFAULT", shouldOptIn: !1 };
    function s(e) {
      return {
        hasEligibleCatalog: e.hasValueWithoutError(),
        productSetErrorType: e.hasError()
          ? e.getError() instanceof
            o("ProductSetAPIClientUtils").NoEligibleProductSetsError
            ? "no_eligible_catalogs"
            : "api_failure"
          : null,
        productSetLoadState: e.isLoading()
          ? "loading"
          : e.hasError()
            ? "error"
            : e.hasValue()
              ? "loaded_with_value"
              : "empty",
      };
    }
    function u(t, n, a, i, l, u, c, d, m, p) {
      var _,
        f,
        g,
        h,
        y =
          p && o("PERelevanceUtils").isPEVisibleProductsAdexGKOrLLMGKEnabled(d);
      if (c || d) return e;
      var C = s(t),
        b = C.hasEligibleCatalog,
        v = C.productSetErrorType,
        S = C.productSetLoadState;
      if (m)
        return babelHelpers.extends({}, e, {
          hasEligibleCatalog: b,
          productSetErrorType: v,
          productSetLoadState: S,
        });
      r("AdsInterfacesLogger").logOnce({
        data:
          ((_ = {}),
          (_.is_enabled = b),
          (_.custom_event_type = "CREATION_CATALOG"),
          _),
        eventName: "ads_connected_sources_catalog_eligibility_selector",
      });
      var R = b && o("PEDefaultOnExclusions").isDefaultOnBlocklisted(),
        L =
          b &&
          !R &&
          o("PEDefaultOnExclusions").isExcludedBySaefSensitiveVerticals(),
        E =
          b &&
          !R &&
          !L &&
          o("AdsMetadataConnectedSourcesUtils").catalogShouldStickyOptOutByGK(
            n,
            a.getValue(),
            (f = t.getValue()) == null ? void 0 : f.url,
            o("AdsBulkValueUtils").getUniformValue(u),
            null,
            null,
            null,
          ) &&
          !(i && l && r("gkx")("4181")),
        k =
          o(
            "AdsMidFunnelExpansionProductExtensionUtils",
          ).isX2PCatalogCreationSource(
            (g = t.getValue()) == null
              ? void 0
              : g.catalogOriginalCreationSource,
          ) &&
          !o(
            "AdsMidFunnelExpansionProductExtensionUtils",
          ).isX2POffsiteLeadGenPEEnabled(!0),
        I = {
          hasEligibleCatalog: b,
          isAdexRevampBlocked: y,
          isDefaultOnBlocklisted: R,
          isSaefSensitiveExcluded: L,
          isStickyOptOut: E,
          isX2PDefaultOnBlocked: k,
          productSetErrorType: v,
          productSetLoadState: S,
        };
      return y || !b
        ? babelHelpers.extends({}, e, I)
        : R
          ? babelHelpers.extends({}, I, {
              optInSource: "DEFAULT",
              shouldOptIn: !1,
            })
          : L
            ? babelHelpers.extends({}, I, {
                optInSource: "DEFAULT",
                shouldOptIn: !1,
              })
            : E
              ? babelHelpers.extends({}, I, {
                  optInSource: "STICKY",
                  shouldOptIn: !1,
                })
              : k
                ? babelHelpers.extends({}, I, {
                    optInSource: "DEFAULT",
                    shouldOptIn: !1,
                  })
                : babelHelpers.extends({}, I, {
                    optInSource: "DEFAULT",
                    productSetID: (h = t.getValue()) == null ? void 0 : h.id,
                    shouldOptIn: !0,
                  });
    }
    var c = r("adsCreateThunkSelector")(
      r("adsCreateSelector")(
        [
          r(
            "adsUEditorAdgroupAPlusCProductExtensionFirstEligibleProductSetSelector",
          ),
          r("adsUEditorAccountIDSelector"),
          r("userSettingsSelector"),
          o("adsUEditorCTXSMCCatalogSelector")
            .adsUEditorIsCampaignCTMAdSelector,
          o("adsUEditorIsEligibleForCTMCatalogProductSelector")
            .adsUEditorAdgroupIsSMCEligibleSelector,
          o("adsUEditorAdgroupWebsiteUrlValueSelector").websiteUrlValueSelector,
          r("adsUEditorSelectedAdgroupsHaveMessageMarketingEnabledSelector"),
          o("adsUEditorAdgroupIsEligiblePCAUnifiedL1Selector")
            .adsUEditorAdgroupIsEligiblePCAUnifiedL1Selector,
          o("adsUEditorAdgroupIsEngagementOnYourAdSetupSelector")
            .adsUEditorAdgroupIsEngagementOnYourAdSetupSelector,
          o("adsUEditorAdgroupIsLLMRelevanceInScopeSelector")
            .adsUEditorAdgroupIsLLMRelevanceInScopeSelector,
        ],
        u,
        { name: i.id },
      ),
    );
    ((l.getFirstEligibleProductSetStatus = s),
      (l.computeCatalogDefaultStatus = u),
      (l.adsUEditorGetShouldEnableConnectedSourcesCatalogByDefaultGetValueSelector =
        c));
  },
  98,
);
