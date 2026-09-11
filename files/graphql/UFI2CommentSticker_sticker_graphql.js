__d(
  "UFI2CommentSticker_sticker.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { kind: "Variable", name: "scale", variableName: "scale" },
        t = [
          { kind: "Literal", name: "height", value: 80 },
          e,
          { kind: "Literal", name: "width", value: 80 },
        ],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        r = [
          n,
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
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "UFI2CommentSticker_sticker",
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
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: t,
            concreteType: "Image",
            kind: "LinkedField",
            name: "sprite_image",
            plural: !1,
            selections: [n],
            storageKey: null,
          },
          {
            alias: "sticker_image",
            args: t,
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: r,
            storageKey: null,
          },
          {
            alias: "larger_sticker_image",
            args: [
              { kind: "Literal", name: "height", value: 120 },
              e,
              { kind: "Literal", name: "width", value: 120 },
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: r,
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
      };
    })();
    a.exports = e;
  },
  null,
);
