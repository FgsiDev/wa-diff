__d(
  "AdsUEditorCampaignSetIsSKAdNetworkAttributionReducerPlugin",
  [
    "AEMv2AdCampaignAttribution",
    "AdsAPIBillingEvents",
    "AdsAPIOptimizationGoals",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupSetIsSKAdNetworkAttributionActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "adsDeliveryUpdateClickThroughAttributionWindow",
    "adsDeliveryUpdateEngagedVideoViewAttributionWindow",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              if (t.isIOS14PlusCardToggled) {
                var n =
                  e.optimization_goal ===
                  r("AdsAPIOptimizationGoals").LINK_CLICKS
                    ? o("AdsMutators").chain(
                        r("AdsCampaignRecordAccessors").optimization_goal.set(
                          r("AdsAPIOptimizationGoals").APP_INSTALLS,
                        ),
                      )(e)
                    : e;
                return (
                  (n = r("AdsCampaignRecordAccessors").attribution_spec.set(
                    r("immutable").fromJS(
                      r("adsDeliveryUpdateClickThroughAttributionWindow")(
                        r("nullthrows")(e.attribution_spec).toJS(),
                        1,
                      ),
                    ),
                    n,
                  )),
                  (n = r("AdsCampaignRecordAccessors").attribution_spec.set(
                    r("immutable").fromJS(
                      r("adsDeliveryUpdateEngagedVideoViewAttributionWindow")(
                        r("nullthrows")(e.attribution_spec).toJS(),
                        null,
                      ),
                    ),
                    n,
                  )),
                  (n = r("AdsCampaignRecordAccessors").billing_event.set(
                    r("AdsAPIBillingEvents").IMPRESSIONS,
                    n,
                  )),
                  t.isSKAdNetworkAttribution === !1 &&
                    (n = r(
                      "AdsCampaignRecordAccessors",
                    ).campaign_attribution.set(
                      r("AEMv2AdCampaignAttribution").AEM,
                      n,
                    )),
                  n
                );
              } else {
                var a =
                  e.optimization_goal === r("AdsAPIOptimizationGoals").VALUE ||
                  e.optimization_goal ===
                    r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
                return a && !t.isSmartAppPromotion
                  ? r("AdsCampaignRecordAccessors").attribution_spec.set(
                      r("immutable").fromJS(
                        r("adsDeliveryUpdateClickThroughAttributionWindow")(
                          r("nullthrows")(e.attribution_spec).toJS(),
                          7,
                        ),
                      ),
                      e,
                    )
                  : e;
              }
            });
          },
          [
            r("AdsUEditorCampaignGroupSetIsSKAdNetworkAttributionActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
