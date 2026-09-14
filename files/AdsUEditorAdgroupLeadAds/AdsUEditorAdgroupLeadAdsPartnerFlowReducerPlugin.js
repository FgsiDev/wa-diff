__d(
  "AdsUEditorAdgroupLeadAdsPartnerFlowReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupLeadAdsPartnerFlowUpdateActionFlux",
    "AdsUEditorAdgroupLeadNurtureChannelsMutator",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                return t.partnerFlowID == null
                  ? o(
                      "AdsUEditorAdgroupLeadNurtureChannelsMutator",
                    ).unsetB2PMessagingPartnerFlowField(e)
                  : o(
                      "AdsUEditorAdgroupLeadNurtureChannelsMutator",
                    ).setB2PMessagingPartnerFlowField(e, t.partnerFlowID);
              },
            );
          },
          r("AdsUEditorAdgroupLeadAdsPartnerFlowUpdateActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
