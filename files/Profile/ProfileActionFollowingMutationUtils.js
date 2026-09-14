__d(
  "ProfileActionFollowingMutationUtils",
  [
    "fbt",
    "ProfileActionFollowIcon",
    "ProfileActionMutationUtils",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n) {
      var a,
        i = "",
        l = "",
        u = "";
      switch (e) {
        case "SEE_FIRST":
          i = s._(/*BTDS*/ "Favorites").toString();
          break;
        case "UNFOLLOW":
          ((i = s._(/*BTDS*/ "Follow").toString()),
            (l = r("ProfileActionFollowIcon").follow_icon),
            (u = r("ProfileActionFollowIcon").follow_icon_menu_item));
          break;
        default:
          ((i = s._(/*BTDS*/ "Following").toString()),
            (u = r("ProfileActionFollowIcon").following_icon_menu_item),
            (l = r("ProfileActionFollowIcon").following_icon));
          break;
      }
      return {
        __typename: "ProfileActionFollowingStatusHandler",
        active_secondary_icon: {
          height: 20 * (a = o("WebPixelRatio")).get(),
          scale: a.get(),
          uri: u,
          width: 20 * a.get(),
        },
        icon_image: {
          height: 16 * a.get(),
          scale: a.get(),
          uri: n === !0 ? l : null,
          width: 16 * o("WebPixelRatio").get(),
        },
        id: o("ProfileActionMutationUtils").getProfileActionID(t, 52),
        is_optimistic_update: !n,
        secondary_icon: {
          height: 20 * o("WebPixelRatio").get(),
          scale: o("WebPixelRatio").get(),
          uri: u,
          width: 20 * o("WebPixelRatio").get(),
        },
        title: { text: i },
      };
    }
    function u(e, t, n) {
      var a = "",
        i = "";
      switch (e) {
        case "UNFOLLOW":
          ((a = s._(/*BTDS*/ "Follow").toString()),
            (i = r("ProfileActionFollowIcon").follow_icon));
          break;
        default:
          ((a = s._(/*BTDS*/ "Unfollow").toString()),
            (i = r("ProfileActionFollowIcon").following_icon));
          break;
      }
      return {
        __typename: "ProfileActionFollowingStatusHandler",
        icon_image: {
          height: 16 * o("WebPixelRatio").get(),
          scale: o("WebPixelRatio").get(),
          uri: n === !0 ? i : null,
          width: 16 * o("WebPixelRatio").get(),
        },
        id: o("ProfileActionMutationUtils").getProfileActionID(t, 19),
        is_optimistic_update: !n,
        title: { text: a },
      };
    }
    function c(e, t) {
      var n = "";
      switch (e) {
        case !1:
          n = s._(/*BTDS*/ "Like").toString();
          break;
        default:
          n = s._(/*BTDS*/ "Liked").toString();
          break;
      }
      return {
        __typename: "ProfileActionLike",
        icon_image: {
          height: 16 * o("WebPixelRatio").get(),
          scale: o("WebPixelRatio").get(),
          uri: null,
          width: 16 * o("WebPixelRatio").get(),
        },
        id: o("ProfileActionMutationUtils").getProfileActionID(t, 164),
        is_optimistic_update: !0,
        title: { text: n },
      };
    }
    ((l.getOptimisticFollowingActionForSubscriptionStatus = e),
      (l.getOptimisticFollowActionForSubscriptionStatus = u),
      (l.getOptimisticLikeActionForIsViewerFan = c));
  },
  226,
);
