__d(
  "StatsTypeToAggregationType",
  ["AdsPixelStatsTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        ((e = {}),
        (e[(s = r("AdsPixelStatsTypes")).DOMAIN] = "host"),
        (e[s.EVENT] = "event"),
        (e[s.TRAFFIC] = "pixel_fire"),
        (e[s.PII_KEYS] = "pii_keys"),
        (e[s.PII_LIFT] = "pii_lift"),
        (e[s.HAD_PII] = "had_pii"),
        (e[s.MATCH_KEYS] = "match_keys"),
        (e[s.URL] = "url"),
        (e[s.DEVICE] = "device_type"),
        (e[s.DETECTION_METHOD] = "event_detection_method"),
        (e[s.EVENT_VALUE_COUNT] = "event_value_count"),
        (e[s.EVENT_TOTAL_COUNTS] = "event_total_counts"),
        (e[s.EVENT_SOURCE] = "event_source"),
        (e[s.EVENT_PROCESSING_RESULT] = "event_processing_results"),
        e),
      c = u;
    l.default = c;
  },
  98,
);
