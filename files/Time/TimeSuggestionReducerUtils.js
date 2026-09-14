__d(
  "TimeSuggestionReducerUtils",
  ["DateTime", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n =
          (t = e.time_suggestion) == null || (t = t.toJS()) == null
            ? void 0
            : t.high_demand_periods;
      return n != null ? n : [];
    }
    function s(t, n, r) {
      var o = e(t),
        a = o.map(function (e) {
          var t = n.highDemandPeriods.get(e.id);
          return t == null ? e : d(t, r);
        });
      return a;
    }
    function u(t, n) {
      var r = e(t),
        o = r.filter(function (e) {
          return !n.highDemandPeriodIDs.has(e.id);
        });
      return o;
    }
    function c(t, n, o) {
      var a = new Set(
          e(t).map(function (e) {
            var t = e.id;
            return t;
          }),
        ),
        i = e(t);
      for (var l of n.highDemandPeriods)
        a.has(l.id)
          ? r("FBLogger")("time_suggestion").warn(
              "Attempting to add high demand periods with duplicate FBIDs",
            )
          : (a.add(l.id), i.push(d(l, o)));
      return i;
    }
    function d(e, t) {
      return babelHelpers.extends({}, e, {
        time_end:
          e.time_end != null
            ? r("DateTime")
                .fromISOString(e.time_end, t)
                .startOfMinute()
                .toISOString()
            : null,
        time_start: r("DateTime")
          .fromISOString(e.time_start, t)
          .startOfMinute()
          .toISOString(),
      });
    }
    ((l.getPeriodsAfterUpdate = s),
      (l.getPeriodsAfterDeletion = u),
      (l.getPeriodsAfterCreation = c));
  },
  98,
);
