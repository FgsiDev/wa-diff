__d(
  "adsUEditorAdgroupIdentityBrandedContentToggleVisibilitySelector",
  [
    "AdCampaignDestination",
    "AdsPageStore",
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupFirstProductSetIDSelector",
    "adsUEditorAdgroupIsEligiblePCAUnifiedL1Selector",
    "adsUEditorAdgroupIsFlexibleFormatSelector",
    "adsUEditorAdgroupIsPCAUnifiedFormatSelector",
    "adsUEditorAdgroupIsPartnershipAdsToggleVisibleInPCAUnifiedL1Selector",
    "adsUEditorCampaignMMOnlyPlacementSelector",
    "adsUEditorIsAdgroupEligibleForCtxAdvantageCatalogSelector",
    "isBrandedContentFieldEligibleBasedOnNonL1AdObjects",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = e.campaign;
      if (
        (n.destination_type === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
          n.destination_type === r("AdCampaignDestination").WHATSAPP) &&
        ((t = n.promoted_object) == null ? void 0 : t.page_id) != null
      ) {
        var o,
          a = r("AdsPageStore").get(
            (o = n.promoted_object) == null ? void 0 : o.page_id,
          );
        return (a == null ? void 0 : a.is_instagram_account_backed_page) === !0;
      }
      return !1;
    }
    var s = r("adsCreateSelector")(
        [
          r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
          o("adsUEditorCampaignMMOnlyPlacementSelector")
            .areAnySelectedCampaignsMarketingMessagesOnlySelector,
          r("adsUEditorAdgroupIsFlexibleFormatSelector"),
          r("adsUEditorAdgroupIsPCAUnifiedFormatSelector"),
          r("adsUEditorIsAdgroupEligibleForCtxAdvantageCatalogSelector"),
          r("adsUEditorAdgroupFirstProductSetIDSelector"),
          o("adsUEditorAdgroupIsEligiblePCAUnifiedL1Selector")
            .adsUEditorAdgroupIsEligiblePCAUnifiedL1Selector,
          r(
            "adsUEditorAdgroupIsPartnershipAdsToggleVisibleInPCAUnifiedL1Selector",
          ),
        ],
        function (n, o, a, i, l, s, u, c) {
          return (
            n.every(function (t) {
              return (
                r("isBrandedContentFieldEligibleBasedOnNonL1AdObjects")(t) &&
                !e(t)
              );
            }) &&
            !o &&
            !a &&
            !i &&
            !(l && s != null) &&
            !u &&
            !c
          );
        },
        {
          name:
            i.id +
            ".adsUEditorAdgroupIdentityBrandedContentToggleVisibilitySelector",
        },
      ),
      u = s;
    l.default = u;
  },
  98,
);
