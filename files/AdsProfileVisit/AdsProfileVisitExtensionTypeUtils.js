__d(
  "AdsProfileVisitExtensionTypeUtils",
  ["AdsAssetFeedFieldUtils", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s(e, "DIRECT_MESSAGE");
    }
    function s(e, t) {
      var n,
        r,
        a,
        i,
        l,
        s = o("immutable").fromJS(
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.call_to_action_types,
        );
      return (
        ((r = e.creative) == null ||
        (r = r.object_story_spec) == null ||
        (r = r.link_data) == null ||
        (r = r.call_to_action) == null ||
        (r = r.value) == null
          ? void 0
          : r.instagram_profile_cta_destination) === t ||
        ((a = e.creative) == null ||
        (a = a.object_story_spec) == null ||
        (a = a.video_data) == null ||
        (a = a.call_to_action) == null ||
        (a = a.value) == null
          ? void 0
          : a.instagram_profile_cta_destination) === t ||
        (((i = e.creative) == null ||
        (i = i.object_story_spec) == null ||
        (i = i.photo_data) == null ||
        (i = i.call_to_action) == null ||
        (i = i.value) == null
          ? void 0
          : i.instagram_profile_cta_destination) === t &&
          s != null &&
          s.size > 0) ||
        ((l = e.creative) == null ||
        (l = l.call_to_action) == null ||
        (l = l.value) == null
          ? void 0
          : l.instagram_profile_cta_destination) === t
      );
    }
    function u(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.message_extensions,
        r = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(
          e,
          "message_extensions",
        ),
        a = o("AdsAssetFeedFieldUtils").getAssetAtIndex(
          o("immutable").fromJS(n),
          "type",
          r,
        );
      return a === "messenger_facebook_page";
    }
    function c(e) {
      return s(e, "WHATSAPP_MESSAGE");
    }
    ((l.isProfileVisitInstagramDirectExtensionTypeSelected = e),
      (l.isPTMExtensionSelected = u),
      (l.isProfileVisitWhatsAppExtensionTypeSelected = c));
  },
  98,
);
