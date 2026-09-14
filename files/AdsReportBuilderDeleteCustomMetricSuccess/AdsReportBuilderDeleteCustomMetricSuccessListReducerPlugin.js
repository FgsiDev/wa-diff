__d(
  "AdsReportBuilderDeleteCustomMetricSuccessListReducerPlugin",
  ["AdsReportBuilderCustomMetricKey", "LoadObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.id,
            o = n.scopeID,
            a = n.scopeType,
            l = new (r("AdsReportBuilderCustomMetricKey"))({
              scopeType: a,
              scopeID: o,
            }),
            s = t.getLoadedValue(l);
          return t.set(
            l,
            r("LoadObject").withValue(s.delete(e), { creatorModuleID: i.id }),
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
