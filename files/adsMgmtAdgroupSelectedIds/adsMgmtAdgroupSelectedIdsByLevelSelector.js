__d(
  "adsMgmtAdgroupSelectedIdsByLevelSelector",
  [
    "adsCreateSelector",
    "adsMgmtAdgroupIDsFromSelectedParentIDsByLevelSelector",
    "adsMgmtAdgroupSelectedIdsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("adsCreateSelector")(
        [
          o("adsMgmtAdgroupSelectedIdsSelector")
            .adsMgmtAdgroupSelectedIdsSelector,
          r("adsMgmtAdgroupIDsFromSelectedParentIDsByLevelSelector"),
        ],
        function (t, n) {
          return t.concat(n);
        },
        { name: i.id + ".selector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
