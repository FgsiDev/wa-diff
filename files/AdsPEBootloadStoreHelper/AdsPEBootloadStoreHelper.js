__d(
  "AdsPEBootloadStoreHelper",
  [
    "AdsManagerEntryPointRegistrationUtils",
    "AdsTargetingBootloadUtil",
    "JSResource",
    "JSResourceForInteraction",
    "emptyFunction",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e;
      (r("JSResource").loadAll(
        [
          (e = r("JSResourceForInteraction"))(
            "AdsPEBidCellHoverCardContainer.react",
          ).__setRef("AdsPEBootloadStoreHelper"),
          e("AdsPEBudgetCellHoverCardContainer.react").__setRef(
            "AdsPEBootloadStoreHelper",
          ),
          e("AdsPEEditorTrayTabContentContainer.react").__setRef(
            "AdsPEBootloadStoreHelper",
          ),
          e("AdsPENameCellHoverCardContainer.react").__setRef(
            "AdsPEBootloadStoreHelper",
          ),
          e("AdsPEScheduleCellHoverCardContainer.react").__setRef(
            "AdsPEBootloadStoreHelper",
          ),
          e("AdsReachFrequencyFlowStore").__setRef("AdsPEBootloadStoreHelper"),
          e("AdsReachFrequencyLoggerStore").__setRef(
            "AdsPEBootloadStoreHelper",
          ),
          e("AdsReachFrequencyReservationManager").__setRef(
            "AdsPEBootloadStoreHelper",
          ),
          e("AdsVideoFunnelRegistry").__setRef("AdsPEBootloadStoreHelper"),
        ],
        r("emptyFunction"),
      ),
        o("AdsTargetingBootloadUtil").bootload(),
        r("promiseDone")(
          r("JSResource")("AdsManagerSelectedPreviewLoadEntryPoint")
            .__setRef("AdsPEBootloadStoreHelper")
            .load()
            .then(function (e) {
              return o(
                "AdsManagerEntryPointRegistrationUtils",
              ).registerPreviewEntryPoint(e.run, e.runAfterEdit);
            }),
        ),
        r("promiseDone")(
          r("JSResource")(
            "AdsManagerInsightsTableOpenColumnSetEditorEntryPoint",
          )
            .__setRef("AdsPEBootloadStoreHelper")
            .load()
            .then(function (e) {
              return o(
                "AdsManagerEntryPointRegistrationUtils",
              ).registerOpenColumnSetEditorEntryPoint(e.run);
            }),
        ));
    }
    l.bootloadModules = e;
  },
  98,
);
