__d(
  "AdsCampaignGoalMutationUtils",
  [
    "AdsAPICampaignGoalRecord",
    "AdsCampaignGoalAutoCAUtils",
    "AdsCampaignGoalExpressionUtils",
    "AdsCampaignRecordAccessors",
    "AdsTargetingAudienceLabelsConstants",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case 2:
          return {
            existingExclusions: !0,
            engagedExclusions: !1,
            engagedInclusions: !1,
            existingInclusions: !1,
            lookalike: !0,
            caExpansion: !1,
            lookalikeEnabled: !0,
            existingCustomersAutoExclusion: !0,
          };
        case 1:
          return {
            existingExclusions: !0,
            engagedExclusions: !0,
            engagedInclusions: !1,
            existingInclusions: !1,
            lookalike: !0,
            caExpansion: !1,
            lookalikeEnabled: !0,
            existingCustomersAutoExclusion: !0,
          };
        case 3:
          return {
            existingExclusions: !0,
            engagedExclusions: !1,
            engagedInclusions: !0,
            existingInclusions: !1,
            lookalike: !0,
            caExpansion: !0,
            lookalikeEnabled: !0,
            existingCustomersAutoExclusion: !0,
          };
        case 4:
          return {
            existingExclusions: !1,
            engagedExclusions: !1,
            engagedInclusions: !1,
            existingInclusions: !0,
            lookalike: !1,
            caExpansion: !1,
            lookalikeEnabled: !1,
            existingCustomersAutoExclusion: !1,
          };
        case 6:
          return {
            existingExclusions: !0,
            engagedExclusions: !0,
            engagedInclusions: !0,
            existingInclusions: !1,
            lookalike: !0,
            caExpansion: !0,
            lookalikeEnabled: !0,
            existingCustomersAutoExclusion: !0,
          };
        case 5:
        case 0:
          return {
            existingExclusions: !1,
            engagedExclusions: !1,
            engagedInclusions: !1,
            existingInclusions: !1,
            lookalike: !1,
            caExpansion: !1,
            lookalikeEnabled: !1,
            existingCustomersAutoExclusion: !1,
          };
      }
    }
    function s(t, n) {
      var r = e(t);
      return n ? r : babelHelpers.extends({}, r, { lookalike: !1 });
    }
    function u(e, t) {
      var n = t.get(e);
      if (n == null || n.size === 0) return new Set();
      var r = new Set();
      return (
        n.forEach(function (e) {
          e != null && r.add(e);
        }),
        r
      );
    }
    function c(e, t, n) {
      if (n.size === 0) return e;
      var r = t.get(e);
      if (r == null || r.size === 0) return e;
      var o = r.filterNot(function (e) {
        var t,
          r = String((t = e.get("id")) != null ? t : "");
        return r !== "" && n.has(r);
      });
      return o.size === r.size ? e : t.set(o, e);
    }
    function d(e) {
      return e.get("campaign_goal") == null
        ? e.set("campaign_goal", new (r("AdsAPICampaignGoalRecord"))({}))
        : e;
    }
    function m(e, t) {
      var n = s(
          t,
          r(
            "AdsCampaignRecordAccessors",
          ).campaign_goal.is_lookalike_inclusion_enabled.get(e) === !0,
        ),
        o = r("immutable").List(),
        a = r("immutable").List(),
        i = e,
        l = new Set(),
        d = new Set();
      return (
        n.existingExclusions ||
          (u(
            i,
            r("AdsCampaignRecordAccessors").campaign_goal
              .existing_customers_exclusions,
          ).forEach(function (e) {
            return l.add(e);
          }),
          (i = r(
            "AdsCampaignRecordAccessors",
          ).campaign_goal.existing_customers_exclusions.set(o, i))),
        n.engagedExclusions ||
          (u(
            i,
            r("AdsCampaignRecordAccessors").campaign_goal
              .engaged_audiences_exclusions,
          ).forEach(function (e) {
            return l.add(e);
          }),
          (i = r(
            "AdsCampaignRecordAccessors",
          ).campaign_goal.engaged_audiences_exclusions.set(o, i))),
        n.engagedInclusions ||
          (u(
            i,
            r("AdsCampaignRecordAccessors").campaign_goal
              .engaged_audiences_inclusions,
          ).forEach(function (e) {
            return d.add(e);
          }),
          (i = r(
            "AdsCampaignRecordAccessors",
          ).campaign_goal.engaged_audiences_inclusions.set(o, i))),
        n.existingInclusions ||
          (u(
            i,
            r("AdsCampaignRecordAccessors").campaign_goal
              .existing_customers_inclusions,
          ).forEach(function (e) {
            return d.add(e);
          }),
          (i = r(
            "AdsCampaignRecordAccessors",
          ).campaign_goal.existing_customers_inclusions.set(o, i))),
        n.existingExclusions ||
          (i = r(
            "AdsCampaignRecordAccessors",
          ).campaign_goal.existing_customers_audience_label_exclusions.set(
            a,
            i,
          )),
        n.existingInclusions ||
          (i = r(
            "AdsCampaignRecordAccessors",
          ).campaign_goal.existing_customers_audience_label_inclusions.set(
            a,
            i,
          )),
        n.engagedExclusions ||
          (i = r(
            "AdsCampaignRecordAccessors",
          ).campaign_goal.engaged_audiences_audience_label_exclusions.set(
            a,
            i,
          )),
        n.engagedInclusions ||
          (i = r(
            "AdsCampaignRecordAccessors",
          ).campaign_goal.engaged_audiences_audience_label_inclusions.set(
            a,
            i,
          )),
        n.lookalike ||
          (i = r(
            "AdsCampaignRecordAccessors",
          ).campaign_goal.lookalike_inclusions.set(o, i)),
        n.caExpansion ||
          (i = r(
            "AdsCampaignRecordAccessors",
          ).campaign_goal.is_ca_expansion_enabled.set(null, i)),
        n.lookalikeEnabled ||
          (i = r(
            "AdsCampaignRecordAccessors",
          ).campaign_goal.is_lookalike_inclusion_enabled.set(null, i)),
        n.existingCustomersAutoExclusion ||
          ((i = r(
            "AdsCampaignRecordAccessors",
          ).campaign_goal.existing_customers_auto_exclusion_retention_days.set(
            null,
            i,
          )),
          (i = r(
            "AdsCampaignRecordAccessors",
          ).campaign_goal.existing_customers_exclusion_auto_selection_state.set(
            0,
            i,
          ))),
        (i = c(
          i,
          r("AdsCampaignRecordAccessors").targeting.excluded_custom_audiences,
          l,
        )),
        (i = c(
          i,
          r("AdsCampaignRecordAccessors").targeting.custom_audiences,
          d,
        )),
        i
      );
    }
    function p(e, t, n) {
      if (
        !o("AdsCampaignGoalExpressionUtils").isNCAGoalType(n) ||
        o("AdsCampaignGoalExpressionUtils").isNCAGoalType(t) ||
        !o("AdsCampaignGoalExpressionUtils").isAutoCAExperienceEnabled()
      )
        return e;
      var a = r(
        "AdsCampaignRecordAccessors",
      ).campaign_goal.existing_customers_auto_exclusion_retention_days.get(e);
      if (o("AdsCampaignGoalAutoCAUtils").isAutoCAApplied(a)) return e;
      var i = r(
        "AdsCampaignRecordAccessors",
      ).campaign_goal.existing_customers_auto_exclusion_retention_days.set(
        o("AdsCampaignGoalAutoCAUtils").AUTO_CA_DEFAULT_RETENTION_DAYS,
        e,
      );
      return r(
        "AdsCampaignRecordAccessors",
      ).campaign_goal.existing_customers_exclusion_auto_selection_state.set(
        1,
        i,
      );
    }
    function _(e, t, n) {
      if (
        o("AdsCampaignGoalExpressionUtils").isNCAGoalType(t) ||
        !o("AdsCampaignGoalExpressionUtils").shouldShowAudienceLabelSelection([
          n,
        ])
      )
        return e;
      var a = r(
        "AdsCampaignRecordAccessors",
      ).campaign_goal.existing_customers_audience_label_exclusions.get(e);
      if (a != null && a.size > 0) return e;
      var i = o("AdsTargetingAudienceLabelsConstants")
        .getSelectableAudienceLabelItemsForGroup(
          o("AdsTargetingAudienceLabelsConstants").AudienceLabelGroup.CUSTOMERS,
        )
        .map(function (e) {
          return e.value;
        });
      if (i.length === 0) return e;
      var l = r(
        "AdsCampaignRecordAccessors",
      ).campaign_goal.existing_customers_audience_label_exclusions.set(
        r("immutable").List(i),
        e,
      );
      return r(
        "AdsCampaignRecordAccessors",
      ).campaign_goal.existing_customers_exclusion_auto_selection_state.set(
        1,
        l,
      );
    }
    ((l.ensureCampaignGoal = d),
      (l.clearIrrelevantCampaignGoalSubFields = m),
      (l.applyAutoCADefaultOnTransitionIntoNCA = p),
      (l.applyCustomersLabelDefaultOnTransitionIntoNCA = _));
  },
  98,
);
