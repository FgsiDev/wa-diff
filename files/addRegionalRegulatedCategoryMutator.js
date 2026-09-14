__d(
  "addRegionalRegulatedCategoryMutator",
  ["AdsCampaignRecordAccessors", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o,
        a =
          (n =
            e == null || (o = e.regional_regulated_categories) == null
              ? void 0
              : o.toArray()) != null
            ? n
            : [];
      if (
        a.some(function (e) {
          return e === t;
        })
      )
        return e;
      var i = [].concat(a, [t]);
      return r("AdsCampaignRecordAccessors").regional_regulated_categories.set(
        r("immutable").List(i),
        e,
      );
    }
    l.addRegionalRegulatedCategoryMutator = e;
  },
  98,
);
