__d(
  "adsSignalSourceContainersSelector",
  [
    "AdsAccountStore",
    "LoadObject",
    "SignalsLoadAdAccountSignalSourceContainersStore",
    "SignalsOptimizationSourceContainer",
    "adsCreateSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      t === void 0 && (t = !1);
      var n = r(
        "SignalsLoadAdAccountSignalSourceContainersStore",
      ).fluxGetSelector();
      return r("adsCreateSelector")(
        [n, r("AdsAccountStore").getSelectedAccountID],
        function (o, a) {
          if (a == null)
            return r("LoadObject").withValue(r("immutable").Map(), {
              creatorModuleID: i.id,
            });
          var n = o({ adAccountID: a, usageType: e });
          return !n.hasValue() && n.isDone()
            ? r("LoadObject").withValue(r("immutable").Map(), {
                creatorModuleID: i.id,
              })
            : n.map(function (e) {
                return r("immutable").Map(
                  e
                    .map(function (e) {
                      return [
                        e.id,
                        new (r("SignalsOptimizationSourceContainer"))(
                          e.id,
                        ).fromPixelRawData(e),
                      ];
                    })
                    .filter(function (e) {
                      var n = e[0],
                        r = e[1],
                        o = r.signalSetupRecommendationEntId != null;
                      return o ? t : !0;
                    }),
                );
              });
        },
        { name: i.id },
      );
    }
    l.createSignalContainersSelector = e;
  },
  98,
);
