__d(
  "CometUFIStickersComposerUpgradedPreviewContentQuery.graphql",
  [
    "CometUFIStickersComposerUpgradedPreviewContentQuery_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
          { defaultValue: null, kind: "LocalArgument", name: "stickerId" },
        ],
        t = [{ kind: "Variable", name: "id", variableName: "stickerId" }],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = { kind: "Variable", name: "scale", variableName: "scale" },
        a = [
          { kind: "Literal", name: "height", value: 80 },
          o,
          { kind: "Literal", name: "width", value: 80 },
        ],
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        l = [
          i,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "width",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "height",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "CometUFIStickersComposerUpgradedPreviewContentQuery",
          selections: [
            {
              alias: "sticker",
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "UFI2CommentSticker_sticker",
                    },
                  ],
                  type: "Sticker",
                  abstractKey: null,
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
          name: "CometUFIStickersComposerUpgradedPreviewContentQuery",
          selections: [
            {
              alias: "sticker",
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
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
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "frame_count",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "frame_rate",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "frames_per_column",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "frames_per_row",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "label",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "StickerPack",
                      kind: "LinkedField",
                      name: "pack",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "name",
                          storageKey: null,
                        },
                        r,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: a,
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "sprite_image",
                      plural: !1,
                      selections: [i],
                      storageKey: null,
                    },
                    {
                      alias: "sticker_image",
                      args: a,
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "image",
                      plural: !1,
                      selections: l,
                      storageKey: null,
                    },
                    {
                      alias: "larger_sticker_image",
                      args: [
                        { kind: "Literal", name: "height", value: 120 },
                        o,
                        { kind: "Literal", name: "width", value: 120 },
                      ],
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "image",
                      plural: !1,
                      selections: l,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "sticker_type",
                      storageKey: null,
                    },
                  ],
                  type: "Sticker",
                  abstractKey: null,
                },
                r,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "CometUFIStickersComposerUpgradedPreviewContentQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "CometUFIStickersComposerUpgradedPreviewContentQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
