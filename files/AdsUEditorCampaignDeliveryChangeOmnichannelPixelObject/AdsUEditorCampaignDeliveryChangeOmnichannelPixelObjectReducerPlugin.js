__d(
  "AdsUEditorCampaignDeliveryChangeOmnichannelPixelObjectReducerPlugin",
  [
    "AdsAPIOmnichannelConversionEventType",
    "AdsCampaignRecordAccessors",
    "AdsDeliveryOmnichannelUtils",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryChangeOmnichannelPixelObjectActionFlux",
    "AdsUEditorCampaignGroupsAreASASelectors",
    "AdsUEditorCampaignReducerUtils",
    "adsUEditorCampaignIsShopsAdsIncentiveProgramSelectors",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            isShopAdsIncentiveProgram: o(
              "adsUEditorCampaignIsShopsAdsIncentiveProgramSelectors",
            ).adsUEditorCampaignIsSomeShopsAdsIncentiveProgramSelector,
            isASACampaign: o("AdsUEditorCampaignGroupsAreASASelectors")
              .areSomeCampaignGroupsASASelector,
          },
          function (e, t, n) {
            var a = n.isASACampaign,
              i = n.isShopAdsIncentiveProgram;
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n,
                l,
                s = e;
              if (t.clear === !0)
                return (
                  a ||
                    (s = o(
                      "AdsDeliveryOmnichannelUtils",
                    ).setEventTypeForOmnichannelAppObject(s, null)),
                  (s = r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.custom_attribution_source_ids.delete(s)),
                  r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.omnichannel_object.pixel.set(
                    r("immutable").List(),
                    s,
                  )
                );
              var u = t.pixelData;
              if (u == null || (u == null ? void 0 : u.pixel_id) == null)
                return s;
              var c =
                  ((n = s.promoted_object) == null ||
                  (n = n.omnichannel_object) == null
                    ? void 0
                    : n.pixel) || r("immutable").List(),
                d = (l = c.get(0)) != null ? l : r("immutable").Map(),
                m = d.merge(r("immutable").Map(u));
              return (
                (i || a) &&
                  (m = m.set(
                    "custom_event_type",
                    r("AdsAPIOmnichannelConversionEventType").PURCHASE,
                  )),
                r(
                  "AdsCampaignRecordAccessors",
                ).promoted_object.omnichannel_object.pixel.set(
                  r("immutable").List([m]),
                  s,
                )
              );
            });
          },
          o("AdsUEditorCampaignDeliveryChangeOmnichannelPixelObjectActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
