__d(
  "AdsMgmtAdObjectLevelTransformUtils",
  [],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e === "CAMPAIGN_GROUP"
        ? "CAMPAIGN_GROUP"
        : e === "CAMPAIGN"
          ? "CAMPAIGN"
          : e === "ADGROUP"
            ? "ADGROUP"
            : "AD_ACCOUNT";
    }
    function s(e) {
      return e === "CAMPAIGN_GROUP"
        ? "CAMPAIGN_GROUP"
        : e === "CAMPAIGN"
          ? "CAMPAIGN"
          : e === "ADGROUP"
            ? "ADGROUP"
            : "ACCOUNT";
    }
    function u(e) {
      return e === "campaign"
        ? "CAMPAIGN_GROUP"
        : e === "ad_set"
          ? "CAMPAIGN"
          : e === "ad"
            ? "ADGROUP"
            : "ACCOUNT";
    }
    function c(e) {
      return e === "campaign"
        ? "CAMPAIGN_GROUP"
        : e === "ad_set"
          ? "CAMPAIGN"
          : e === "ad"
            ? "ADGROUP"
            : "AD_ACCOUNT";
    }
    function d(e) {
      return e === "CAMPAIGN_GROUP"
        ? "CAMPAIGN_GROUP"
        : e === "CAMPAIGN"
          ? "CAMPAIGN"
          : e === "ADGROUP"
            ? "ADGROUP"
            : "AD_ACCOUNT";
    }
    function m(e) {
      return e === "CAMPAIGN_GROUP"
        ? "campaign"
        : e === "CAMPAIGN"
          ? "ad_set"
          : e === "ADGROUP"
            ? "ad"
            : "ad_account";
    }
    ((l.transformRecommendationObjectLevel = e),
      (l.transformRecommendationObjectLevelToObjectType = s),
      (l.transformObjectTypeToRecommendationObjectLevel = u),
      (l.transformObjectTypeToLevel = c),
      (l.transformObjectTypeTypeToLevel = d),
      (l.transformAdObjectLevelToType = m));
  },
  98,
);
