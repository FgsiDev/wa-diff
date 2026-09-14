__d(
  "AdsUEditorCampaignSelectAppWithoutStoreReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectAppWithoutStoreActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n,
                o,
                a,
                i = t.appData;
              if (i == null) return e;
              var l = e;
              return (
                (l =
                  (n = r("AdsCampaignRecordAccessors").promoted_object) == null
                    ? void 0
                    : n.object_store_url.delete(l)),
                (l =
                  (o = r("AdsCampaignRecordAccessors").promoted_object) == null
                    ? void 0
                    : o.application_id.set(i.appID, l)),
                (a = r("AdsCampaignRecordAccessors").promoted_object) == null
                  ? void 0
                  : a.object_store_urls.set(
                      r("immutable").List(i.objectStoreURLs),
                      l,
                    )
              );
            });
          },
          o("AdsUEditorCampaignSelectAppWithoutStoreActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
