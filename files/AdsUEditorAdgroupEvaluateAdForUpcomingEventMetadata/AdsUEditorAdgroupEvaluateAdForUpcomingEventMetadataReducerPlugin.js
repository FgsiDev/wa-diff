__d(
  "AdsUEditorAdgroupEvaluateAdForUpcomingEventMetadataReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupEvaluateAdForUpcomingEventMetadataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
    "ReminderAdsGating",
    "adsUEditorAdgroupOCRTextSelector",
    "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
    "adsUeditorBulkSelectedLinkTypeSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            linkTypeMap: o("adsUeditorBulkSelectedLinkTypeSelector")
              .adsUEditorAdsAdObjectLinkTypeMapSelector,
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            remindersAdsDefaultOptIn: r(
              "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
            ),
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
            ocrText: r("adsUEditorAdgroupOCRTextSelector"),
          },
          function (e, t, n) {
            var a = n.linkTypeMap,
              i = n.ocrText,
              l = n.parentData,
              s = n.plugins,
              u = n.remindersAdsDefaultOptIn;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var t,
                n,
                c,
                d,
                m = l == null ? void 0 : l.get(e.id),
                p = o(
                  "ReminderAdsGating",
                ).isEventDetectionSupportedForObjectiveAndOptimization(
                  m == null ? void 0 : m.campaignGroup.objective,
                  m == null ? void 0 : m.campaign.optimization_goal,
                );
              return o(
                "AdsUEditorAdgroupUpcomingEventMetadataMutators",
              ).updateAdForUpcomingEventMetadata(
                e,
                a == null ? void 0 : a[e.id],
                null,
                null,
                r("nullthrows")(s.get(e.id)),
                u,
                p,
                (t = m == null ? void 0 : m.campaignGroup.objective) != null
                  ? t
                  : null,
                (n = m == null ? void 0 : m.campaign.optimization_goal) != null
                  ? n
                  : null,
                i,
                (c = m == null ? void 0 : m.campaign) != null ? c : null,
                (d = m == null ? void 0 : m.campaignGroup) != null ? d : null,
              );
            });
          },
          r("AdsUEditorAdgroupEvaluateAdForUpcomingEventMetadataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
