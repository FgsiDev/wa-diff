__d(
  "adsUEditorCampaignMultiAdsL2MigrationFlowEligibilitySelector",
  [
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorCampaignMultiAdsL2MigrationFlowEligibilitySelectorImpl",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsCreateThunkSelector")(
            r(
              "adsUEditorCampaignMultiAdsL2MigrationFlowEligibilitySelectorImpl",
            ),
          ),
        ],
        function (t) {
          return r("qex")._("4048") === !0 ? !0 : t();
        },
        {
          name:
            i.id +
            ".adsUEditorCampaignMultiAdsL2MigrationFlowEligibilitySelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
