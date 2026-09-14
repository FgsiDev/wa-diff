__d(
  "AdsSpendCapUtils",
  [
    "fbt",
    "AdsBulkValueUtils",
    "AdsBuyingTypes",
    "AdsLearnMore.react",
    "AdsUnificationCampaignDetailsContent",
    "geoMargin",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = "481733105308636";
    function m(e, t) {
      var n = e === r("AdsBuyingTypes").AUCTION || !e;
      return n && !t;
    }
    function p() {
      return s._(
        /*BTDS*/ "You can't change your limit to zero. If you don't want a spending limit anymore, you can remove your limit. You can also stop your campaign.",
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e, t) {
      var n = o("AdsBulkValueUtils").getUniformValueOrDefault(e, 0);
      return (t || 0) + n;
    }
    function f() {
      return o(
        "AdsUnificationCampaignDetailsContent",
      ).getCampaignSpendingLimitTooltipContentStringOrDefault(
        s._(
          /*BTDS*/ "Set an overall spending limit for your ad campaign. This means your ad sets in the campaign will stop once you've reached your spending limit. This option is not available when using a campaign lifetime budget. {Learn more}",
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
                      cmsID: d,
                      source: "ads_manager_context_preview_learn_more",
                    }),
                  },
                ),
              ),
            ),
          ],
        ),
      );
    }
    ((l.CMS_CAMPAIGN_SPENDING_LIMIT = d),
      (l.canNewCampaignGroupUseSpendCap = m),
      (l.getErrorMessageForZeroValue = p),
      (l.getMinLimit = _),
      (l.getCampaignGroupSpendCapHelpText = f));
  },
  226,
);
