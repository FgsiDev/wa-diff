__d(
  "AdsConnectedSourcesSourceUrlFallbackCatalog",
  [
    "AdsBulkValueUtils",
    "AdsEPAWebsiteUrlPEDefaultOn",
    "AdsEditingAdgroupEditorContext",
    "AdsMetadataConnectedSourcesUtils",
    "AdsUEditorAdgroupBulkSelectors",
    "AdsUEditorSelectors",
    "LoadObject",
    "PEDefaultOnExclusions",
    "PERelevanceUtils",
    "adgroupAPlusCFirstEligibleProductSetForUrlUtils",
    "adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector",
    "adsUEditorAdgroupIsLLMRelevanceInScopeSelector",
    "adsUEditorAdgroupPublishStatusSelector",
    "adsUEditorCTXSMCCatalogSelector",
    "adsUEditorIsAdgroupEligibleForCtdPeSelector",
    "adsUEditorIsAdgroupEligibleForCtwaPeSelector",
    "adsUEditorPcaUnificationSelectors",
    "adsUEditorSelectedAdgroupIDsSelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("adsUEditorSelectedAdgroupIDsSelector")(
          r("AdsEditingAdgroupEditorContext"),
        ),
        t = r("adsUEditorAdgroupPublishStatusSelector")(
          r("AdsEditingAdgroupEditorContext"),
        );
      return (
        e.length > 0 &&
        e.every(function (e) {
          var n;
          return ((n = t.get(e)) == null ? void 0 : n.isNew) === !1;
        })
      );
    }
    function s(t) {
      var n, a, i, l;
      if (
        (o("PERelevanceUtils").isPEVisibleProductsAdexGKOrLLMGKEnabled() &&
          o(
            "adsUEditorAdgroupIsLLMRelevanceInScopeSelector",
          ).adsUEditorAdgroupIsLLMRelevanceInScopeSelector(
            r("AdsEditingAdgroupEditorContext"),
          )) ||
        e() ||
        o("PEDefaultOnExclusions").isDefaultOnBlocklisted() ||
        o("PEDefaultOnExclusions").isExcludedBySaefSensitiveVerticals() ||
        t == null ||
        t === "" ||
        !o(
          "adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector",
        ).adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector(
          r("AdsEditingAdgroupEditorContext"),
        )
      )
        return null;
      var s = r("adsUEditorSelectedAdgroupPlainObjectsSelector")(
        r("AdsEditingAdgroupEditorContext"),
      )[0];
      if (s == null) return null;
      var u = o(
        "adsUEditorPcaUnificationSelectors",
      ).isPcaUnificationWs1EnabledAndL3CatalogNotPresentSelector(
        r("AdsEditingAdgroupEditorContext"),
      );
      if (u) return null;
      var c = o(
          "adsUEditorCTXSMCCatalogSelector",
        ).adsUEditorIsCampaignCTMAdSelector(
          r("AdsEditingAdgroupEditorContext"),
        ),
        d = r("adsUEditorIsAdgroupEligibleForCtwaPeSelector")(
          r("AdsEditingAdgroupEditorContext"),
        ),
        m = r("adsUEditorIsAdgroupEligibleForCtdPeSelector")(
          r("AdsEditingAdgroupEditorContext"),
        ),
        p =
          (n = o("AdsBulkValueUtils").getUniformValue(
            o("AdsUEditorAdgroupBulkSelectors").pageID(
              r("AdsEditingAdgroupEditorContext"),
            ),
          )) != null
            ? n
            : null,
        _ =
          (a = o("AdsBulkValueUtils").getUniformValue(
            o("AdsUEditorSelectors").campaign.bulkByAccessorToJS(function (e) {
              var t;
              return (t = e.promoted_object) == null ? void 0 : t.pixel_id;
            })(r("AdsEditingAdgroupEditorContext")),
          )) != null
            ? a
            : null;
      return {
        adAccountID: (i = s.account_id) != null ? i : null,
        adgroupID: (l = s.id) != null ? l : null,
        isCTMAd: c,
        isEligibleForCtdPe: m,
        isEligibleForCtwaPe: d,
        pageID: p,
        pixelID: _,
        url: t,
      };
    }
    function u(e) {
      var t = s(e);
      return t == null
        ? r("LoadObject").empty({ creatorModuleID: i.id })
        : o(
            "adgroupAPlusCFirstEligibleProductSetForUrlUtils",
          ).getFirstEligibleProductSetForUrl(t);
    }
    function c(e) {
      var t,
        n,
        a = r("adsUEditorSelectedAdgroupPlainObjectsSelector")(
          r("AdsEditingAdgroupEditorContext"),
        )[0];
      if (a == null) return null;
      var i = o("AdsEPAWebsiteUrlPEDefaultOn").resolveEPAPECatalogMatchRung(
        a,
        e != null ? e : "",
        !0,
      );
      if (i == null) {
        if (
          !o("AdsMetadataConnectedSourcesUtils").isPECatalogUrlWaterfallEnabled(
            !0,
          )
        )
          return null;
      } else if (i.rung !== "source" || !i.isEnabled) return null;
      return {
        adAccountID: (t = a.account_id) != null ? t : null,
        adgroupID: (n = a.id) != null ? n : null,
      };
    }
    ((l.isEditingExistingAdgroup = e),
      (l.getSourceUrlFallbackCatalogFetchOpts = s),
      (l.getSourceUrlFallbackCatalogProductSetLO = u),
      (l.getSourceRungCommitTarget = c));
  },
  98,
);
