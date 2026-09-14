__d(
  "AdsUEditorAdgroupCampaignUpdateDeliveryOptimizationGoalReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupTrackingSpecUpdateUtils",
    "AdsAdgroupTrackingSpecsUtils",
    "AdsAdgroupTypeUtils",
    "AdsDeliveryUIConstants",
    "AdsEditingAdgroupContext",
    "AdsMediaFormatMutators",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
    "AdsUEditorAdgroupUpcomingEventsMutator",
    "AdsUEditorCampaignDeliveryChangeOptimizationGoalActionFlux",
    "AdsUEditorContextFactory",
    "ApiAdObjectTypes",
    "ReminderAdsGating",
    "adsSignalsPixelsSelector",
    "adsUEditorAdgroupOCRTextSelector",
    "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
    "adsUeditorBulkSelectedLinkTypeSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l) {
      if (n.objective === r("AdsAPIObjectives").OUTCOME_AWARENESS) {
        var s = o("AdsAdgroupTypeUtils").isVideoAd(e);
        if (
          o("AdsODAXUtils").AWARENESS_VIDEO_VIEWS_OPTIMIZATION_GOALS.includes(
            t.optimizationGoal,
          )
        )
          return s
            ? e
            : o("AdsMediaFormatMutators").setMediaFormat(
                "VIDEO",
                e,
                l,
                o("AdsODAXUtils").maybeTranslateObjective(
                  n.objective,
                  i,
                  a.optimization_goal,
                ),
              );
        var u = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.videos.get(e),
          c =
            (u != null && u.size > 0) ||
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.video_id.get(e) != null;
        if (
          o("AdsODAXUtils").AWARENESS_VIDEO_VIEWS_OPTIMIZATION_GOALS.includes(
            t.priorOptimizationGoal,
          ) &&
          !o("AdsODAXUtils").AWARENESS_VIDEO_VIEWS_OPTIMIZATION_GOALS.includes(
            t.optimizationGoal,
          ) &&
          s &&
          !c
        )
          return o("AdsMutators").chain(
            function (e) {
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.delete(e);
            },
            function (e) {
              return r("AdsAdgroupRecordAccessors").creative.object_type.set(
                r("ApiAdObjectTypes").PHOTO,
                e,
              );
            },
          )(e);
      }
      return e;
    }
    function s(e, t, n, a, i) {
      var l = o("AdsODAXUtils").maybeTranslateObjective(n.objective, i, null),
        s = a.getValue();
      return s == null || s.length !== 1
        ? t
        : l === r("AdsAPIObjectives").CONVERSIONS &&
            o(
              "AdsDeliveryUIConstants",
            ).OPTIMIZATION_GOALS_DO_NOT_NEED_CUSTOM_CONVERSION_EVENT.includes(
              e.optimizationGoal,
            )
          ? o(
              "AdsAdgroupTrackingSpecUpdateUtils",
            ).mergeWithNewPixelTrackingSpec(
              o("AdsAdgroupTrackingSpecsUtils").getTrackingSpecFromPixelID(
                s[0].id,
              ),
              t,
            )
          : t;
    }
    function u(e, t, n, a) {
      var i = a === r("AdsPromotedObjectTypes").REMINDER,
        l = o(
          "ReminderAdsGating",
        ).isSupportedAdsWithReminderObjectiveAndOptimization(
          t.objective,
          n.optimization_goal,
        );
      return !i && !l
        ? o(
            "AdsUEditorAdgroupUpcomingEventsMutator",
          ).resetUpcomingEventAndUpdateUpcomingEventMetadataForIncompatibility(
            e,
            o("AdsUEditorAdgroupUpcomingEventsMutator")
              .ResetUpcomingEventSpecReason.OPTIMIZATION_GOAL_CHANGED,
          )
        : e;
    }
    function c(e, t, n, a, i, l, s) {
      var u = o(
        "ReminderAdsGating",
      ).isEventDetectionSupportedForObjectiveAndOptimization(
        t.objective,
        n.optimization_goal,
      );
      return o(
        "AdsUEditorAdgroupUpcomingEventMetadataMutators",
      ).updateAdForUpcomingEventMetadata(
        e,
        a == null ? void 0 : a[e.id],
        null,
        null,
        r("nullthrows")(i == null ? void 0 : i.get(e.id)),
        l,
        u,
        t.objective,
        n.optimization_goal,
        s,
        n,
        t,
      );
    }
    var d = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            pixelsLoadObject: r("adsSignalsPixelsSelector"),
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (t, n, a) {
            var l = a.parentData,
              d = a.pixelsLoadObject,
              m = a.plugins,
              p = n.adgroupIDs;
            if (p == null) return t;
            var _ = o("AdsUEditorContextFactory").getForIDs(
                r("AdsEditingAdgroupContext"),
                p,
                i.id,
              ),
              f = o(
                "adsUeditorBulkSelectedLinkTypeSelector",
              ).adsUEditorAdsAdObjectLinkTypeMapSelector(_),
              g = r(
                "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
              )(_),
              h = r("adsUEditorAdgroupOCRTextSelector")(_);
            return o("AdsMutators").mutateEach(t, p, function (t, r) {
              var a = l.get(r);
              if (a == null) return t;
              var i = a.campaign,
                p = a.campaignGroup,
                _ = a.specPlugin,
                y = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                  p.objective,
                  i,
                );
              return o("AdsMutators").chain(
                function (t) {
                  return e(t, n, p, i, y, _);
                },
                function (e) {
                  return s(n, e, p, d, y);
                },
                function (e) {
                  return u(e, p, i, y);
                },
                function (e) {
                  return c(e, p, i, f, m, g, h);
                },
              )(t);
            });
          },
          o("AdsUEditorCampaignDeliveryChangeOptimizationGoalActionFlux")
            .actionType,
        ),
      },
      m = d;
    l.default = m;
  },
  98,
);
