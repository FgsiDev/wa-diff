__d(
  "AdsPEAdAccountSortLiveProviderPlugin",
  ["AdsInsightsField", "AdsPEFluxActionTypes", "AdsPESortInfo"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
        return {
          _objectLevel: "ad_account",
          _sortActionType: r("AdsPEFluxActionTypes").AD_ACCOUNT_TABLE
            .SET_SORT_KEY,
          sortInfo: new (r("AdsPESortInfo"))({
            dataKey: r("AdsInsightsField").SPEND,
            datePreset: "this_month",
            sorting: "DESC",
            comparisonColumnType: "",
          }),
          isSortEnabled: !0,
        };
      },
      s = { initialState: e() },
      u = s;
    l.default = u;
  },
  98,
);
