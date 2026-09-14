__d(
  "restoreMessageMarketingAudiencesAndPlacementCampaignMutator",
  [
    "AdsMutators",
    "nullthrows",
    "setMarketingMessageWhatsappChannelMutator",
    "setMarketingMessageWhatsappSubscriberUniverseMutator",
    "setMessageMarketingExcludedAudiencesCampaignMutator",
    "setMessageMarketingIncludedAudiencesCampaignMutator",
    "setMessageMarketingPlacementMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s) {
      return n == null && a == null
        ? e
        : o("AdsMutators").chain(
            function (e) {
              return (
                a != null &&
                  r("setMarketingMessageWhatsappSubscriberUniverseMutator")(
                    e,
                    a,
                  ),
                r("setMarketingMessageWhatsappChannelMutator")(
                  e,
                  r("nullthrows")(n),
                )
              );
            },
            function (e) {
              return r("setMessageMarketingExcludedAudiencesCampaignMutator")(
                e,
                l,
              );
            },
            function (e) {
              return r("setMessageMarketingIncludedAudiencesCampaignMutator")(
                e,
                i,
              );
            },
            function (e) {
              return s ? r("setMessageMarketingPlacementMutator")(e, t) : e;
            },
          )(e);
    }
    l.default = e;
  },
  98,
);
