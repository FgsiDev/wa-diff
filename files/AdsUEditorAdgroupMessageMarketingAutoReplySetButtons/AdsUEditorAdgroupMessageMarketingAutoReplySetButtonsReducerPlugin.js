__d(
  "AdsUEditorAdgroupMessageMarketingAutoReplySetButtonsReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingAutoReplySetButtonsActionFlux",
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
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
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
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.marketing_message_structured_spec.autoreply.buttons.set(
                i,
                e,
              );
            });
          },
          r("AdsUEditorAdgroupMessageMarketingAutoReplySetButtonsActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
