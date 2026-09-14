__d(
  "AdsUEditorAdgroupDeselectMessagingAppsLinkTypeReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsChildAttachmentsUtils",
    "AdsLinkTypeUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupDeselectMessagingAppsLinkTypeDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "AdsUEditorUnifiedCreationAwarenessUtils",
    "adsUEditorAccountSelector",
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
          },
          function (e, t, n) {
            var a = n.parentData;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var t = r("nullthrows")(a.get(e.id)),
                n = t.campaign,
                i = t.campaignGroup,
                l = t.specPlugin,
                s = i.objective,
                u = o("AdsChildAttachmentsUtils").isCarouselAd(e),
                c = o("AdsAPICampaignRecordUtils").getPromotedObjectType(s, n),
                d = o("AdsLinkTypeUtils").isMessagingDestination(
                  o(
                    "AdsUEditorUnifiedCreationAwarenessUtils",
                  ).getSelectedMessagingType(e),
                );
              return d
                ? o(
                    "AdsUEditorUnifiedCreationAdgroupMutators",
                  ).clearMessagingAppsFields(
                    e,
                    l,
                    u,
                    i.is_odax_campaign_group === !0,
                    s,
                    void 0,
                    c,
                  )
                : e;
            });
          },
          o("AdsUEditorAdgroupDeselectMessagingAppsLinkTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
