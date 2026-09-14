__d(
  "adsCampaignUpdateInProductAudienceSpecs",
  [
    "AdsAPICampaignPaths",
    "AdsAPITargetFields",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "FBLogger",
    "adsGetProductAudienceSpecsFromFlexibleSpecRecord",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = function (n) {
          var e = r(
              "AdsCampaignRecordAccessors",
            ).targeting.product_audience_specs.get(n),
            o = r("AdsCampaignRecordAccessors").targeting.flexible_spec.get(n);
          return e == null &&
            r("adsGetProductAudienceSpecsFromFlexibleSpecRecord")(o) != null
            ? n
            : n.updateIn(
                r("AdsAPICampaignPaths").TARGETING.PRODUCT_AUDIENCE_SPECS,
                t,
              );
        },
        a = function (n) {
          var e = r("AdsCampaignRecordAccessors").targeting.flexible_spec.get(
            n,
          );
          if (e == null) return n;
          var o = r(
              "AdsCampaignRecordAccessors",
            ).targeting.product_audience_specs.get(n),
            a = e.map(function (e) {
              var a = e.get(r("AdsAPITargetFields").PRODUCT_AUDIENCE_SPECS);
              if (a != null) {
                if (o != null)
                  return (
                    r("FBLogger")("dpa_dfca_union").mustfix(
                      "Reducer is giving up because it saw top-level product_audience_specs as well as in flexible_spec for campaign %s",
                      r("AdsCampaignRecordAccessors").id.get(n),
                    ),
                    e
                  );
                if (!(a instanceof r("immutable").List))
                  return (
                    r("FBLogger")("dpa_dfca_union").mustfix(
                      "Reducer is giving up because product_audience_specs in flexible_spec is unexpectedly not Immutable.List for campaign %s",
                      r("AdsCampaignRecordAccessors").id.get(n),
                    ),
                    e
                  );
                var i = t(a);
                if (i != null)
                  return e.set(
                    r("AdsAPITargetFields").PRODUCT_AUDIENCE_SPECS,
                    i,
                  );
              }
              return e;
            });
          return r("AdsCampaignRecordAccessors").targeting.flexible_spec.set(a)(
            n,
          );
        };
      return o("AdsMutators").chain(n, a)(e);
    }
    l.default = e;
  },
  98,
);
