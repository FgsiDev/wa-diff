__d(
  "AdsCampaignBudgetPluginResolver",
  [
    "AdsCampaignBudgetPluginType",
    "AdsCampaignBudgetPlugins",
    "AdsODAXUtils",
    "adsMemoizeWithArgs",
    "adsPluginResolverFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsPluginResolverFactory")(function () {
        return n("AdsCampaignBudgetPlugins").getArray();
      }, o("AdsCampaignBudgetPluginType").order),
      s = {
        resolve: r("adsMemoizeWithArgs")(
          function (t) {
            var n = e.resolve(t);
            if (
              n.key === "default" &&
              t.objective != null &&
              o("AdsODAXUtils").isODAXSpecificObjective(t.objective)
            ) {
              var r = o("AdsODAXUtils").maybeTranslateObjective(
                t.objective,
                t.promotedObjectType,
                null,
              );
              return e.resolve(babelHelpers.extends({}, t, { objective: r }));
            }
            return n;
          },
          u,
          i.id + ".resolve",
        ),
      };
    function u(e) {
      var t, n;
      return (
        ((t = e.objective) != null ? t : "") +
        "|" +
        e.promotedObjectType +
        "|" +
        ((n = e.destinationType) != null ? n : "")
      );
    }
    var c = s;
    l.default = c;
  },
  98,
);
