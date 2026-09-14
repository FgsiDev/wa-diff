__d(
  "AdsInsightsLegacyOperatorUtil",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u =
        ((e = {}),
        (e.CONTAIN = "contains"),
        (e.EQUAL = "="),
        (e.GREATER_THAN = ">"),
        (e.IN = "in"),
        (e.IN_RANGE = "in_range"),
        (e.LESS_THAN = "<"),
        (e.NOT_CONTAIN = "not_contains"),
        (e.NOT_EQUAL = "!="),
        (e.NOT_IN = "not_in"),
        (e.NOT_IN_RANGE = "not_in_range"),
        (e.ANY = "any"),
        (e.ALL = "all"),
        (e.NONE = "none"),
        (e.CONTAINS_ANY = "contains_any"),
        (e.NOT_CONTAINS_ANY = "not_contains_any"),
        (e.CONTAINS_ALL = "contains_all"),
        e);
    function c(e) {
      var t = u[e];
      return (t != null || s(0, 2033, e), t);
    }
    l.toLegacyOperator = c;
  },
  98,
);
