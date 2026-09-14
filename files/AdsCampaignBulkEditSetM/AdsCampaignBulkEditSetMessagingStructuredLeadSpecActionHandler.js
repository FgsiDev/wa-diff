__d(
  "AdsCampaignBulkEditSetMessagingStructuredLeadSpecActionHandler",
  [
    "AdsBulkEditActionHandlerUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignSetMessagingStructuredLeadSpecActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o("AdsUEditorCampaignSetMessagingStructuredLeadSpecActionFlux")
          .actionType,
        fluxInputs: {},
        mutate: function (t, n, a) {
          var e = t.campaignIDs,
            i = t.spec;
          if (i == null) return n;
          var l = o("AdsMutators").mutateEach(
            o("AdsBulkEditActionHandlerUtils").convertToDraftStoreStateShape(
              n,
              e,
            ),
            e,
            function (e) {
              return e.setIn(["messaging_structured_lead_spec"], i);
            },
          );
          return o("AdsBulkEditActionHandlerUtils").mergeState(
            r("AdsCampaignBulkEditColumnKeys")
              .CAMPAIGN_MESSAGING_STRUCTURED_LEAD_SPEC,
            e,
            n,
            l,
            r("AdsCampaignRecordAccessors").messaging_structured_lead_spec.get,
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
