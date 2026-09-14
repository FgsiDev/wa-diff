__d(
  "adsUEditorShopLevelActivationSAIPAdAccountExperienceInfoSelector",
  [
    "adsCreateSelector",
    "adsUEditorShopLevelActivationSAIPAdAccountExperienceResponseSelectors",
    "only",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = r("adsCreateSelector"))(
        [
          o(
            "adsUEditorShopLevelActivationSAIPAdAccountExperienceResponseSelectors",
          ).shopLevelActivationExperienceResponseLOSelector,
        ],
        function (t) {
          return u(t);
        },
        { name: i.id + ".shopLevelActivationSAIPExperienceLOSelector" },
      );
    function u(e) {
      return e.map(function (e) {
        return e.saip_experience;
      });
    }
    var c = e(
      [
        o(
          "adsUEditorShopLevelActivationSAIPAdAccountExperienceResponseSelectors",
        ).shopLevelActivationExperienceResponseLOSelector,
      ],
      function (t) {
        return d(t);
      },
      { name: i.id + ".shopLevelActivationSAIPExperiencesLOSelector" },
    );
    function d(e) {
      return e.map(function (e) {
        return e.saip_experiences != null ? e.saip_experiences : [];
      });
    }
    var m = e(
      [c],
      function (t) {
        return p(t);
      },
      { name: i.id + ".hasAnyShopLevelActivationExperienceSelector" },
    );
    function p(e) {
      return e.match({
        loading: function () {
          return !1;
        },
        error: function () {
          return !1;
        },
        loaded: function (t) {
          return (
            t.length > 0 && !(t.length === 1 && t[0] === "GA_RECOMMENDATION")
          );
        },
      });
    }
    var _ = e(
      [c],
      function (t) {
        return f(t);
      },
      { name: i.id + ".hasOnlyNoSMAShopLevelActivationExperienceSelector" },
    );
    function f(e) {
      return e.match({
        loading: function () {
          return !1;
        },
        error: function () {
          return !1;
        },
        loaded: function (t) {
          return r("only")(t) === "SHOPS_ONBOARDING_NO_SMA";
        },
      });
    }
    ((l.shopLevelActivationSAIPExperienceLOSelector = s),
      (l.shopLevelActivationSAIPExperienceLO = u),
      (l.shopLevelActivationSAIPExperiencesLOSelector = c),
      (l.shopLevelActivationSAIPExperiencesLO = d),
      (l.hasAnyShopLevelActivationExperienceSelector = m),
      (l.hasAnyShopLevelActivationExperience = p),
      (l.hasOnlyNoSMAShopLevelActivationExperienceSelector = _),
      (l.hasOnlyNoSMAShopLevelActivationExperience = f));
  },
  98,
);
