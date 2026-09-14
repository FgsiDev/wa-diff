__d(
  "AdsUEditorAdgroupSetPageWelcomeMessageReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsAdgroupSemanticFields",
    "AdsBulkValueUtils",
    "AdsLinkTypeUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetPageWelcomeMessageDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupTrackingSpecMutators",
    "AdsUEditorSelectors",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "ClickToMessageCTMAdoptionFeatureGating",
    "WebToMessengerUtils",
    "WebToWhatsappUtils",
    "WebToXFeatureGating",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            bulkIsODAXCampaignGroup: o(
              "AdsUEditorSelectors",
            ).campaignGroup.bulkByAccessorToJS(function (e) {
              return e.is_odax_campaign_group;
            }),
            bulkObjective: o(
              "AdsUEditorSelectors",
            ).campaignGroup.bulkByAccessorToJS(function (e) {
              return e.objective;
            }),
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (e, t, n) {
            var a = n.bulkIsODAXCampaignGroup,
              i = n.bulkObjective,
              l = n.plugins;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                s = t.followUpMessage,
                u = e;
              (s == null ? void 0 : s.app_id) != null &&
                s.app_id !== "" &&
                (u = o(
                  "AdsUEditorAdgroupTrackingSpecMutators",
                ).setMobileAppTracking(s == null ? void 0 : s.app_id, e));
              var c =
                  i &&
                  o("AdsBulkValueUtils").getUniformValue(
                    i,
                    r("AdsAPIObjectives").NONE,
                  ),
                d = o("AdsBulkValueUtils").getUniformValueOrDefault(a, !1),
                m = r("nullthrows")(l.get(e.id)),
                p =
                  m == null || (n = m.pivots) == null
                    ? void 0
                    : n.promotedObjectType;
              return (o("AdsLinkTypeUtils").isMessagingAppsLinkTypeSelected(
                u,
                m,
              ) &&
                o(
                  "ClickToMessageCTMAdoptionFeatureGating",
                ).enableL1CTXUnifiedCreation(d, c, p)) ||
                o("WebToWhatsappUtils").isMessagingTemplateEnabledForWTWA(
                  u,
                  c,
                ) ||
                o("WebToMessengerUtils").isMessagingTemplateEnabledForWTM(
                  u,
                  c,
                ) ||
                o("WebToXFeatureGating").isMessagingTemplateEnabledForWTD(u, c)
                ? o(
                    "AdsUEditorUnifiedCreationAdgroupMutators",
                  ).setWelcomeMessageForAdgroup(u, t.pageWelcomeMessage)
                : r("AdsAdgroupSemanticFields").pageWelcomeMessage.set(
                    m,
                    u,
                    t.pageWelcomeMessage,
                  );
            });
          },
          o("AdsUEditorAdgroupSetPageWelcomeMessageDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
