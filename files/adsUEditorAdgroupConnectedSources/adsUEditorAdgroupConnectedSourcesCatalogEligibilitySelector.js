__d(
  "adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector",
  [
    "AdsDynamicAdsUtils",
    "AdsMetadataConnectedSourcesUtils",
    "AdsPCAUnificationUtils",
    "IsEligibleForCTMPEDefaultOnCreateAdSelector",
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupAPlusCProductExtensionHasEligibileProductSetSelector",
    "adsUEditorAdgroupHasWebsiteCTADestinationSelector",
    "adsUEditorAdgroupIsEligiblePCAUnifiedL1Selector",
    "adsUEditorAdgroupIsPCAUnifiedFormatSelector",
    "adsUEditorAdgroupIsPostSelector",
    "adsUEditorPcaUnificationSelectors",
    "isTruthy",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        r("adsCreateThunkSelector")(
          r(
            "adsUEditorAdgroupAPlusCProductExtensionHasEligibileProductSetSelector",
          ),
        ),
        o("IsEligibleForCTMPEDefaultOnCreateAdSelector")
          .IsEligibleForCTMPEDefaultOnCreateAdSelector,
        o("adsUEditorAdgroupIsPostSelector")
          .adsUEditorAdgroupIsExistingPostAdSelector,
        r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
        o("adsUEditorPcaUnificationSelectors")
          .isPcaUnificationWs1EnabledAndL3CatalogNotPresentSelector,
        r("adsUEditorAdgroupIsPCAUnifiedFormatSelector"),
        o("adsUEditorAdgroupIsEligiblePCAUnifiedL1Selector")
          .adsUEditorAdgroupIsEligiblePCAUnifiedL1Selector,
        o("adsUEditorAdgroupHasWebsiteCTADestinationSelector")
          .adsUEditorAdgroupHasWebsiteCTADestinationSelector,
      ],
      function (t, n, a, i, l, s, u, c) {
        var e,
          d = (e = i[0]) == null ? void 0 : e.campaignGroup;
        if (
          (d != null &&
            o(
              "AdsPCAUnificationUtils",
            ).isCpasEnabledAndL3CatalogSegmentSelected(d) &&
            o(
              "AdsPCAUnificationUtils",
            ).AdsIsCollaborativeAdsGKEnabledForPCAUnification()) ||
          u
        )
          return !0;
        if (
          (l &&
            !o(
              "AdsPCAUnificationUtils",
            ).AdsIsPcaUnificationWs1BetaGKEnabled()) ||
          s
        )
          return !1;
        var m =
          i.length > 0 &&
          i.every(function (e) {
            var t,
              n,
              r = e.adgroup;
            return (
              ((t = r.creative) == null ||
              (t = t.degrees_of_freedom_spec) == null ||
              (t = t.creative_features_spec) == null ||
              (t = t.product_extensions) == null
                ? void 0
                : t.enroll_status) === "OPT_IN" &&
              ((n = r.creative) == null ||
              (n = n.creative_sourcing_spec) == null
                ? void 0
                : n.associated_product_set_id) != null
            );
          });
        if (m) return !0;
        if (
          !c &&
          i.some(function (e) {
            var t = e.campaign,
              n = e.campaignGroup;
            return o(
              "AdsMetadataConnectedSourcesUtils",
            ).isEngagementOnYourAdSetup(t, n);
          })
        )
          return (
            o("AdsMetadataConnectedSourcesUtils").logCatalogEligibilityResult(
              i.map(function (e) {
                var t = e.adgroup;
                return t.id;
              }),
              !1,
              "INELIGIBLE_CAMPAIGN_ADGROUP",
            ),
            !1
          );
        var p = t() || (r("justknobx")._("5838") && !a && n);
        if (
          i.some(function (e) {
            var t = e.adgroup,
              n = e.campaign,
              r = e.campaignGroup;
            return !o(
              "AdsMetadataConnectedSourcesUtils",
            ).isEligibleForCatalogByCampaignAndAdgroup(n, r, t, p);
          })
        )
          return (
            o("AdsMetadataConnectedSourcesUtils").logCatalogEligibilityResult(
              i.map(function (e) {
                var t = e.adgroup;
                return t.id;
              }),
              !1,
              "INELIGIBLE_CAMPAIGN_ADGROUP",
            ),
            !1
          );
        var _ =
            r("justknobx")._("2400") &&
            d != null &&
            r("isTruthy")(
              d == null ? void 0 : d.collaborative_ads_partner_info,
            ),
          f =
            i.length > 0 &&
            i.every(function (e) {
              var t = e.adgroup;
              return o("AdsDynamicAdsUtils").isDynamicAd(t);
            });
        return (p || _ || f) === !1
          ? (o("AdsMetadataConnectedSourcesUtils").logCatalogEligibilityResult(
              i.map(function (e) {
                var t = e.adgroup;
                return t.id;
              }),
              !1,
              "NO_ELIGIBLE_PRODUCT_SET",
            ),
            !1)
          : !0;
      },
      {
        name:
          i.id + ".adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector",
      },
    );
    l.adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector = e;
  },
  98,
);
