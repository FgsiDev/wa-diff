__d(
  "AdsAdgroupSetHasCustomTemplateUrlSpecFieldsDataReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.initValueObjects;
          return t.withMutations(function (t) {
            for (var n of e) t.has(n.id) || t.set(n.id, n.hasInitValue);
            return t;
          });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
