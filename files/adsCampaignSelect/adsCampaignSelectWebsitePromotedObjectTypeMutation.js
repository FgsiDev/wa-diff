__d(
  "adsCampaignSelectWebsitePromotedObjectTypeMutation",
  [
    "AdsAPICampaignRecordUtilsShared",
    "AdsAPIObjectives",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsCampaignOptimizationPluginResolver",
    "AdsCampaignRawSpecUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsOptimizationMutationUtils",
    "AdsPlacementUtils",
    "AdsPromotedObjectTypes",
    "adsCampaignGroupBudgetGetDefaultOptimizationGoalParams",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "immutable",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a,
        i,
        l,
        s,
        u,
        c,
        d = e,
        m = n.capabilities;
      ((d = (c = r("AdsCampaignRecordAccessors")).destination_type.set(
        null,
        d,
      )),
        (d = o("AdsMutators").chain(
          c.promoted_object.application_id.delete,
          c.promoted_object.custom_conversion_id.delete,
          c.promoted_object.custom_event_type.delete,
          c.promoted_object.custom_event_str.delete,
          c.promoted_object.object_store_url.delete,
          c.promoted_object.object_store_urls.delete,
          c.promoted_object.offer_id.delete,
          c.promoted_object.offline_conversion_data_set_id.delete,
          c.promoted_object.page_whatsapp_number_id.delete,
          c.targeting.app_install_state.delete,
          c.targeting.is_whatsapp_destination_ad.delete,
          c.targeting.user_device.delete,
          c.targeting.user_os.delete,
          function (e) {
            var n;
            return o("AdsCampaignLiveVideoAdsUtils").maybeSetLiveVideoAdType(
              e,
              t == null || (n = t.promoted_object) == null
                ? void 0
                : n.live_video_destination,
            );
          },
        )(d)),
        t.objective === r("AdsAPIObjectives").LINK_CLICKS &&
          (d = r("AdsCampaignRecordAccessors").promoted_object.page_id.delete(
            d,
          )));
      var p = t.buying_type,
        _ = (a = d.is_dynamic_creative_optimization) != null ? a : void 0,
        f = !!((i = d.promoted_object) != null && i.offer_id),
        g = (l = d.promoted_object) == null ? void 0 : l.object_store_url,
        h = d.optimization_goal,
        y = (s = d.promoted_object) == null ? void 0 : s.page_id,
        C = !!d.targeting.direct_install_devices,
        b = d.targeting.geo_locations,
        v = o(
          "AdsAPICampaignRecordUtilsShared",
        ).getIsWhatsAppMarketingMessagesActiveByDefault(e),
        S = r("AdsPlacementUtils").getAutomaticCampaignPlacement({
          account: n,
          objective: t.objective,
          buyingType: p,
          capabilities: m,
          promotedObjectType: r("AdsPromotedObjectTypes").WEBSITE,
          objectStoreURL: g,
          promotedPageID: y,
          containsOffer: f,
          optimizationGoal: h,
          containsDCO: _,
          directInstallDevices: C,
          targetingGeoLocations: b != null ? b.toJS() : null,
          isWhatsAppMarketingMessagesActiveByDefault: v,
        });
      ((d = o("AdsCampaignRawSpecUtils").setCampaignPlacement(d, S)),
        (d = r("AdsCampaignRecordAccessors").placement.set(
          r("immutable").fromJS(
            o(
              "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
            ).convertCampaignRecordToPlacementSpec(d),
          ),
          d,
        )));
      var R = (u = d.saved_audience) == null ? void 0 : u.id;
      r("isTruthy")(R) &&
        (d = r("AdsCampaignRecordAccessors").saved_audience_id.set(R, d));
      var L = r("adsCampaignGroupBudgetGetDefaultOptimizationGoalParams")(
          n,
          t,
          d,
        ),
        E = r("AdsCampaignOptimizationPluginResolver").resolve({
          objective: t.objective,
          promotedObjectType: r("AdsPromotedObjectTypes").WEBSITE,
          destinationType: d.destination_type,
        });
      return (
        (d = o("AdsOptimizationMutationUtils").resetOptimizationRelatedFields(
          n,
          d,
          E,
          t.objective,
          L,
          void 0,
        )),
        d
      );
    }
    l.default = e;
  },
  98,
);
