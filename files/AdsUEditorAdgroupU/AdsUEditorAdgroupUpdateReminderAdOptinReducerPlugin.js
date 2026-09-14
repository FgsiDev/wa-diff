__d(
  "AdsUEditorAdgroupUpdateReminderAdOptinReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetReminderAdToggleOptinActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
    "ReminderAdsGating",
    "adsUEditorAdgroupOCRTextSelector",
    "adsUeditorBulkSelectedLinkTypeSelector",
    "immutable",
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
              s = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              o("AdsMutators").chain(
                function (e) {
                  var t,
                    n,
                    u,
                    c,
                    d = l == null ? void 0 : l.get(e.id),
                    m = o(
                      "ReminderAdsGating",
                    ).isEventDetectionSupportedForObjectiveAndOptimization(
                      d == null ? void 0 : d.campaignGroup.objective,
                      d == null ? void 0 : d.campaign.optimization_goal,
                    );
                  return o(
                    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
                  ).updateAdForUpcomingEventMetadata(
                    e,
                    a == null ? void 0 : a[e.id],
                    null,
                    null,
                    r("nullthrows")(s.get(e.id)),
                    !0,
                    m,
                    (t = d == null ? void 0 : d.campaignGroup.objective) != null
                      ? t
                      : null,
                    (n = d == null ? void 0 : d.campaign.optimization_goal) !=
                      null
                      ? n
                      : null,
                    i,
                    (u = d == null ? void 0 : d.campaign) != null ? u : null,
                    (c = d == null ? void 0 : d.campaignGroup) != null
                      ? c
                      : null,
                  );
                },
                function (e) {
                  return t.isToggledOff
                    ? o(
                        "AdsUEditorAdgroupUpcomingEventMetadataMutators",
                      ).setUpcomingEventMetadataDisabledReasons(
                        e,
                        r("immutable").Set(["OPTED_OUT_MANUALLY"]),
                      )
                    : o(
                        "AdsUEditorAdgroupUpcomingEventMetadataMutators",
                      ).setUpcomingEventMetadataDisabledReasons(
                        e,
                        r("immutable").Set([]),
                      );
                },
              ),
            );
          },
          r("AdsUEditorAdgroupSetReminderAdToggleOptinActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
