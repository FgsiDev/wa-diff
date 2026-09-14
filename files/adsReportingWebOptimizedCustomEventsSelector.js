__d(
  "adsReportingWebOptimizedCustomEventsSelector",
  [
    "AdAccountOptimizedCustomEventsDataProvider",
    "AdsAccountStore",
    "adsCreateSelector",
    "adsCreateStoreThunkSelector",
    "cr:27559",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("AdAccountOptimizedCustomEventsDataProvider").toFluxStore(),
      u = r("adsCreateStoreThunkSelector")(s, function (e) {
        return s.getState().get(e);
      }),
      c =
        (e =
          n("cr:27559") == null ? void 0 : n("cr:27559").fluxGetSelector()) !=
        null
          ? e
          : u,
      d = r("adsCreateSelector")(
        [r("AdsAccountStore").getSelectedAccount, c],
        function (t, n) {
          return t.map(function (e) {
            return n({
              accountID: e.account_id,
              dataSourceType: "CRM",
              isConversionStagesOnly: !0,
            });
          });
        },
        { name: i.id + ".adsReportingWebOptimizedCustomEventsSelector" },
      ),
      m = d;
    l.default = m;
  },
  98,
);
