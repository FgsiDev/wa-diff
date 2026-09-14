__d(
  "AdsMockupAdsCreateCompletedReducerPlugin",
  ["AdsPERouterHelper"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          if (
            t.initialCreativeImportMockupID != null &&
            t.useCreativeImportMockupID
          ) {
            var e;
            (e = r("AdsPERouterHelper").getRouter()) == null ||
              e.updateParams({ creative_mockup_id: null });
          }
          return babelHelpers.extends({}, t, {
            mockupIDForCreation: null,
            initialCreativeImportMockupID: null,
            creativeImportMockupID:
              t.initialCreativeImportMockupID != null &&
              t.useCreativeImportMockupID
                ? t.initialCreativeImportMockupID
                : null,
            useCreativeImportMockupID: !1,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
