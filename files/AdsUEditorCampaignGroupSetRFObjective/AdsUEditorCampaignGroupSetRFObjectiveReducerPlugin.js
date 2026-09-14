__d(
  "AdsUEditorCampaignGroupSetRFObjectiveReducerPlugin",
  [
    "AdsAPICampaignGroupRecord",
    "AdsBuyingTypes",
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetRFObjectiveActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignGroupIDs,
              function (e, n) {
                var o,
                  a = new (r("AdsAPICampaignGroupRecord"))(
                    ((o = {}),
                    (o.name = e.name),
                    (o.id = n),
                    (o.buying_type = r("AdsBuyingTypes").RESERVED),
                    (o.lightweight_split_test = e.lightweight_split_test),
                    (o.objective = t.newObjective),
                    (o.special_ad_categories = e.special_ad_categories),
                    (o.status = "ACTIVE"),
                    (o.source_campaign_id = e.source_campaign_id),
                    o),
                  );
                return (
                  e.is_odax_campaign_group != null &&
                    (a = r(
                      "AdsCampaignGroupRecordAccessors",
                    ).is_odax_campaign_group.set(e.is_odax_campaign_group, a)),
                  a
                );
              },
            );
          },
          o("AdsUEditorCampaignGroupSetRFObjectiveActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
