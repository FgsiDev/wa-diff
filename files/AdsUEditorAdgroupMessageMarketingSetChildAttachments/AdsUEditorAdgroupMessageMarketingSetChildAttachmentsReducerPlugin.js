__d(
  "AdsUEditorAdgroupMessageMarketingSetChildAttachmentsReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsBulkValueUtils",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingCarouselMutators",
    "AdsUEditorAdgroupMessageMarketingSetChildAttachmentsActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            buttons: o("AdsUEditorSelectors").adgroup.bulkByAccessor(
              r("AdsAdgroupRecordAccessors").creative
                .marketing_message_structured_spec.buttons.get,
            ),
          },
          function (e, t, n) {
            var a = n.buttons;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = o("AdsBulkValueUtils").getUniformValue(a, null),
                i =
                  n == null
                    ? void 0
                    : n.filter(function (e) {
                        return e.get("type") !== "COPY_CODE";
                      });
              return o("AdsMutators").chain(
                function (e) {
                  return o(
                    "AdsUEditorAdgroupMessageMarketingCarouselMutators",
                  ).setChildAttachments(e, t.childAttachments);
                },
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.marketing_message_structured_spec.offer.set(null),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.marketing_message_structured_spec.buttons.set(i),
              )(e);
            });
          },
          r("AdsUEditorAdgroupMessageMarketingSetChildAttachmentsActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
