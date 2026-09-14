__d(
  "AdsUEditorCampaignGroupSetIsSKAdNetworkAttributionReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetIsSKAdNetworkAttributionActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignGroupIDs,
              function (e) {
                return t.isIOS14PlusCardToggled
                  ? o("AdsMutators").chain(
                      r(
                        "AdsCampaignGroupRecordAccessors",
                      ).is_skadnetwork_attribution.set(
                        t.isSKAdNetworkAttribution,
                      ),
                    )(e)
                  : o("AdsMutators").chain(
                      r(
                        "AdsCampaignGroupRecordAccessors",
                      ).is_skadnetwork_attribution.set(
                        t.isSKAdNetworkAttribution,
                      ),
                      r("AdsCampaignGroupRecordAccessors").promoted_object.set(
                        null,
                      ),
                    )(e);
              },
            );
          },
          [
            r("AdsUEditorCampaignGroupSetIsSKAdNetworkAttributionActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
