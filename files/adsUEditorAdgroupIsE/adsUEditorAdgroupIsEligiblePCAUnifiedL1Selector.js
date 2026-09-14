__d(
  "adsUEditorAdgroupIsEligiblePCAUnifiedL1Selector",
  [
    "AdsPCAUnifiedFormatEligibilityUtils",
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
        function (t) {
          return t.some(function (e) {
            var t = e.adgroup,
              n = e.campaignGroup;
            return o(
              "AdsPCAUnifiedFormatEligibilityUtils",
            ).isEligiblePCAUnifiedL1(n, t);
          });
        },
        { name: i.id + ".adsUEditorAdgroupIsEligiblePCAUnifiedL1Selector" },
      ),
      s = r("adsCreateSelector")(
        [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
        function (t) {
          return t.some(function (e) {
            var t = e.adgroup,
              n = e.campaignGroup;
            return o(
              "AdsPCAUnifiedFormatEligibilityUtils",
            ).isEligiblePCAUnifiedL1WithTestCell1(n, t);
          });
        },
        {
          name:
            i.id +
            ".adsUEditorAdgroupIsEligiblePCAUnifiedL1WithTestCell1Selector",
        },
      ),
      u = r("adsCreateSelector")(
        [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
        function (t) {
          return t.some(function (e) {
            var t = e.adgroup,
              n = e.campaignGroup;
            return o(
              "AdsPCAUnifiedFormatEligibilityUtils",
            ).isEligiblePCAUnifiedL1WithTestCell2(n, t);
          });
        },
        {
          name:
            i.id +
            ".adsUEditorAdgroupIsEligiblePCAUnifiedL1WithTestCell2Selector",
        },
      );
    ((l.adsUEditorAdgroupIsEligiblePCAUnifiedL1Selector = e),
      (l.adsUEditorAdgroupIsEligiblePCAUnifiedL1WithTestCell1Selector = s),
      (l.adsUEditorAdgroupIsEligiblePCAUnifiedL1WithTestCell2Selector = u));
  },
  98,
);
