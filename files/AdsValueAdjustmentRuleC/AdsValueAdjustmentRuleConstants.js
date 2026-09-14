__d(
  "AdsValueAdjustmentRuleConstants",
  ["CriteriaCategoryType", "ValueRulesModalEntryPoint"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"],
      s = ["android", "ios"],
      u = [
        "age",
        "gender",
        "device_platform",
        "os_type",
        "location",
        "placement",
      ],
      c = [
        "age",
        "gender",
        "device_platform",
        "os_type",
        "location",
        "audience_label",
      ],
      d = ["age", "gender", "location"],
      m = ["placement"],
      p = ["omni_channel"];
    function _(e, t) {
      return e === r("CriteriaCategoryType").CONVERSION_LOCATION
        ? p
        : e === r("CriteriaCategoryType").AUDIENCE
          ? t ===
            o("ValueRulesModalEntryPoint").ValueRulesModalEntryPoint.L2_AUDIENCE
            ? d
            : c
          : e === r("CriteriaCategoryType").PLACEMENT
            ? m
            : [];
    }
    function f(e) {
      return e === "placement"
        ? r("CriteriaCategoryType").PLACEMENT
        : e === "omni_channel"
          ? r("CriteriaCategoryType").CONVERSION_LOCATION
          : null;
    }
    ((l.AGE_PREDICATES_IN_ORDER = e),
      (l.OPERATING_SYSTEM_PREDICATES_IN_ORDER = s),
      (l.USER_BASED_CRITERIA_TYPES_IN_ORDER = u),
      (l.AUDIENCE_CRITERIA_TYPES = c),
      (l.AUDIENCE_MODAL_CRITERIA_TYPES = d),
      (l.PLACEMENT_CRITERIA_TYPES = m),
      (l.CONVERSION_LOCATION_CRITERIA_TYPES = p),
      (l.getCriteriaTypesForCategory = _),
      (l.getCriteriaCategoryForCriteriaType = f));
  },
  98,
);
