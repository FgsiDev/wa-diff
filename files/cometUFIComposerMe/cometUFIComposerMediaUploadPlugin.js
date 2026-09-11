__d(
  "cometUFIComposerMediaUploadPlugin",
  [
    "CometRelay",
    "CometUFIMediaUploadComposerActionForLexical.react",
    "CometUFIMediaUploadComposerPluginInner.react",
    "cometUFIComposerMediaUploadPlugin_plugin.graphql",
    "cometUFIComposerMediaUploadPlugin_pluginData.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    e !== void 0 || (e = n("cometUFIComposerMediaUploadPlugin_plugin.graphql"));
    function u(e) {
      var t = e.pluginProps,
        n = t.composerState;
      return n.attachment != null
        ? null
        : r("CometUFIMediaUploadComposerActionForLexical.react");
    }
    function c(e) {
      var t,
        a = e.fragmentKey,
        i = o("CometRelay").readInlineData(
          s !== void 0
            ? s
            : (s = n("cometUFIComposerMediaUploadPlugin_pluginData.graphql")),
          a,
        ),
        l = { viewer_actor: i.viewer_actor },
        c = (t = i.should_condense_video_preview) != null ? t : !1;
      return {
        above: null,
        action: u,
        below: r("CometUFIMediaUploadComposerPluginInner.react"),
        id: "media_upload",
        inside: null,
        props: { feedback: l, shouldCondenseVideoPreview: c },
      };
    }
    l.default = c;
  },
  98,
);
