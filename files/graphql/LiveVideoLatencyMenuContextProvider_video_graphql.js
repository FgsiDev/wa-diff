__d(
  "LiveVideoLatencyMenuContextProvider_video.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "LiveVideoLatencyMenuContextProvider_video",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "Video",
            kind: "LinkedField",
            name: "if_viewer_can_use_latency_menu",
            plural: !1,
            selections: [
              {
                args: null,
                documentName:
                  "LiveVideoLatencyMenuContextProvider_video_if_viewer_can_use_latency_menu",
                fragmentName: "VideoPlayerSettingsMenuLatencyPane_video",
                fragmentPropName: "video",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
          action: "NONE",
          path: "if_viewer_can_use_latency_menu",
        },
        {
          kind: "RequiredField",
          field: {
            alias: "if_viewer_can_use_latency_menu_toggle",
            args: null,
            concreteType: "Video",
            kind: "LinkedField",
            name: "if_viewer_can_use_latency_menu",
            plural: !1,
            selections: [
              {
                args: null,
                documentName:
                  "LiveVideoLatencyMenuContextProvider_video_if_viewer_can_use_latency_menu_toggle",
                fragmentName: "VideoPlayerSettingsMenuLatencyPaneToggle_video",
                fragmentPropName: "video",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
          action: "NONE",
          path: "if_viewer_can_use_latency_menu_toggle",
        },
      ],
      type: "Video",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
