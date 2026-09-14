__d(
  "getMessageMarketingUpstreamSettingValuesFromAdObjects",
  [
    "getMessageMarketingUpstreamSettingValuesFromCampaign",
    "getMessageMarketingUpstreamSettingValuesFromCampaignGroup",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        r("getMessageMarketingUpstreamSettingValuesFromCampaignGroup")(e),
        r("getMessageMarketingUpstreamSettingValuesFromCampaign")(
          t,
          e == null ? void 0 : e.objective,
        ),
      );
    }
    l.default = e;
  },
  98,
);
