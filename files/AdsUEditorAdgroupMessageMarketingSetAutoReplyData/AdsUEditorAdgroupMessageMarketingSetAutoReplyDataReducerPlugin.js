__d(
  "AdsUEditorAdgroupMessageMarketingSetAutoReplyDataReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSetAutoReplyDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "MarketingMessageButtonUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n,
              a,
              i =
                (n =
                  (a = t.buttons) == null
                    ? void 0
                    : a.map(
                        o("MarketingMessageButtonUtils")
                          .getButtonDictFromMarketingMessageButton,
                      )) != null
                  ? n
                  : r("immutable").List();
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n;
              return o("AdsMutators").chain(
                (n = r(
                  "AdsAdgroupRecordAccessors",
                )).creative.marketing_message_structured_spec.autoreply.text.set(
                  t.text,
                ),
                n.creative.marketing_message_structured_spec.autoreply.image_hash.set(
                  t.image_hash,
                ),
                n.creative.marketing_message_structured_spec.autoreply.video_id.set(
                  t.video_id,
                ),
                n.creative.marketing_message_structured_spec.autoreply.save_template.set(
                  t.save_template,
                ),
                n.creative.marketing_message_structured_spec.autoreply.template_name.set(
                  t.template_name,
                ),
                n.creative.marketing_message_structured_spec.autoreply.video_thumbnail_url.set(
                  t.video_thumbnail_url,
                ),
                n.creative.marketing_message_structured_spec.autoreply.buttons.set(
                  i,
                ),
                n.creative.marketing_message_structured_spec.autoreply.is_optimized_auto_reply.set(
                  t.is_optimized_auto_reply,
                ),
              )(e);
            });
          },
          r("AdsUEditorAdgroupMessageMarketingSetAutoReplyDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
