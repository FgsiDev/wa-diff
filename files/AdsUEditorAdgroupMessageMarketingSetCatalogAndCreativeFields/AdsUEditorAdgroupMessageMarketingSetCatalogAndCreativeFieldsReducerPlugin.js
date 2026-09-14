__d(
  "AdsUEditorAdgroupMessageMarketingSetCatalogAndCreativeFieldsReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSetCatalogAndCreativeFieldsActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "ApiAdObjectTypes",
    "getMergedHeaderAndBodyTextForTemplate",
    "immutable",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "",
      s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (t, n) {
            var a,
              i,
              l,
              s = n.header,
              u = n.body,
              c = n.footer,
              d = {
                type: "URL",
                text:
                  (a = n == null ? void 0 : n.cta_url_button_text) != null
                    ? a
                    : e,
                url:
                  (i = n == null ? void 0 : n.cta_url_button_link) != null
                    ? i
                    : e,
              },
              m = r("immutable").List((l = n.product_ids) != null ? l : []),
              p = r("isStringNullOrEmpty")(s)
                ? u
                : r("getMergedHeaderAndBodyTextForTemplate")(s, u),
              _ = r("immutable")
                .Map()
                .set("text", d.text)
                .set("type", d.type)
                .set("url", d.url),
              f = r("immutable").List([_]);
            return o("AdsMutators").mutateEach(t, n.adgroupIDs, function (e) {
              var t;
              return o("AdsMutators").chain(
                (t = r(
                  "AdsAdgroupRecordAccessors",
                )).creative.marketing_message_structured_spec.footer.set(c),
                t.creative.marketing_message_structured_spec.catalog.id.set(
                  n.catalog_id,
                ),
                t.creative.marketing_message_structured_spec.catalog.product_ids.set(
                  m,
                ),
                t.creative.marketing_message_structured_spec.buttons.set(f),
                t.creative.object_story_spec.link_data.message.set(p),
                t.creative.object_story_spec.link_data.image_hash.delete,
                t.creative.object_story_spec.video_data.delete,
                t.creative.object_story_spec.link_data.name.delete,
                t.creative.object_type.set(r("ApiAdObjectTypes").SHARE),
              )(e);
            });
          },
          r(
            "AdsUEditorAdgroupMessageMarketingSetCatalogAndCreativeFieldsActionFlux",
          ).actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
