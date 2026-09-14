__d(
  "adsUEditorIsAdgroupMultiUploadEligibleSelector",
  [
    "AdsCreativeFlexAssetUtils",
    "adsCreateSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupIsEligiblePCAUnifiedL1Selector",
    "adsUEditorIsAdgroupMultiUploadEligibleSelectorUtils",
    "userSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = r("adsCreateSelector"))(
        [
          r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
          r("adsUEditorAccountSelector"),
        ],
        function (t, n) {
          return o(
            "adsUEditorIsAdgroupMultiUploadEligibleSelectorUtils",
          ).adsUEditorIsAdgroupMultiUploadEligibleWithoutGK(
            t,
            n == null ? void 0 : n.sales_segment_v2,
          );
        },
        {
          name:
            i.id + ".adsUEditorIsAdgroupMultiUploadEligibleWithoutGKSelector",
        },
      ),
      u = e(
        [
          o("adsUEditorAdgroupIsEligiblePCAUnifiedL1Selector")
            .adsUEditorAdgroupIsEligiblePCAUnifiedL1Selector,
        ],
        function (t) {
          return t;
        },
        { name: i.id + ".adsUEditorIsOptOutDisabledForMultiUploadSelector" },
      ),
      c = e(
        [r("userSettingsSelector"), u],
        function (t, n) {
          var e;
          return n
            ? !1
            : (t == null || (e = t.getValue()) == null
                ? void 0
                : e.multi_media_opt_out_status) === "OPTED_OUT";
        },
        { name: i.id + ".adsUEditorIsOptedOutFromMultiUploadSelector" },
      ),
      d = e(
        [s, c],
        function (t, n) {
          return o(
            "adsUEditorIsAdgroupMultiUploadEligibleSelectorUtils",
          ).adsUEditorIsAdgroupMultiUploadEligible(t, n);
        },
        { name: i.id + ".adsUEditorIsAdgroupMultiUploadEligibleSelector" },
      ),
      m = e(
        [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
        function (t) {
          if (t.length !== 1) return !1;
          var e = t[0].adgroup;
          return o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
            e,
            "multi_media",
          );
        },
        { name: i.id + ".adsUEditorIsAdgroupMSSMultiTextEligibleSelector" },
      );
    ((l.adsUEditorIsAdgroupMultiUploadEligibleWithoutGKSelector = s),
      (l.adsUEditorIsOptOutDisabledForMultiUploadSelector = u),
      (l.adsUEditorIsOptedOutFromMultiUploadSelector = c),
      (l.adsUEditorIsAdgroupMultiUploadEligibleSelector = d),
      (l.adsUEditorIsAdgroupMSSMultiTextEligibleSelector = m));
  },
  98,
);
