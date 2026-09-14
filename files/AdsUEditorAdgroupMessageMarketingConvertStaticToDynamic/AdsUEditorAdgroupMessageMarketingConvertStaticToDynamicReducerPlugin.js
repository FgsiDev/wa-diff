__d(
  "AdsUEditorAdgroupMessageMarketingConvertStaticToDynamicReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupImageMutators",
    "AdsUEditorAdgroupMessageMarketingCarouselMutators",
    "AdsUEditorAdgroupMessageMarketingConvertStaticToDynamicActionFlux",
    "AdsUEditorAdgroupMessageMarketingDynamicProductSpecMutator",
    "AdsUEditorAdgroupMessageMarketingMediaMutators",
    "AdsUEditorAdgroupMessageMarketingMediaMutatorsCreativeSpecMutator",
    "AdsUEditorAdgroupReducerUtils",
    "WhatsAppBusinessAccountManagerHSMButtonRecord",
    "WhatsAppBusinessPlatformMessageTemplateDefaults",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n,
              a = [
                new (r("WhatsAppBusinessAccountManagerHSMButtonRecord"))({
                  type: "URL",
                  text: "",
                  url: null,
                }),
              ],
              i = o(
                "WhatsAppBusinessPlatformMessageTemplateDefaults",
              ).DEFAULT_MESSAGE_TEMPLATE;
            i.set("name", "DEFAULT_NAME").set(
              "language",
              (n = t.language) != null ? n : "en_US",
            );
            var l = o(
              "WhatsAppBusinessPlatformMessageTemplateDefaults",
            ).getJSONString(i);
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o("AdsMutators").chain(
                function (e) {
                  return o(
                    "AdsUEditorAdgroupMessageMarketingMediaMutatorsCreativeSpecMutator",
                  ).setStructuredCreativeSpec(
                    e,
                    l,
                    t.language,
                    null,
                    null,
                    null,
                    a,
                    null,
                  );
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
                  ).setChildAttachments(e, null, t.format, t.productSetID);
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
                  return o(
                    "AdsUEditorAdgroupMessageMarketingDynamicProductSpecMutator",
                  ).convertStaticToDynamicProductMessage(
                    e,
                    t.format,
                    t.productSetID,
                  );
                },
              )(e);
            });
          },
          r("AdsUEditorAdgroupMessageMarketingConvertStaticToDynamicActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
