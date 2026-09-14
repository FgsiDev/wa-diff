__d(
  "AdsAdvancedPreviewV2CreativeAssetGroupVariationLoggingPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        forVariationPlugin: "creative-asset-group",
        type: "advanced_preview/variation/logging",
        key: "creative-asset-group",
        getLoggingData: function (t) {
          var e;
          return t == null || t.type !== "creative-asset-group"
            ? {}
            : ((e = {}),
              (e.media_format = t.format),
              (e.log_group_index = t.group === "all" ? -1 : t.group),
              (e.old_value = t.mediaIndex),
              (e.new_value = t.textIndex),
              e);
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
