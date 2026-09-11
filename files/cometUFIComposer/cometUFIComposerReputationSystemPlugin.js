__d(
  "cometUFIComposerReputationSystemPlugin",
  [
    "CometRelay",
    "cometUFIComposerReputationSystemPlugin_plugin.graphql",
    "cometUFIComposerReputationSystemPlugin_pluginData.graphql",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (u || (u = o("react"))).useEffect;
    e !== void 0 ||
      (e = n("cometUFIComposerReputationSystemPlugin_plugin.graphql"));
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.pluginProps,
        r = e.isInlineVoteEnabled,
        a = n.depth,
        i = n.setComposerState,
        l,
        s;
      return (
        t[0] !== a || t[1] !== r || t[2] !== i
          ? ((l = function () {
              i(function () {
                return {
                  shouldDisableReactionsOnOptimisticComment: r && a === 0,
                };
              });
            }),
            (s = [r, a, i]),
            (t[0] = a),
            (t[1] = r),
            (t[2] = i),
            (t[3] = l),
            (t[4] = s))
          : ((l = t[3]), (s = t[4])),
        c(l, s),
        null
      );
    }
    function m(e) {
      var t = e.fragmentKey,
        r = t,
        a = o("CometRelay").readInlineData(
          s !== void 0
            ? s
            : (s = n(
                "cometUFIComposerReputationSystemPlugin_pluginData.graphql",
              )),
          r,
        ),
        i = a.is_inline_vote_enabled === !0;
      return {
        above: null,
        action: null,
        below: d,
        id: "reputation_system",
        inside: null,
        props: { isInlineVoteEnabled: i },
      };
    }
    l.default = m;
  },
  98,
);
