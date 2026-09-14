__d(
  "adsUEditorIsBulkEditingSelector",
  ["adsCreateSelector", "adsUEditorSelectedAdgroupIDsSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorSelectedAdgroupIDsSelector")],
        function (t) {
          return t.length > 1;
        },
        { name: i.id + ".adsUEditorIsBulkEditingSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
