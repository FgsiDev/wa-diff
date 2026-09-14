__d(
  "isAdgroupAssetFeedRulesConsistentWithField",
  ["AdsAssetFeedUtils", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o = (n = e.creative) == null ? void 0 : n.asset_feed_spec;
      if (o == null) return null;
      var a = o[t];
      if (a == null) return null;
      a instanceof Array && (a = r("immutable").fromJS(a));
      var i = a.reduce(function (e, t) {
        var n = t.get("adlabels") || [];
        return (
          n.every(function (t) {
            var n = t.get("name");
            return (n != null && e.push(n), !0);
          }),
          e
        );
      }, []);
      return r("immutable").Set(i);
    }
    function s(e, t) {
      var n,
        o =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.asset_customization_rules;
      if (o == null) return null;
      o instanceof Array && (o = r("immutable").fromJS(o));
      var a = o.reduce(function (e, n) {
        var r = n.getIn([t, "name"]);
        return (r != null && e.push(r), e);
      }, []);
      return r("immutable").Set(a);
    }
    function u(e, t) {
      return e.equals(t)
        ? { status: "CONSISTENT" }
        : e.isSubset(t)
          ? {
              status: "UNUSED_LABEL_IN_ASSET_LIST",
              fieldTypeLabels: t.subtract(e),
            }
          : t.isSubset(e)
            ? {
                status: "UNKNOWN_LABEL_IN_TARGETING_RULE",
                targetRulesLabelsSet: e.subtract(t),
              }
            : {
                status: "INCONSISTENT_LABEL_IN_ASSET_LIST_AND_TARGETING_RULE",
                targetRulesLabelsSet: e.subtract(t),
                fieldTypeLabels: t.subtract(e),
              };
    }
    function c(t, n, r) {
      if (!o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(t))
        return { status: "NOT_PAC_AD" };
      var a = e(t, n),
        i = s(t, r);
      return i != null && a != null
        ? u(i, a)
        : i != null && (i == null ? void 0 : i.size) !== 0
          ? {
              status: "UNKNOWN_LABEL_IN_TARGETING_RULE",
              targetRulesLabelsSet: i,
            }
          : a != null
            ? { status: "UNUSED_LABEL_IN_ASSET_LIST", fieldTypeLabels: a }
            : { status: "NO_ASSET_LIST_AND_RULE_FOUND" };
    }
    l.default = c;
  },
  98,
);
