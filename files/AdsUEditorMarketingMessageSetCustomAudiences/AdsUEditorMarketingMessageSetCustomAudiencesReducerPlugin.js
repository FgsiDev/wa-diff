__d(
  "AdsUEditorMarketingMessageSetCustomAudiencesReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorMarketingMessageSetCustomAudiencesActionFlux",
    "MessageMarketingMessengerSelectPageActionFlux",
    "gkx",
    "immutable",
    "setMessageMarketingIncludedAudiencesCampaignMutator",
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
              function (e, n) {
                var o = r("gkx")("26282");
                return o
                  ? r(
                      "AdsCampaignRecordAccessors",
                    ).targeting.custom_audiences.set(
                      r("immutable").fromJS(t.customAudiences),
                      e,
                    )
                  : r("setMessageMarketingIncludedAudiencesCampaignMutator")(
                      e,
                      t.customAudiences,
                      t.isSeperateTabWCA,
                    );
              },
            );
          },
          [
            r("AdsUEditorMarketingMessageSetCustomAudiencesActionFlux")
              .actionType,
            r("MessageMarketingMessengerSelectPageActionFlux").actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
