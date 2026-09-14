__d(
  "AdsMetadataBrandKitUtilsDefaultOnEligbilityQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adAccountId" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "ad_account_id",
                variableName: "adAccountId",
              },
            ],
            kind: "ScalarField",
            name: "xfb_ads_brand_kit_is_eligible_for_default_on",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsMetadataBrandKitUtilsDefaultOnEligbilityQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsMetadataBrandKitUtilsDefaultOnEligbilityQuery",
          selections: t,
        },
        params: {
          id: "24402145736075308",
          metadata: {},
          name: "AdsMetadataBrandKitUtilsDefaultOnEligbilityQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
