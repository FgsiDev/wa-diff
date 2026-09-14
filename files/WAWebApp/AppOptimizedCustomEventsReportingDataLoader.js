__d(
  "AppOptimizedCustomEventsReportingDataLoader",
  [
    "AdsGraphAPI",
    "AsyncTypedRequest",
    "GraphAPIPaging",
    "Promise",
    "XAdAccountOptimizedCustomEventsControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(e)
        .edge("app_optimized_custom_events")
        .setPriority("HIGH")
        .get()
        .then(o("GraphAPIPaging").allPages())
        .then(function (e) {
          return e.data;
        });
    }
    function u(t) {
      var o = t.accountID,
        a = t.dataSourceType,
        i = t.isConversionStagesOnly,
        l = r("XAdAccountOptimizedCustomEventsControllerRouteBuilder").buildUri(
          babelHelpers.extends(
            { act: o, data_source_type: a },
            i != null && { is_conversion_stages_only: i },
          ),
        );
      return new (e || (e = n("Promise")))(function (e, t) {
        new (r("AsyncTypedRequest"))(l)
          .setPayloadHandler(function (t) {
            var n = t.payload,
              r = n.map(function (e) {
                var t = e.data_source_id,
                  n = e.data_source_name,
                  r = e.data_source_type,
                  o = e.event_names;
                return {
                  dataSourceID: t,
                  dataSourceName: n,
                  dataSourceType: r,
                  eventNames: o,
                };
              });
            e(r);
          })
          .setErrorHandler(function (e) {
            return t(e);
          })
          .setMethod("GET")
          .setReadOnly(!0)
          .send();
      });
    }
    ((l.loadAppOptimizedCustomEventsByAdAccount = s),
      (l.loadOptimizedCustomEventsByAdAccountID = u));
  },
  98,
);
