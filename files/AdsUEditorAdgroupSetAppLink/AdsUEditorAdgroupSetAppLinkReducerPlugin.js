__d(
  "AdsUEditorAdgroupSetAppLinkReducerPlugin",
  [
    "AdsAPIAdgroupCallToActionValueRecord",
    "AdsAPIObjectives",
    "AdsAdgroupSemanticFields",
    "AdsAppUrlUtils",
    "AdsAppUtils",
    "AdsAssetFeedUtils",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetAppLinkActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignAdObjectsUtils",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.parentData,
              i = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var l = t.appLink,
                  s = r("nullthrows")(a.get(n)),
                  u = s.campaign,
                  c = s.campaignGroup,
                  d = s.specPlugin;
                if (
                  r("AdsAdgroupSemanticFields").callToActionValue.isSupported(
                    r("nullthrows")(i.get(n)),
                    e,
                  )
                ) {
                  var m,
                    p,
                    _ =
                      r("AdsAdgroupSemanticFields").callToActionValue.get(
                        r("nullthrows")(i.get(n)),
                        e,
                      ) ||
                      o(
                        "AdsAPIAdgroupCallToActionValueRecord",
                      ).createEmptyCallToActionValueFromAdgroup(e),
                    f = o(
                      "AdsUEditorCampaignAdObjectsUtils",
                    ).getPromotedObjectType({ campaign: u, campaignGroup: c }),
                    g = _.set("app_link", l);
                  if (
                    c.objective === r("AdsAPIObjectives").OUTCOME_SALES &&
                    f === r("AdsPromotedObjectTypes").MOBILE_APP
                  ) {
                    var h,
                      y =
                        (h = u.promoted_object) == null
                          ? void 0
                          : h.object_store_url;
                    y != null &&
                      r("AdsAppUrlUtils").isAppStoreURL(y) &&
                      (g = g.set("link", y));
                  }
                  var C = r("AdsAdgroupSemanticFields").callToActionValue.set(
                      i.get(n),
                      e,
                      g,
                    ),
                    b = o(
                      "AdsAssetFeedUtils",
                    ).shouldAddObjectStoreURLForTrafficAndPromotedApp(
                      c.objective,
                      f,
                    ),
                    v =
                      (m = u.promoted_object) == null
                        ? void 0
                        : m.object_store_url;
                  b &&
                    v != null &&
                    r("AdsAppUrlUtils").isAppStoreURL(v) &&
                    (C = o(
                      "AdsUEditorCallToActionMutators",
                    ).setCallToActionValueObjectStoreURLs(C, d, [v]));
                  var S =
                      (p = u.promoted_object) == null
                        ? void 0
                        : p.object_store_urls,
                    R =
                      r("AdsAppUtils").hasUnifiedAppStoreForTrafficObjective(
                        c.objective,
                        f,
                      ) ||
                      (r("AdsAppUtils").hasUnifiedAppStoreForSalesObjective(
                        c.objective,
                        f,
                      ) &&
                        r("justknobx")._("2939"));
                  return (
                    R &&
                      S != null &&
                      (C = o(
                        "AdsUEditorCallToActionMutators",
                      ).setCallToActionValueObjectStoreURLs(C, d, S.toArray())),
                    C
                  );
                }
                return e;
              },
            );
          },
          o("AdsUEditorAdgroupSetAppLinkActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
