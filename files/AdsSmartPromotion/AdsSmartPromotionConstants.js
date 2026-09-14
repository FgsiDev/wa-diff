__d(
  "AdsSmartPromotionConstants",
  [
    "fbt",
    "GoToAccountSettingsLink",
    "SKAdNetworkCampaignGroupSitevarsUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = 18,
      d = 13,
      m = 65,
      p = [
        r(
          "SKAdNetworkCampaignGroupSitevarsUtils",
        ).getSKANCampaignUserOSString(),
      ],
      _ = s._(/*BTDS*/ "Go to Advertising settings"),
      f = s._(
        /*BTDS*/ "Minimum age requirement has moved to Advertising settings",
      ),
      g = s._(
        /*BTDS*/ "City, region or postal code restrictions has moved to Advertising settings",
      ),
      h = s._(
        /*BTDS*/ "You can now set the minimum age requirement for your app using audience controls in this ad account's Advertising settings. Audience controls you set will replace your app's advertising settings. We recommend reviewing your audience controls to ensure the settings you want will apply to your campaigns.",
      ),
      y = s._(
        /*BTDS*/ "You can now set location inclusions and exclusions for your app using audience controls in this ad account's Advertising settings. Audience controls you set will replace your app's advertising settings. We recommend reviewing your audience controls to ensure the settings you want will apply to your campaigns.",
      );
    function C(e) {
      return s._(
        /*BTDS*/ "The audience controls set in your Advertising settings have not been applied to this campaign. {=m2}",
        [
          s._implicitParam(
            "=m2",
            u.jsx(r("GoToAccountSettingsLink"), {
              adAccountID: e,
              entryPoint:
                "aac_campaign_applys_account_audience_control_guidance_card",
              eventCategory: "am_creation_editing",
              linkText: _,
              navEntryPoint: "ads_budget_and_schedule_section",
              children: s._(/*BTDS*/ ""),
            }),
          ),
        ],
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      return s._(
        /*BTDS*/ "The minimum age requirement and location restrictions you set in your app's advertising settings have moved to audience controls in this ad account's Advertising settings. Audience controls you set will replace your app's advertising settings. As a result, you may see different settings in this campaign. We recommend reviewing your audience controls to ensure the settings you want will apply to your campaigns. {=m2}",
        [
          s._implicitParam(
            "=m2",
            u.jsx(r("GoToAccountSettingsLink"), {
              adAccountID: e,
              entryPoint:
                "aac_campaign_applys_account_audience_control_guidance_card",
              eventCategory: "am_creation_editing",
              linkText: _,
              navEntryPoint: "ads_budget_and_schedule_section",
              children: s._(/*BTDS*/ ""),
            }),
          ),
        ],
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    var v = s._(
        /*BTDS*/ "You can now set your attribution settings when creating your app promotion campaign. We recommend reviewing your attribution settings in each campaign to ensure the settings you want have applied.",
      ),
      S = s._(/*BTDS*/ "Attribution settings has moved to campaign creation"),
      R = s._(/*BTDS*/ "Learn more about attribution settings"),
      L = "https://www.facebook.com/business/help/460276478298895";
    ((l.DEFAULT_AGE_MIN = c),
      (l.SMART_APP_PROMOTION_DEFAULT_MIN_AGE = d),
      (l.SMART_APP_PROMOTION_DEFAULT_MAX_AGE = m),
      (l.DEFAULT_IOS_14_PLUS_IOS_VERSION = p),
      (l.ACCOUNT_CONTROL_ACCOUNT_SETTINGS_LINK = _),
      (l.APP_SETTINGS_DEPRECATION_MIN_AGE_NOTICE_TITLE = f),
      (l.APP_SETTINGS_DEPRECATION_GEO_RESTRICTIONS_NOTICE_TITLE = g),
      (l.APP_SETTINGS_DEPRECATION_MIN_AGE_NOTICE_CONTENT = h),
      (l.APP_SETTINGS_DEPRECATION_GEO_RESTRICTIONS_NOTICE_CONTENT = y),
      (l.getAppAndAccountMinAgeMismatchedWarning = C),
      (l.getCampaignApplyAccountAudienceControlGuidance = b),
      (l.ATTRIBUTION_SETTING_DEPRECATION_GUIDANCE_CONTENT = v),
      (l.ATTRIBUTION_SETTING_DEPRECATION_GUIDANCE_TITLE = S),
      (l.ATTRIBUTION_SETTINGS_LEARN_MORE = R),
      (l.ATTRIBUTION_SETTING_HELP_CENTER_LINK = L));
  },
  226,
);
