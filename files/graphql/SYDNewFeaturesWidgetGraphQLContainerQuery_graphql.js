__d(
  "SYDNewFeaturesWidgetGraphQLContainerQuery.graphql",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adAccountID" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "shouldPrefetchSYDUris",
          },
        ],
        t = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "adAccountID",
          },
        ],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "request_id",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "tip_id",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        l = [o],
        s = [a],
        u = [{ kind: "Literal", name: "aymt_action_key", value: "PRIMARY" }];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "SYDNewFeaturesWidgetGraphQLContainerQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                n,
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBAYMTAMTipWrapper",
                  kind: "LinkedField",
                  name: "syd_new_features_channel_tips",
                  plural: !0,
                  selections: [
                    {
                      kind: "RequiredField",
                      field: {
                        alias: null,
                        args: null,
                        concreteType: "AYMTTip",
                        kind: "LinkedField",
                        name: "tip",
                        plural: !1,
                        selections: [
                          { kind: "RequiredField", field: r, action: "LOG" },
                        ],
                        storageKey: null,
                      },
                      action: "LOG",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "SYDNewFeaturesWidgetGraphQLCard_fragment",
                    },
                  ],
                  storageKey: null,
                },
              ],
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
          name: "SYDNewFeaturesWidgetGraphQLContainerQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                n,
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBAYMTAMTipWrapper",
                  kind: "LinkedField",
                  name: "syd_new_features_channel_tips",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "AYMTTip",
                      kind: "LinkedField",
                      name: "tip",
                      plural: !1,
                      selections: [
                        r,
                        o,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "channel_id",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "tip_name",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "AYMTTipCreativeSpec",
                          kind: "LinkedField",
                          name: "specs",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "AYMTBodyCreativeElement",
                              kind: "LinkedField",
                              name: "body",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "TextWithEntities",
                                  kind: "LinkedField",
                                  name: "text",
                                  plural: !1,
                                  selections: [
                                    a,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "EntityAtRange",
                                      kind: "LinkedField",
                                      name: "ranges",
                                      plural: !0,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "entity",
                                          plural: !1,
                                          selections: [
                                            i,
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "url",
                                              storageKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: l,
                                              type: "Node",
                                              abstractKey: "__isNode",
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: l,
                                              type: "XFBTopicTag",
                                              abstractKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "entity_is_weak_reference",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "length",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "offset",
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
                            {
                              alias: null,
                              args: null,
                              concreteType: "AYMTTitleCreativeElement",
                              kind: "LinkedField",
                              name: "title",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "TextWithEntities",
                                  kind: "LinkedField",
                                  name: "text",
                                  plural: !1,
                                  selections: s,
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "AYMTImageCreativeElement",
                              kind: "LinkedField",
                              name: "image",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Image",
                                  kind: "LinkedField",
                                  name: "regular_image",
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
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "AYMTActionCreativeElement",
                              kind: "LinkedField",
                              name: "action",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: u,
                                  concreteType: "TextWithEntities",
                                  kind: "LinkedField",
                                  name: "text",
                                  plural: !1,
                                  selections: s,
                                  storageKey: 'text(aymt_action_key:"PRIMARY")',
                                },
                                {
                                  alias: null,
                                  args: u,
                                  kind: "ScalarField",
                                  name: "link",
                                  storageKey: 'link(aymt_action_key:"PRIMARY")',
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
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "cta",
                      plural: !1,
                      selections: [
                        i,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "SYDNewFeaturesWidget3DCTA_fragment",
                              fragmentName:
                                "useAYMTAdsComplianceVoluntaryVerificationSYDNewFeaturesCTA_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAYMTAdsComplianceVoluntaryVerificationSYDNewFeaturesCTA",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "SYDNewFeaturesWidget3DCTA_fragment",
                              fragmentName:
                                "useAYMTAdsVoluntaryVerificationAdCreditSYDCTA_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAYMTAdsVoluntaryVerificationAdCreditCTA",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "SYDNewFeaturesWidget3DCTA_fragment",
                              fragmentName:
                                "useAYMTUnverifiedAdvertiserTransparencyBadgeSYDCTA_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAYMTUnverifiedAdvertiserTransparencyBadgeSYDCTA",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "SYDNewFeaturesWidget3DCTA_fragment",
                              fragmentName:
                                "useAYMTCatalogQualitySignalsOptInDialogOpen_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAYMTCatalogQualitySignalsOptInCTA",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "SYDNewFeaturesWidget3DCTA_fragment",
                              fragmentName:
                                "useAYMTProductInsightsSYDNewFeaturesCTA_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAYMTProductInsightsSYDNewFeaturesCTA",
                          abstractKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                o,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "28419301924321046",
          metadata: {},
          name: "SYDNewFeaturesWidgetGraphQLContainerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
