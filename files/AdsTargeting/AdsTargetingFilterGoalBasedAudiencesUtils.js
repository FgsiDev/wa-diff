__d(
  "AdsTargetingFilterGoalBasedAudiencesUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = new Set(),
        n = new Set();
      ([e.existingCustomerExclusions, e.engagedAudienceExclusions].forEach(
        function (e) {
          e != null &&
            e.forEach(function (e) {
              return t.add(String(e));
            });
        },
      ),
        [e.existingCustomerInclusions, e.engagedAudienceInclusions].forEach(
          function (e) {
            e != null &&
              e.forEach(function (e) {
                return n.add(String(e));
              });
          },
        ));
      var r = new Set();
      return (
        e.lookalikeInclusions != null &&
          e.lookalikeInclusions.forEach(function (e) {
            return r.add(String(e));
          }),
        {
          goalExclusionIDs: t,
          goalInclusionIDs: n,
          goalLookalikeInclusionSeedIDs: r,
        }
      );
    }
    function l(e, t) {
      if (e == null) return null;
      var n = t ? e.goalExclusionIDs : e.goalInclusionIDs;
      return n.size > 0 ? n : null;
    }
    function s(e, t) {
      var n;
      if (t == null || t.size === 0) return !1;
      var r =
        (n = e.lookalike_spec) == null ||
        (n = n.origin) == null ||
        (n = n[0]) == null
          ? void 0
          : n.id;
      return r != null && t.has(r);
    }
    function u(e, t, n) {
      if (t == null) return !1;
      var r = l(t, n);
      return r != null && r.has(e.id)
        ? !0
        : n
          ? !1
          : s(e, t.goalLookalikeInclusionSeedIDs);
    }
    function c(e, t) {
      var n = new Set();
      return (
        e.size === 0 ||
          t.forEach(function (t) {
            var r,
              o =
                (r = t.lookalike_spec) == null ||
                (r = r.origin) == null ||
                (r = r[0]) == null
                  ? void 0
                  : r.id;
            o != null && e.has(o) && n.add(t.id);
          }),
        n
      );
    }
    function d(t) {
      var n = [],
        r = [],
        o = [],
        a = [],
        i = [];
      return (
        t.forEach(function (e) {
          var t = e.campaign_goal;
          t != null &&
            (t.existing_customers_exclusions &&
              n.push.apply(n, t.existing_customers_exclusions.toArray()),
            t.engaged_audiences_exclusions &&
              r.push.apply(r, t.engaged_audiences_exclusions.toArray()),
            t.existing_customers_inclusions &&
              o.push.apply(o, t.existing_customers_inclusions.toArray()),
            t.engaged_audiences_inclusions &&
              a.push.apply(a, t.engaged_audiences_inclusions.toArray()),
            t.lookalike_inclusions &&
              i.push.apply(i, t.lookalike_inclusions.toArray()));
        }),
        e({
          existingCustomerExclusions: n,
          engagedAudienceExclusions: r,
          existingCustomerInclusions: o,
          engagedAudienceInclusions: a,
          lookalikeInclusions: i,
        })
      );
    }
    function m(e, t, n) {
      var r = n.goalExclusionIDs.size > 0,
        o = n.goalInclusionIDs.size > 0,
        a = n.goalLookalikeInclusionSeedIDs.size > 0;
      if (!r && !o && !a) return t;
      var i = t,
        l = e.excluded_custom_audiences;
      if (r && l != null) {
        var u,
          c = new Set(
            ((u = t.excluded_custom_audiences) != null ? u : []).map(
              function (e) {
                return e.id;
              },
            ),
          ),
          d = l.filter(function (e) {
            return !c.has(e.id) && n.goalExclusionIDs.has(e.id);
          });
        if (d.length > 0) {
          var m;
          i = babelHelpers.extends({}, i, {
            excluded_custom_audiences: [].concat(
              (m = t.excluded_custom_audiences) != null ? m : [],
              d,
            ),
          });
        }
      }
      var p = e.custom_audiences;
      if ((o || a) && p != null) {
        var _,
          f = new Set(
            ((_ = t.custom_audiences) != null ? _ : []).map(function (e) {
              return e.id;
            }),
          ),
          g = p.filter(function (e) {
            return (
              !f.has(e.id) &&
              (n.goalInclusionIDs.has(e.id) ||
                s(e, n.goalLookalikeInclusionSeedIDs))
            );
          });
        if (g.length > 0) {
          var h;
          i = babelHelpers.extends({}, i, {
            custom_audiences: [].concat(
              (h = t.custom_audiences) != null ? h : [],
              g,
            ),
          });
        }
      }
      return i;
    }
    function p(e, t) {
      var n = t.goalExclusionIDs.size > 0,
        r = t.goalInclusionIDs.size > 0,
        o = t.goalLookalikeInclusionSeedIDs.size > 0;
      if (!n && !r && !o) return e;
      var a = e;
      if (n && e.excluded_custom_audiences != null) {
        var i = e.excluded_custom_audiences.filter(function (e) {
          return !t.goalExclusionIDs.has(e.id);
        });
        a = babelHelpers.extends({}, a, { excluded_custom_audiences: i });
      }
      if ((r || o) && e.custom_audiences != null) {
        var l = e.custom_audiences.filter(function (e) {
          return (
            !t.goalInclusionIDs.has(e.id) &&
            !s(e, t.goalLookalikeInclusionSeedIDs)
          );
        });
        a = babelHelpers.extends({}, a, { custom_audiences: l });
      }
      return a;
    }
    ((i.getGoalAudienceIDsSet = e),
      (i.isGoalLookalikeByOrigin = s),
      (i.isGoalFilteredAudience = u),
      (i.getDerivedGoalLookalikeIDs = c),
      (i.getGoalAudienceIDsFromCampaigns = d),
      (i.mergeGoalCardAudiencesIntoSpec = m),
      (i.removeGoalCardAudiencesFromTargetingSpec = p));
  },
  66,
);
