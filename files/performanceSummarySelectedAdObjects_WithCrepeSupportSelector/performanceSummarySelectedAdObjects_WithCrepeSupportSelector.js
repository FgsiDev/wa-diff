__d(
  "performanceSummarySelectedAdObjects_WithCrepeSupportSelector",
  [
    "AdsPECrepeNavigationProvider",
    "adsCreateSelector",
    "adsMgmtAdgroupSelectedIdsSelector",
    "adsMgmtCampaignGroupSelectedIdsSelector",
    "adsMgmtCampaignSelectedIdsSelector",
    "adsPECrepeEditorStepsSelector",
    "adsPEManageAdsSectionSelector",
    "adsUEditorInjectEditingCampaignGroupContext",
    "performanceSummarySelectedAdObjects_WithCrepeSupportSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("adsMgmtCampaignGroupSelectedIdsSelector")
            .adsMgmtCampaignGroupSelectedIdsSelector,
          o("adsMgmtCampaignSelectedIdsSelector")
            .adsMgmtCampaignSelectedIdsSelector,
          o("adsMgmtAdgroupSelectedIdsSelector")
            .adsMgmtAdgroupSelectedIdsSelector,
          r("adsPEManageAdsSectionSelector"),
          r("adsUEditorInjectEditingCampaignGroupContext")(
            o("adsPECrepeEditorStepsSelector").adsPECrepeEditorStepsSelector,
          ),
          r("AdsPECrepeNavigationProvider").toFluxSelector(),
        ],
        function (t, n, r, a, i, l) {
          var e = l.currentStep;
          return o(
            "performanceSummarySelectedAdObjects_WithCrepeSupportSelectorUtils",
          ).performanceSummarySelectedAdObjects_WithCrepeSupport(
            t,
            n,
            r,
            a,
            i,
            e,
          );
        },
        {
          name:
            i.id +
            ".performanceSummarySelectedAdObjects_WithCrepeSupportSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
