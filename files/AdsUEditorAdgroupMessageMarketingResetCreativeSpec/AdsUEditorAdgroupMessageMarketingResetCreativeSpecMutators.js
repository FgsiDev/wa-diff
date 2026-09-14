__d(
  "AdsUEditorAdgroupMessageMarketingResetCreativeSpecMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsFactoryConstants",
    "AdsMessageMarketingFormat",
    "AdsMessageMarketingSetupSource",
    "AdsMutators",
    "AdsUEditorAdgroupImageMutators",
    "AdsUEditorAdgroupMessageMarketingCarouselMutators",
    "AdsUEditorAdgroupMessageMarketingDynamicProductSpecMutator",
    "AdsUEditorAdgroupMessageMarketingMediaMutators",
    "AdsUEditorAdgroupMessageMarketingMediaMutatorsCreativeSpecMutator",
    "WhatsAppBusinessAccountManagerHSMButtonRecord",
    "WhatsAppBusinessPlatformMessageTemplateDefaults",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, u) {
      (i === void 0 && (i = !1), u === void 0 && (u = !1));
      var c = o(
        "WhatsAppBusinessPlatformMessageTemplateDefaults",
      ).DEFAULT_MESSAGE_TEMPLATE;
      c.set("name", "DEFAULT_NAME").set("language", a != null ? a : "en_US");
      var d = o(
          "WhatsAppBusinessPlatformMessageTemplateDefaults",
        ).getJSONString(c),
        m =
          (t &&
            t ===
              o("AdsMessageMarketingSetupSource").AdsMessageMarketingSetupSource
                .MANUAL) ||
          (n &&
            n ===
              o("AdsMessageMarketingFormat").AdsMessageMarketingFormat
                .SINGLE_CARD) ||
          u
            ? [
                new (r("WhatsAppBusinessAccountManagerHSMButtonRecord"))({
                  type: "URL",
                  text: "",
                  url: null,
                }),
              ]
            : null,
        p =
          t ===
          o("AdsMessageMarketingSetupSource").AdsMessageMarketingSetupSource
            .CATALOG
            ? {
                id: l != null ? l : o("AdsFactoryConstants").PRODUCT_CATALOG_ID,
                product_ids: null,
              }
            : null,
        _ =
          t ===
          o("AdsMessageMarketingSetupSource").AdsMessageMarketingSetupSource
            .EXISTING_AD
            ? "0"
            : null;
      return o("AdsMutators").chain(
        function (e) {
          return o(
            "AdsUEditorAdgroupMessageMarketingMediaMutatorsCreativeSpecMutator",
          ).setStructuredCreativeSpec(e, d, a, null, null, null, m, null, _, p);
        },
        function (e) {
          return i
            ? o("AdsMutators").chain(
                r("AdsAdgroupRecordAccessors").creative.object_story_spec
                  .template_data.delete,
                r("AdsAdgroupRecordAccessors").creative.product_set_id.delete,
              )(e)
            : e;
        },
        function (e) {
          return o(
            "AdsUEditorAdgroupMessageMarketingMediaMutators",
          ).deleteVideoFromCreativeSpec(e);
        },
        function (e) {
          return o(
            "AdsUEditorAdgroupMessageMarketingMediaMutators",
          ).deleteImageFromCreativeSpec(e);
        },
        function (e) {
          return o(
            "AdsUEditorAdgroupMessageMarketingCarouselMutators",
          ).setChildAttachments(e, null);
        },
        function (e) {
          return o("AdsUEditorAdgroupImageMutators").setImageThumbnail(
            null,
            null,
            null,
            e,
          );
        },
        function (e) {
          return u && !i ? s(e, n) : e;
        },
      )(e);
    }
    function s(e, t) {
      return t == null
        ? e
        : o(
            "AdsUEditorAdgroupMessageMarketingDynamicProductSpecMutator",
          ).initializeDynamicSpec(e, t);
    }
    l.getCreativeSpecResetMutators = e;
  },
  98,
);
