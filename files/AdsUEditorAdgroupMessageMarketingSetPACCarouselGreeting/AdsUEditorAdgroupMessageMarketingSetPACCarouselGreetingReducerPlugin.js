__d(
  "AdsUEditorAdgroupMessageMarketingSetPACCarouselGreetingReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSetPACCarouselGreetingActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "adsUEditorAdgroupMessageMarketingIsTextOptimizedSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            isMessageMarketingTextOptimized: o(
              "adsUEditorAdgroupMessageMarketingIsTextOptimizedSelector",
            ).adsUEditorAdgroupMessageMarketingIsTextOptimizedSelector,
          },
          function (e, t, n) {
            var a = n.isMessageMarketingTextOptimized;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return !a && t.greeting !== t.defaultAdPrimaryText
                ? o("AdsMutators").chain(
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.marketing_message_structured_spec.greeting.set(
                      t.greeting,
                    ),
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.marketing_message_structured_spec.is_optimized_text.set(
                      !0,
                    ),
                  )(e)
                : r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.marketing_message_structured_spec.greeting.set(
                    t.greeting,
                    e,
                  );
            });
          },
          r("AdsUEditorAdgroupMessageMarketingSetPACCarouselGreetingActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
