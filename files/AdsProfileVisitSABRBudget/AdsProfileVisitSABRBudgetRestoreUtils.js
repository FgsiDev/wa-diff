__d(
  "AdsProfileVisitSABRBudgetRestoreUtils",
  [
    "AdsCampaignRecordAccessors",
    "AdsDataAtom",
    "AdsMutators",
    "AdsProfileVisitSABRDefaultedCampaignsProvider",
    "AdsProfileVisitSABRSetMarkerAction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      var a = r("AdsProfileVisitSABRDefaultedCampaignsProvider")();
      if (a.size === 0) return t;
      var l = [],
        s = o("AdsMutators").mutateEach(t, n, function (e, t) {
          var n = a.get(t);
          return n == null ||
            n.userEdited === !0 ||
            (l.push(t), e.daily_budget !== n.sabrSet)
            ? e
            : n.prior != null
              ? r("AdsCampaignRecordAccessors").daily_budget.set(n.prior)(e)
              : r("AdsCampaignRecordAccessors").daily_budget.delete(e);
        });
      return (
        l.length > 0 &&
          (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
            r("AdsProfileVisitSABRSetMarkerAction").dispatch(
              { campaignIDs: l, markers: [], marked: !1 },
              {
                line: "77",
                module: "AdsProfileVisitSABRBudgetRestoreUtils.js",
                moduleID: i.id,
              },
            );
          }),
        s
      );
    }
    l.restoreSABRDefaultedBudgets = s;
  },
  98,
);
