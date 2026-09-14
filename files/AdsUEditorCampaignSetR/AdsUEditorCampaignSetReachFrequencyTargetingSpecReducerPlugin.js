__d(
  "AdsUEditorCampaignSetReachFrequencyTargetingSpecReducerPlugin",
  [
    "AdsMutators",
    "AdsReachFrequencyFlowChangeTargetingActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "adsDSABeneficiaryAndPayorAutofillValuesSelector",
    "maybeUpdateCampaignDSASpec",
    "maybeUpdateCampaignRegulationsSpec",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            autofillValues: o("adsDSABeneficiaryAndPayorAutofillValuesSelector")
              .adsDSABeneficiaryAndPayorAutofillValuesSelector,
          },
          function (e, t, n) {
            var a = n.autofillValues;
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n = e;
              return (
                (n = r("maybeUpdateCampaignDSASpec")(n, {
                  defaultDSABeneficiary: a.beneficiary,
                  defaultDSAPayor: a.payor,
                  locationApiSpec: t.targeting.geo_locations,
                })),
                (n = r("maybeUpdateCampaignRegulationsSpec")(n, {
                  excludedLocations: t.targeting.excluded_geo_locations,
                  includedLocations: t.targeting.geo_locations,
                })),
                n
              );
            });
          },
          r("AdsReachFrequencyFlowChangeTargetingActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
