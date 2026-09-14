__d(
  "AdsCampaignPlacementAddWhatsAppMessageMarketingReducerPlugin",
  [
    "AdsCampaignPlacementAddWhatsAppMessageMarketingActionFlux",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "gkx",
    "setMarketingMessageWhatsappChannelMutator",
    "setMarketingMessageWhatsappSubscriberUniverseMutator",
    "setMessageMarketingPlacementMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n,
              a = (n = t.shouldSetMarketingMessageChannel) != null ? n : !1;
            return r("gkx")("11469")
              ? o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
                  var n = t.whatsAppSubscriberPoolID;
                  return o("AdsMutators").chain(
                    function (e) {
                      return a && n != null
                        ? r(
                            "setMarketingMessageWhatsappSubscriberUniverseMutator",
                          )(e, n)
                        : e;
                    },
                    function (e) {
                      return r("setMessageMarketingPlacementMutator")(
                        e,
                        t.eligibilityInformation,
                      );
                    },
                  )(e);
                })
              : o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
                  var n,
                    i =
                      (n = e.promoted_object) == null
                        ? void 0
                        : n.whats_app_business_phone_number_id;
                  return i == null
                    ? e
                    : o("AdsMutators").chain(
                        function (e) {
                          return a
                            ? r("setMarketingMessageWhatsappChannelMutator")(
                                e,
                                i,
                              )
                            : e;
                        },
                        function (e) {
                          return r("setMessageMarketingPlacementMutator")(
                            e,
                            t.eligibilityInformation,
                          );
                        },
                      )(e);
                });
          },
          [
            r("AdsCampaignPlacementAddWhatsAppMessageMarketingActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
