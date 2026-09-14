__d(
  "AdsAsyncLocationsCheckerDataLoader",
  [
    "AsyncTypedRequest",
    "FBLogger",
    "XSVAsyncLocationsCheckerV2ControllerRouteBuilder",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = {
            page_ids: e.page_ids.getValues().filter(Boolean),
            page_set_locations_check_types: t == null ? [] : t,
          };
          (e.page_set_id != null && (n.page_set_id = e.page_set_id),
            e.root_page_id != null && (n.root_page_id = e.root_page_id));
          var o = r(
            "XSVAsyncLocationsCheckerV2ControllerRouteBuilder",
          ).buildUri(n);
          try {
            var a = yield new (r("AsyncTypedRequest"))(o).promisePayload();
            return a.checks;
          } catch (e) {
            return (
              r("FBLogger")("AdsAsyncLocationsCheckerDataLoader")
                .catching(r("getErrorSafe")(e))
                .warn("XSVAsyncLocationsCheckerController request failed"),
              new Map()
            );
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.load = e;
  },
  98,
);
