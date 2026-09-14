__d(
  "AdsDCOImageCropDoFUtils",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsUEditorAdgroupAssetFeedMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "FAM_TOGGLE_ON",
      "FAM_TOGGLE_OFF",
      "SMART_CROP_ELIGIBLE_ON",
      "SMART_CROP_ELIGIBLE_OFF",
      "SMART_CROP_INELIGIBLE_ON",
      "SMART_CROP_INELIGIBLE_OFF",
    ];
    function s(t) {
      var n,
        r =
          (n = t.creative) == null || (n = n.degrees_of_freedom_spec) == null
            ? void 0
            : n.degrees_of_freedom_type;
      return e.includes(r);
    }
    function u(e) {
      var t;
      if (!o("AdsAssetFeedUtils").isDofWithImageAdgroupFromRecord(e)) return !1;
      var n =
        (t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.images;
      return !!n && n.count() > 1;
    }
    function c(e, t, n, a, i) {
      var l = e;
      return (
        (l = o("AdsAssetFeedMutationUtils").setImageAssetAtIndex(
          l,
          t,
          0,
          n,
          a,
        )),
        i &&
          (l = o("AdsAssetFeedMutationUtils").setImageCropAtIndex(l, t, 0, i)),
        (l = r("AdsAdgroupRecordAccessors")
          .creative.asset_feed_spec.images.at(1)
          .delete(l)),
        o("AdsUEditorAdgroupAssetFeedMutators").sanitizeDofAdgroup(l)
      );
    }
    function d(e, t) {
      var n = r("AdsAdgroupRecordAccessors")
        .creative.asset_feed_spec.images.at(1)
        .delete(e);
      return o("AdsUEditorAdgroupAssetFeedMutators").sanitizeDofAdgroup(n);
    }
    ((l.hasDoFSpecWithFAMToggleExpType = s),
      (l.isAdgroupOptInImageCropDof = u),
      (l.replaceImageInOptInAdgroup = c),
      (l.setAdgroupOptOutImageCropDoF = d));
  },
  98,
);
