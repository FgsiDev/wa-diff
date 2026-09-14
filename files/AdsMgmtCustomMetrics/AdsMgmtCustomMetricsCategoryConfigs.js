__d(
  "AdsMgmtCustomMetricsCategoryConfigs",
  ["fbt", "AdsInsightsColumnCategory"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c =
        ((e = {}),
        (e[(u = r("AdsInsightsColumnCategory")).CUSTOM_METRICS] = {
          id: u.CUSTOM_METRICS,
          name: s._(/*BTDS*/ "Custom metrics"),
          parent: u.ROOT,
          children: [],
          columns: [],
        }),
        (e[u.CUSTOM_METRICS_PRIVATE] = {
          id: u.CUSTOM_METRICS_PRIVATE,
          name: s._(/*BTDS*/ "Only you"),
          parent: u.CUSTOM_METRICS,
          children: [],
          columns: [],
        }),
        (e[u.CUSTOM_METRICS_PUBLIC_ACCOUNT] = {
          id: u.CUSTOM_METRICS_PUBLIC_ACCOUNT,
          name: s._(/*BTDS*/ "Everyone with access to this ad account"),
          parent: u.CUSTOM_METRICS,
          children: [],
          columns: [],
        }),
        (e[u.CUSTOM_METRICS_PUBLIC_BUSINESS] = {
          id: u.CUSTOM_METRICS_PUBLIC_BUSINESS,
          name: s._(/*BTDS*/ "Everyone with access to this business"),
          parent: u.CUSTOM_METRICS,
          children: [],
          columns: [],
        }),
        e);
    l.customMetricsCategoryConfigs = c;
  },
  226,
);
