__d(
  "CometUserFollowMutation",
  [
    "CometRelay",
    "CometUserFollowMutation.graphql",
    "ProfileActionFollowingMutationUtils",
    "WebPixelRatio",
    "getVideoShareDownstreamSignalTracking",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("CometUserFollowMutation.graphql"));
    function u(e, t, n) {
      return {
        actor_subscribe: {
          subscribee: {
            __typename: "User",
            following_status: babelHelpers.extends(
              {},
              o(
                "ProfileActionFollowingMutationUtils",
              ).getOptimisticFollowingActionForSubscriptionStatus(
                e != null ? e : "REGULAR_FOLLOW",
                t,
                n,
              ),
              { is_active: !1 },
            ),
            id: t,
            profile_action: babelHelpers.extends(
              {},
              o(
                "ProfileActionFollowingMutationUtils",
              ).getOptimisticFollowActionForSubscriptionStatus(
                e != null ? e : "REGULAR_FOLLOW",
                t,
                n,
              ),
            ),
            secondary_subscribe_status: e,
            subscribe_status: "IS_SUBSCRIBED",
          },
        },
      };
    }
    function c(e, t) {
      var n,
        r = t.isTrackingEncrypted,
        a = t.navigationChain,
        i = t.onError,
        l = t.onSuccess,
        c = t.secondarySubscribeStatus,
        d = t.subscribeLocation,
        m = t.tracking,
        p = t.userID,
        _ =
          (n = o(
            "getVideoShareDownstreamSignalTracking",
          ).getVideoShareDownstreamSignalTracking()) != null
            ? n
            : {};
      o("CometRelay").commitMutation(e, {
        mutation: s,
        onCompleted: l,
        onError: i,
        optimisticResponse: u(c, p, !1),
        variables: {
          input: babelHelpers.extends(
            {
              attribution_id_v2: a,
              is_tracking_encrypted: r,
              secondary_subscribe_status: c,
              subscribe_location: d,
              subscribee_id: p,
              tracking: m,
            },
            _,
          ),
          scale: o("WebPixelRatio").get(),
        },
      });
    }
    function d(e, t, n) {
      var r,
        a = t.isTrackingEncrypted,
        i = t.navigationChain,
        l = t.onError,
        c = t.onSuccess,
        d = t.secondarySubscribeStatus,
        m = t.subscribeLocation,
        p = t.tracking,
        _ = t.userID,
        f =
          (r = o(
            "getVideoShareDownstreamSignalTracking",
          ).getVideoShareDownstreamSignalTracking()) != null
            ? r
            : {};
      o("CometRelay").enqueueMutation(e, {
        mutation: s,
        onCompleted: c,
        onError: l,
        optimisticResponse: u(d, _, n != null ? n : !1),
        variables: {
          input: babelHelpers.extends(
            {
              attribution_id_v2: i,
              is_tracking_encrypted: a,
              secondary_subscribe_status: d,
              subscribe_location: m,
              subscribee_id: _,
              tracking: p,
            },
            f,
          ),
          scale: o("WebPixelRatio").get(),
        },
      });
    }
    ((l.commit = c), (l.enqueue = d));
  },
  98,
);
