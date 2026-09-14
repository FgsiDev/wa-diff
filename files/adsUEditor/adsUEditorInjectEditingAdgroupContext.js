__d(
  "adsUEditorInjectEditingAdgroupContext",
  ["AdsEditingAdgroupEditorContext", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("adsCreateStoreSelector")(
        e.getStores(n("AdsEditingAdgroupEditorContext")),
        function () {
          return e(n("AdsEditingAdgroupEditorContext"));
        },
        { name: i.id },
      );
    }
    l.default = e;
  },
  98,
);
