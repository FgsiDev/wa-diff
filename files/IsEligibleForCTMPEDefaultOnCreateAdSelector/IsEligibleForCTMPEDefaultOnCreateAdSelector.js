__d(
  "IsEligibleForCTMPEDefaultOnCreateAdSelector",
  [
    "CTMSMCCatalogAdAdoptionLogger",
    "IsEligibleForCTMPEDefaultOnCreateAdSelectorUtils",
    "adsCreateSelector",
    "adsUEditorAdgroupAPlusCProductExtensionFirstEligibleProductSetSelector",
    "adsUEditorAdgroupConfirmedPostsSelector",
    "adsUEditorCTXSMCCatalogSelector",
    "adsUEditorIsEligibleForCTMCatalogProductSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
    "adsUEditorSelectedCampaignPlainObjectsSelector",
    "adsUEditorSelectedPageSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        o("adsUEditorIsEligibleForCTMCatalogProductSelector")
          .adsUEditorAdgroupIsSMCEligibleSelector,
        o("adsUEditorCTXSMCCatalogSelector").adsUEditorIsCampaignCTMAdSelector,
        o("adsUEditorAdgroupConfirmedPostsSelector")
          .adsUEditorAdgroupConfirmedPostsSelector,
        r(
          "adsUEditorAdgroupAPlusCProductExtensionFirstEligibleProductSetSelector",
        ),
        r("adsUEditorSelectedAdgroupIDsSelector"),
        r("adsUEditorSelectedCampaignPlainObjectsSelector"),
        r("adsUEditorSelectedPageSelector"),
      ],
      function (t, n, r, a, i, l, s) {
        var e,
          u,
          c,
          d = o(
            "IsEligibleForCTMPEDefaultOnCreateAdSelectorUtils",
          ).IsEligibleForCTMPEDefaultOnCreateAd(t, n, r),
          m = l[0],
          p =
            (e =
              m == null || (u = m.promoted_object) == null
                ? void 0
                : u.page_id) != null
              ? e
              : s == null || (c = s.getValue()) == null
                ? void 0
                : c.id,
          _ = a.getValue(),
          f = a.getError();
        return (
          d && f != null
            ? o("CTMSMCCatalogAdAdoptionLogger").logSMCProductSelectionAMEvents(
                o("CTMSMCCatalogAdAdoptionLogger")
                  .CtmSMCCatalogAdAdoptionMessage
                  .CTMPEDefaultOnEligibleWithProductSetError,
                p,
                null,
                i[0],
                null,
                null,
                null,
                null,
                null,
                JSON.stringify({
                  errorMessage: f == null ? void 0 : f.message,
                  errorStack: f == null ? void 0 : f.stack,
                }),
              )
            : d &&
              f == null &&
              o("CTMSMCCatalogAdAdoptionLogger").logSMCProductSelectionAMEvents(
                o("CTMSMCCatalogAdAdoptionLogger")
                  .CtmSMCCatalogAdAdoptionMessage
                  .CTMPEDefaultOnEligibleWithProductSet,
                p,
                null,
                i[0],
                null,
                null,
                null,
                null,
                null,
                JSON.stringify({ productSetID: _ == null ? void 0 : _.id }),
              ),
          f != null || (_ == null ? void 0 : _.id) == null ? !1 : d
        );
      },
      { name: i.id + ".IsEligibleForCTMPEDefaultOnCreateAdSelector" },
    );
    l.IsEligibleForCTMPEDefaultOnCreateAdSelector = e;
  },
  98,
);
