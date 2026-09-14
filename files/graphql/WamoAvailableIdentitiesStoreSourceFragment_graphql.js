__d(
  "WamoAvailableIdentitiesStoreSourceFragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WamoAvailableIdentitiesStoreSourceFragment",
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
      type: "XFBWAMOAvailableIdentitiesResponse",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
