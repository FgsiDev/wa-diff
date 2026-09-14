__d(
  "AdsUEditorAdgroupSetClickToDirectInstagramUserReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAssetFeedUtils",
    "AdsBrandAwarenessUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetClickToDirectInstagramUserDataActionFlux",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorInstagramAdgroupSpecUtils",
    "ClickToMessageCTMAdoptionFeatureGating",
    "FBLogger",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i = a.get(n);
                if (i == null)
                  return (
                    r("FBLogger")("unified_creation").warn(
                      "Null extra data for adgroup id: %s. Parent data map keys: %s",
                      n,
                      Array.from(a.keys).toString(),
                    ),
                    e
                  );
                var l = i.specPlugin,
                  s = t.app_link,
                  u = e,
                  c = i.campaignGroup.objective;
                if (
                  o(
                    "AdsAssetFeedUtils",
                  ).isDofMessagingDestinationAdgroupFromSpec(u)
                )
                  return u;
                u = o(
                  "AdsUEditorCallToActionMutators",
                ).setCallToActionValueAppDestination(u, l, "INSTAGRAM_DIRECT");
                var d = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                    c,
                    i.campaign,
                  ),
                  m =
                    (o("AdsBrandAwarenessUtils").isBrandObjective(c) &&
                      i.campaignGroup.is_odax_campaign_group === !0) ||
                    o(
                      "ClickToMessageCTMAdoptionFeatureGating",
                    ).isEligibleForCTXL1EngagementVideoViews(d, c);
                return (
                  !r("isStringNullOrEmpty")(s) && !m
                    ? ((u = o(
                        "AdsUEditorCallToActionMutators",
                      ).setCallToActionValueAppLink(u, l, s)),
                      o("AdsAPIAdgroupRecordUtils").isCreativeAssetGroupingsAd(
                        u,
                      ) &&
                        (u = o(
                          "AdsAdgroupCreativeAssetGroupsSpecMutators",
                        ).setCagCallToActionValueByValueTypeForAllGroups(
                          e,
                          s,
                          "app_link",
                          l,
                        )),
                      o("AdsAssetFeedUtils").hasPACCarouselFormat(e) &&
                        (u = o(
                          "AdsUEditorInstagramAdgroupSpecUtils",
                        ).setDeeplink(u, l, s)))
                    : (u = o(
                        "AdsUEditorCallToActionMutators",
                      ).deleteCallToActionValueAppLink(u, l)),
                  u
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetClickToDirectInstagramUserDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
