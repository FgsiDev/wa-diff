__d(
  "VideoPlayerCaptionsSettingMutation",
  ["CometRelay", "VideoPlayerCaptionsSettingMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("VideoPlayerCaptionsSettingMutation.graphql"));
    function u(e, t, n) {
      return o("CometRelay").commitMutation(e, {
        mutation: s,
        onCompleted: n && n.onCompleted,
        onError: n && n.onError,
        optimisticResponse: { video_captions_setting: { success: !0 } },
        variables: {
          input: {
            captions_background_color: t.captions_background_color,
            captions_background_opacity: t.captions_background_opacity,
            captions_text_color: t.captions_text_color,
            captions_text_size: t.captions_text_size,
            client_mutation_id: "www_captions_settings",
          },
        },
      });
    }
    l.commit = u;
  },
  98,
);
