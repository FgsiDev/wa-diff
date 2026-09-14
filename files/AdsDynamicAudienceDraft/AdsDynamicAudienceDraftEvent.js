__d(
  "AdsDynamicAudienceDraftEvent",
  ["immutable"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("immutable").Record({
        content_type: void 0,
        event_type: void 0,
        max_seconds: void 0,
        min_event_count: void 0,
        min_seconds: void 0,
        restriction_type: void 0,
      }),
      l = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e),
      s = l;
    i.default = s;
  },
  66,
);
