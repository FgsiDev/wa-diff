__d(
  "AdsBulkEditChangeBudgetDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("bulk_edit_budget", {
            bulk_edit_operation: t.budgetOperator,
            bulk_edit_unit: t.budgetUnit,
            bulk_edit_value: t.budget,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
