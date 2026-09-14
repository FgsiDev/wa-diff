__d(
  "adsUEditorShopLevelActivationSAIPAdAccountExperienceResponseSelectors",
  [
    "AdsAccountStore",
    "LoadObject",
    "ShopsAdsShopLevelActivationSAIPAdAccountExperienceInfoProvider",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("AdsAccountStore").getSelectedAccountID,
          r(
            "ShopsAdsShopLevelActivationSAIPAdAccountExperienceInfoProvider",
          ).toFluxSelector(),
        ],
        function (t, n) {
          return t == null
            ? r("LoadObject").withValue(
                { saip_experience: null, saip_experiences: [] },
                { creatorModuleID: i.id },
              )
            : n.get(t);
        },
        { name: i.id + ".shopLevelActivationExperienceResponseLOSelector" },
      ),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          return u(t);
        },
        {
          name:
            i.id + ".shopLevelActivationAdAccountExperienceResponseSelector",
        },
      );
    function u(e) {
      return e.match({
        loading: function () {
          return null;
        },
        error: function () {
          return null;
        },
        loaded: function (t) {
          return t;
        },
      });
    }
    ((l.shopLevelActivationExperienceResponseLOSelector = e),
      (l.shopLevelActivationAdAccountExperienceResponseSelector = s),
      (l.shopLevelActivationAdAccountExperienceResponse = u));
  },
  98,
);
