__d(
  "AdsPEPrioritizedHighlightsProviderPlugin",
  ["AdsPriorityViewLocalStorageUtil"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        anomaliesByCampaign: {},
        collapsedKeys: [],
        enabled: o("AdsPriorityViewLocalStorageUtil").isPriorityViewEnabled(),
        ids: null,
        isBetaFeatureVisible: null,
        monitorFlaggedIDs: null,
      },
      s = { initialState: e },
      u = s;
    l.default = u;
  },
  98,
);
