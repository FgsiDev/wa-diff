__d(
  "AdsInstagramUsernameDataManagerQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "id" },
          { defaultValue: !1, kind: "LocalArgument", name: "skip_ibta" },
          { defaultValue: !1, kind: "LocalArgument", name: "webp_profile_pic" },
        ],
        t = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "threads_user_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "threads_user_profile_pic",
            storageKey: null,
          },
        ],
        n = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "id", variableName: "id" }],
            concreteType: "InstagramUserV2",
            kind: "LinkedField",
            name: "fetch__InstagramUserV2",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null,
              },
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
                name: "instagram_user_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "instagram_account_type",
                storageKey: null,
              },
              {
                condition: "webp_profile_pic",
                kind: "Condition",
                passingValue: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "profile_picture_url",
                    storageKey: null,
                  },
                ],
              },
              {
                condition: "webp_profile_pic",
                kind: "Condition",
                passingValue: !0,
                selections: [
                  {
                    alias: null,
                    args: [
                      { kind: "Literal", name: "height", value: 64 },
                      {
                        kind: "Literal",
                        name: "media_type",
                        value: "image/webp",
                      },
                      { kind: "Literal", name: "width", value: 64 },
                    ],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "profile_picture",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "uri",
                        storageKey: null,
                      },
                    ],
                    storageKey:
                      'profile_picture(height:64,media_type:"image/webp",width:64)',
                  },
                ],
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
                name: "is_shopping_onsite_checkout_enabled",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "shopping_review_status",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "date_joined",
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
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "full_name",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_shopless_ig_account",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBInstagramConnectedThreadsUserResponse",
                kind: "LinkedField",
                name: "instagram_connected_threads_user",
                plural: !1,
                selections: t,
                storageKey: null,
              },
              {
                condition: "skip_ibta",
                kind: "Condition",
                passingValue: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBInstagramBackedThreadsUserResponse",
                    kind: "LinkedField",
                    name: "instagram_backed_threads_user",
                    plural: !1,
                    selections: t,
                    storageKey: null,
                  },
                ],
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
          name: "AdsInstagramUsernameDataManagerQuery",
          selections: n,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsInstagramUsernameDataManagerQuery",
          selections: n,
        },
        params: {
          id: "37542322162050238",
          metadata: {},
          name: "AdsInstagramUsernameDataManagerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
