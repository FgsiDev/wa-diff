__d(
  "adsUEditorAdgroupEPAConnectedSourcesEligibilitySelector",
  [
    "AdsFlexibleFormatAdexUtils",
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector",
    "adsUEditorAdgroupConnectedSourcesSiteLinkEligibilitySelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
        o("adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector")
          .adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector,
        o("adsUEditorAdgroupConnectedSourcesSiteLinkEligibilitySelector")
          .adsUEditorAdgroupConnectedSourcesSiteLinkEligibilitySelector,
      ],
      function (t, n, r) {
        return !n && !r
          ? !1
          : t.some(function (e) {
              var t = e.adgroup;
              return o("AdsFlexibleFormatAdexUtils").isEligibleForEPAFDOSurface(
                t,
              );
            });
      },
      {
        name: i.id + ".adsUEditorAdgroupEPAConnectedSourcesEligibilitySelector",
      },
    );
    l.adsUEditorAdgroupEPAConnectedSourcesEligibilitySelector = e;
  },
  98,
);
