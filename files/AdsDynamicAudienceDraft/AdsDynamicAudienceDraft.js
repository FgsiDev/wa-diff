__d(
  "AdsDynamicAudienceDraft",
  ["immutable"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("immutable").Record({
        booking_window: void 0,
        error: void 0,
        event_source_group_creation_in_progress: void 0,
        event_source_group_id: void 0,
        event_sources: void 0,
        exclusions: void 0,
        inclusions: void 0,
        is_excluded_dynamic_audience: void 0,
        preconfigured_options: void 0,
        restrict_to_set_id: void 0,
        sliced_event_source_group_id: void 0,
        state: void 0,
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
