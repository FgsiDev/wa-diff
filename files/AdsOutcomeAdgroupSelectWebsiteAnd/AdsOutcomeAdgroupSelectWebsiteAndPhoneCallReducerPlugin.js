__d(
  "AdsOutcomeAdgroupSelectWebsiteAndPhoneCallReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsCallAddonUtils",
    "AdsMDOWeblinkPrefillMutator",
    "AdsMutators",
    "AdsODAXAdgroupReducerUtils",
    "AdsPageStore",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupWebsiteAndCallDefaultingMutator",
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUEditorCampaignSelectWebsiteAndPhoneCallPromotedObjectTypeDataActionFlux",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupBizAISectionSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultGetValueSelector",
    "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            bizAIEligibility: o("adsUEditorAdgroupBizAISectionSelector")
              .adsUEditorBizAIAdsSectionEligibilitySelector,
            campaignsMap: (e = o(
              "AdsUEditorAdgroupSelectors",
            )).adObjectsList.mapTransform(function (e) {
              var t = e.campaign;
              return t;
            }),
            parentData: e.adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            specialAdCategoriesMap: e.adObjectsList.mapTransform(function (e) {
              var t = e.campaignGroup;
              return t.special_ad_categories;
            }),
            getShouldEnableAutomaticFlowByDefault: r(
              "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
            ),
            getShouldEnableMusicByDefault: r(
              "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultGetValueSelector",
            ),
            contextualDiscoveryAdsEligibilityState: r(
              "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
            ),
            defaultInstagramID: o("AdsUEditorCampaignInstagramSelectors")
              .eligibleInstagramAccountIDWithBusiness,
            plugins: e.adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
            getPage: r("AdsPageStore").getSelector,
          },
          function (e, t, n) {
            var a = t.adgroupIDs || [];
            return o("AdsMutators").mutateEach(e, a, function (e, a) {
              var i = r("nullthrows")(n.parentData.get(a)),
                l = i.campaign,
                s = i.campaignGroup,
                u = i.specPlugin,
                c = o(
                  "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                ).createExistingPostRetentionOriginalData(e, u),
                d = o(
                  "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                ).shouldRetainCreativeData(l.campaign_creation_source)
                  ? e
                  : null,
                m = function (t) {
                  var e, n;
                  return (e = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.page_id.get(t)) != null
                    ? e
                    : l == null || (n = l.promoted_object) == null
                      ? void 0
                      : n.page_id;
                };
              return o("AdsMutators").chain(
                function (e) {
                  return o(
                    "AdsODAXAdgroupReducerUtils",
                  ).getDefaultAdgroupForNewMappedObjective(
                    e,
                    a,
                    babelHelpers.extends({}, n, {
                      mappedObjective: o("AdsAPIObjectives").CONVERSIONS,
                    }),
                    t.oldPromotedObjectType,
                  );
                },
                function (e) {
                  return o(
                    "AdsMDOWeblinkPrefillMutator",
                  ).applyMDOWeblinkPrefillIfEligible(
                    e,
                    r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL,
                    s.objective,
                    n.getPage,
                  );
                },
                function (e) {
                  var t,
                    r = m(e),
                    a =
                      r != null
                        ? n.getPage == null || (t = n.getPage(r)) == null
                          ? void 0
                          : t.phone_number_prefill
                        : null;
                  return a != null
                    ? o(
                        "AdsCallAddonUtils",
                      ).setPhoneNumberAndCallDestinationType(e, a)
                    : e;
                },
                function (e) {
                  return o(
                    "AdsUEditorAdgroupWebsiteAndCallDefaultingMutator",
                  ).applyWebsiteAndCallDefaultBusinessHours(e, m(e));
                },
                function (e) {
                  return o(
                    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                  ).retainExistingPost({
                    account: n.account,
                    adgroup: e,
                    campaign: l,
                    campaignGroup: s,
                    specPathPlugin: u,
                    getPage: n.getPage,
                    originalData: c,
                  });
                },
                function (e) {
                  return o(
                    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                  ).retainCreativeData({ adgroup: e, oldAdgroup: d });
                },
              )(e);
            });
          },
          o(
            "AdsUEditorCampaignSelectWebsiteAndPhoneCallPromotedObjectTypeDataActionFlux",
          ).actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
