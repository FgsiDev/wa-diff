__d(
  "AdsUEditorCampaignTargetingResetAgeForRegulatedCategoriesReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsHECAdvantageAudienceUtils",
    "AdsMutators",
    "AdsRegulatedCategory",
    "AdsRegulatedCategoryConstants",
    "AdsTargetingAsSignalUtils",
    "AdsUEditorCampaignTargetingReducerUtils",
    "AdsUEditorCampaignTargetingResetAgeForRegulatedCategoriesActionFlux",
    "immutable",
    "isEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: o("AdsUEditorCampaignTargetingReducerUtils").createReducer(
          {},
          function (t, n) {
            var a,
              i,
              l,
              s,
              u = n.campaignIDs,
              c =
                (a = n == null ? void 0 : n.regulatedCategories) != null
                  ? a
                  : [];
            if (
              u == null ||
              n.hostID == null ||
              c == null ||
              !o("AdsTargetingAsSignalUtils").isCampaignGroupRegulated(c) ||
              c.every(function (e) {
                return (
                  o(
                    "AdsRegulatedCategoryConstants",
                  ).AdsRegulatedCategorySIEPCategories.includes(e) ||
                  e === r("AdsRegulatedCategory").NONE
                );
              }) ||
              !o(
                "AdsHECAdvantageAudienceUtils",
              ).getAdAccountPassesAdvantageAudienceHSAEGK()
            )
              return t;
            var d = (i = n.safrConfig) == null ? void 0 : i.age,
              m = d == null ? void 0 : d.min_age_range,
              p = d == null ? void 0 : d.max_age_range,
              _ =
                (l = d == null ? void 0 : d.default_min_age) != null
                  ? l
                  : Math.min.apply(m),
              f =
                (s = d == null ? void 0 : d.default_max_age) != null
                  ? s
                  : Math.max.apply(p);
            return d == null ||
              m == null ||
              p == null ||
              (e || (e = r("isEmpty")))(m) ||
              (e || (e = r("isEmpty")))(p)
              ? t
              : o("AdsMutators").mutateEach(t, u, function (e) {
                  var t,
                    n,
                    a,
                    i = e,
                    l =
                      ((t = e.targeting) == null ||
                      (t = t.targeting_automation) == null
                        ? void 0
                        : t.advantage_audience) === 1,
                    s = l
                      ? (n = i.targeting.age_range) == null
                        ? void 0
                        : n.first()
                      : i.targeting.age_min,
                    u = l
                      ? (a = i.targeting.age_range) == null
                        ? void 0
                        : a.last()
                      : i.targeting.age_max,
                    c = !(s != null && m != null && m.includes(s)),
                    d = !(u != null && p != null && p.includes(u)),
                    g = c ? _ : s,
                    h = d ? f : u;
                  return (
                    (i = o("AdsMutators").chain(
                      r("AdsCampaignRecordAccessors").targeting.age_min.set(g),
                      r("AdsCampaignRecordAccessors").targeting.age_max.set(h),
                      function (e) {
                        return l
                          ? r(
                              "AdsCampaignRecordAccessors",
                            ).targeting.age_range.set(
                              r("immutable").fromJS([g, h]),
                              e,
                            )
                          : e;
                      },
                    )(e)),
                    i
                  );
                });
          },
          r(
            "AdsUEditorCampaignTargetingResetAgeForRegulatedCategoriesActionFlux",
          ).actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
