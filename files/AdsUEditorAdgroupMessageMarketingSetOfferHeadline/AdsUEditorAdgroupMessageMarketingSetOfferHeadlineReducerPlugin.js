__d(
  "AdsUEditorAdgroupMessageMarketingSetOfferHeadlineReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSetOfferHeadlineActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "\u200B",
      s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (t, n) {
            return o("AdsMutators").mutateEach(t, n.adgroupIDs, function (t) {
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.marketing_message_structured_spec.offer.text.set(
                n.offerHeadline === "" ? e : n.offerHeadline,
                t,
              );
            });
          },
          r("AdsUEditorAdgroupMessageMarketingSetOfferHeadlineActionFlux")
            .actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
