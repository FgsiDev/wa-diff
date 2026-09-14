__d(
  "adsUEditorAdgroupWebsiteMediaExtensionEligibilityWithDataSelector",
  [
    "adsCreateSelector",
    "adsUEditorAdgroupEligibleForWebsiteMediaQuerySelector",
    "adsUEditorAdgroupWebsiteMediaExtensionEligibilitySelector",
    "adsUEditorAdgroupWebsiteMediaExtensionEligibilityWithDataSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        o("adsUEditorAdgroupWebsiteMediaExtensionEligibilitySelector")
          .adsUEditorAdgroupWebsiteMediaExtensionEligibilitySelector,
        r("adsUEditorAdgroupEligibleForWebsiteMediaQuerySelector"),
      ],
      function (t, n) {
        var e = n.isDone() && n.hasValue() ? n.getValue() : null;
        return o(
          "adsUEditorAdgroupWebsiteMediaExtensionEligibilityWithDataSelectorUtils",
        ).adsUEditorAdgroupWebsiteMediaExtensionEligibilityWithData(t, e);
      },
      {
        name:
          i.id +
          ".adsUEditorAdgroupWebsiteMediaExtensionEligibilityWithDataSelector",
      },
    );
    l.adsUEditorAdgroupWebsiteMediaExtensionEligibilityWithDataSelector = e;
  },
  98,
);
