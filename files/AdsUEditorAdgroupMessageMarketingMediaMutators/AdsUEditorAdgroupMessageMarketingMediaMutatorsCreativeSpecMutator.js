__d(
  "AdsUEditorAdgroupMessageMarketingMediaMutatorsCreativeSpecMutator",
  ["AdsAdgroupRecordAccessors", "AdsMutators", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, d, m, p, _) {
      var f;
      (p === void 0 && (p = void 0), _ === void 0 && (_ = void 0));
      var g =
        (f =
          d == null
            ? void 0
            : d.map(function (e) {
                return r("immutable")
                  .Map()
                  .set("text", e.text)
                  .set("type", e.type)
                  .set("url", e.url)
                  .set(
                    "custom_field_for_url_suffix",
                    e.custom_field_for_url_suffix,
                  )
                  .set("phone_number", e.phone_number)
                  .set(
                    "coupon_code",
                    e.example != null && e.example.length > 0
                      ? e.example[0]
                      : null,
                  )
                  .set(
                    "preconfigured_response_image_hash",
                    e.preconfigured_response_image_hash,
                  )
                  .set(
                    "preconfigured_response_video_id",
                    e.preconfigured_response_video_id,
                  )
                  .set(
                    "preconfigured_response_video_thumbnail_url",
                    e.preconfigured_response_video_thumbnail_url,
                  )
                  .set(
                    "preconfigured_response_button",
                    e.preconfigured_response_button,
                  )
                  .set("preconfigured_response", e.preconfigured_response)
                  .set("quick_reply_payload", e.quick_reply_payload);
              })) != null
          ? f
          : [];
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.marketing_message_spec.set(t),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.marketing_message_structured_spec.language.set(n),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.marketing_message_structured_spec.footer.set(a),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.message.set(i),
        r("AdsAdgroupRecordAccessors").creative.object_story_spec.video_data
          .message.delete,
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.name.set(l),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.marketing_message_structured_spec.buttons.set(
          r("immutable").List(g),
        ),
        function (e) {
          return c(e, m);
        },
        function (e) {
          return s(e, p);
        },
        function (e) {
          return u(e, _);
        },
      )(e);
    }
    function s(e, t) {
      return t === void 0
        ? e
        : t === null
          ? o("AdsMutators").chain(
              r("AdsAdgroupRecordAccessors").creative
                .marketing_message_structured_spec.referenced_adgroup_id.delete,
            )(e)
          : o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.marketing_message_structured_spec.referenced_adgroup_id.set(
                t,
              ),
            )(e);
    }
    function u(e, t) {
      var n;
      return t === void 0
        ? e
        : t === null
          ? o("AdsMutators").chain(
              r("AdsAdgroupRecordAccessors").creative
                .marketing_message_structured_spec.catalog.delete,
            )(e)
          : o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.marketing_message_structured_spec.catalog.id.set(
                t == null ? void 0 : t.id,
              ),
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.marketing_message_structured_spec.catalog.product_ids.set(
                r("immutable").List(
                  (n = t == null ? void 0 : t.product_ids) != null ? n : [],
                ),
              ),
            )(e);
    }
    function c(e, t) {
      return t === void 0
        ? e
        : t === null
          ? o("AdsMutators").chain(
              r("AdsAdgroupRecordAccessors").creative
                .marketing_message_structured_spec.offer.delete,
            )(e)
          : o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.marketing_message_structured_spec.offer.text.set(
                t.text,
              ),
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.marketing_message_structured_spec.offer.expiration_time.set(
                t.expiration_time,
              ),
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.marketing_message_structured_spec.offer.is_offer_code_personalized.set(
                t.is_offer_code_personalized,
              ),
            )(e);
    }
    l.setStructuredCreativeSpec = e;
  },
  98,
);
