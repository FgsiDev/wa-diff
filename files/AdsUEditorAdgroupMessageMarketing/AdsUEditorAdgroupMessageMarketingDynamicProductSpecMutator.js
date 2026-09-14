__d(
  "AdsUEditorAdgroupMessageMarketingDynamicProductSpecMutator",
  ["AdsAdgroupRecordAccessors", "AdsMessageMarketingFormat", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a = o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.product_set_id.set(n),
      )(e);
      return t == null ? e : s(a, t);
    }
    function s(e, t) {
      var n;
      return o("AdsMutators").chain(
        (n = r("AdsAdgroupRecordAccessors")).creative.object_story_spec
          .link_data.delete,
        n.creative.object_story_spec.template_data.message.set(""),
        function (e) {
          return t ===
            o("AdsMessageMarketingFormat").AdsMessageMarketingFormat.SINGLE_CARD
            ? r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.template_data.name.set("")(e)
            : e;
        },
        n.creative.object_story_spec.template_data.description.set(""),
        n.creative.object_story_spec.template_data.link.set("example.com"),
        n.creative.object_story_spec.template_data.force_single_link.set(
          t ===
            o("AdsMessageMarketingFormat").AdsMessageMarketingFormat
              .SINGLE_CARD,
        ),
        n.creative.object_story_spec.template_data.multi_share_end_card.set(!1),
        n.metadata.carousel_style.set(
          t ===
            o("AdsMessageMarketingFormat").AdsMessageMarketingFormat.CAROUSEL
            ? "others"
            : "not_carousel",
        ),
      )(e);
    }
    ((l.convertStaticToDynamicProductMessage = e),
      (l.initializeDynamicSpec = s));
  },
  98,
);
