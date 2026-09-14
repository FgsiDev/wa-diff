__d(
  "WamoAvailableIdentitiesStoreSourceServerQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "ad_account_id",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "page_id" },
        n = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "ad_account_id",
                variableName: "ad_account_id",
              },
              { kind: "Variable", name: "page_id", variableName: "page_id" },
            ],
            concreteType: "XFBWAMOAvailableIdentitiesResponse",
            kind: "LinkedField",
            name: "wamo_available_identities",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XFBWAMOWhatsAppIdentity",
                kind: "LinkedField",
                name: "available_identities",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "wamo_whatsapp_identity_id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "wamo_whatsapp_identity_id_type",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_valid",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "invalid_reason",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "should_hide",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "should_be_defaulted",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "wamo_whatsapp_identity_source",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBWAMOWhatsAppIdentityMetadata",
                    kind: "LinkedField",
                    name: "wamo_whatsapp_identity_metadata",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "profile_name",
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
                        name: "formatted_wa_number",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "page_token",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "WamoAvailableIdentitiesStoreSourceServerQuery",
          selections: n,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "WamoAvailableIdentitiesStoreSourceServerQuery",
          selections: n,
        },
        params: {
          id: "28492911713634184",
          metadata: {},
          name: "WamoAvailableIdentitiesStoreSourceServerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
