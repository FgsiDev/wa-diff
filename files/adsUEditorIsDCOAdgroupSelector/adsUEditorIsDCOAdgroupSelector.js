__d(
  "adsUEditorIsDCOAdgroupSelector",
  [
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorIsDCOAdgroupSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
        function (t) {
          return o(
            "adsUEditorIsDCOAdgroupSelectorUtils",
          ).adsUEditorIsDCOAdgroup(t);
        },
        { name: i.id },
      ),
      s = e;
    l.default = s;
  },
  98,
);
