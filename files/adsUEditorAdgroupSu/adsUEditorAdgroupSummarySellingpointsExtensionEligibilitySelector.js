__d(
  "adsUEditorAdgroupSummarySellingpointsExtensionEligibilitySelector",
  [
    "AdsCreativeGenAIEligibilityUtils",
    "adsCreateSelector",
    "adsIsEligibleForIntentAtCreativeSetup",
    "adsUEditorAccountSelector",
    "adsUEditorAdObjectsPlainLoadObjectForSelectedAdgroupsSelector",
    "adsUEditorAdgroupConnectedSourcesMediaPickerEligibilitySelector",
    "adsUEditorAdgroupWebsiteSummaryExtensionEligibilitySelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        r("adsUEditorAccountSelector"),
        o("adsUEditorAdgroupWebsiteSummaryExtensionEligibilitySelector")
          .adsUEditorAdgroupWebsiteSummaryExtensionEligibilitySelector,
        o("adsUEditorAdgroupConnectedSourcesMediaPickerEligibilitySelector")
          .adsUEditorAdgroupConnectedSourcesMediaPickerEligibilitySelector,
        r("adsUEditorAdObjectsPlainLoadObjectForSelectedAdgroupsSelector"),
      ],
      function (t, n, a, i) {
        if (!a || n === !0 || !i.isDone() || !i.hasValue()) return !1;
        var e = i.getValueEnforcing();
        return o(
          "AdsCreativeGenAIEligibilityUtils",
        ).isGenAIEligibleInMediaPicker(
          t,
          e[0],
          !1,
          "adsUEditorAdgroupSummarySellingpointsExtensionEligibilitySelector",
        )
          ? r("adsIsEligibleForIntentAtCreativeSetup")()
          : !1;
      },
      {
        name:
          i.id +
          ".adsUEditorAdgroupSummarySellingpointsExtensionEligibilitySelector",
      },
    );
    l.adsUEditorAdgroupSummarySellingpointsExtensionEligibilitySelector = e;
  },
  98,
);
