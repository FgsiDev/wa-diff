__d(
  "adsUEditorAdgroupCreativeAssetGroupsIndexSelector",
  [
    "AdsUEditorAdgroupCreativeAssetGroupsSelectedGroupIndexDataProvider",
    "adsCreateSelector",
    "adsUEditorAdgroupCreativeAssetGroupsIndexSelectorUtils",
    "adsUEditorSelectedAdgroupIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedAdgroupIDsSelector"),
          r(
            "AdsUEditorAdgroupCreativeAssetGroupsSelectedGroupIndexDataProvider",
          ).toFluxSelector(),
        ],
        function (t, n) {
          var e = n.creativeAssetGroupIndexMap;
          return o(
            "adsUEditorAdgroupCreativeAssetGroupsIndexSelectorUtils",
          ).adsUEditorAdgroupCreativeAssetGroupsIndex(t, {
            creativeAssetGroupIndexMap: e,
          });
        },
        { name: i.id + ".adsUEditorAdgroupCreativeAssetGroupsIndexSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
