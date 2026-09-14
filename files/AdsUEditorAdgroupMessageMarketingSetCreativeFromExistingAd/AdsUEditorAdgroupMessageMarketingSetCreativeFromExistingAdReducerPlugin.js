__d(
  "AdsUEditorAdgroupMessageMarketingSetCreativeFromExistingAdReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSetCreativeFromExistingAdActionFlux",
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
              l = n.header,
              s = n.body,
              u = n.footer,
              c = {
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
              d = n.image_hash,
              m = n.video_id,
              p = n.video_thumbnail_url,
              _ = !r("isStringNullOrEmpty")(m),
              f = !(r("isStringNullOrEmpty")(d) && r("isStringNullOrEmpty")(m)),
              g =
                f && !r("isStringNullOrEmpty")(l)
                  ? r("getMergedHeaderAndBodyTextForTemplate")(l, s)
                  : s,
              h = f ? null : l,
              y = r("immutable")
                .Map()
                .set("text", c.text)
                .set("type", c.type)
                .set("url", c.url),
              C = r("immutable").List([y]);
            return o("AdsMutators").mutateEach(t, n.adgroupIDs, function (e) {
              return o("AdsMutators").chain(
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.marketing_message_structured_spec.footer.set(u),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.marketing_message_structured_spec.buttons.set(C),
                _
                  ? r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.object_story_spec.video_data.message.set(g)
                  : r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.object_story_spec.link_data.message.set(g),
                f
                  ? r("AdsAdgroupRecordAccessors").creative.object_story_spec
                      .link_data.name.delete
                  : r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.object_story_spec.link_data.name.set(h),
                _
                  ? r("AdsAdgroupRecordAccessors").creative.object_story_spec
                      .link_data.delete
                  : r("AdsAdgroupRecordAccessors").creative.object_story_spec
                      .video_data.delete,
                _
                  ? r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.object_story_spec.video_data.video_id.set(m)
                  : r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.object_story_spec.link_data.image_hash.set(d),
                _
                  ? r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.object_story_spec.video_data.image_url.set(p)
                  : r("AdsAdgroupRecordAccessors").creative.object_story_spec
                      .video_data.delete,
                r("AdsAdgroupRecordAccessors").creative.object_type.set(
                  _ ? r("ApiAdObjectTypes").VIDEO : r("ApiAdObjectTypes").SHARE,
                ),
                r("AdsAdgroupRecordAccessors").creative.object_story_spec
                  .video_data.link_description.delete,
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.marketing_message_structured_spec.referenced_adgroup_id.set(
                  n.referencedAdgroupId,
                ),
              )(e);
            });
          },
          r(
            "AdsUEditorAdgroupMessageMarketingSetCreativeFromExistingAdActionFlux",
          ).actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
