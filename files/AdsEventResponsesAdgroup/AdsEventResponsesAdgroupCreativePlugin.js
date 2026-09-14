__d(
  "AdsEventResponsesAdgroupCreativePlugin",
  ["AdsAPIObjectives", "AdsDefaultAdgroupCreativePlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultAdgroupCreativePlugin"), {
        type: "adgroup/creative",
        key: "event-responses",
        pivots: { objective: r("AdsAPIObjectives").EVENT_RESPONSES },
        getSupportedMediaFormats: function (t) {
          return new Set(["IMAGE", "VIDEO"]);
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
