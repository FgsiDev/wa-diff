__d(
  "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
  [
    "adsCreateSelector",
    "adsUEditorAdObjectsPlainLoadObjectForSelectedAdgroupsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorAdObjectsPlainLoadObjectForSelectedAdgroupsSelector")],
        function (t) {
          return t.isDone() && t.hasValue() ? t.getValueEnforcing() : [];
        },
        { name: i.id + ".adsUEditorAdPlainObjectsForSelectedAdgroupsSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
