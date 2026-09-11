__d(
  "cometUFIComposerLiveTypingBroadcastPlugin",
  [
    "CometRelay",
    "CometUFILiveTypingBroadcastComposerPluginInner.react",
    "cometUFIComposerLiveTypingBroadcastPlugin_plugin.graphql",
    "cometUFIComposerLiveTypingBroadcastPlugin_pluginData.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    e !== void 0 ||
      (e = n("cometUFIComposerLiveTypingBroadcastPlugin_plugin.graphql"));
    function u(e) {
      var t,
        a = e.environment,
        i = e.fragmentKey,
        l = o("CometRelay").readInlineData(
          s !== void 0
            ? s
            : (s = n(
                "cometUFIComposerLiveTypingBroadcastPlugin_pluginData.graphql",
              )),
          i,
        ),
        u = { id: l.feedback_id, viewer_actor: l.viewer_actor };
      return {
        above: null,
        action: null,
        below: r("CometUFILiveTypingBroadcastComposerPluginInner.react"),
        id: "typing_broadcast",
        inside: null,
        props: {
          feedback: u,
          isCommentingAsAlternateVoice:
            ((t = l.current_actor) == null ? void 0 : t.__typename) ===
            "GroupAnonAuthorProfile",
          relayEnvironment: a,
        },
      };
    }
    l.default = u;
  },
  98,
);
