__d(
  "AdsConnectedInstagramAccountsWithIABPStoreSourceServerQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "business_id" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "legacy_account_id",
          },
          { defaultValue: null, kind: "LocalArgument", name: "limit" },
        ],
        t = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "legacy_account_id",
          },
        ],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        r = {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "business_id",
              variableName: "business_id",
            },
            { kind: "Variable", name: "limit", variableName: "limit" },
          ],
          concreteType: "XFBConnectedInstagramAccountsWithIABPObject",
          kind: "LinkedField",
          name: "connected_instagram_accounts_with_iabp",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "InstagramUserV2",
              kind: "LinkedField",
              name: "ig_user",
              plural: !1,
              selections: [
                n,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "has_profile_pic",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "legacy_instagram_user_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_authorized_for_political",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_professional_account",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_private",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_published",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "profile_picture_url",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "username",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "eimu_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "has_create_ads_access",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "iabp_id",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsConnectedInstagramAccountsWithIABPStoreSourceServerQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [r],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsConnectedInstagramAccountsWithIABPStoreSourceServerQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [r, n],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "29471517139158782",
          metadata: {},
          name: "AdsConnectedInstagramAccountsWithIABPStoreSourceServerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
