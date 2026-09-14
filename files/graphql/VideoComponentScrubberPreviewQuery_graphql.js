__d(
  "VideoComponentScrubberPreviewQuery.graphql",
  ["VideoComponentScrubberPreviewQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "videoID" }],
        t = [{ kind: "Variable", name: "id", variableName: "videoID" }],
        r = {
          kind: "InlineFragment",
          selections: [
            {
              alias: "scrubberPreviewThumbnailInformation",
              args: [
                { kind: "Literal", name: "height", value: 45 },
                { kind: "Literal", name: "width", value: 45 },
              ],
              concreteType: "ScrubberPreview",
              kind: "LinkedField",
              name: "scrubber_preview_thumbnail_information",
              plural: !1,
              selections: [
                {
                  alias: "timeIntervalBetweenImages",
                  args: null,
                  kind: "ScalarField",
                  name: "time_interval_between_image",
                  storageKey: null,
                },
                {
                  alias: "previewScrubberWidth",
                  args: null,
                  kind: "ScalarField",
                  name: "thumbnail_width",
                  storageKey: null,
                },
                {
                  alias: "previewScrubberHeight",
                  args: null,
                  kind: "ScalarField",
                  name: "thumbnail_height",
                  storageKey: null,
                },
                {
                  alias: "maxImagesPerSprite",
                  args: null,
                  kind: "ScalarField",
                  name: "max_number_of_images_per_sprite",
                  storageKey: null,
                },
                {
                  alias: "imagesPerRow",
                  args: null,
                  kind: "ScalarField",
                  name: "num_images_per_row",
                  storageKey: null,
                },
                {
                  alias: "hasPreviewThumbnails",
                  args: null,
                  kind: "ScalarField",
                  name: "has_preview_thumbnails",
                  storageKey: null,
                },
                {
                  alias: "spriteIndexToURIMap",
                  args: null,
                  kind: "ScalarField",
                  name: "sprite_uris",
                  storageKey: null,
                },
              ],
              storageKey:
                "scrubber_preview_thumbnail_information(height:45,width:45)",
            },
          ],
          type: "Video",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "VideoComponentScrubberPreviewQuery",
          selections: [
            {
              alias: "video",
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
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
          name: "VideoComponentScrubberPreviewQuery",
          selections: [
            {
              alias: "video",
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
                r,
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
          id: n("VideoComponentScrubberPreviewQuery_facebookRelayOperation"),
          metadata: {},
          name: "VideoComponentScrubberPreviewQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
