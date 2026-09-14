__d(
  "AdsUEditorCampaignDeselectMessagingAppsLinkTypeReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignDeselectMessagingAppsLinkTypeDataActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorMessagingDestinationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var t = e,
                n = r("AdsCampaignRecordAccessors").destination_type.get(e);
              return (
                o(
                  "AdsUEditorMessagingDestinationUtils",
                ).isClickToMessageAdDestination(n) &&
                  (t = o("AdsMutators").chain(
                    r("AdsCampaignRecordAccessors").destination_type.delete,
                  )(t)),
                t
              );
            });
          },
          o("AdsUEditorCampaignDeselectMessagingAppsLinkTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
