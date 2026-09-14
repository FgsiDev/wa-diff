__d(
  "AdsCampaignSelectInstagramLiveVideoAdUtils",
  [
    "AdCampaignDestination",
    "AdsAPIOptimizationGoals",
    "AdsBwIUtils",
    "AdsCampaignOptimizationPluginResolver",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsOptimizationMutationUtils",
    "AdsPageUtils",
    "AdsPlacementReducerUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorLiveVideoAdsOptimizedSettingsUtils",
    "filterNulls",
    "first",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("AdsCampaignOptimizationPluginResolver").resolve({
        objective: e,
        promotedObjectType: r("AdsPromotedObjectTypes").LIVE_VIDEO,
        destinationType: r("AdCampaignDestination").INSTAGRAM_LIVE,
      });
      return t.getDefaultOptimizationGoal({ hasBackingApplication: !1 });
    }
    var s = function (t) {
        var e,
          n =
            t != null && t.hasValueWithoutError()
              ? (e = t == null ? void 0 : t.getValue()) != null
                ? e
                : []
              : [],
          a = r("first")(r("filterNulls")(n));
        return o("AdsPageUtils").getPageID(a);
      },
      u = function (n, a, i, l, s, u, c, d) {
        var t = r("AdsCampaignRecordAccessors").promoted_object.page_id.get(i),
          m = t != null ? t : l,
          p = r("AdsCampaignRecordAccessors").promoted_object.pixel_id.get(i);
        p == null &&
          s != null &&
          s.map(function (e) {
            var t = Array.from(e.keys());
            p = t[0];
          });
        var _ = e(a.objective),
          f = r(
            "AdsCampaignRecordAccessors",
          ).promoted_object.custom_event_type.get(i);
        return o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").promoted_object.delete,
          r("AdsCampaignRecordAccessors").targeting.user_os.delete,
          r("AdsCampaignRecordAccessors").targeting.user_device.delete,
          r("AdsCampaignRecordAccessors").targeting.is_whatsapp_destination_ad
            .delete,
          r("AdsCampaignRecordAccessors").targeting.app_install_state.delete,
          r("AdsCampaignRecordAccessors").optimization_goal.set(_),
          r("AdsCampaignRecordAccessors").destination_type.set(
            r("AdCampaignDestination").INSTAGRAM_LIVE,
          ),
          r("AdsCampaignRecordAccessors").promoted_object.page_id.set(m),
          function (e) {
            return o(
              "AdsUEditorLiveVideoAdsOptimizedSettingsUtils",
            ).applyLVACampaignSettingsOptimization(n, e, d, !0, c);
          },
          function (e) {
            return _ !== r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS ||
              p == null
              ? e
              : o("AdsMutators").chain(
                  r("AdsCampaignRecordAccessors").promoted_object.pixel_id.set(
                    p,
                  ),
                  function (e) {
                    var t =
                      f != null
                        ? f
                        : o(
                            "AdsUEditorLiveVideoAdsOptimizedSettingsUtils",
                          ).getDefaultOffsiteCustomEventType(a.objective);
                    return t != null
                      ? r(
                          "AdsCampaignRecordAccessors",
                        ).promoted_object.custom_event_type.set(t, e)
                      : e;
                  },
                )(e);
          },
          function (e) {
            var t = o("AdsOptimizationMutationUtils").getDefaultAttributionSpec(
              n,
              a.objective,
              r("AdsPromotedObjectTypes").LIVE_VIDEO,
              _,
              null,
              r("AdCampaignDestination").INSTAGRAM_LIVE,
              o("AdsBwIUtils").isBwICampaignGroup(a),
              a.objective,
            ).attribution_spec;
            return r("AdsCampaignRecordAccessors").attribution_spec.set(
              r("immutable").fromJS(t),
              e,
            );
          },
          function (e) {
            return o("AdsPlacementReducerUtils").resetPlacement(e, u);
          },
        )(i);
      };
    ((l.getLiveVideoFallbackPageID = s),
      (l.updateCampaignForInstagramLiveDestination = u));
  },
  98,
);
