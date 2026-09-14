__d(
  "AdsUEditorAdgroupMultiPostSpecMutators",
  [
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAdgroupLinkPostFormatMutators",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s(e)
        ? o(
            "AdsAdgroupLinkPostFormatMutators",
          ).removeCreativeAssetGroupsSpecField(e)
        : e;
    }
    function s(e) {
      return o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators").hasAnyOrigins(
        e,
        ["multi_post_to_single_post_pre_test"],
      );
    }
    ((l.adsDeleteMultiPostSpecMutator = e), (l.hasMultiPostOrigin = s));
  },
  98,
);
