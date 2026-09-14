__d(
  "SignalsEventNameMetadataDataProviderPlugin",
  [
    "AsyncTypedRequest",
    "Promise",
    "SignalsLaminarHelpers",
    "XAdsEventsManagerSignalsEventNameMetadataControllerRouteBuilder",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var o = r(
        "XAdsEventsManagerSignalsEventNameMetadataControllerRouteBuilder",
      ).buildUri({ event_name_id: t.eventNameID });
      return new (e || (e = n("Promise")))(function (e, t) {
        new (r("AsyncTypedRequest"))(o.toString())
          .setPayloadHandler(function (t) {
            var n = t.dataSource,
              r = t.eventName;
            e({ data_source: n, event_name: r });
          })
          .setErrorHandler(function (e) {
            return t(e);
          })
          .setMethod("GET")
          .setReadOnly(!0)
          .send();
      });
    }
    var u = r("immutable").Record({ eventNameID: null }),
      c = {
        initialState: o("SignalsLaminarHelpers").createLoadObjectMap(
          s,
          function (e) {
            return u(e);
          },
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
