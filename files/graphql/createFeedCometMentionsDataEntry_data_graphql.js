__d(
  "createFeedCometMentionsDataEntry_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "mentions_subtext",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_verified",
          storageKey: null,
        },
        r = { kind: "Variable", name: "scale", variableName: "scale" },
        o = {
          alias: "photo",
          args: [
            { kind: "Literal", name: "height", value: 40 },
            r,
            { kind: "Literal", name: "width", value: 40 },
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
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          concreteType: "WorkForeignEntityInfo",
          kind: "LinkedField",
          name: "work_foreign_entity_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "type",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        i = [e, t, o];
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: { mask: !1 },
        name: "createFeedCometMentionsDataEntry_data",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "score",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "icon_shape",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "node",
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
                name: "__typename",
                storageKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  e,
                  t,
                  n,
                  o,
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: [a],
                        type: "User",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          a,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_multi_company_group",
                            storageKey: null,
                          },
                        ],
                        type: "Group",
                        abstractKey: null,
                      },
                    ],
                    type: "Entity",
                    abstractKey: "__isEntity",
                  },
                ],
                type: "User",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: i,
                type: "XFBWorkroomsBaseUser",
                abstractKey: "__isXFBWorkroomsBaseUser",
              },
              {
                kind: "InlineFragment",
                selections: [
                  e,
                  t,
                  {
                    alias: "thumbnail_link",
                    args: [r],
                    kind: "ScalarField",
                    name: "icon_uri",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "doc_title",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "doc_url",
                    storageKey: null,
                  },
                ],
                type: "KnowledgeHubDocumentData",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: i,
                type: "Group",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: i,
                type: "Event",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [e, t, n, o],
                type: "Page",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [e, o],
                type: "ContextualProfile",
                abstractKey: "__isContextualProfile",
              },
              {
                kind: "InlineFragment",
                selections: i,
                type: "GroupRule",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: i,
                type: "ProductItem",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: i,
                type: "BatchMentions",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "CometComposerTypeaheadResultEntry",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
