__d(
  "CometLogImpressionFBNuxMutation",
  [
    "CometLogImpressionFBNuxMutation.graphql",
    "CometLogImpressionFBNuxMutationWithNoImpressionLimitMutation.graphql",
    "CometRelay",
    "encodeNUXIDForRelay",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e !== void 0 ? e : (e = n("CometLogImpressionFBNuxMutation.graphql"));
    function c(e, t, n, a) {
      var i = r("encodeNUXIDForRelay")(t),
        l = i.nuxID;
      return o("CometRelay").commitMutation(e, {
        mutation: u,
        onCompleted: n,
        onError: a,
        variables: { nux_id: l },
      });
    }
    var d =
      s !== void 0
        ? s
        : (s = n(
            "CometLogImpressionFBNuxMutationWithNoImpressionLimitMutation.graphql",
          ));
    function m(e, t, n, a) {
      var i = r("encodeNUXIDForRelay")(t),
        l = i.nuxID;
      return o("CometRelay").commitMutation(e, {
        mutation: d,
        onCompleted: n,
        onError: a,
        variables: { nux_id: l },
      });
    }
    ((l.commit = c), (l.commitNuxWithNoImpressionLimit = m));
  },
  98,
);
