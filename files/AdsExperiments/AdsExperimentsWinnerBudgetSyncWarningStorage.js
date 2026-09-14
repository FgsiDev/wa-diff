__d(
  "AdsExperimentsWinnerBudgetSyncWarningStorage",
  ["WebStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "ads_experiments_winner_budget_sync_warning:";
    function u(t) {
      try {
        var n;
        (n = (e || (e = r("WebStorage"))).getSessionStorage()) == null ||
          n.setItem(s + t, "true");
      } catch (e) {}
    }
    function c(t) {
      try {
        var n;
        return (
          ((n = (e || (e = r("WebStorage"))).getSessionStorageForRead()) == null
            ? void 0
            : n.getItem(s + t)) === "true"
        );
      } catch (e) {
        return !1;
      }
    }
    function d(t) {
      try {
        var n;
        (n = (e || (e = r("WebStorage"))).getSessionStorage()) == null ||
          n.removeItem(s + t);
      } catch (e) {}
    }
    ((l.markWarningForCampaign = u),
      (l.hasWarningForCampaign = c),
      (l.clearWarningForCampaign = d));
  },
  98,
);
