__d(
  "AdsUEditorCampaignSetFacebookDestinationTypeReducerPlugin",
  [
    "AccountAttributionEvent",
    "AdCampaignDestination",
    "AdsAPIBillingEvents",
    "AdsAPIOptimizationGoals",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetFacebookDestinationTypeActionFlux",
    "adsDeliveryUpdateClickThroughAttributionWindow",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n = e;
              if (
                ((t.adCampaignDestinationType ===
                  r("AdCampaignDestination").FACEBOOK ||
                  t.adCampaignDestinationType ===
                    r("AdCampaignDestination").WEBSITE) &&
                  (n = r("AdsCampaignRecordAccessors").destination_type.set(
                    t.adCampaignDestinationType,
                    n,
                  )),
                t.adCampaignDestinationType ===
                  r("AdCampaignDestination").FACEBOOK)
              ) {
                var o, a;
                ((n = r("AdsCampaignRecordAccessors").optimization_goal.set(
                  r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
                  n,
                )),
                  (n = r("AdsCampaignRecordAccessors").billing_event.set(
                    r("AdsAPIBillingEvents").IMPRESSIONS,
                    n,
                  )),
                  (n = r("AdsCampaignRecordAccessors").attribution_spec.set(
                    r("immutable").fromJS(
                      r("adsDeliveryUpdateClickThroughAttributionWindow")(
                        (o =
                          (a = e.attribution_spec) == null
                            ? void 0
                            : a.toJS()) != null
                          ? o
                          : [
                              {
                                event_type: r("AccountAttributionEvent")
                                  .CLICK_THROUGH,
                                window_days: 7,
                              },
                            ],
                        7,
                      ),
                    ),
                    n,
                  )),
                  (n = r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.custom_event_type.set("LEAD", n)));
              }
              return n;
            });
          },
          o("AdsUEditorCampaignSetFacebookDestinationTypeActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
