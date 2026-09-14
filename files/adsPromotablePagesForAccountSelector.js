__d(
  "adsPromotablePagesForAccountSelector",
  [
    "AdsAccountStore",
    "AdsLoadStateUtils_LEGACY",
    "AdsPageStore",
    "AdsPageUtils",
    "AdsPromotablePageDataProvider",
    "AdsUEditorPageLoadedObjectError",
    "FBLogger",
    "LoadObject",
    "adsCreateSelector",
    "adsCreateStoreThunkSelector",
    "afcPageIDsSelector",
    "err",
    "gkx",
    "immutable",
    "naturalComparator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("AdsPromotablePageDataProvider").toFluxSelector(),
          r("AdsAccountStore").getSelectedAccountID,
        ],
        function (t, n) {
          return (
            r("gkx")("13746") &&
              r("FBLogger")("ads_page_migration").info(
                "loadPages GAPI called instead of GQL",
              ),
            n != null
              ? t.get(n)
              : r("LoadObject").loading({ creatorModuleID: i.id })
          );
        },
        { name: i.id + ".pagesSelector" },
      ),
      s = r("adsCreateSelector")(
        [
          r("afcPageIDsSelector"),
          r("adsCreateStoreThunkSelector")(r("AdsPageStore"), function (e) {
            return r("AdsPageStore").getAll(e);
          }),
        ],
        function (t, n) {
          return t != null ? n(t) : null;
        },
        { name: i.id + ".afcPagesMapSelector" },
      ),
      u = r("adsCreateSelector")(
        [e, s],
        function (t, n) {
          if (t.isLoading())
            return r("LoadObject").loading({ creatorModuleID: i.id });
          var e = t.getValue();
          if (e == null)
            return r("LoadObject").loading({ creatorModuleID: i.id });
          if (n != null) {
            if (o("AdsLoadStateUtils_LEGACY").anyLoading(n))
              return r("LoadObject").loading({ creatorModuleID: i.id });
            if (
              ((e = e.filter(function (e) {
                return n.has(e.id);
              })),
              o("AdsLoadStateUtils_LEGACY").allLoaded(n) && e.length === 0)
            ) {
              var a = r("err")(
                r("AdsUEditorPageLoadedObjectError")
                  .HAS_EMPTY_AFC_PAGE_INTERSECTION,
              );
              return r("LoadObject").withError(a, { creatorModuleID: i.id });
            }
          }
          return r("LoadObject").withValue(
            r("immutable").List(
              [].concat(e).sort(function (e, t) {
                return r("naturalComparator")(
                  o("AdsPageUtils").getPageUIName(e),
                  o("AdsPageUtils").getPageUIName(t),
                );
              }),
            ),
            { creatorModuleID: i.id },
          );
        },
        { name: i.id + ".adsPromotablePagesForAccountSelector" },
      ),
      c = u;
    l.default = c;
  },
  98,
);
