__d(
  "AdsUEditorAppDataFieldReducerPlugin",
  [
    "AdsDeliveryOmnichannelUtils",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorSetAppDatasetFieldsDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              o("AdsMutators").chain(function (e) {
                return o(
                  "AdsDeliveryOmnichannelUtils",
                ).setAppObjectForOmnichannelObject(
                  e,
                  t.appID,
                  Array.from(t.objectStoreURLs),
                );
              }),
            );
          },
          o("AdsUEditorSetAppDatasetFieldsDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
