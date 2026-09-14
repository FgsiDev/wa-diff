__d(
  "AdsUEditorCampaignCustomerAcquisitionSetIsTurnedOnReducerPlugin",
  [
    "AdsUEditorCampaignCustomerAcquisitionMutationUtils",
    "AdsUEditorCampaignCustomerAcquisitionSetIsTurnedOnActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o(
              "AdsUEditorCampaignCustomerAcquisitionMutationUtils",
            ).setNCAIsTurnedOnForEach(
              e,
              t.campaignIDs,
              t.turnedOn,
              t.existingCustomers,
            );
          },
          [
            o("AdsUEditorCampaignCustomerAcquisitionSetIsTurnedOnActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
