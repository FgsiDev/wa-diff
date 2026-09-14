__d(
  "AdsUEditorCampaignTargetingSetAppInstallStateReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignTargetingReducerUtils",
    "AdsUEditorCampaignTargetingSetAppInstallStateActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignTargetingReducerUtils").createReducer(
          {},
          function (e, t) {
            if (t.campaignIDs == null || t.hostID == null) return e;
            var n = t.campaignIDs,
              a = t.appInstallState;
            return o("AdsMutators").mutateEach(e, n, function (e, t) {
              return a == null
                ? r(
                    "AdsCampaignRecordAccessors",
                  ).targeting.app_install_state.delete(e)
                : o("AdsMutators").chain(
                    r(
                      "AdsCampaignRecordAccessors",
                    ).targeting.app_install_state.set(a),
                  )(e);
            });
          },
          r("AdsUEditorCampaignTargetingSetAppInstallStateActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
