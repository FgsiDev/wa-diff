__d(
  "ProductCatalogActions",
  [
    "CatalogBusinessEventsLoggerHelper",
    "CatalogUnattachFromLocationsPageAction",
    "ProductsCatalogAddExternalEventSourcesAction",
    "ProductsCatalogAddProductAction",
    "ProductsCatalogAttachToBusinessAction",
    "ProductsCatalogAttachToLocationsPageAction",
    "ProductsCatalogBatchLoadErrorAction",
    "ProductsCatalogBatchLoadedAction",
    "ProductsCatalogConnectExternalEventSourcesAction",
    "ProductsCatalogCreateAndFetchAction",
    "ProductsCatalogCreatedAction",
    "ProductsCatalogDisconnectExternalEventSourcesAction",
    "ProductsCatalogExternalEventSourceListUpdatedAction",
    "ProductsCatalogPartialReloadAction",
    "ProductsCatalogReloadAction",
    "ProductsExternalEventSourceAssociationDialogAutoOpenAction",
    "ProductsExternalEventSourceAssociationDialogCloseAction",
    "ProductsExternalEventSourceAssociationDialogOpenAction",
    "ProductsExternalEventSourceNoSignalAction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      r("ProductsCatalogCreateAndFetchAction").dispatch(
        { clientID: e, data: t },
        { line: "37", module: "ProductCatalogActions.js", moduleID: i.id },
      );
    }
    function s(e) {
      for (var t of e.values())
        r("CatalogBusinessEventsLoggerHelper")
          .getCatalogCreationLogger()
          .setEvent("catalog_create_success")
          .setCatalogID(t.id)
          .log();
      r("ProductsCatalogCreatedAction").dispatch(
        { catalogs: e },
        { line: "50", module: "ProductCatalogActions.js", moduleID: i.id },
      );
    }
    function u(e) {
      r("ProductsCatalogBatchLoadedAction").dispatch(
        { catalogs: e },
        { line: "58", module: "ProductCatalogActions.js", moduleID: i.id },
      );
    }
    function c(e) {
      r("ProductsCatalogBatchLoadErrorAction").dispatch(
        { errors: e },
        { line: "64", module: "ProductCatalogActions.js", moduleID: i.id },
      );
    }
    function d(e, t) {
      r("ProductsCatalogConnectExternalEventSourcesAction").dispatch(
        { catalogID: e, eventSourcesWithActionSources: t },
        { line: "73", module: "ProductCatalogActions.js", moduleID: i.id },
      );
    }
    function m(e, t) {
      r("ProductsCatalogDisconnectExternalEventSourcesAction").dispatch(
        { catalogID: e, eventSourcesWithActionSources: t },
        { line: "83", module: "ProductCatalogActions.js", moduleID: i.id },
      );
    }
    function p(e, t) {
      r("ProductsCatalogAddExternalEventSourcesAction").dispatch(
        { eventSourcesWithActionSources: t, productCatalogID: e },
        { line: "93", module: "ProductCatalogActions.js", moduleID: i.id },
      );
    }
    function _(e) {
      r("ProductsCatalogExternalEventSourceListUpdatedAction").dispatch(
        { productCatalogID: e },
        { line: "102", module: "ProductCatalogActions.js", moduleID: i.id },
      );
    }
    function f(e) {
      r("ProductsCatalogReloadAction").dispatch(
        { productCatalogID: e },
        { line: "108", module: "ProductCatalogActions.js", moduleID: i.id },
      );
    }
    function g(e) {
      r("ProductsCatalogAddProductAction").dispatch(
        { catalogID: e },
        { line: "114", module: "ProductCatalogActions.js", moduleID: i.id },
      );
    }
    function h(e) {
      r("ProductsCatalogPartialReloadAction").dispatch(
        { productCatalogID: e },
        { line: "120", module: "ProductCatalogActions.js", moduleID: i.id },
      );
    }
    function y(e, t, n) {
      (r("CatalogBusinessEventsLoggerHelper")
        .getCatalogSettingsLogger()
        .setEvent("catalog_settings_attach_to_business")
        .setActionData({ busines_id: t })
        .setCatalogID(e)
        .log(),
        r("ProductsCatalogAttachToBusinessAction").dispatch(
          { businessID: t, onSuccess: n, productCatalogID: e },
          { line: "135", module: "ProductCatalogActions.js", moduleID: i.id },
        ));
    }
    function C(e, t, n) {
      r("ProductsCatalogAttachToLocationsPageAction").dispatch(
        { onSuccess: n, pageID: t, productCatalogID: e },
        { line: "147", module: "ProductCatalogActions.js", moduleID: i.id },
      );
    }
    function b(e, t) {
      r("CatalogUnattachFromLocationsPageAction").dispatch(
        { catalogID: e, storeCatalogSettingsID: t },
        { line: "158", module: "ProductCatalogActions.js", moduleID: i.id },
      );
    }
    function v(e) {
      r("ProductsExternalEventSourceAssociationDialogCloseAction").dispatch(
        { productCatalogID: e },
        { line: "167", module: "ProductCatalogActions.js", moduleID: i.id },
      );
    }
    function S() {
      r("ProductsExternalEventSourceAssociationDialogOpenAction").dispatch(
        {},
        { line: "173", module: "ProductCatalogActions.js", moduleID: i.id },
      );
    }
    function R() {
      r("ProductsExternalEventSourceAssociationDialogAutoOpenAction").dispatch(
        {},
        { line: "177", module: "ProductCatalogActions.js", moduleID: i.id },
      );
    }
    function L() {
      r("ProductsExternalEventSourceNoSignalAction").dispatch(
        {},
        { line: "181", module: "ProductCatalogActions.js", moduleID: i.id },
      );
    }
    ((l.createAndFetchCatalog = e),
      (l.catalogCreated = s),
      (l.catalogBatchLoaded = u),
      (l.catalogBatchLoadError = c),
      (l.connectExternalEventSources = d),
      (l.disconnectExternalEventSources = m),
      (l.addExternalEventSources = p),
      (l.catalogExternalEventSourcesUpdated = _),
      (l.reload = f),
      (l.addProduct = g),
      (l.partialReload = h),
      (l.attachToBusiness = y),
      (l.attachToLocationsPage = C),
      (l.unattachFromLocationsPage = b),
      (l.closeExternalEventSourceAssociationDialog = v),
      (l.openExternalEventSourceAssociationDialog = S),
      (l.externalEventSourceAssociationDialogAutoOpened = R),
      (l.someExternalEventSourceHasNoSignal = L));
  },
  98,
);
