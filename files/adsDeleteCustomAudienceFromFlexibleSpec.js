__d(
  "adsDeleteCustomAudienceFromFlexibleSpec",
  ["AdsAPITargetFields", "AdsCampaignRecordAccessors", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      t == null;
      var o = r("AdsCampaignRecordAccessors").targeting.flexible_spec.get(e);
      if (o == null) return e;
      var a =
        (n = r("AdsCampaignRecordAccessors").targeting.flexible_spec.get(e)) ==
        null
          ? void 0
          : n
              .map(function (e) {
                var n = e.get(r("AdsAPITargetFields").CUSTOM_AUDIENCES);
                if (n == null || !(n instanceof r("immutable").List)) return e;
                var o =
                  n == null
                    ? void 0
                    : n.filter(function (e) {
                        return e.get("id") != (t == null ? void 0 : t.id);
                      });
                return o.isEmpty()
                  ? e.delete(r("AdsAPITargetFields").CUSTOM_AUDIENCES)
                  : e.set(r("AdsAPITargetFields").CUSTOM_AUDIENCES, o);
              })
              .filter(function (e) {
                return !e.isEmpty();
              });
      return r("AdsCampaignRecordAccessors").targeting.flexible_spec.set(a)(e);
    }
    l.default = e;
  },
  98,
);
