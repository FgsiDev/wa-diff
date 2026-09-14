__d(
  "adsUEditorCreativeSiteLinksNoticeDataSelector",
  [
    "AdsConnectedSourcesSiteLinksNoticeDataProvider",
    "LoadObject",
    "adsCreateSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedAdgroupIDsSelector"),
          r("AdsConnectedSourcesSiteLinksNoticeDataProvider").toFluxSelector(),
        ],
        function (t, n) {
          if (t.length !== 1)
            return r("LoadObject").empty({ creatorModuleID: i.id });
          var e = t[0].toString(),
            o = n == null ? void 0 : n.get(e);
          return r("LoadObject").withValue(o, { creatorModuleID: i.id });
        },
        { name: i.id + ".adsUEditorCreativeSiteLinksNoticeDataSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
