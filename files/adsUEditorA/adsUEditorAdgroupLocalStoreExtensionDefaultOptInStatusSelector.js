__d(
  "adsUEditorAdgroupLocalStoreExtensionDefaultOptInStatusSelector",
  [
    "AdsAdgroupLocalStoreExtensionUtils",
    "AdsUEditorAdgroupPageSelectors",
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("adsCreateSelector")(
        [
          o("AdsUEditorAdgroupPageSelectors").adgroupIDsToPageLoadObjects,
          r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
        ],
        function (t, n) {
          var e = new Map();
          return (
            n.forEach(function (n) {
              var r = n.adgroup,
                a = n.campaign,
                i = n.campaignGroup,
                l = r.id;
              if (l != null) {
                var s = t.get(l);
                e.set(
                  l,
                  o(
                    "AdsAdgroupLocalStoreExtensionUtils",
                  ).isEligibleForLocalStoreExtensionWithPageCheck(i, a, r, s),
                );
              }
            }),
            e
          );
        },
        {
          name:
            i.id +
            ".adsUEditorAdgroupLocalStoreExtensionDefaultOptInStatusSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
