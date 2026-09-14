__d(
  "AdsExperimentsLightweightTestBudgetUtils",
  [
    "AdsExperimentsBudgetUtils",
    "DateConsts",
    "DateTime",
    "FBLogger",
    "adsExperimentsGetDayDifference",
    "adsExperimentsParseAdObjectTimeOrNull",
    "adsExperimentsRunWinnerGetBudgetMeta",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.campaign,
        n = e.campaignGroup;
      return o("AdsExperimentsBudgetUtils").isCBOEnabled(n)
        ? n == null
          ? null
          : { adObject: n, adObjectLevel: "campaign" }
        : t == null
          ? null
          : { adObject: t, adObjectLevel: "ad_set" };
    }
    function s(t) {
      var n = t.campaign,
        o = t.campaignGroup,
        a = t.numberOfCells,
        i = t.shouldFloorBudgetValue,
        l = i === void 0 ? !0 : i,
        s = e({ campaign: n, campaignGroup: o });
      if (s == null)
        return (
          r("FBLogger")("ads_experiments", "getSplitBudget").mustfix(
            "At least one of campaign or campaign group should be nonnull.",
          ),
          { isDailyBudget: !1, newBudgetPerCell: 0 }
        );
      if (
        s.adObject.daily_budget == null &&
        s.adObject.lifetime_budget == null
      ) {
        var u = s.adObject,
          c = u.id != null ? u.id : u.ad_object_id;
        return (
          r("FBLogger")("ads_experiments", "getSplitBudget").warn(
            "unexpected null budget for %s %s",
            s.adObjectLevel,
            String(c),
          ),
          { isDailyBudget: !1, newBudgetPerCell: 0 }
        );
      }
      var d;
      try {
        d = r("adsExperimentsRunWinnerGetBudgetMeta")(s);
      } catch (e) {
        var m = s.adObject,
          p = m.id != null ? m.id : m.ad_object_id;
        return (
          r("FBLogger")("ads_experiments", "getSplitBudget")
            .catching(r("getErrorSafe")(e))
            .warn("budget-mode mismatch for %s %s", s.adObjectLevel, String(p)),
          { isDailyBudget: !1, newBudgetPerCell: 0 }
        );
      }
      var _ = d,
        f = _.budget,
        g = _.isDailyBudget,
        h = _.lifetimeBudgetSpent,
        y = 0,
        C = 0;
      if (g) ((C = f / a), (y = l ? Math.floor(C) : C));
      else {
        var b = f - h;
        C = b / a;
      }
      return (
        (y = l ? Math.floor(C) : C),
        !Number.isFinite(y) || y <= 0
          ? { newBudgetPerCell: 0, isDailyBudget: g }
          : { newBudgetPerCell: y, isDailyBudget: g }
      );
    }
    var u = function (t, n) {
      return Math.ceil((t.instant - n.instant) / o("DateConsts").SEC_PER_DAY);
    };
    function c(e) {
      var t = e.account,
        n = e.campaign,
        a = e.campaignGroup,
        i = e.numberOfCells,
        l = s({ campaign: n, campaignGroup: a, numberOfCells: i }),
        u = l.isDailyBudget,
        c = l.newBudgetPerCell;
      if (u) return { newBudgetPerCell: c, isDailyBudget: u };
      var d = r("adsExperimentsParseAdObjectTimeOrNull")(
        n.start_time,
        t.timezone_id,
      );
      if (d == null) return { newBudgetPerCell: 0, isDailyBudget: u };
      var m = r("adsExperimentsParseAdObjectTimeOrNull")(
          n.end_time,
          t.timezone_id,
        ),
        p = d,
        _ = r("DateTime").now(t.timezone_id);
      d.isBefore(_) &&
        o("AdsExperimentsBudgetUtils").isCBOEnabled(a) &&
        m != null &&
        (p = _);
      var f = m != null ? r("adsExperimentsGetDayDifference")(m, p) : 1;
      return {
        newBudgetPerCell: Math.floor(c / Math.max(f, 1)),
        isDailyBudget: u,
      };
    }
    function d(t) {
      var n = t.campaign,
        o = t.campaignGroup,
        a = t.isForExisting,
        i = t.numberOfCells,
        l = t.shouldFloorBudgetValue,
        u = l === void 0 ? !0 : l,
        c = s({
          campaign: n,
          campaignGroup: o,
          numberOfCells: i,
          shouldFloorBudgetValue: u,
        }),
        d = c.isDailyBudget,
        m = c.newBudgetPerCell;
      if (a && !d) {
        var p = e({ campaign: n, campaignGroup: o });
        if (p == null) return { isDailyBudget: !1, newBudgetPerCell: 0 };
        var _ = r("adsExperimentsRunWinnerGetBudgetMeta")(p),
          f = _.lifetimeBudgetSpent;
        return { newBudgetPerCell: m + f, isDailyBudget: d };
      } else return { newBudgetPerCell: m, isDailyBudget: d };
    }
    ((l.getSplitBudget = s),
      (l.getLightweightTestTotalDays = u),
      (l.getSplitBudgetPerDay = c),
      (l.getSplitBudgetMutatorValues = d));
  },
  98,
);
