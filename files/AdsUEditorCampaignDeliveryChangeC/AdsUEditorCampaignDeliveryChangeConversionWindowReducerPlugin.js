__d(
  "AdsUEditorCampaignDeliveryChangeConversionWindowReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryChangeConversionWindowActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "adsDeliveryUpdateSingleAttrWindow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n = e.attribution_spec;
              return r("AdsCampaignRecordAccessors").attribution_spec.set(
                r("adsDeliveryUpdateSingleAttrWindow")(
                  n == null ? [] : n.toJS(),
                  t.eventType,
                  t.windowDays,
                ),
                e,
              );
            });
          },
          o("AdsUEditorCampaignDeliveryChangeConversionWindowActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
