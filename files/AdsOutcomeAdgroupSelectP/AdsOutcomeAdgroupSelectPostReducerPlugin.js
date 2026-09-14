__d(
  "AdsOutcomeAdgroupSelectPostReducerPlugin",
  [
    "AdDraftFragmentSource",
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsODAXAdgroupReducerUtils",
    "AdsOutcomeCampaignSelectPostPromotedObjectTypeDataActionFlux",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "AdsUEditorCampaignInstagramSelectors",
    "adsUEditorAccountSelector",
    "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignsMap: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(function (e) {
              var t = e.campaign;
              return t;
            }),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            specialAdCategoriesMap: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(function (e) {
              var t = e.campaignGroup;
              return t.special_ad_categories;
            }),
            contextualDiscoveryAdsEligibilityState: r(
              "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
            ),
            defaultInstagramID: o("AdsUEditorCampaignInstagramSelectors")
              .eligibleInstagramAccountIDWithBusiness,
          },
          function (e, t, n) {
            var a = new Map();
            o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e, t) {
              var r = n.parentData.get(t),
                i = r == null ? void 0 : r.campaign;
              return (
                i != null &&
                  o(
                    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                  ).shouldRetainCreativeData(i.campaign_creation_source) &&
                  a.set(t, e),
                e
              );
            });
            var i = o(
              "AdsODAXAdgroupReducerUtils",
            ).adsAdgroupSetChannelReducerFn(
              e,
              t,
              babelHelpers.extends({}, n, {
                mappedObjective: o("AdsAPIObjectives").POST_ENGAGEMENT,
              }),
            );
            return o("AdsMutators").mutateEach(
              i,
              t.adgroupIDs,
              function (e, t) {
                var i,
                  l,
                  s = o(
                    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                  ).retainCreativeData({
                    adgroup: e,
                    oldAdgroup: (i = a.get(t)) != null ? i : null,
                  }),
                  u = n.parentData.get(t);
                if (
                  (u == null || (l = u.campaign) == null
                    ? void 0
                    : l.campaign_creation_source) ===
                  r("AdDraftFragmentSource").ADS_SIMPLIFIED_ONE_CLICK
                ) {
                  var c;
                  ((s = o(
                    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                  ).cleanWebsiteExtensionFields(s)),
                    (s = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.uca_draft_version.delete(s)),
                    ((c = s.creative) == null ? void 0 : c.object_type) ===
                      "PHOTO" &&
                      (s = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_type.set("SHARE", s)));
                }
                return s;
              },
            );
          },
          o("AdsOutcomeCampaignSelectPostPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
