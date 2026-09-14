__d(
  "AdsUEditorAdgroupSelectAwarenessWhatsAppPromotedObjectTypeReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupTypeUtils",
    "AdsAssetFeedUtils",
    "AdsBulkValueUtils",
    "AdsCallAddonUtils",
    "AdsChildAttachmentsUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsRemoveCTAEventFieldsForPlacementCustomizedAds",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectAwarenessWhatsAppPromotedObjectTypeDataActionFlux",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetLinkTypeMutator",
    "AdsUEditorAdgroupShopAdsUtils",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "AdsUEditorMessagingAppsAdgroupMutators",
    "AdsUEditorSelectors",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "AdsUEditorUnifiedCreationAwarenessUtils",
    "ApiAdObjectTypes",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupIsPostClickExperienceSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            adAccount: r("adsUEditorAccountSelector"),
            bulkIsODAXCampaignGroup: o(
              "AdsUEditorSelectors",
            ).campaignGroup.bulkByAccessorToJS(function (e) {
              return e.is_odax_campaign_group;
            }),
            isPCE: o("adsUEditorAdgroupIsPostClickExperienceSelector")
              .isPostClickExperienceSelector,
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.bulkIsODAXCampaignGroup,
              i = n.isPCE,
              l = n.parentData,
              s = o("AdsBulkValueUtils").getUniformValueOrDefault(a, !1);
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var t = e,
                n = r("nullthrows")(l.get(t.id)),
                a = n.campaign,
                u = n.campaignGroup,
                c = n.specPlugin,
                d = r("AdCampaignDestination").WHATSAPP,
                m = u.objective,
                p = o("AdsAPICampaignRecordUtils").getPromotedObjectType(m, a),
                _ = o("AdsODAXUtils").maybeTranslateObjective(
                  u.objective,
                  p,
                  a.optimization_goal,
                ),
                f = o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(t),
                g =
                  o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(t);
              if (
                ((t = o(
                  "AdsUEditorAdgroupShopAdsUtils",
                ).deleteAssetFeedSpecOnsiteDestinationAndShopSpec(t)),
                g)
              ) {
                var h;
                return (
                  (t = o(
                    "AdsRemoveCTAEventFieldsForPlacementCustomizedAds",
                  ).removeCTAEventFieldsForPlacementCustomizedAds(t, c)),
                  o(
                    "AdsUEditorMessagingAppsAdgroupMutators",
                  ).placementCustomizationAdToMessagingAppsLink(
                    t,
                    c,
                    (h = o(
                      "AdsUEditorUnifiedCreationAwarenessUtils",
                    )).adCampaignDestinationTypeToString(d),
                    h.getValueLinkFromMessageType(d),
                    h.getCallToActionTypeFromMessageType(d),
                    h.getLinkFromMessageType(d),
                  )
                );
              }
              f &&
                (t = o(
                  "AdsUEditorAdgroupAssetFeedMutators",
                ).convertFromAssetFeedSpec(
                  o("AdsAdgroupTypeUtils").isVideoAd(t)
                    ? r("ApiAdObjectTypes").VIDEO
                    : o("AdsAPIAdgroupRecordUtils").getObjectType(t),
                  t,
                  _,
                ));
              var y = o("AdsChildAttachmentsUtils").isCarouselAd(t);
              return (
                (t = o("AdsCallAddonUtils").clearCallExtensionFields(t, c)),
                (t = o(
                  "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                ).cleanWebsiteExtensionFields(t)),
                (t = o(
                  "AdsUEditorAdgroupSetLinkTypeMutator",
                ).clearMovieLinkFields(t, c)),
                (t = o(
                  "AdsUEditorAdgroupSetLinkTypeMutator",
                ).clearExternalLinkFields(t, c, !0)),
                (t = o(
                  "AdsUEditorAdgroupSetLinkTypeMutator",
                ).clearEventLinkFields(t, c)),
                (t = o(
                  "AdsUEditorAdgroupSetLinkTypeMutator",
                ).clearPhoneCallLinkFields(t, c, y)),
                (t = o("AdsUEditorAdgroupSetLinkTypeMutator").clearAppFields(
                  t,
                  i,
                  y,
                )),
                (t = o(
                  "AdsUEditorUnifiedCreationAdgroupMutators",
                ).setMessagingAppFields(
                  t,
                  c,
                  s,
                  m,
                  y,
                  o(
                    "AdsUEditorUnifiedCreationAwarenessUtils",
                  ).adCampaignDestinationTypeToString(d),
                  o(
                    "AdsUEditorUnifiedCreationAwarenessUtils",
                  ).getValueLinkFromMessageType(d),
                  o(
                    "AdsUEditorUnifiedCreationAwarenessUtils",
                  ).getCallToActionTypeFromMessageType(d),
                  o(
                    "AdsUEditorUnifiedCreationAwarenessUtils",
                  ).getLinkFromMessageType(d),
                  o(
                    "AdsUEditorUnifiedCreationAwarenessUtils",
                  ).getHeadlineFromMessageType(d),
                )),
                t
              );
            });
          },
          o(
            "AdsUEditorAdgroupSelectAwarenessWhatsAppPromotedObjectTypeDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
