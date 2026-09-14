__d(
  "AdsUEditorAdgroupCampaignSetDeliveryOptimizationGoalReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIOptimizationGoals",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedSimpleFieldCheckUtils",
    "AdsBulkValueUtils",
    "AdsDCOUtils",
    "AdsEditingAdgroupContext",
    "AdsMutators",
    "AdsODAXAdgroupReducerUtils",
    "AdsODAXUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
    "AdsUEditorAdgroupUpcomingEventsMutator",
    "AdsUEditorCampaignSetDeliveryActionFlux",
    "AdsUEditorContextFactory",
    "AdsUEditorHostIDs",
    "ReminderAdsGating",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupOCRTextSelector",
    "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
    "adsUeditorBulkSelectedLinkTypeSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "optimization_goal";
    function u(e, t, n, a, i, l, s) {
      var u;
      if (
        n != null &&
        (u = e.campaignsNeedResetAdgroups) != null &&
        u.has(n.campaign.id)
      ) {
        var c = o("AdsODAXUtils").maybeTranslateObjective(
            n.campaignGroup.objective,
            s,
            n.campaign.optimization_goal,
          ),
          d = o(
            "AdsODAXAdgroupReducerUtils",
          ).getDefaultAdgroupForNewMappedObjective(
            a,
            i,
            babelHelpers.extends({}, t, { mappedObjective: c }),
          );
        return o("AdsAssetFeedSimpleFieldCheckUtils").isRegularDCOCampaign(
          n.campaign,
        )
          ? o("AdsDCOUtils").convertStorySpecAdToDCOAd(d, c, {
              hostID: r("AdsUEditorHostIDs").EDITING,
            })
          : d;
      }
      var m = r(
        "AdsAdgroupRecordAccessors",
      ).creative.template_url_spec.config.app_id.get(a);
      return m != null || l == null
        ? a
        : o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.applink_treatment.set(
              "deeplink_with_web_fallback",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.template_url_spec.config.app_id.set(l),
          )(a);
    }
    var c = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignsMap: (e = o(
              "AdsUEditorAdgroupSelectors",
            )).adObjectsList.mapTransform(function (e) {
              var t = e.campaign;
              return t;
            }),
            parentData: e.adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            plugins: e.adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
            specialAdCategoriesMap: e.adObjectsList.mapTransform(function (e) {
              var t = e.campaignGroup;
              return t.special_ad_categories;
            }),
          },
          function (e, t, n) {
            var a,
              l = o("AdsBulkValueUtils").getUniformValueOrDefault(
                t.deliverySpec[s],
              ),
              c =
                l === r("AdsAPIOptimizationGoals").VALUE ||
                l === r("AdsAPIOptimizationGoals").RETURN_ON_AD_SPEND,
              d = l === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS || c,
              m = d ? ((a = t.appAEMApps[0]) == null ? void 0 : a.appID) : null,
              p = o("AdsUEditorContextFactory").getForIDs(
                r("AdsEditingAdgroupContext"),
                t.adgroupIDs,
                i.id,
              ),
              _ = o(
                "adsUeditorBulkSelectedLinkTypeSelector",
              ).adsUEditorAdsAdObjectLinkTypeMapSelector(p),
              f = r(
                "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
              )(p),
              g = r("adsUEditorAdgroupOCRTextSelector")(p);
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, a) {
                var i = e,
                  l = n.parentData.get(a),
                  s = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                    l == null ? void 0 : l.campaignGroup.objective,
                    l == null ? void 0 : l.campaign,
                  );
                return (
                  (i = o("AdsMutators").chain(
                    function (e) {
                      return m != null || t.campaignsNeedResetAdgroups != null
                        ? u(t, n, l, e, a, m, s)
                        : e;
                    },
                    function (e) {
                      return l != null &&
                        s !== r("AdsPromotedObjectTypes").REMINDER &&
                        !o(
                          "ReminderAdsGating",
                        ).isSupportedAdsWithReminderObjectiveAndOptimization(
                          l.campaignGroup.objective,
                          l.campaign.optimization_goal,
                        )
                        ? o(
                            "AdsUEditorAdgroupUpcomingEventsMutator",
                          ).resetUpcomingEventAndUpdateUpcomingEventMetadataForIncompatibility(
                            e,
                            o("AdsUEditorAdgroupUpcomingEventsMutator")
                              .ResetUpcomingEventSpecReason
                              .OPTIMIZATION_GOAL_CHANGED,
                          )
                        : e;
                    },
                    function (e) {
                      var t,
                        a,
                        i,
                        s,
                        u,
                        c = o(
                          "ReminderAdsGating",
                        ).isEventDetectionSupportedForObjectiveAndOptimization(
                          l == null ? void 0 : l.campaignGroup.objective,
                          l == null ? void 0 : l.campaign.optimization_goal,
                        );
                      return o(
                        "AdsUEditorAdgroupUpcomingEventMetadataMutators",
                      ).updateAdForUpcomingEventMetadata(
                        e,
                        _ == null ? void 0 : _[e.id],
                        null,
                        null,
                        r("nullthrows")(
                          (t = n.plugins) == null ? void 0 : t.get(e.id),
                        ),
                        f,
                        c,
                        (a = l == null ? void 0 : l.campaignGroup.objective) !=
                          null
                          ? a
                          : null,
                        (i =
                          l == null ? void 0 : l.campaign.optimization_goal) !=
                          null
                          ? i
                          : null,
                        g,
                        (s = l == null ? void 0 : l.campaign) != null
                          ? s
                          : null,
                        (u = l == null ? void 0 : l.campaignGroup) != null
                          ? u
                          : null,
                      );
                    },
                  )(e)),
                  i
                );
              },
            );
          },
          o("AdsUEditorCampaignSetDeliveryActionFlux").actionType,
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
