__d(
  "AdsUEditorAdgroupPageSelectors",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsLoadStateUtils_LEGACY",
    "AdsPageStore",
    "AdsUEditorAdgroupBulkSelectors",
    "AdsUEditorAdgroupPageSelectorsUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUniformValue",
    "LoadObject",
    "adsCreateSelector",
    "adsCreateStoreThunkSelector",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (e = r("adsCreateSelector"))(
        [
          o("AdsUEditorAdgroupBulkSelectors").pageID,
          r("adsCreateStoreThunkSelector")(
            (s = r("AdsPageStore")),
            function (e) {
              return r("AdsPageStore").getAll(e);
            },
          ),
        ],
        function (t, n) {
          var e = t.getValues(),
            r = o("AdsLoadStateUtils_LEGACY").getLoadedValuesSingleMap(n(e));
          return o("AdsUEditorAdgroupPageSelectorsUtils").bulkPageLogic(t, r);
        },
        { name: i.id + ".bulkPage" },
      ),
      c = e(
        [s.getAllSelector, o("AdsUEditorAdgroupBulkSelectors").pageID],
        function (t, n) {
          return t(n.getValues().filter(Boolean));
        },
        { name: i.id + ".pageMap" },
      ),
      d = o("AdsUEditorAdgroupSelectors").adgroups.mapTransform(
        function (e, t) {
          return o("AdsAPIAdgroupRecordUtils").getPageID(e, t);
        },
      ),
      m = e(
        [s.getSelector, d],
        function (t, n) {
          return n.map(function (e) {
            return e == null ? null : t(e);
          });
        },
        { name: i.id + ".adgroupIDsToPages" },
      ),
      p = e(
        [m],
        function (t) {
          return t.map(function (e) {
            return e
              ? o("AdsLoadStateUtils_LEGACY").toLoadObject(e)
              : r("LoadObject").empty({ creatorModuleID: i.id });
          });
        },
        { name: i.id + ".adgroupIDsToPageLoadObjects" },
      ),
      _ = e(
        [
          o("AdsUEditorAdgroupBulkSelectors").pageID,
          r("adsCreateStoreThunkSelector")(s, function (e) {
            return r("AdsPageStore").get(e);
          }),
        ],
        function (t, n) {
          var e = t instanceof r("AdsUniformValue") ? t.getValue() : null;
          return r("isFalsey")(e) ? null : n(e);
        },
        { name: i.id + ".pageCreatingAd" },
      );
    ((l.bulkPage = u),
      (l.pageMap = c),
      (l.adgroupIDsToPages = m),
      (l.adgroupIDsToPageLoadObjects = p),
      (l.pageCreatingAd = _));
  },
  98,
);
