__d(
  "AdsUEditorAdgroupRemoveCustomizationImageReducerPlugin",
  [
    "AdsAdgroupGenerativeAssetSpecMutators",
    "AdsAssetFeedUtils",
    "AdsMutators",
    "AdsSelectedPreviewLoadScenarioLogger",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAudiosAdsMutators",
    "AdsUEditorAdgroupBadges",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveCustomizationImageDataActionFlux",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
    "AdsUEditorAdgroupUpcomingEventsMutator",
    "AdsUEditorPartnerAppWelcomeMessageFlowUtils",
    "adsPlacementAssetMutationRemoveCustomizationImage",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupOCRTextSelector",
    "adsUEditorAdgroupsEligibleForEventDetectionSelector",
    "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
    "adsUeditorBulkSelectedLinkTypeSelector",
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
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
            linkTypeMap: o("adsUeditorBulkSelectedLinkTypeSelector")
              .adsUEditorAdsAdObjectLinkTypeMapSelector,
            account: r("adsUEditorAccountSelector"),
            remindersAdsDefaultOptIn: r(
              "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
            ),
            eligibleForEventDetection: r(
              "adsUEditorAdgroupsEligibleForEventDetectionSelector",
            ),
            ocrText: r("adsUEditorAdgroupOCRTextSelector"),
          },
          function (e, t, n) {
            var a = n.account,
              l = n.eligibleForEventDetection,
              s = n.linkTypeMap,
              u = n.ocrText,
              c = n.parentData,
              d = n.plugins,
              m = n.remindersAdsDefaultOptIn,
              p = o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                var n,
                  i,
                  p,
                  _,
                  f = e,
                  g = r("nullthrows")(d.get(e.id)),
                  h = o(
                    "AdsUEditorAdgroupAudiosAdsMutators",
                  ).getAudioDataSpecField(f),
                  y = o(
                    "AdsUEditorPartnerAppWelcomeMessageFlowUtils",
                  ).getPartnerAppFlowIdFromAssetFeedSpec(f);
                ((f = r("adsPlacementAssetMutationRemoveCustomizationImage")(
                  e,
                  g,
                  t.label,
                  "REMOVE_CUSTOMIZATION_IMAGE",
                  !0,
                  !1,
                  a,
                )),
                  (f = o("AdsUEditorAdgroupBadges").restoreBadgeSets(e, f)),
                  (f = o(
                    "AdsUEditorAdgroupUpcomingEventsMutator",
                  ).copyUpcomingEvent(e, f)));
                var C = c == null ? void 0 : c.get(e.id);
                return (
                  (f = o(
                    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
                  ).updateAdForUpcomingEventMetadata(
                    f,
                    s == null ? void 0 : s[e.id],
                    null,
                    null,
                    g,
                    m,
                    l,
                    (n = C == null ? void 0 : C.campaignGroup.objective) != null
                      ? n
                      : null,
                    (i = C == null ? void 0 : C.campaign.optimization_goal) !=
                      null
                      ? i
                      : null,
                    u,
                    (p = C == null ? void 0 : C.campaign) != null ? p : null,
                    (_ = C == null ? void 0 : C.campaignGroup) != null
                      ? _
                      : null,
                  )),
                  (f = o(
                    "AdsUEditorAdgroupAudiosAdsMutators",
                  ).updateAFSAudioSpecField(f, h)),
                  (f = o(
                    "AdsUEditorPartnerAppWelcomeMessageFlowUtils",
                  ).updateAFSPartnerAppFlowField(f, y)),
                  (f = o(
                    "AdsAdgroupGenerativeAssetSpecMutators",
                  ).mayDeleteGenAIAssetSpecIfBaseAssetChanged(e, f)),
                  o("AdsAssetFeedUtils").restoreOnsiteDestinations(e, f)
                );
              }),
              _ = p.findKey(function (e) {
                return (
                  e.hasValue() &&
                  o("AdsAssetFeedUtils").isPACAdgroupFromRecord(
                    e.getValueEnforcing(),
                  )
                );
              });
            return (
              _ == null &&
                o(
                  "AdsSelectedPreviewLoadScenarioLogger",
                ).shouldStartPreviewLoadScenario(t.hostID) &&
                o("AdsSelectedPreviewLoadScenarioLogger").startScenario(
                  "switch_to_non_pac",
                  i.id,
                  t.adgroupIDs,
                ),
              p
            );
          },
          o("AdsUEditorAdgroupRemoveCustomizationImageDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
