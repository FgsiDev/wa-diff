__d(
  "PromoAdsCESFieldStrings",
  [
    "fbt",
    "AdsLearnMore.react",
    "AdsLearnMoreLinkOpenNewTab.react",
    "GeoLink.react",
    "GeoTooltip.react",
    "PromoAdsAdsManagerGatingAndExperimentUtils",
    "PromoAdsFieldStrings",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = "1467642254076258",
      d = s._(/*BTDS*/ "Back"),
      m = s._(/*BTDS*/ "Cancel"),
      p = s._(/*BTDS*/ "Highlight your promotions"),
      _ = function () {
        return s._(/*BTDS*/ "Promotions");
      };
    function f(e, t) {
      return (
        e === void 0 && (e = !1),
        e &&
        o(
          "PromoAdsAdsManagerGatingAndExperimentUtils",
        ).isShopifySyncedOfferBAUExpansionAdExEnabled()
          ? s._(
              /*BTDS*/ "Meta will highlight promo codes on your ad to encourage conversions except for {Shopify-synced codes link}, which may be shown regardless of this setting. {About highlighting your promotions}",
              [
                s._param(
                  "Shopify-synced codes link",
                  u.jsx(r("AdsLearnMoreLinkOpenNewTab.react"), {
                    cmsID: o("PromoAdsFieldStrings")
                      .helpCenterIdForShopifySyncedOffers,
                    onClick: t,
                    children: s._(/*BTDS*/ "Shopify-synced codes"),
                  }),
                ),
                s._param(
                  "About highlighting your promotions",
                  u.jsx(r("AdsLearnMore.react"), {
                    cmsID: c,
                    label: s._(/*BTDS*/ "About highlighting your promotions"),
                  }),
                ),
              ],
            )
          : !e &&
              o(
                "PromoAdsAdsManagerGatingAndExperimentUtils",
              ).isReconBAUExpansionAdExEnabled()
            ? s._(
                /*BTDS*/ "Meta will highlight promo codes on your ad to encourage conversions. Promotions from your account may also appear across your other ads to people who have already engaged with this ad. {About highlighting your promotions}",
                [
                  s._param(
                    "About highlighting your promotions",
                    u.jsx(r("AdsLearnMore.react"), {
                      cmsID: c,
                      label: s._(/*BTDS*/ "About highlighting your promotions"),
                    }),
                  ),
                ],
              )
            : s._(
                /*BTDS*/ "Meta will highlight promo codes on your ad to encourage conversions. {About highlighting your promotions}",
                [
                  s._param(
                    "About highlighting your promotions",
                    u.jsx(r("AdsLearnMore.react"), {
                      cmsID: c,
                      label: s._(/*BTDS*/ "About highlighting your promotions"),
                    }),
                  ),
                ],
              )
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e, t) {
      return (
        e === void 0 && (e = !1),
        e &&
        o(
          "PromoAdsAdsManagerGatingAndExperimentUtils",
        ).isShopifySyncedOfferBAUExpansionAdExEnabled()
          ? s._(
              /*BTDS*/ "Highlight your promotions before and after people tap on your ad to increase conversions and capture email leads except for {Shopify-synced codes link}, which may be shown regardless of this setting. {tooltip}",
              [
                s._param(
                  "Shopify-synced codes link",
                  u.jsx(r("AdsLearnMoreLinkOpenNewTab.react"), {
                    cmsID: o("PromoAdsFieldStrings")
                      .helpCenterIdForShopifySyncedOffers,
                    onClick: t,
                    children: s._(/*BTDS*/ "Shopify-synced codes"),
                  }),
                ),
                s._param(
                  "tooltip",
                  u.jsx(r("GeoTooltip.react"), {
                    content: o(
                      "PromoAdsFieldStrings",
                    ).getPromoCodeHelpTextBodyFbt(),
                    heading: o("PromoAdsFieldStrings")
                      .PROMO_ADS_HIGHLIGHT_HELP_TEXT_TITLE,
                  }),
                ),
              ],
            )
          : !e &&
              o(
                "PromoAdsAdsManagerGatingAndExperimentUtils",
              ).isReconBAUExpansionAdExEnabled()
            ? s._(
                /*BTDS*/ "Highlight your promotions before and after people tap on your ad to increase conversions and capture email leads. Promotions from your account may also appear across your other ads to people who have already engaged with this ad. {tooltip}",
                [
                  s._param(
                    "tooltip",
                    u.jsx(r("GeoTooltip.react"), {
                      content: o(
                        "PromoAdsFieldStrings",
                      ).getPromoCodeHelpTextBodyFbt(),
                      heading: o("PromoAdsFieldStrings")
                        .PROMO_ADS_HIGHLIGHT_HELP_TEXT_TITLE,
                    }),
                  ),
                ],
              )
            : s._(
                /*BTDS*/ "Highlight your promotions before and after people tap on your ad to increase conversions and capture email leads. {tooltip}",
                [
                  s._param(
                    "tooltip",
                    u.jsx(r("GeoTooltip.react"), {
                      content: o(
                        "PromoAdsFieldStrings",
                      ).getPromoCodeHelpTextBodyFbt(),
                      heading: o("PromoAdsFieldStrings")
                        .PROMO_ADS_HIGHLIGHT_HELP_TEXT_TITLE,
                    }),
                  ),
                ],
              )
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e, t) {
      return s._(
        /*BTDS*/ "Show available {offers link} before and after people tap your ad. Manage or turn off in {Commerce Manager link}.",
        [
          s._param(
            "offers link",
            u.jsx(r("GeoLink.react"), {
              onClick: e,
              children: s._(/*BTDS*/ "offers"),
            }),
          ),
          s._param("Commerce Manager link", t),
        ],
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e, t) {
      return e != null
        ? u.jsx(r("GeoLink.react"), {
            href: e,
            onClick: t,
            target: "_blank",
            children: s._(/*BTDS*/ "Commerce Manager"),
          })
        : s._(/*BTDS*/ "Commerce Manager");
    }
    y.displayName = y.name + " [from " + i.id + "]";
    var C = s._(
        /*BTDS*/ "Highlight promo codes and offers on your ad to encourage conversions.",
      ),
      b = s._(/*BTDS*/ "Confirm promo code"),
      v = s._(/*BTDS*/ "Add a code"),
      S = s._(
        /*BTDS*/ "Fill out every section to improve your customer\u2019s experience.",
      ),
      R = s._(/*BTDS*/ "Edit code"),
      L = s._(/*BTDS*/ "Save"),
      E = function (t) {
        return s._(
          /*BTDS*/ "Code {promo code} was found in ad text you provided. We'll check this code is active and synced with Shopify so it can appear in your shops and ads across Meta.",
          [s._param("promo code", t)],
        );
      },
      k = function (t) {
        return s._(
          /*BTDS*/ "We will automatically add promo code {=m2} based on the ad text you provided. You can confirm the code and add additional information.",
          [
            s._implicitParam(
              "=m2",
              u.jsx("b", {
                children: s._(/*BTDS*/ "{promo code}", [
                  s._param("promo code", t),
                ]),
              }),
            ),
          ],
        );
      },
      I = s._(/*BTDS*/ "Confirm promo code");
    function T() {
      return s._(/*BTDS*/ "Confirm");
    }
    var D = s._(/*BTDS*/ "Set up"),
      x = s._(/*BTDS*/ "Saving..."),
      $ = s._(/*BTDS*/ "Please fix form errors."),
      P = s._(/*BTDS*/ "Please make a change."),
      N = s._(/*BTDS*/ "Please select a page for offer setup");
    ((l.FOOTER_BUTTON_BACK_LABEL = d),
      (l.FOOTER_BUTTON_CANCEL_LABEL = m),
      (l.PROMO_ADS_MODULE_FIELD_HEADER = p),
      (l.getPAMHeader = _),
      (l.getPromoAdsCESDescriptionFbt = f),
      (l.getPromoAdsWithPreClickCESDescriptionFbt = g),
      (l.getPromoAdsAlwaysOnCESDescriptionFbt = h),
      (l.getPromoAdsAlwaysOnCommerceManagerLink = y),
      (l.PROMO_OFFER_MANAGEMENT_VIEW_OFFERS_DESCRIPTION = C),
      (l.PROMO_OFFER_MANAGEMENT_CONFIRM_PROMO_CODE_TITLE = b),
      (l.PROMO_OFFER_MANAGEMENT_ADD_A_CODE_LABEL = v),
      (l.PROMO_OFFER_MANAGEMENT_ADD_A_CODE_DESCRIPTION = S),
      (l.PROMO_OFFER_MANAGEMENT_EDIT_CODE_TITLE = R),
      (l.PROMO_OFFER_MANAGEMENT_SAVE_LABEL = L),
      (l.PROMO_ADS_AD_COPY_CODES_UPSELL_SHOPIFY_CONTENT = E),
      (l.PROMO_ADS_AD_COPY_CODES_UPSELL_CONTENT = k),
      (l.PROMO_ADS_AD_COPY_CODES_UPSELL_FOOTER = I),
      (l.getPromoAdsCESConfirmFbt = T),
      (l.PROMO_ADS_MODULE_SETUP_LABEL = D),
      (l.PROMO_ADS_MODULE_SAVING_LABEL = x),
      (l.PROMO_ADS_MODULE_INVALID_FORM_LABEL = $),
      (l.PROMO_ADS_MODULE_NO_CHANGE_FORM_LABEL = P),
      (l.PROMO_ADS_MODULE_NO_FACEBOOK_PAGE_SELECTED_LABEL = N));
  },
  226,
);
