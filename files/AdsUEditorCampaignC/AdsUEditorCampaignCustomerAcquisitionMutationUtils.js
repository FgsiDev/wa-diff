__d(
  "AdsUEditorCampaignCustomerAcquisitionMutationUtils",
  [
    "AdsAPIMarketingGoal",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e != null && "custom_audience" in e && e.custom_audience !== 0;
    }
    function s(t, n, a, i) {
      return o("AdsMutators").mutateEach(t, n, function (t) {
        var n = !1,
          l = !1,
          s = r("immutable").fromJS([]),
          u = r("immutable").fromJS([]);
        if (!a) {
          var c = r(
            "AdsCampaignRecordAccessors",
          ).targeting.excluded_custom_audiences.get(t);
          c &&
            ((s = c.filterNot(function (e) {
              return i.includes(e.get("id"));
            })),
            (n = c.size !== s.size));
          var d = r(
              "AdsCampaignRecordAccessors",
            ).targeting.targeting_relaxation_types.get(t),
            m = e(d == null ? void 0 : d.toJS());
          if (!m) {
            var p = r(
              "AdsCampaignRecordAccessors",
            ).targeting.custom_audiences.get(t);
            p &&
              ((u = p.filterNot(function (e) {
                return i.includes(e.get("id"));
              })),
              (l = p.size !== u.size));
          }
        }
        return o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").marketing_goal.set(
            a
              ? r("AdsAPIMarketingGoal").NEW_CUSTOMER_ACQUISITION
              : r("AdsAPIMarketingGoal").NONE,
          ),
          function (e) {
            return n
              ? r(
                  "AdsCampaignRecordAccessors",
                ).targeting.excluded_custom_audiences.set(s, e)
              : e;
          },
          function (e) {
            return l
              ? r("AdsCampaignRecordAccessors").targeting.custom_audiences.set(
                  u,
                  e,
                )
              : e;
          },
        )(t);
      });
    }
    l.setNCAIsTurnedOnForEach = s;
  },
  98,
);
