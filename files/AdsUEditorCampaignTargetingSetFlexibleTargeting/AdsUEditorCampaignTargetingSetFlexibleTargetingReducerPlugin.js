__d(
  "AdsUEditorCampaignTargetingSetFlexibleTargetingReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsFlexibleTargetingTransformer",
    "AdsMutators",
    "AdsUEditorCampaignTargetingReducerUtils",
    "AdsUEditorCampaignTargetingSetFlexibleTargetingActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignTargetingReducerUtils").createReducer(
          {},
          function (e, t) {
            if (t.campaignIDs == null || t.hostID == null) return e;
            var n = t.campaignIDs,
              a = o(
                "AdsFlexibleTargetingTransformer",
              ).transformFlexibleTargetingSpecToLaminar(t.flexibleSpec);
            return o("AdsMutators").mutateEach(e, n, function (e, t) {
              return r(
                "AdsCampaignRecordAccessors",
              ).targeting.flexible_spec.set(r("immutable").fromJS(a), e);
            });
          },
          r("AdsUEditorCampaignTargetingSetFlexibleTargetingActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
