__d(
  "adsMessageMarketingDeliveryDataServerQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "campaign_id" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "campaign_id",
                variableName: "campaign_id",
              },
            ],
            concreteType: "XFBMessageMarketingDeliveryData",
            kind: "LinkedField",
            name: "xfb_message_marketing_delivery_data",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "phone_number_id",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "adsMessageMarketingDeliveryDataServerQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "adsMessageMarketingDeliveryDataServerQuery",
          selections: t,
        },
        params: {
          id: "24990274343913367",
          metadata: {},
          name: "adsMessageMarketingDeliveryDataServerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
