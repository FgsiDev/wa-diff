__d(
  "AdsUEditorAdgroupSetMessageTypeReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsChildAttachmentsUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetMessageTypeDataActionFlux",
    "AdsUEditorUnifiedCreationAwarenessUtils",
    "AdsUEditorUnifiedCreationVideoViewsAdgroupMutators",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupIsPostClickExperienceSelector",
    "nullthrows",
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
            adAccount: r("adsUEditorAccountSelector"),
            isPCE: o("adsUEditorAdgroupIsPostClickExperienceSelector")
              .isPostClickExperienceSelector,
          },
          function (e, t, n) {
            var a = n.adAccount,
              i = n.isPCE,
              l = n.parentData;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                s = r("nullthrows")(l.get(e.id)),
                u = s.campaign,
                c = s.campaignGroup,
                d = s.specPlugin,
                m =
                  (n = u.promoted_object) == null
                    ? void 0
                    : n.full_funnel_objective,
                p = m || c.objective,
                _ = o("AdsChildAttachmentsUtils").isCarouselAd(e),
                f = o("AdsAPICampaignRecordUtils").getPromotedObjectType(p, u),
                g = c.is_odax_campaign_group === !0,
                h = o(
                  "AdsUEditorUnifiedCreationAwarenessUtils",
                ).getSelectedMessagingType(e),
                y = u.optimization_goal;
              return o(
                "AdsUEditorUnifiedCreationVideoViewsAdgroupMutators",
              ).getNewVideoViewsAdgroupWithMessagingFields(
                a,
                e,
                t.appLink,
                _,
                g,
                i,
                t.isSetDefaultOnDestinationToggle,
                t.isSetDefaultOnPageChange,
                t.isSetDefaultOnVideoViewsSwitch,
                t.messageType,
                p,
                y,
                t.page,
                f,
                h,
                d,
                t.isExistingPostAd,
                t.shouldClearWebsiteExtensionFields,
              );
            });
          },
          o("AdsUEditorAdgroupSetMessageTypeDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
