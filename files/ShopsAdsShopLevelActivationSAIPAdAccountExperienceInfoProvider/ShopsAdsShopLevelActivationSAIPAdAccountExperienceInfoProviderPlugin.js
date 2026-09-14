__d(
  "ShopsAdsShopLevelActivationSAIPAdAccountExperienceInfoProviderPlugin",
  [
    "LoadObject",
    "LoadObjectMap",
    "LoadObjectMapMutationUtil",
    "adsShopLevelActivationFetchAPIUtils",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: function (t) {
          return r("LoadObjectMap").create(function (e) {
            (t(function (t) {
              return o("LoadObjectMapMutationUtil").setValueListToLoading(t, e);
            }),
              e.forEach(function (e) {
                r("promiseDone")(
                  o(
                    "adsShopLevelActivationFetchAPIUtils",
                  ).adsUEditorShopLevelActivationSAIPExperienceInfo(e),
                  function (n) {
                    t(function (t) {
                      return t.set(
                        e,
                        r("LoadObject").withValue(n, { creatorModuleID: i.id }),
                      );
                    });
                  },
                );
              }));
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
