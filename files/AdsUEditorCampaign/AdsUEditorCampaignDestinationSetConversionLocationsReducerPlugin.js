__d(
  "AdsUEditorCampaignDestinationSetConversionLocationsReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignDestinationSetConversionLocationsActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "adsReconcileDeviceIndividualSetting",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs,
              a = t.conversionLocationType,
              i = t.objective;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              var t = r("AdsCampaignRecordAccessors").conversion_locations.set(
                a,
                e,
              );
              return (
                a === r("AdsPromotedObjectTypes").WEBSITE_AND_MESSAGES &&
                  (t = r("AdsCampaignRecordAccessors").destination_type.set(
                    r("AdCampaignDestination").WEBSITE_AND_MESSAGES,
                    t,
                  )),
                i != null &&
                  i !== r("AdsAPIObjectives").NONE &&
                  (t = r("adsReconcileDeviceIndividualSetting")(i)(t)),
                t
              );
            });
          },
          r("AdsUEditorCampaignDestinationSetConversionLocationsActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
