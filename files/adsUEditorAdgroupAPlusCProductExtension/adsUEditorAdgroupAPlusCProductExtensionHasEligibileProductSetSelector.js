__d(
  "adsUEditorAdgroupAPlusCProductExtensionHasEligibileProductSetSelector",
  [
    "AdAccountProductExtensionsCatalogEligibilityRelayStore",
    "AdAccountProductExtensionsMainProductKey",
    "AdAccountProductExtensionsMainProductSetDataProvider",
    "AdCampaignDestination",
    "AdToCatalogUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAccountStore",
    "AdsMetadataConnectedSourcesUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupBulkSelectors",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorCTXSMCCatalogSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o(
        "AdAccountProductExtensionsCatalogEligibilityRelayStore",
      ).AdAccountProductExtensionsCatalogEligibilityRelayStore.fluxGetSelector(),
      s = r("adsCreateSelector")(
        [
          r("AdsAccountStore").getSelectedAccountID,
          o("adsUEditorCTXSMCCatalogSelector")
            .adsUEditorIsCampaignCTMAdSelector,
          r(
            "AdAccountProductExtensionsMainProductSetDataProvider",
          ).toFluxSelector(),
          r("adsGetUniformValueSelector")(
            o("AdsUEditorAdgroupBulkSelectors").pageID,
            null,
          ),
          r("adsUEditorSelectedAdgroupIDsSelector"),
          r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
          e,
        ],
        function (t, n, a, i, l, s, u) {
          var e = l.length > 0 ? l[0] : null,
            c = s.some(function (e) {
              var t = e.campaign,
                n = e.campaignGroup,
                a = n.objective,
                i = o("AdsAPICampaignRecordUtils").getPromotedObjectType(a, t);
              return (
                a === o("AdsAPIObjectives").OUTCOME_LEADS &&
                i === r("AdsPromotedObjectTypes").PIXEL
              );
            }),
            d = s.some(function (e) {
              var t = e.campaign,
                n = e.campaignGroup,
                a = n.objective,
                i = o("AdsAPICampaignRecordUtils").getPromotedObjectType(a, t);
              return (
                a === o("AdsAPIObjectives").OUTCOME_LEADS &&
                i === r("AdsPromotedObjectTypes").WHATSAPP &&
                t.destination_type === r("AdCampaignDestination").WHATSAPP
              );
            }),
            m = s.some(function (e) {
              var t = e.campaign,
                n = e.campaignGroup;
              return o(
                "AdsMetadataConnectedSourcesUtils",
              ).isEngagementOnYourAdSetup(t, n);
            }),
            p = c || d || m;
          if (
            !p &&
            ((o("AdToCatalogUtils").isPEDefaultingLatencyImprovementEnabled(
              !0,
            ) &&
              (t == null || e == null || i == null)) ||
              (o("AdToCatalogUtils").isPEDefaultingLatencyImprovementEnabled(
                !0,
              ) &&
                s.length > 0 &&
                s.some(function (e) {
                  var t = e.adgroup,
                    n = e.campaign,
                    r = e.campaignGroup;
                  return !o(
                    "AdsMetadataConnectedSourcesUtils",
                  ).isEligibleForCatalogByCampaignAndAdgroup(n, r, t, !1);
                })))
          )
            return !1;
          if (t != null && r("gkx")("16007")) {
            var _ = u({ adAccountID: t, adgroupID: e, isCTM: n, pageID: i });
            return _.hasValueWithoutError() && _.getValueEnforcing();
          }
          var f = o("AdToCatalogUtils").isPEDefaultingLatencyImprovementEnabled(
              !0,
            )
              ? o("AdToCatalogUtils").buildPECatalogMatchKey({
                  adAccountID: t != null ? t : "",
                  adgroupID: e != null ? e : "",
                  isCTMAd: n,
                  isEligibleForCtdPe: !1,
                  isEligibleForCtwaPe: !1,
                  pageID: i,
                  pixelID: null,
                  requestSource: "PRODUCT_EXTENSIONS_ELIGIBILITY_CHECK",
                  url: null,
                })
              : new (r("AdAccountProductExtensionsMainProductKey"))({
                  adAccountID: t != null ? t : "",
                  pageID: i,
                  isCTMAd: n,
                  adgroupID: e,
                  requestSource: "PRODUCT_EXTENSIONS_ELIGIBILITY_CHECK",
                }),
            g = a.get(f),
            h = !d && !m && r("gkx")("24245");
          return h && g.isLoading() ? !0 : g.hasValueWithoutError();
        },
        {
          name:
            i.id +
            ".adsUEditorAdgroupAPlusCProductExtensionHasEligibileProductSetSelector",
        },
      ),
      u = s;
    l.default = u;
  },
  98,
);
