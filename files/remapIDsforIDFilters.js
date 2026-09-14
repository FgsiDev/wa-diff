__d(
  "remapIDsforIDFilters",
  ["AdsGenericFilter", "AdsGenericFilterSet", "ClientServerIDMap"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      "CAMPAIGN_GROUP_SELECTED",
      "CAMPAIGN_SELECTED",
      "ADGROUP_SELECTED",
      "SEARCH_BY_CAMPAIGN_GROUP_ID",
      "SEARCH_BY_CAMPAIGN_ID",
      "SEARCH_BY_ADGROUP_ID",
    ]);
    function s(t) {
      var n = t.values.map(function (t) {
        if (!e.has(t.field.name)) return t;
        var n;
        return (
          Array.isArray(t.value)
            ? (n = t.value.map(o("ClientServerIDMap").resolveID))
            : (n = o("ClientServerIDMap").resolveID(t.value)),
          new (r("AdsGenericFilter"))(t.field, t.operator, n)
        );
      });
      return new (r("AdsGenericFilterSet"))(n);
    }
    l.default = s;
  },
  98,
);
