__d(
  "AdsUEditorAdgroupMessageMarketingCarouselMutators",
  ["AdsAdgroupRecordAccessors", "AdsMessageMarketingFormat", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.child_attachments.set(t),
        function (e) {
          return s(e, t, n, a);
        },
      )(e);
    }
    function s(e, t, n, a) {
      var i = "not_carousel";
      return (
        t != null
          ? (i = "static_carousel")
          : n ===
              o("AdsMessageMarketingFormat").AdsMessageMarketingFormat
                .SINGLE_CARD
            ? (i = "not_carousel")
            : a != null &&
              n ===
                o("AdsMessageMarketingFormat").AdsMessageMarketingFormat
                  .CAROUSEL &&
              (i = "others"),
        o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").metadata.carousel_style.set(i),
        )(e)
      );
    }
    l.setChildAttachments = e;
  },
  98,
);
