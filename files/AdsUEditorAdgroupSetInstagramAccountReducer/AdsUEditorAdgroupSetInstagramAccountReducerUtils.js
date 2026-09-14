__d(
  "AdsUEditorAdgroupSetInstagramAccountReducerUtils",
  [
    "AdsInstagramUserIdMigrationUtils",
    "AdsInstagramUsernameStore",
    "AdsLoadStateUtils_LEGACY",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetIntagramAccountSpecMutators",
    "AdsUEditorAdgroupSetThreadsAccountSpecMutators",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "adsPlacementAPISpecReaderIsActivePublisherPlatform",
    "adsUEditorAdgroupProductCatalogIDSelector",
    "adsUEditorPreloadedIdentityToStorefrontSelector",
    "adsUeditorBulkSelectedLinkTypeSelector",
    "gkx",
    "isTruthy",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        parentData: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
          o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
        ),
        destinationLinkType: o("adsUeditorBulkSelectedLinkTypeSelector")
          .adsUEditorBulkSelectedLinkTypeSelector,
        getInstagramUsername: r("AdsInstagramUsernameStore")
          .getForAdgroupSelector,
        identitiesToStorefrontLO: o(
          "adsUEditorPreloadedIdentityToStorefrontSelector",
        ).preloadedIdentityToStorefrontSelector,
        adgroupProductCatalogIDLoadObject: r(
          "adsUEditorAdgroupProductCatalogIDSelector",
        ),
      },
      s = function () {
        return function (e, t, n) {
          var a = n.adgroupProductCatalogIDLoadObject,
            i = n.destinationLinkType,
            l = n.getInstagramUsername,
            s = n.identitiesToStorefrontLO,
            u = n.parentData;
          return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e, n) {
            var c,
              d,
              m = e,
              p = r("nullthrows")(u.get(n)),
              _ = p.campaign,
              f = p.campaignGroup,
              g = p.specPlugin,
              h = o(
                "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
              ).convertCampaignRecordToPlacementSpec(_),
              y = t.threadsUserID;
            if (!r("isTruthy")(y) && t.instagramAccountID != null && l) {
              var C = l(t.instagramAccountID, m.id);
              o("AdsLoadStateUtils_LEGACY").isLoaded(C) &&
                (y = C.threads_user_id);
            }
            m = o(
              "AdsUEditorAdgroupSetThreadsAccountSpecMutators",
            ).setThreadsUserIDFieldIfTargetThreadsPlacementOnL2(h, m, g, y);
            var b =
              !r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
                h,
                "instagram",
              ) && r("gkx")("5514");
            if (b) return m;
            var v = o(
              "AdsInstagramUserIdMigrationUtils",
            ).convertIGIDV2FromStringToStrongType(
              (c = t.instagramUserID) != null
                ? c
                : (d = t.selectedInstagramAccount) == null
                  ? void 0
                  : d.id_v2,
            );
            return (
              (m = o(
                "AdsUEditorAdgroupSetIntagramAccountSpecMutators",
              ).setInstagramActorID(
                n,
                f,
                _,
                m,
                g,
                t.instagramAccountID,
                t.identityToStorefront,
                i,
                l,
                s,
                a,
                v,
              )),
              m
            );
          });
        };
      };
    ((l.extraDataSelectors = e), (l.createReducer = s));
  },
  98,
);
