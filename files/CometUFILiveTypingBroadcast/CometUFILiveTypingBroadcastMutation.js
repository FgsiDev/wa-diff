__d(
  "CometUFILiveTypingBroadcastMutation",
  [
    "ChannelClientID",
    "CometRelay",
    "CometUFILiveTypingBroadcastMutation_StartMutation.graphql",
    "CometUFILiveTypingBroadcastMutation_StopMutation.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n(
              "CometUFILiveTypingBroadcastMutation_StartMutation.graphql",
            )),
      c =
        s !== void 0
          ? s
          : (s = n("CometUFILiveTypingBroadcastMutation_StopMutation.graphql"));
    function d(e, t, n, r) {
      var a = {
          input: {
            feedback_id: n.feedbackID,
            session_id: o("ChannelClientID").getID(),
          },
        },
        i,
        l = { onCompleted: r, variables: a };
      return (
        e
          ? (i = o("CometRelay").commitMutation(
              t,
              babelHelpers.extends({ mutation: u }, l),
            ))
          : (i = o("CometRelay").commitMutation(
              t,
              babelHelpers.extends({ mutation: c }, l),
            )),
        {
          dispose: function () {
            (i && i.dispose(), (i = null));
          },
        }
      );
    }
    var m = d.bind(null, !0),
      p = d.bind(null, !1);
    ((l.start = m), (l.stop = p));
  },
  98,
);
