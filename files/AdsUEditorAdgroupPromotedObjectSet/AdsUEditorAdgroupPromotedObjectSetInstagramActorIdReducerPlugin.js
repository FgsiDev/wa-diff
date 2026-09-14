__d(
  "AdsUEditorAdgroupPromotedObjectSetInstagramActorIdReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupSemanticFields",
    "AdsEditorPostEditMode",
    "AdsIGIDv2SemanticFields",
    "AdsInstagramUserIdMigrationUtils",
    "AdsInstagramUsernameStore",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPageStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupCachedUtils",
    "AdsUEditorAdgroupClearDataMutatorsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignPromotedObjectSetInstagramActorIdActionFlux",
    "AdsUEditorSetPostEditModeMutators",
    "AdsUEditorUnifiedProfileVisitsAdgroupMutators",
    "adsIsIGLoginSelector",
    "adsStoreToSelector",
    "isUPVBPScopedPickersEnabled",
    "isUPVL2InstagramPickerEnabled",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            cachedStoreState: r("adsStoreToSelector")(
              r("AdsUEditorAdgroupCachedUIStore"),
            ),
            getInstagramAccount: r("AdsInstagramUsernameStore")
              .getForAdgroupSelector,
            getInstagramAccountByV2: r("AdsInstagramUsernameStore")
              .getByV2Selector,
            getPage: r("AdsPageStore").getSelector,
            isIGLogin: r("adsIsIGLoginSelector"),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.cachedStoreState,
              i = n.getInstagramAccount,
              l = n.getInstagramAccountByV2,
              s = n.getPage,
              u = n.isIGLogin,
              c = n.parentData,
              d = !u && r("isUPVBPScopedPickersEnabled")();
            return !r("isUPVL2InstagramPickerEnabled")() && !d
              ? e
              : o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e, n) {
                  var u,
                    d = c.get(n);
                  if (d == null) return e;
                  var m = d.campaign,
                    p = d.campaignGroup,
                    _ = d.specPlugin,
                    f =
                      (u = t.instagramUserID) != null
                        ? u
                        : o(
                            "AdsInstagramUserIdMigrationUtils",
                          ).convertIGIDV2FromStringToStrongType(
                            t.instagramActorID,
                          );
                  if (f == null) return e;
                  var g = r("AdsAdgroupSemanticFields").instagramUserID.get(
                    _,
                    e,
                  );
                  if (f === g) return e;
                  var h = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                      p.objective,
                      m,
                    ),
                    y = o("AdsODAXUtils").maybeTranslateObjective(
                      p.objective,
                      h,
                      m.optimization_goal,
                    ),
                    C = o("AdsUEditorAdgroupCachedUtils").getCreative(
                      a,
                      n,
                      r("AdsEditorPostEditMode").INLINE,
                    ),
                    b = o("AdsUEditorAdgroupCachedUtils").getMetadata(a, n),
                    v = o("AdsAPICampaignRecordUtils").getDestinationType(m);
                  return o("AdsMutators").chain(
                    function (e) {
                      return o(
                        "AdsIGIDv2SemanticFields",
                      ).IGIDV2SemanticFields.instagramUserID.set(
                        _,
                        e,
                        t.instagramActorID,
                        f,
                      );
                    },
                    function (e) {
                      return o(
                        "AdsUEditorAdgroupClearDataMutatorsUtils",
                      ).clearData({
                        adgroup: e,
                        adgroupID: n,
                        cachedStoreState: a,
                        effectiveObjective: y,
                        specPlugin: _,
                      });
                    },
                    function (e) {
                      return o(
                        "AdsUEditorSetPostEditModeMutators",
                      ).setToUsingInlineCreation({
                        adgroup: e,
                        campaign: m,
                        campaignGroup: p,
                        cachedCreative: C,
                        cachedMetadata: b,
                        objective: y,
                        specPathPlugin: _,
                      });
                    },
                    function (e) {
                      var a,
                        u,
                        c,
                        d,
                        m =
                          (a = e.creative) == null ||
                          (a = a.object_story_spec) == null
                            ? void 0
                            : a.page_id,
                        g = new Map();
                      m != null && g.set(m, s(m));
                      var h =
                        (u = t.selectedInstagramAccount) != null
                          ? u
                          : t.instagramActorID != null
                            ? i(t.instagramActorID, n)
                            : l(
                                (c = o(
                                  "AdsInstagramUserIdMigrationUtils",
                                ).convertIGIDV2FromStrongTypeToString(f)) !=
                                  null
                                  ? c
                                  : "",
                                n,
                              );
                      return o(
                        "AdsUEditorUnifiedProfileVisitsAdgroupMutators",
                      ).setUnifiedProfileVisitsCTAFieldsForDestination({
                        adgroup: e,
                        campaignGroupPromotedPageID:
                          (d = p.promoted_object) == null ? void 0 : d.page_id,
                        destination: v,
                        instagramAccount: h,
                        objective: y,
                        pageID: m,
                        pages: g,
                        postEditMode: r("AdsEditorPostEditMode").INLINE,
                        specPlugin: _,
                      });
                    },
                  )(e);
                });
          },
          r("AdsUEditorCampaignPromotedObjectSetInstagramActorIdActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
