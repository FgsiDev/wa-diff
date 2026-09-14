__d(
  "AdsUnificationCampaignDetailsContent",
  [
    "fbt",
    "AdsLearnMore.react",
    "AdsSpendCapUtils",
    "AdsUnificationContentUtils",
    "geoMargin",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react"));
    function d(e) {
      return o("AdsUnificationContentUtils").getStringOrDefault(
        s._(/*BTDS*/ "About objectives"),
        e,
      );
    }
    function m(t) {
      return o("AdsUnificationContentUtils").getStringOrDefault(
        s._(
          /*BTDS*/ "Ad sets in this campaign will stop running once you reach your spending limit. {Learn more}",
          [
            s._param(
              "Learn more",
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(r("geoMargin").top8),
                  {
                    children: c.jsx(r("AdsLearnMore.react"), {
                      cmsID: o("AdsSpendCapUtils").CMS_CAMPAIGN_SPENDING_LIMIT,
                      label: s._(/*BTDS*/ "About spending limits"),
                      source: "ads_manager_context_preview_learn_more",
                    }),
                  },
                ),
              ),
            ),
          ],
        ),
        t,
      );
    }
    ((l.getCampaignObjectiveTooltipLearnMoreStringOrDefault = d),
      (l.getCampaignSpendingLimitTooltipContentStringOrDefault = m));
  },
  226,
);
