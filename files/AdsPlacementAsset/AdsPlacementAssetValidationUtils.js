__d(
  "AdsPlacementAssetValidationUtils",
  [
    "errorCode",
    "AdImageSpecsUtils",
    "AdImageSpecsUtilsV2",
    "AdsError",
    "AdsImageValidation",
    "AdsPageTypes",
    "AdsPlacementAPISpecReaderUtils",
    "AdsVideoSpecsUtils",
    "AdsVideoValidation",
    "adsContainsAssetCustomizationPlacement",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = [1815896, 2490087, 2238270, 2238293, 4829018];
    function u(e, t, n) {
      var a = o(
        "AdImageSpecsUtilsV2",
      ).getImageSpecsForAssetCustomizationPlacement(t, n);
      return (
        e.forEach(function (e) {
          var n = y(e.imageCrops, t, a);
          n.forEach(function (t) {
            r("AdsImageValidation").validateNow(e.image, t, e.imageCrops);
          });
        }),
        e
      );
    }
    function c(e, t, n) {
      var o = d([e], t, n),
        a = [];
      return (
        t.forEach(function (e) {
          r("adsContainsAssetCustomizationPlacement")(o, e) || a.push(e);
        }),
        r("immutable").List(a)
      );
    }
    function d(e, t, n) {
      var a = u(e, t, n),
        i = o(
          "AdsPlacementAPISpecReaderUtils",
        ).getPageTypesFromAssetCustomizationPlacement(t, n),
        l = [];
      a.map(function (e) {
        var t = e.image.validationMap;
        i.forEach(function (e) {
          t[e] && t[e].errorMessage == null && !l.includes(e) && l.push(e);
        });
      });
      var s = i.filter(function (e) {
          return !l.includes(e);
        }),
        c = r("immutable").List();
      return (
        s.forEach(function (e) {
          var t = h(e);
          t &&
            !r("adsContainsAssetCustomizationPlacement")(c, t) &&
            (c = c.push(t));
        }),
        c
      );
    }
    function m(e, t, n, o) {
      var a = f(e, t, n, o),
        i = "facebookinstream_video";
      i in a &&
        (a[i] = a[i].filter(function (e) {
          return e.key !== 2490087;
        }));
      var l = [];
      return (
        t.forEach(function (e) {
          var t = a[e.platform.toString() + e.position];
          (!t || t.length === 0) && l.push(e);
        }),
        r("immutable").List(l)
      );
    }
    function p(t, n, o, a) {
      var i = new Map();
      return (
        t.forEach(function (e) {
          i.set(e.id, _(e, n, o, a));
        }),
        i.forEach(function (t) {
          return t.forEach(function (t) {
            t && !e.includes(t.key) && (t.level = r("AdsError").Level.WARN);
          });
        }),
        i
      );
    }
    function _(e, t, n, r) {
      var o = f(e, t, n, r),
        a = [];
      for (var i in o) a = a.concat(o[i]);
      return a;
    }
    function f(e, t, n, r) {
      var a = o(
          "AdsVideoSpecsUtils",
        ).getVideoSpecsForAssetCustomizationPlacementObjective(t, n),
        i = {};
      return (
        a.forEach(function (t) {
          var a = t.platform.toString() + t.position;
          i[a] = o("AdsVideoValidation").validateVideoForSpec(
            e,
            t,
            void 0,
            r,
            n,
          );
        }),
        i
      );
    }
    function g(e, t) {
      var n = o(
        "AdsVideoSpecsUtils",
      ).getVideoSpecsForAssetCustomizationPlacementObjective(e, t);
      return n.length === 1 ? n[0] : null;
    }
    function h(e) {
      switch (e) {
        case r("AdsPageTypes").DESKTOP_FEED:
        case r("AdsPageTypes").MOBILE_FEED:
          return { platform: "facebook", position: "feed" };
        case r("AdsPageTypes").RIGHT_COLUMN:
          return { platform: "facebook", position: "right_hand_column" };
        case r("AdsPageTypes").INSTAGRAM_STREAM:
          return { platform: "instagram", position: "stream" };
        case r("AdsPageTypes").INSTAGRAM_STORY:
          return { platform: "instagram", position: "story" };
        case r("AdsPageTypes").INSTAGRAM_EXPLORE:
          return { platform: "instagram", position: "explore" };
        case r("AdsPageTypes").INSTAGRAM_EXPLORE_HOME:
          return { platform: "instagram", position: "explore_home" };
        case r("AdsPageTypes").INSTAGRAM_PROFILE_FEED:
          return { platform: "instagram", position: "profile_feed" };
        case r("AdsPageTypes").INSTAGRAM_PROFILE_REELS:
          return { platform: "instagram", position: "profile_reels" };
        case r("AdsPageTypes").INSTAGRAM_REELS:
          return { platform: "instagram", position: "reels" };
        case r("AdsPageTypes").INSTAGRAM_REELS_OVERLAY:
          return { platform: "instagram", position: "reels_overlay" };
        case r("AdsPageTypes").INSTAGRAM_SEARCH:
          return { platform: "instagram", position: "ig_search" };
        case r("AdsPageTypes").INSTAGRAM_SHOP:
          return { platform: "instagram", position: "shop" };
        case r("AdsPageTypes").MOBILE_EXTERNAL:
          return { platform: "audience_network", position: "classic" };
        case r("AdsPageTypes").MOBILE_FB_STORY_STICKER:
          return { platform: "facebook", position: "story_sticker" };
        case r("AdsPageTypes").MOBILE_BIZ_DISCO_FEED:
          return { platform: "facebook", position: "biz_disco_feed" };
        case r("AdsPageTypes").MOBILE_PROFILE_FEED:
          return { platform: "facebook", position: "profile_feed" };
        case r("AdsPageTypes").MOBILE_REELS:
          return { platform: "facebook", position: "facebook_reels" };
        case r("AdsPageTypes").MOBILE_PROFILE_REELS:
          return { platform: "facebook", position: "profile_reels" };
        case r("AdsPageTypes").FB_REELS_OVERLAY:
          return { platform: "facebook", position: "facebook_reels_overlay" };
        case r("AdsPageTypes").WHATSAPP_MARKETING_MESSAGES:
          return { platform: "whatsapp", position: "marketing_messages" };
        case r("AdsPageTypes").MESSENGER_MARKETING_MESSAGES:
          return { platform: "messenger", position: "marketing_messages" };
        case r("AdsPageTypes").WHATSAPP_STATUS:
          return { platform: "whatsapp", position: "status" };
        case r("AdsPageTypes").WHATSAPP_CHANNEL:
          return { platform: "whatsapp", position: "channel" };
        case r("AdsPageTypes").THREADS_STREAM:
          return { platform: "threads", position: "threads_stream" };
        default:
          return null;
      }
    }
    function y(e, t, n) {
      var a;
      if (
        (t.toArray().some(function (e) {
          return e.platform === "instagram";
        }) && (a = o("AdImageSpecsUtils").getSelectedInstagramImageSpec(e)),
        a)
      ) {
        var i = n.filter(function (e) {
          return (
            (e.placement !== r("AdsPageTypes").INSTAGRAM_STREAM &&
              e.placement !== r("AdsPageTypes").INSTAGRAM_STORY) ||
            (a && e.cropKey === a.cropKey)
          );
        });
        return i;
      }
      return n;
    }
    ((l.validateImagesForPlacementSpec = u),
      (l.getPlacementsCompatibleWithImage = c),
      (l.getPlacementsIncompatibleWithImages = d),
      (l.getPlacementsCompatibleWithVideo = m),
      (l.getVideoListErrors = p),
      (l.getVideoErrors = _),
      (l.getVideoSpecByPlacement = g));
  },
  98,
);
