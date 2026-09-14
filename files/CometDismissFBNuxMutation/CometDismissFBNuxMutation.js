__d(
  "CometDismissFBNuxMutation",
  ["CometDismissFBNuxMutation.graphql", "CometRelay", "encodeNUXIDForRelay"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("CometDismissFBNuxMutation.graphql"));
    function u(e, t, n, a) {
      var i = r("encodeNUXIDForRelay")(t),
        l = i.nuxID,
        u = i.relayID;
      return o("CometRelay").commitMutation(e, {
        mutation: s,
        onCompleted: n,
        onError: a,
        optimisticResponse: {
          nux_dismiss: { __typename: "NUX", id: u, should_show: !1 },
        },
        variables: { nux_id_input: l },
      });
    }
    l.commit = u;
  },
  98,
);
