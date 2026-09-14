__d(
  "adsUEditorAdgroupIsPostClickExperienceSelector",
  [
    "adsCreateSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupIsPostClickExperienceSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        r("adsUEditorAdObjectsForSelectedAdgroupsSelector"),
        r("adsUEditorAccountSelector"),
      ],
      function (t, n) {
        return o(
          "adsUEditorAdgroupIsPostClickExperienceSelectorUtils",
        ).isPostClickExperience(t, n);
      },
      { name: i.id + ".isPostClickExperienceSelector" },
    );
    l.isPostClickExperienceSelector = e;
  },
  98,
);
