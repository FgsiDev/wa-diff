__d(
  "upgradedUFI2MentionsComposerPluginCreatorWithTypeaheadViewForLexical",
  [
    "CometMentionsForLexical.react",
    "CometMentionsLayoutStrategy.react",
    "FeedComposerCometMentionsViewItemResolver.react",
    "cometMentionsLexicalCreateNodeStrategy",
    "cr:10745",
    "cr:10746",
    "gkx",
    "react",
    "useCometMentionsViewListStrategy",
    "useFeedComposerCometMentionsDataSourceResolverConfig",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("gkx")("23229"),
      c = n("cr:10746") != null ? [n("cr:10746")] : void 0,
      d = ["USER", "EVENT", "GROUP", "PAGE"],
      m = u ? [].concat(d, ["WORKROOMS_USER"]) : d,
      p = ["user", "event", "group", "page"],
      _ = u ? [].concat(p, ["workrooms_user"]) : p;
    function f() {
      function e(e) {
        var t = e.config,
          o = t.contextID,
          a = t.postID,
          i = e.pluginProps.editor,
          l = r("useFeedComposerCometMentionsDataSourceResolverConfig")({
            canUseSections: !1,
            contextID: o,
            firstDegreeTypesForBootstrap: m,
            implicitMentionsConfig: {
              isImplicitMentionsEnabled: !0,
              matchLimitOverride: null,
              typeaheadContext: void 0,
            },
            mentionTypesForNetwork: _,
            payloadDecorators: c,
            postID: a,
            shouldBootstrapOnLayoutEffect: !1,
            surface: "COMMENT",
            taggingSurface: "COMMENT",
          }),
          d = {
            context_id: null,
            context_type: "undirected",
            surface: "COMMENT",
            typeahead_type: "ENTITY",
          },
          p = r("useCometMentionsViewListStrategy")({
            viewItemStrategyRenderer: r(
              "FeedComposerCometMentionsViewItemResolver.react",
            ),
          });
        return s.jsx(r("CometMentionsForLexical.react"), {
          createNodeStrategy: r("cometMentionsLexicalCreateNodeStrategy"),
          dataSourceResolverConfig: l,
          editor: i,
          includeForwardMentionText: u,
          layoutStrategyRenderer: r("CometMentionsLayoutStrategy.react"),
          mentionsLoggerContext: d,
          shouldFetchNetworkForCachedEntries:
            n("cr:10745") != null ? n("cr:10745") : void 0,
          viewStrategyRenderer: p,
        });
      }
      return ((e.displayName = e.name + " [from " + i.id + "]"), e);
    }
    l.default = f;
  },
  98,
);
