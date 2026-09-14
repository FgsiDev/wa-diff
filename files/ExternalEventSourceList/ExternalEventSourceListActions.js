__d(
  "ExternalEventSourceListActions",
  [
    "ProductsExternalEventSourceListLoadErrorAction",
    "ProductsExternalEventSourceListLoadedAction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      r("ProductsExternalEventSourceListLoadedAction").dispatch(
        { externalEventSources: t, productCatalogID: e },
        {
          line: "20",
          module: "ExternalEventSourceListActions.js",
          moduleID: i.id,
        },
      );
    }
    function s(e) {
      r("ProductsExternalEventSourceListLoadErrorAction").dispatch(
        { productCatalogID: e },
        {
          line: "29",
          module: "ExternalEventSourceListActions.js",
          moduleID: i.id,
        },
      );
    }
    ((l.externalEventSourceListLoaded = e),
      (l.externalEventSourceListLoadError = s));
  },
  98,
);
