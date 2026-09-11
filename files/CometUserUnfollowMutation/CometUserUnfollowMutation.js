__d(
  "CometUserUnfollowMutation",
  [
    "CometRelay",
    "CometUserUnfollowMutation.graphql",
    "ProfileActionFollowingMutationUtils",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("CometUserUnfollowMutation.graphql"));
    function u(e, t) {
      return {
        actor_unsubscribe: {
          unsubscribee: {
            __typename: "User",
            following_status: o(
              "ProfileActionFollowingMutationUtils",
            ).getOptimisticFollowingActionForSubscriptionStatus(
              "UNFOLLOW",
              e,
              t,
            ),
            id: e,
            profile_action: o(
              "ProfileActionFollowingMutationUtils",
            ).getOptimisticFollowActionForSubscriptionStatus("UNFOLLOW", e, t),
            subscribe_status: "CAN_SUBSCRIBE",
          },
        },
      };
    }
    function c(e, t) {
      var n = t.actionRenderLocation,
        r = t.isTrackingEncrypted,
        a = t.navigationChain,
        i = t.onError,
        l = t.onSuccess,
        c = t.subscribeLocation,
        d = t.tracking,
        m = t.userID;
      o("CometRelay").commitMutation(e, {
        mutation: s,
        onCompleted: l,
        onError: i,
        optimisticResponse: u(m, !1),
        variables: {
          action_render_location: n,
          input: {
            attribution_id_v2: a,
            is_tracking_encrypted: r,
            subscribe_location: c,
            tracking: d,
            unsubscribee_id: m,
          },
          scale: o("WebPixelRatio").get(),
        },
      });
    }
    function d(e, t, n) {
      var r = t.actionRenderLocation,
        a = t.isTrackingEncrypted,
        i = t.navigationChain,
        l = t.onError,
        c = t.onSuccess,
        d = t.subscribeLocation,
        m = t.tracking,
        p = t.userID;
      o("CometRelay").enqueueMutation(e, {
        mutation: s,
        onCompleted: c,
        onError: l,
        optimisticResponse: u(p, n != null ? n : !1),
        variables: {
          action_render_location: r,
          input: {
            attribution_id_v2: i,
            is_tracking_encrypted: a,
            subscribe_location: d,
            tracking: m,
            unsubscribee_id: p,
          },
          scale: o("WebPixelRatio").get(),
        },
      });
    }
    ((l.commit = c), (l.enqueue = d));
  },
  98,
);
