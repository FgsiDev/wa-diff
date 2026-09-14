__d(
  "AdsCreativeGenAILoggingContext",
  ["AdsCreativeGenAILoggingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return (
        (t = {}),
        (t.adgroup_id = e.adgroupID),
        (t.event_source = e.assetGenerationPath),
        (t.is_duplicated_object = e.isDuplicatedAdgroup),
        (t.media_format = e.mediaFormat),
        (t.object_creation_source = e.isDuplicatedAdgroup
          ? "click_ad_duplicate"
          : "click_quick_create"),
        (t.source = o(
          "AdsCreativeGenAILoggingUtils",
        ).convertEntryPointForLogging(e.entryPoint)),
        (t.targeting_ui_event_data = e.baseAssetSetup),
        t
      );
    }
    l.getGenAILoggingContext = e;
  },
  98,
);
