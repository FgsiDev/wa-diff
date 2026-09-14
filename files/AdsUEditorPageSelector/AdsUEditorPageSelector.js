__d(
  "AdsUEditorPageSelector",
  [
    "AdsLoadObjectUtils",
    "AdsUEditorPageSelectorUtils",
    "LoadObject",
    "adsCreateSelector",
    "adsPromotablePagesForAccountSelector",
    "adsUEditorFilterPagesSelector_LEGACY",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = r("adsCreateSelector"))(
        [
          r("adsUEditorFilterPagesSelector_LEGACY"),
          r("adsPromotablePagesForAccountSelector"),
        ],
        function (t, n) {
          return t(n);
        },
        { name: i.id + ".pageSelector" },
      ),
      u = e(
        [s],
        function (t) {
          if (t.isLoading())
            return r("LoadObject").loading({ creatorModuleID: i.id });
          var e = t.getValue();
          if (e == null) return null;
          var n = o("AdsUEditorPageSelectorUtils").pagesMapLogic(e);
          return r("LoadObject").withValue(n, { creatorModuleID: i.id });
        },
        { name: i.id + ".pagesMapSelector" },
      ),
      c = e(
        [s],
        function (t) {
          if (t.isLoading())
            return r("LoadObject").loading({ creatorModuleID: i.id });
          var e = t.getValue();
          if (e == null) return null;
          var n = e.reduce(function (e, t) {
            return ((e[t.id] = t), e);
          }, {});
          return r("LoadObject").withValue(n, { creatorModuleID: i.id });
        },
        { name: i.id + ".pagesMapAdgroupSelector" },
      ),
      d = e(
        [s],
        function (t) {
          return o("AdsLoadObjectUtils")
            .all([t])
            .map(function (e) {
              var t = e[0];
              return r("LoadObject").withValue(r("immutable").List(t), {
                creatorModuleID: i.id,
              });
            });
        },
        { name: i.id + ".promotablePagesSelector" },
      );
    ((l.pageSelector = s),
      (l.pagesMapSelector = u),
      (l.pagesMapAdgroupSelector = c),
      (l.promotablePagesSelector = d));
  },
  98,
);
