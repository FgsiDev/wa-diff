__d(
  "AdsAdgroupScheduledLiveVideoFixSpecMutators",
  [
    "AdsAPIObjectives",
    "AdsAdgroupGenerativeAssetSpecMutators",
    "AdsAdgroupLinkPostFormatMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsBrandAwarenessUtils",
    "AdsLiveVideoAdUtils",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupMediaSourcingSpecMutators",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "ApiDynamicCreativeOptimizationTypes",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e;
      return (
        t != null &&
          o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
            t.destination_type,
          ) &&
          ((n = o("AdsUEditorUnifiedCreationAdgroupMutators").setCTAValues(
            n,
            t.destination_type,
          )),
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.additional_data.is_click_to_message.set(
            !0,
            n,
          )),
          (n = o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)
            ? n
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.optimization_type.set(
                r("ApiDynamicCreativeOptimizationTypes")
                  .DOF_MESSAGING_DESTINATION,
                n,
              ))),
        n
      );
    }
    function s(t, n) {
      var r = t,
        a = o(
          "AdsLiveVideoAdUtils",
        ).isCTXMDSpecMismatchedInScheduledLiveVideoAd(t, n);
      return (a && (r = e(r, n)), r);
    }
    function u(e, t, n) {
      var o, a, i, l;
      if (
        !r("justknobx")._("143") ||
        !((o = r("gkx")("414")) != null && o) ||
        (n == null ? void 0 : n.objective) !==
          r("AdsAPIObjectives").OUTCOME_SALES ||
        (t == null ? void 0 : t.conversion_locations) !==
          r("AdsPromotedObjectTypes").PIXEL ||
        ((a = e.creative) == null ? void 0 : a.asset_feed_spec) == null
      )
        return e;
      var s = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_to_action_types.delete(e),
        u =
          (i =
            (l = s.creative) == null || (l = l.asset_feed_spec) == null
              ? void 0
              : l.toJS()) != null
            ? i
            : {};
      return Object.keys(u).length === 0
        ? r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(s)
        : s;
    }
    function c(e, t, n) {
      var a,
        i,
        l = u(e, t, n);
      return (
        o("AdsBrandAwarenessUtils").isBrandObjective(
          n == null ? void 0 : n.objective,
        ) &&
          (n == null ? void 0 : n.is_odax_campaign_group) === !0 &&
          (l = o(
            "AdsUEditorUnifiedCreationAdgroupMutators",
          ).cleanUpMessagingRelatedSpecForAwareness(l)),
        (l = o(
          "AdsAdgroupLinkPostFormatMutators",
        ).removeCreativeAssetGroupsSpecField(l)),
        (l = o(
          "AdsAdgroupGenerativeAssetSpecMutators",
        ).adsDeleteGenAIAssetSpecMutator(l)),
        (l = o(
          "AdsUEditorAdgroupMediaSourcingSpecMutators",
        ).mayRemoveCAGandMSSpecForRelatedMedia(l)),
        (l = o(
          "AdsUEditorAdgroupMultiMediaSpecMutators",
        ).mayDeleteMultiMediaContentFromMSS(l)),
        (l = o("AdsMutators").chain(
          (a = r("AdsAdgroupRecordAccessors").creative) == null ||
            (a = a.portrait_customizations) == null
            ? void 0
            : a.delete,
          (i = r("AdsAdgroupRecordAccessors").metadata) == null ||
            (i = i.carousel_style) == null
            ? void 0
            : i.delete,
        )(l)),
        l
      );
    }
    function d(e, t) {
      var n;
      if (t == null) return e;
      var o =
        (n = e.creative) == null || (n = n.object_story_spec) == null
          ? void 0
          : n.page_id;
      return o != null
        ? e
        : r("AdsAdgroupRecordAccessors").creative.object_story_spec.page_id.set(
            t,
            e,
          );
    }
    function m(e) {
      var t,
        n = e,
        a =
          (t = e.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.video_data) == null
            ? void 0
            : t.page_welcome_message;
      return (
        (n = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.video_data
            .delete,
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.page_welcome_message.set(a),
        )(n)),
        n
      );
    }
    ((l.setCTXMultiSpecForScheduledLiveVideoAd = e),
      (l.fixCTXMDMismatchForScheduledLiveVideoAdIfExist = s),
      (l.mayDeleteAssetFeedSpecForScheduledLiveVideoAd = u),
      (l.clearUnrelatedCreativeForScheduledLiveVideoAd = c),
      (l.restorePageIDForScheduledLiveVideoAd = d),
      (l.clearSelectedVideoForScheduledLiveVideoAd = m));
  },
  98,
);
