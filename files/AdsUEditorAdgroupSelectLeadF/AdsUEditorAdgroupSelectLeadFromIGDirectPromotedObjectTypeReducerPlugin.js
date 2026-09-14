__d(
  "AdsUEditorAdgroupSelectLeadFromIGDirectPromotedObjectTypeReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPIObjectives",
    "AdsInstagramUserIdMigrationUtils",
    "AdsManagerIGLoginUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUEditorCampaignSelectLeadFromIGDirectPromotedObjectTypeDataActionFlux",
    "AdsUEditorInstagramMutators",
    "AdsUEditorInstagramUtils",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsUEditorAccountSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
    "isTruthy",
    "nullthrows",
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
            getShouldEnableAutomaticFlowByDefault: r(
              "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
            ),
            contextualDiscoveryAdsEligibilityState: r(
              "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
            ),
            loggedInInstagramAccount: o("AdsUEditorCampaignInstagramSelectors")
              .loggedInInstagramAccountSelector,
          },
          function (e, t, n) {
            var a = n.account,
              i = n.contextualDiscoveryAdsEligibilityState,
              l = n.getShouldEnableAutomaticFlowByDefault,
              s = n.loggedInInstagramAccount,
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
                      "adsAutomaticFlowMutationSetDoFSpec",
                    ).adsAutomaticFlowLiteSpecMutator(
                      a,
                      { campaign: c, campaignGroup: d, adgroup: e },
                      l,
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
                  function (e) {
                    if (o("AdsManagerIGLoginUtils").getIsIGLogin(a)) {
                      var t = s == null ? void 0 : s.getValue(),
                        n = t == null ? void 0 : t.user_id,
                        i = r("isTruthy")(n)
                          ? o(
                              "AdsUEditorInstagramUtils",
                            ).getAppLinkForInstagramDirect(n)
                          : null;
                      return o(
                        "AdsUEditorInstagramMutators",
                      ).setAdgroupCreativeForInstagramLeadGen(
                        e,
                        m,
                        t == null ? void 0 : t.id,
                        i,
                        o(
                          "AdsInstagramUserIdMigrationUtils",
                        ).convertIGIDV2FromStringToStrongType(
                          t == null ? void 0 : t.id_v2,
                        ),
                      );
                    }
                    return e;
                  },
                  function (e) {
                    var t,
                      n = o(
                        "AdsAPICampaignGroupRecordUtils",
                      ).getPromotedObjectPageID(d),
                      a =
                        n != null
                          ? n
                          : (t = e.creative) == null ||
                              (t = t.object_story_spec) == null
                            ? void 0
                            : t.page_id;
                    return o(
                      "AdsUEditorInstagramMutators",
                    ).maybeSetAdgroupMessageTemplateDefaultingForUnstructuredLead(
                      e,
                      m,
                      r("AdCampaignDestination").LEAD_FROM_IG_DIRECT,
                      r("AdsAPIObjectives").OUTCOME_LEADS,
                      a,
                    );
                  },
                )(e);
              },
            );
          },
          r(
            "AdsUEditorCampaignSelectLeadFromIGDirectPromotedObjectTypeDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
