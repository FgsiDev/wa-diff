__d(
  "adsUEditorAdgroupCatalogExtensionEligibilitySelector",
  [
    "AdsL1SimplificationExistingPostGate",
    "AdsMetadataConnectedSourcesUtils",
    "adsCreateSelector",
    "adsUEditorAdgroupIsEngagementOnYourAdSetupSelector",
    "adsUEditorAdgroupIsPostSelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        o("adsUEditorAdgroupIsPostSelector")
          .adsUEditorAdgroupIsExistingPostAdSelector,
        r("adsUEditorSelectedAdgroupPlainObjectsSelector"),
        o("adsUEditorAdgroupIsEngagementOnYourAdSetupSelector")
          .adsUEditorAdgroupIsEngagementOnYourAdSetupSelector,
      ],
      function (t, n, a) {
        if (
          !o(
            "AdsMetadataConnectedSourcesUtils",
          ).isEligibleForMediaPickerByExperiment()
        )
          return !1;
        if (r("gkx")("7613") && t) {
          var e,
            i,
            l,
            s,
            u = n == null || (e = n[0]) == null ? void 0 : e.creative,
            c =
              (i =
                u == null || (l = u.creative_sourcing_spec) == null
                  ? void 0
                  : l.source_url) != null
                ? i
                : "",
            d = (s = u == null ? void 0 : u.link_url) != null ? s : "",
            m = c !== "" || d !== "";
          if (
            m &&
            !o(
              "AdsL1SimplificationExistingPostGate",
            ).isL1SimplificationExistingPostTestWithoutExposure() &&
            !a
          )
            return !1;
        }
        return !0;
      },
      { name: i.id + ".adsUEditorAdgroupCatalogExtensionEligibilitySelector" },
    );
    l.adsUEditorAdgroupCatalogExtensionEligibilitySelector = e;
  },
  98,
);
