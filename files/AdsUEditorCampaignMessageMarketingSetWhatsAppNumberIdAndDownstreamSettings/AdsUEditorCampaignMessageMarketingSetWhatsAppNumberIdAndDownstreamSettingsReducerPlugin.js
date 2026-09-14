__d(
  "AdsUEditorCampaignMessageMarketingSetWhatsAppNumberIdAndDownstreamSettingsReducerPlugin",
  [
    "AdsUEditorCampaignMessageMarketingSetWhatsAppNumberIdAndDownstreamSettingsActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "adsMessageMarketingDefaultAudienceForWhatsAppNumberIDBootLoadedSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
            getDefaultAudienceFromWhatsAppNumberID: r(
              "adsMessageMarketingDefaultAudienceForWhatsAppNumberIDBootLoadedSelector",
            ),
          },
          function (e, t, n) {
            return e;
          },
          [
            r(
              "AdsUEditorCampaignMessageMarketingSetWhatsAppNumberIdAndDownstreamSettingsActionFlux",
            ).actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
