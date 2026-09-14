__d(
  "AdsUEditorAdgroupMessageMarketingSetDarkPageIDReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsDataAtom",
    "AdsMutators",
    "AdsSelectorUtils",
    "AdsUEditorAdgroupMessageMarketingSetDarkPageIDActionPlugin",
    "AdsUEditorAdgroupReducerUtils",
    "adsCampaignMessageMarketingDarkPageIDSelector",
    "adsUEditorInjectEditingCampaignContext",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("adsUEditorInjectEditingCampaignContext")(
        r("adsCampaignMessageMarketingDarkPageIDSelector"),
      ),
      c = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          { darkPageLO: u },
          function (t, n, a) {
            var i = a.darkPageLO;
            return (
              (s || (s = r("AdsDataAtom"))).waitFor(
                (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens([u]),
              ),
              o("AdsMutators").mutateEach(t, n.adgroupIDs, function (e) {
                var t = i == null ? void 0 : i.getValue();
                return t == null
                  ? e
                  : r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.object_story_spec.page_id.set(
                      String(r("nullthrows")(t)),
                      e,
                    );
              })
            );
          },
          r("AdsUEditorAdgroupMessageMarketingSetDarkPageIDActionPlugin")
            .actionType,
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
