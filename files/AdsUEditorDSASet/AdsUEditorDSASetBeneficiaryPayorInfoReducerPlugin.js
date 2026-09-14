__d(
  "AdsUEditorDSASetBeneficiaryPayorInfoReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsDSASetBeneficiaryPayorInfoActionFlux",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n = t.dsaBeneficiary,
                a = t.dsaPayor,
                i = t.isDSABeneficiaryDifferentFromPayor,
                l = t.isDSAInfoRequired;
              if (!l || n == null || n === "")
                return o("AdsMutators").chain(
                  r("AdsCampaignRecordAccessors").dsa_beneficiary.set(""),
                  r("AdsCampaignRecordAccessors").dsa_payor.set(""),
                )(e);
              var s = e;
              return (
                (s = r("AdsCampaignRecordAccessors").dsa_beneficiary.set(n, s)),
                i
                  ? a == null || a === ""
                    ? (s = o("AdsMutators").chain(
                        r("AdsCampaignRecordAccessors").dsa_beneficiary.set(n),
                        r("AdsCampaignRecordAccessors").dsa_payor.set(""),
                      )(e))
                    : (s = o("AdsMutators").chain(
                        r("AdsCampaignRecordAccessors").dsa_beneficiary.set(n),
                        r("AdsCampaignRecordAccessors").dsa_payor.set(a),
                      )(e))
                  : (s = r("AdsCampaignRecordAccessors").dsa_payor.set(n, s)),
                s
              );
            });
          },
          o("AdsDSASetBeneficiaryPayorInfoActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
