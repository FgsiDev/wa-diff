__d(
  "AdsAdCreationUtils",
  ["fbt", "getMessageMarketingCampaignType"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t,
        n = e.adObject,
        r = e.defaultName,
        a = e.nameField,
        i = e.objectiveName,
        l = e.shouldUseDefaultName,
        s = l === void 0 ? !1 : l,
        c = e.messageMarketingCampaignType,
        d =
          c === void 0
            ? o("getMessageMarketingCampaignType").MessageMarketingCampaignType
                .NONE
            : c,
        m;
      return (
        i != null
          ? (m = u({
              defaultName: r,
              objectiveName: i,
              messageMarketingCampaignType: d,
            }))
          : (m = r),
        babelHelpers.extends(
          {},
          n,
          ((t = {}), (t[a] = n[a] && n[a].trim() && !s ? n[a] : m), t),
        )
      );
    }
    function u(e) {
      var t = e.defaultName,
        n = e.messageMarketingCampaignType,
        r = e.objectiveName;
      switch (t) {
        case m:
          return s._(/*BTDS*/ "New {objective} Campaign", [
            s._param("objective", r),
          ]);
        case d:
          return s._(/*BTDS*/ "New {objective} Ad Set", [
            s._param("objective", r),
          ]);
        case c:
          return n ===
            o("getMessageMarketingCampaignType").MessageMarketingCampaignType
              .AD_AND_MESSAGE
            ? s._(/*BTDS*/ "New {objective} Ad and Message", [
                s._param("objective", r),
              ])
            : n ===
                o("getMessageMarketingCampaignType")
                  .MessageMarketingCampaignType.MESSAGE_ONLY
              ? s._(/*BTDS*/ "New {objective} Message", [
                  s._param("objective", r),
                ])
              : s._(/*BTDS*/ "New {objective} Ad", [s._param("objective", r)]);
        default:
          return t;
      }
    }
    var c = s._(/*BTDS*/ "New Ad"),
      d = s._(/*BTDS*/ "New Ad Set"),
      m = s._(/*BTDS*/ "New Campaign");
    ((l.getAdObjectWithDefaultName = e),
      (l.getDefaultNameWithObjective = u),
      (l.DEFAULT_ADGROUP_NAME = c),
      (l.DEFAULT_CAMPAIGN_NAME = d),
      (l.DEFAULT_CAMPAIGN_GROUP_NAME = m));
  },
  226,
);
