__d(
  "AdsAdvancedPreviewV2DCOMediaVariationLoggingPlugin",
  ["last"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        forVariationPlugin: "dco-media",
        type: "advanced_preview/variation/logging",
        key: "dco-media",
        getLoggingData: function (t) {
          var e;
          return t == null || t.type !== "dco-media"
            ? {}
            : ((e = {}),
              (e.media_format = r("last")(t.fieldPath)),
              (e.displayed_index = t.index),
              e);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
