__d(
  "AdsUEditorSetMarketingMessageWhatsAppChannelReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorSetMarketingMessageWhatsAppChannelActionFlux",
    "gkx",
    "nullthrows",
    "setMarketingMessageWhatsappChannelMutator",
    "setMarketingMessageWhatsappSubscriberUniverseMutator",
    "setMessageMarketingPlacementAndDownstreamSettingsMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
          },
          function (e, t, n) {
            var a = n.eligibilityInformation;
            if (r("gkx")("11469")) {
              var i = t.whatsAppSubscriberPoolID;
              return i == null
                ? e
                : o("AdsMutators").mutateEach(
                    e,
                    t.campaignIDs,
                    o("AdsMutators").chain(
                      function (e) {
                        return r(
                          "setMarketingMessageWhatsappSubscriberUniverseMutator",
                        )(e, i);
                      },
                      function (e) {
                        return t.shouldSkipDownstreamSettings === !0
                          ? e
                          : r(
                              "setMessageMarketingPlacementAndDownstreamSettingsMutator",
                            )(e, t.hostID, a);
                      },
                    ),
                  );
            }
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              o("AdsMutators").chain(
                function (e) {
                  var t,
                    n = r("nullthrows")(
                      (t = e.promoted_object) == null
                        ? void 0
                        : t.whats_app_business_phone_number_id,
                    );
                  return r("setMarketingMessageWhatsappChannelMutator")(e, n);
                },
                function (e) {
                  return t.shouldSkipDownstreamSettings === !0
                    ? e
                    : r(
                        "setMessageMarketingPlacementAndDownstreamSettingsMutator",
                      )(e, t.hostID, a);
                },
              ),
            );
          },
          [
            r("AdsUEditorSetMarketingMessageWhatsAppChannelActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
