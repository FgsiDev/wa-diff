__d(
  "adsUEditorAdgroupConnectedSourcesAppInfoEligibilitySelector",
  [
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupConnectedSourcesAppInfoEligibilitySelectorUtils",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
        r("adsUEditorSelectedAdgroupPlainObjectsSelector"),
      ],
      function (t, n) {
        return o(
          "adsUEditorAdgroupConnectedSourcesAppInfoEligibilitySelectorUtils",
        ).adsUEditorAdgroupConnectedSourcesAppInfoEligibility(t, n);
      },
      {
        name:
          i.id + ".adsUEditorAdgroupConnectedSourcesAppInfoEligibilitySelector",
      },
    );
    l.adsUEditorAdgroupConnectedSourcesAppInfoEligibilitySelector = e;
  },
  98,
);
