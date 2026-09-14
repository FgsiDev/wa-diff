__d(
  "AdsUEditorCampaignSetBrandSafetyCampaignConfigReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetBrandSafetyCampaignConfigActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.brandSafetyCampaignConfig,
              a = t.campaignIDs;
            return o("AdsMutators").mutateEach(e, a, function (e) {
              var t = r("AdsCampaignRecordAccessors").brand_safety_config.get(
                  e,
                ),
                o =
                  t != null
                    ? t.merge(r("immutable").fromJS(n))
                    : r("immutable").fromJS(n);
              return r("AdsCampaignRecordAccessors").brand_safety_config.set(o)(
                e,
              );
            });
          },
          o("AdsUEditorCampaignSetBrandSafetyCampaignConfigActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
