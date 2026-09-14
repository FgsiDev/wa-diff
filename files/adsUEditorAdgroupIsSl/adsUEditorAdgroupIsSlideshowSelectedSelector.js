__d(
  "adsUEditorAdgroupIsSlideshowSelectedSelector",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.customSelectors_ASK_ACE_TEAM_BEFORE_USING;
          return t.isSlideshowSelectedSelector.getStores();
        },
        function (t) {
          var e = t.customSelectors_ASK_ACE_TEAM_BEFORE_USING;
          return e.isSlideshowSelectedSelector();
        },
        { isGetStoresPure: !0, name: i.id + ".selector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
