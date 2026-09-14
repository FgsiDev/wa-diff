__d(
  "adsUEditorAdgroupCampaignSelectWebsitePromotedObjectMutator",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsCanvasConstants",
    "AdsCollectionsAdUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupClearDataMutatorsUtils",
    "AdsUEditorAdgroupOfferMutators",
    "AdsUEditorAdgroupSetThreadsAccountSpecMutators",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorInstagramMutators",
    "AdsUEditorMessengerMutators",
    "AdsUEditorMultiDestinationAdgroupMutators",
    "AdsUEditorWebsiteMutators",
    "adsAutomaticFlowMutationSetDoFSpec",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s, u, c) {
      var d = o("AdsCollectionsAdUtils").isCollectionsAd(t.creative),
        m = i.objective,
        p = o("AdsAPICampaignGroupRecordUtils").getPromotedObjectPageID(i),
        _ = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
          campaign: a,
          campaignGroup: i,
        }),
        f = r("AdsAdgroupSemanticFields").multiShareEndCard.isSupported(n, t);
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.shop_spec.delete,
        function (e) {
          return o(
            "AdsUEditorInstagramMutators",
          ).maybeSetAdgroupCreativeInstagramAccountID(e, n, l);
        },
        function (e) {
          return r("justknobx")._("499")
            ? o(
                "AdsUEditorAdgroupSetThreadsAccountSpecMutators",
              ).maybeSetAdgroupCreativeThreadsUserID(e, n, l)
            : e;
        },
        function (e) {
          return o("AdsUEditorAdgroupOfferMutators").removeOfferIDState(
            e,
            n,
            m,
          );
        },
        function (e) {
          return o(
            "AdsUEditorMultiDestinationAdgroupMutators",
          ).cleanMultiDestAdSpecOnConversionLocationChange(e);
        },
        function (e) {
          return o("AdsUEditorAdgroupClearDataMutatorsUtils").clearCTAFields({
            adgroup: e,
            callToActionType: u,
            promotedObjectType: _,
            specPlugin: n,
          });
        },
        function (e) {
          return o("AdsAssetFeedUtils").hasLanguageCustomizationFromRecord(e)
            ? o("AdsUEditorAdgroupAssetFeedMutators").convertFromAssetFeedSpec(
                o("AdsAssetFeedUtils").getTargetObjectType(e),
                e,
                m,
              )
            : e;
        },
        function (e) {
          return o("AdsUEditorWebsiteMutators").setWebsiteURL({
            adgroup: e,
            campaignGroupPromotedPageID: p,
            objective: m,
            promotedObjectType: _,
            specPlugin: n,
            websiteURL: d ? o("AdsCanvasConstants").EMPTY_CANVAS_LINK : "",
          });
        },
        function (e) {
          return o("AdsUEditorCallToActionMutators").setCallToAction({
            callToActionType: u,
            pages: null,
            cachedCallToActionLink: c,
            adgroup: e,
            campaignGroupPromotedPageID: p,
            objective: m,
            promotedObjectType: _,
            specPlugin: n,
          });
        },
        function (e) {
          return o(
            "AdsUEditorMessengerMutators",
          ).deleteMessengerDestinationFields({
            adgroup: e,
            specPlugin: n,
            supportPageEndCard: f,
          });
        },
        function (e) {
          return o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e)
            ? o(
                "AdsUEditorAdgroupAssetFeedMutators",
              ).removeMissingAdlabelsFromCustomizationRules(e)
            : e;
        },
        function (t) {
          return o(
            "adsAutomaticFlowMutationSetDoFSpec",
          ).adsAutomaticFlowLiteSpecMutator(
            e,
            { campaign: a, campaignGroup: i, adgroup: t },
            s,
          );
        },
        function (t) {
          return o("AdsUEditorWebsiteMutators").setBrowserAddOnDefaulting(
            e,
            t,
            n,
            a,
            i,
            _,
            m,
          );
        },
      )(t);
    }
    l.selectWebsitePromotedObjectCommonMutator = e;
  },
  98,
);
