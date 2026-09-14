__d(
  "AdsUEditorAdgroupSelectLeadFormMessengerPromotedObjectTypeReducerPlugin",
  [
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsPageStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUEditorCampaignSelectLeadFormMessengerPromotedObjectTypeDataActionFlux",
    "AdsUEditorInstagramMutators",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsUEditorAccountSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            getPage: r("AdsPageStore").getSelector,
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            getShouldEnableAutomaticFlowByDefault: r(
              "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
            ),
            defaultInstagramID: o("AdsUEditorCampaignInstagramSelectors")
              .eligibleInstagramAccountIDWithBusiness,
            contextualDiscoveryAdsEligibilityState: r(
              "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
            ),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.contextualDiscoveryAdsEligibilityState,
              l = n.defaultInstagramID,
              s = n.getShouldEnableAutomaticFlowByDefault,
              u = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                var n = r("nullthrows")(u.get(t)),
                  c = n.campaign,
                  d = n.campaignGroup,
                  m = n.specPlugin;
                return o("AdsMutators").chain(
                  function (e) {
                    return o(
                      "AdsUEditorCallToActionMutators",
                    ).deleteCallToActionValueAppDestination(e, m);
                  },
                  function (e) {
                    return o(
                      "AdsUEditorInstagramMutators",
                    ).maybeSetAdgroupCreativeInstagramAccountID(e, m, l);
                  },
                  function (e) {
                    return o(
                      "AdsUEditorCallToActionMutators",
                    ).deleteCallToActionValueAppLink(e, m);
                  },
                  function (e) {
                    return o(
                      "AdsUEditorCallToActionMutators",
                    ).setCallToActionType(e, "SIGN_UP", m);
                  },
                  function (e) {
                    return r("AdsAdgroupSemanticFields").headline.delete(m, e);
                  },
                  function (e) {
                    return r(
                      "AdsAdgroupSemanticFields",
                    ).multiShareEndCard.delete(m, e);
                  },
                  function (e) {
                    return o(
                      "adsAutomaticFlowMutationSetDoFSpec",
                    ).adsAutomaticFlowLiteSpecMutator(
                      a,
                      { campaign: c, campaignGroup: d, adgroup: e },
                      s,
                    );
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
                    ).updateContextualDiscoveryAdsEligibilitySpec(e, {
                      shouldOptIn: (i == null ? void 0 : i.shouldOptIn) === !0,
                      isExplicitOptOut: i == null ? void 0 : i.isExplicitOptOut,
                      shouldRenderCheckbox:
                        i == null ? void 0 : i.shouldRenderCheckbox,
                      actionMetadataType:
                        i == null ? void 0 : i.actionMetadataType,
                    });
                  },
                )(e);
              },
            );
          },
          o(
            "AdsUEditorCampaignSelectLeadFormMessengerPromotedObjectTypeDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
