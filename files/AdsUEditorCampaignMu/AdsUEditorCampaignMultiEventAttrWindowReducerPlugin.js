__d(
  "AdsUEditorCampaignMultiEventAttrWindowReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignMultiEventAttrWindowActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return r(
                "AdsCampaignRecordAccessors",
              ).multi_event_conversion_attribution_window_seconds.set(
                t.windowSeconds,
                e,
              );
            });
          },
          o("AdsUEditorCampaignMultiEventAttrWindowActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
