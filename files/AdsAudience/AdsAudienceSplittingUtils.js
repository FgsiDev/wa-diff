__d(
  "AdsAudienceSplittingUtils",
  [
    "fbt",
    "AdsCampaignRecordAccessors",
    "AdsGenderTypes",
    "AdsMutators",
    "AdsValidationConsts",
    "immutable",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 18;
    function u(e) {
      for (var t = [], n = 0; n < e.length; n++)
        t[n] = {
          age_min: e[n].age_min,
          age_max: e[n].age_max,
          genders: e[n].genders,
          name: e[n].name,
        };
      return t;
    }
    function c(e, t, n) {
      var a;
      return o("AdsMutators").chain(
        (a = r("AdsCampaignRecordAccessors")).name.set(t.name),
        a.targeting.age_min.set(t.age_min),
        a.targeting.age_max.set(t.age_max),
        a.targeting.genders.set(
          t.genders != null ? r("immutable").List(t.genders) : void 0,
        ),
        function (e) {
          return r("isTruthy")(e.lifetime_budget)
            ? r("AdsCampaignRecordAccessors").lifetime_budget.set(n, e)
            : r("AdsCampaignRecordAccessors").daily_budget.set(n, e);
        },
        r("AdsCampaignRecordAccessors").saved_audience.delete,
        r("AdsCampaignRecordAccessors").saved_audience_id.delete,
      )(e);
    }
    function d(e, t) {
      if (!t) return e || "";
      var n = 0;
      t.genders && t.genders.length > 0 && (n = t.genders[0]);
      var o = p(
          "",
          t.age_min != null
            ? t.age_min
            : r("AdsValidationConsts").minAgeDefault,
          t.age_max != null ? t.age_max : r("AdsValidationConsts").maxAge,
          n,
        ),
        a = e || "";
      return a.endsWith(o) ? a.substring(0, a.length - o.length) : a.trim();
    }
    function m(e) {
      return e === 1 ? s._(/*BTDS*/ "M") : s._(/*BTDS*/ "F");
    }
    function p(e, t, n, o) {
      var a, i;
      if (
        (n >= 65
          ? (a = s._(/*BTDS*/ "{The Minimum Age}+", [
              s._param("The Minimum Age", t),
            ]))
          : (a = s._(/*BTDS*/ "{The Minimum Age}-{The Maximum Age}", [
              s._param("The Minimum Age", t),
              s._param("The Maximum Age", n),
            ])),
        o == r("AdsGenderTypes").ALL)
      )
        i = s._(/*BTDS*/ "[{The age string}]", [s._param("The age string", a)]);
      else {
        var l = m(o);
        i = s._(
          /*BTDS*/ "[{The age string} - {The gender string for showing M\/F}]",
          [
            s._param("The age string", a),
            s._param("The gender string for showing M/F", l),
          ],
        );
      }
      var u = s._(
        /*BTDS*/ "{Original ad set name} {Suffix with age and gender info}",
        [
          s._param("Original ad set name", e),
          s._param("Suffix with age and gender info", i),
        ],
      );
      return u.toString();
    }
    function _(t, n, o) {
      if (t == null) return [];
      var a = t.age_min != null ? t.age_min : e,
        i = t.age_max != null ? t.age_max : r("AdsValidationConsts").maxAge,
        l = t.genders ? t.genders[0] : 0,
        s = [{ age_min: a, age_max: i, genders: l }];
      return s.concat(o);
    }
    ((l.cloneArray = u),
      (l.applySplittingSpec = c),
      (l.getCampaignNameWithoutSuffix = d),
      (l.getCampaignName = p),
      (l.getInitialSplitData = _));
  },
  226,
);
