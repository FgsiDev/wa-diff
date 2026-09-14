__d(
  "AdsUEditorCampaignGroupSetPromotedApplicationReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignPromotedObjectSetAppDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return t.campaignGroupIDs == null
              ? e
              : o("AdsMutators").mutateEach(
                  e,
                  t.campaignGroupIDs,
                  function (e) {
                    return t.isIOS14PlusCardToggled !== !0
                      ? o("AdsMutators").chain(
                          r(
                            "AdsCampaignGroupRecordAccessors",
                          ).is_skadnetwork_attribution.set(
                            t.isSKAdNetworkAttribution === !0,
                          ),
                          r(
                            "AdsCampaignGroupRecordAccessors",
                          ).promoted_object.set(null),
                        )(e)
                      : o("AdsMutators").chain(
                          t.appID !== null
                            ? r(
                                "AdsCampaignGroupRecordAccessors",
                              ).promoted_object.application_id.set(t.appID)
                            : r("AdsCampaignGroupRecordAccessors")
                                .promoted_object.application_id.delete,
                          t.objectStoreURL !== null
                            ? r(
                                "AdsCampaignGroupRecordAccessors",
                              ).promoted_object.object_store_url.set(
                                t.objectStoreURL,
                              )
                            : r("AdsCampaignGroupRecordAccessors")
                                .promoted_object.object_store_url.delete,
                          r(
                            "AdsCampaignGroupRecordAccessors",
                          ).is_skadnetwork_attribution.set(
                            t.isSKAdNetworkAttribution === !0,
                          ),
                        )(e);
                  },
                );
          },
          [
            o("AdsUEditorCampaignPromotedObjectSetAppDataActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
