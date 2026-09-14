__d(
  "LeadAdsUpsellNuxUtils",
  [
    "AdCampaignDestination",
    "AdsApiScheduleObjectFields",
    "AdsCampaignRecordAccessors",
    "AdsDeliveryUIConstants",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryChangeCampaignScheduleAction",
    "AdsUEditorHostIDs",
    "adsCampaignIsCampaignGroupBudget_LEGACY",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = [
        ((e = {}),
        (e[(s = o("AdsApiScheduleObjectFields")).START_MINUTE] = 540),
        (e[s.END_MINUTE] = 1080),
        (e[s.DAYS] = [1, 2, 3, 4, 5, 6]),
        (e[s.TIMEZONE_TYPE] = "ADVERTISER"),
        e),
      ],
      c = ["day_parting"];
    function d(e, t) {
      return t === !0 ? !1 : e === r("AdCampaignDestination").PHONE_CALL;
    }
    function m(e, t) {
      return (
        t === void 0 && (t = !1),
        t
          ? e === o("AdsDeliveryUIConstants").BulkBudgetMode.DAILY
          : e === o("AdsDeliveryUIConstants").BulkBudgetMode.LIFETIME ||
            e === o("AdsDeliveryUIConstants").BulkBudgetMode.DAILY
      );
    }
    function p(e, t, n, o, a) {
      (a === void 0 && (a = !1),
        d(t, o) &&
          m(n, a) &&
          !a &&
          r("AdsUEditorCampaignDeliveryChangeCampaignScheduleAction").dispatch(
            {
              campaignIDs: e,
              hostID: r("AdsUEditorHostIDs").EDITING,
              adsetSchedule: [],
              pacingType: c,
            },
            { line: "77", module: "LeadAdsUpsellNuxUtils.js", moduleID: i.id },
          ));
    }
    function _(e, t, n, a) {
      var i = r("adsCampaignIsCampaignGroupBudget_LEGACY")(e),
        l = d(t, a) && m(n, i);
      return l
        ? o("AdsMutators").chain(
            r("AdsCampaignRecordAccessors").adset_schedule.set(
              r("immutable").fromJS([]),
            ),
            r("AdsCampaignRecordAccessors").pacing_type.set(
              r("immutable").List(c),
            ),
          )(e)
        : e;
    }
    ((l.AD_SCHEDULE = u),
      (l.PACING_TYPE = c),
      (l.isEligibleForBudgetCallAdsDayparting = d),
      (l.shouldExposeToCallDayParting = m),
      (l.setBusinessHourAdScheduleForCallAdvertiser = p),
      (l.maybeSetCallAdsBusinessHourAdScheduleForCampaign = _));
  },
  98,
);
