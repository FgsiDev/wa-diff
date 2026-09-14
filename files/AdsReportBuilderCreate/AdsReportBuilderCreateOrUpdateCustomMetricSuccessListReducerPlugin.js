__d(
  "AdsReportBuilderCreateOrUpdateCustomMetricSuccessListReducerPlugin",
  ["AdsReportBuilderCustomMetricKey", "LoadObject", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.customMetricRecord ? n.customMetricRecord : n,
            o = e.id,
            a = e.scopeID,
            l = e.scopeType,
            s = new (r("AdsReportBuilderCustomMetricKey"))({
              scopeID: a,
              scopeType: l,
            }),
            u = t.getLoadedValue(s) || r("immutable").Set();
          return t.set(
            s,
            r("LoadObject").withValue(u.add(o), { creatorModuleID: i.id }),
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
