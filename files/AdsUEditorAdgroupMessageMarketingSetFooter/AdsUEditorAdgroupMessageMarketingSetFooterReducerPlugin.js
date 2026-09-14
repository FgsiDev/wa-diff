__d(
  "AdsUEditorAdgroupMessageMarketingSetFooterReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSetFooterActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "adsUEditorAdgroupMessageMarketingIsTextOptimizedSelector",
    "adsUEditorSelectedAdgroupsHaveMessageMarketingEnabledSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            isCommonCampaignFlow: r(
              "adsUEditorSelectedAdgroupsHaveMessageMarketingEnabledSelector",
            ),
            isMessageMarketingTextOptimized: o(
              "adsUEditorAdgroupMessageMarketingIsTextOptimizedSelector",
            ).adsUEditorAdgroupMessageMarketingIsTextOptimizedSelector,
          },
          function (e, t, n) {
            var a = n.isCommonCampaignFlow,
              i = n.isMessageMarketingTextOptimized;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return a && !i
                ? o("AdsMutators").chain(
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.marketing_message_structured_spec.footer.set(
                      t.footer,
                    ),
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.marketing_message_structured_spec.is_optimized_text.set(
                      !0,
                    ),
                  )(e)
                : r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.marketing_message_structured_spec.footer.set(
                    t.footer,
                    e,
                  );
            });
          },
          r("AdsUEditorAdgroupMessageMarketingSetFooterActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
