__d(
  "AdsAdvancedPreviewV2DegreesOfFreedomVariationLoggingPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        forVariationPlugin: "degrees-of-freedom",
        type: "advanced_preview/variation/logging",
        key: "degrees-of-freedom",
        getLoggingData: function (t) {
          var e;
          return t == null || t.type !== "degrees-of-freedom"
            ? {}
            : ((e = {}),
              (e.new_value = Object.entries(t.fields)
                .map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return t + ": " + n;
                })
                .join(",")),
              e);
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
