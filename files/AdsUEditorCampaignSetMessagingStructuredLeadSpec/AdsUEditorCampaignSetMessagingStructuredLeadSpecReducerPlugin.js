__d(
  "AdsUEditorCampaignSetMessagingStructuredLeadSpecReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetMessagingStructuredLeadSpecActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return e.setIn(["messaging_structured_lead_spec"], t.spec);
            });
          },
          [
            r("AdsUEditorCampaignSetMessagingStructuredLeadSpecActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
