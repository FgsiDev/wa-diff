__d(
  "AdsUEditorCampaignTargetingSetCustomAudiencesReducerPlugin",
  [
    "AdsAPITargetFields",
    "AdsCampaignRecordAccessors",
    "AdsCustomAudienceApiWhitelist",
    "AdsCustomAudienceProductAudienceUnionUtils",
    "AdsMutators",
    "AdsUEditorCampaignTargetingReducerUtils",
    "AdsUEditorCampaignTargetingSetCustomAudiencesActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("AdsCampaignRecordAccessors").targeting.flexible_spec.get(e);
      if (n == null) return e;
      var o = n.map(function (e) {
        var n = e.get(r("AdsAPITargetFields").CUSTOM_AUDIENCES);
        return n == null
          ? e
          : e.set(r("AdsAPITargetFields").CUSTOM_AUDIENCES, t);
      });
      return r("AdsCampaignRecordAccessors").targeting.flexible_spec.set(o)(e);
    }
    var s = {
        reduce: o("AdsUEditorCampaignTargetingReducerUtils").createReducer(
          {},
          function (t, n) {
            if (n.campaignIDs == null || n.hostID == null) return t;
            var a = n.campaignIDs,
              i = o(
                "AdsCustomAudienceApiWhitelist",
              ).applyCustomAudienceWhitelist(n.customAudiences),
              l = o(
                "AdsCustomAudienceApiWhitelist",
              ).applyCustomAudienceWhitelist(n.excludedCustomAudiences);
            return o("AdsMutators").mutateEach(t, a, function (t, n) {
              var a = o(
                "AdsCustomAudienceProductAudienceUnionUtils",
              ).getCustomAudiencesFromFlexibleSpec(t);
              return a != null && a.size > 0
                ? o("AdsMutators").chain(
                    function (t) {
                      return e(t, r("immutable").fromJS(i));
                    },
                    r(
                      "AdsCampaignRecordAccessors",
                    ).targeting.excluded_custom_audiences.set(
                      r("immutable").fromJS(l),
                    ),
                  )(t)
                : o("AdsMutators").chain(
                    r(
                      "AdsCampaignRecordAccessors",
                    ).targeting.custom_audiences.set(r("immutable").fromJS(i)),
                    r(
                      "AdsCampaignRecordAccessors",
                    ).targeting.excluded_custom_audiences.set(
                      r("immutable").fromJS(l),
                    ),
                  )(t);
            });
          },
          r("AdsUEditorCampaignTargetingSetCustomAudiencesActionFlux")
            .actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
