__d(
  "AdsExistingPostLiveShoppingDefaultingUtils",
  [
    "AdsPagePostProvider",
    "BrandedContentAdsUtils",
    "LiveBoostingFalcoEvent",
    "cr:8974",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsPagePostProvider").toFluxStore(),
      s = function (n) {
        var t = e.getState().get(n);
        return t != null && !t.error ? t.value : null;
      },
      u = function (t) {
        var e,
          n =
            t == null || (e = t.partnership_ads_identities) == null
              ? void 0
              : e.secondary_identities,
          a = r("isTruthy")(n) && n.length > 0,
          i =
            a &&
            o("BrandedContentAdsUtils").hasUpgradedPAPermissionForCapability(
              t,
              "CAN_USE_CREATIVE_OPTIMIZATION",
            );
        return a && !i;
      },
      c = function (t, o, a, i, l) {
        if (n("cr:8974") == null) return null;
        var e = n("cr:8974").getHighIntentLiveVideoID(t, o);
        return e != null && e !== ""
          ? (r("LiveBoostingFalcoEvent").log(function () {
              return {
                event: "default_live_video",
                surface: "ads_manager",
                page_id: t,
                video_id: e,
                adgroup_id_provided: a == null ? void 0 : a.id,
                ad_account_id_provided: o,
                extra_data: {
                  objective: i != null ? i : "",
                  optimization_goal: l != null ? l : "",
                },
              };
            }),
            { shouldDefault: !0, postToDefaultTo: e })
          : (r("LiveBoostingFalcoEvent").log(function () {
              return {
                event: "default_live_video_null_video_id",
                surface: "ads_manager",
                page_id: t,
                video_id: e,
                adgroup_id_provided: a == null ? void 0 : a.id,
                ad_account_id_provided: o,
                extra_data: {
                  objective: i != null ? i : "",
                  optimization_goal: l != null ? l : "",
                },
              };
            }),
            null);
      },
      d = function (t, n) {
        try {
          if (t && n) {
            var e = s((n != null ? n : "") + "_" + (t != null ? t : ""));
            if (e) {
              var r = u(e);
              return r ? null : e;
            }
          }
          return null;
        } catch (e) {
          return null;
        }
      },
      m = function (t, n, r, o, a) {
        try {
          if (t == null) return { shouldDefault: !1 };
          var e = c(t, n, r, o, a);
          return e != null ? e : { shouldDefault: !1 };
        } catch (e) {
          return { shouldDefault: !1 };
        }
      };
    ((l.getPostFromPagePostID = s),
      (l.getIsPartnershipAdPost = u),
      (l.handleLiveVideoDefaulting = c),
      (l.getPostFromPostId = d),
      (l.shouldDefaultToExistingPost = m));
  },
  98,
);
