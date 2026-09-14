__d(
  "AdsReportBuilderMutateSuccessCustomMetricReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return babelHelpers.extends({}, t, {
            isOpen: n.isSaveAndAddNew === !0,
            isMutating: !1,
            uiErrors: new Set(),
            apiErrors: new Set(),
          });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
