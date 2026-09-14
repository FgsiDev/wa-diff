__d(
  "AdsUnificationCampaignNUXModalContainerInnerShared_updateImpressionAttributeMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [{ kind: "Variable", name: "data", variableName: "input" }],
        n = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "as_boolean",
              storageKey: null,
            },
          ],
          type: "XFBAdvertiserProfileBooleanBasedAttributeValue",
          abstractKey: null,
        },
        r = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "as_integer",
              storageKey: null,
            },
          ],
          type: "XFBAdvertiserProfileIntegerBasedAttributeValue",
          abstractKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsUnificationCampaignNUXModalContainerInnerShared_updateImpressionAttributeMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "xfb_advertiser_profile_mutate_manual_signals",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "value",
                  plural: !1,
                  selections: [n, r],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsUnificationCampaignNUXModalContainerInnerShared_updateImpressionAttributeMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "xfb_advertiser_profile_mutate_manual_signals",
              plural: !0,
              selections: [
                o,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "value",
                  plural: !1,
                  selections: [o, n, r],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "24230119316598825",
          metadata: {},
          name: "AdsUnificationCampaignNUXModalContainerInnerShared_updateImpressionAttributeMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
