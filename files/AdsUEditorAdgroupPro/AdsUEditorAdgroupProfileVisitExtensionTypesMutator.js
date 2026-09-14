__d(
  "AdsUEditorAdgroupProfileVisitExtensionTypesMutator",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsEditorPostEditMode",
    "AdsInstagramBrandedContentUtils",
    "AdsUEditorCallToActionMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a,
        i = e;
      ((a = i.creative) == null ? void 0 : a.branded_content) != null &&
        (i = o("AdsInstagramBrandedContentUtils").setPromotedPageIDforL1Ads(i));
      var l = o("AdsAPIAdgroupRecordUtils").getPostEditMode(e);
      return t == null
        ? o(
            "AdsUEditorCallToActionMutators",
          ).deleteCallToActionValueInstagramProfileDestination(i, n, l)
        : l === r("AdsEditorPostEditMode").EXISTING
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.call_to_action.value.instagram_profile_cta_destination.set(
              t,
              i,
            )
          : o(
              "AdsUEditorCallToActionMutators",
            ).setCallToActionValueInstagramProfileDestination(i, t, n);
    }
    l.setProfileVisitExtensionType = e;
  },
  98,
);
