__d(
  "AdsUEditorCAASCampaignSetDestinationTypeReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorCAASCampaignSetDestinationTypeActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs,
              a = t.promotedObjectType;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              return a === r("AdsPromotedObjectTypes").WEB_AND_APP
                ? r("AdsCampaignRecordAccessors").destination_type.set(
                    r("AdCampaignDestination").UNDEFINED,
                  )(e)
                : a === r("AdsPromotedObjectTypes").WEBSITE ||
                    a === r("AdsPromotedObjectTypes").PIXEL
                  ? r("AdsCampaignRecordAccessors").destination_type.set(
                      r("AdCampaignDestination").WEBSITE,
                    )(e)
                  : e;
            });
          },
          r("AdsUEditorCAASCampaignSetDestinationTypeActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
