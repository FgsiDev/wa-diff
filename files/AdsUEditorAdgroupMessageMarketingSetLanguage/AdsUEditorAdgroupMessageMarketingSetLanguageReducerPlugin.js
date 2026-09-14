__d(
  "AdsUEditorAdgroupMessageMarketingSetLanguageReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSetLanguageActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "MarketingMessageButtonUtils",
    "adsUEditorSelectedAdgroupMessageMarketingButtonsSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            buttons: r(
              "adsUEditorSelectedAdgroupMessageMarketingButtonsSelector",
            ),
          },
          function (e, t, n) {
            var a = n.buttons;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                i = a.map(function (e) {
                  return e.type === "COPY_CODE"
                    ? babelHelpers.extends({}, e, { text: t.newCopyCodeText })
                    : e;
                }),
                l =
                  (n = i.map(
                    o("MarketingMessageButtonUtils")
                      .getButtonDictFromMarketingMessageButton,
                  )) != null
                    ? n
                    : r("immutable").List();
              return o("AdsMutators").chain(
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.marketing_message_structured_spec.language.set(
                  t.language,
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.marketing_message_structured_spec.buttons.set(l),
              )(e);
            });
          },
          r("AdsUEditorAdgroupMessageMarketingSetLanguageActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
