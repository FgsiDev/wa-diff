__d(
  "AdsMetadataSourcePromoAdsModulePlugin",
  [
    "AdsEditingAdgroupEditorContext",
    "AdsFluxHooks",
    "AdsMetadataPromoAdsAlwaysOnCommerceManagerLink.react",
    "AdsPromoAdsOfferManagementAddEditOfferAction",
    "AdsPromoCloseNestedViewAction",
    "AdsUEditorHooks",
    "FBJSON",
    "IncentivesAdsManagerUtils",
    "JSResource",
    "PromoAdsAdsManagerCouponCodeUtils",
    "PromoAdsAdsManagerEmailCaptureGenericCodeGatingUtils",
    "PromoAdsAdsManagerGatingAndExperimentUtils",
    "PromoAdsAdsManagerOfferManagementTypes",
    "PromoAdsCESFieldStrings",
    "PromoAdsEmailCaptureFieldStrings",
    "PromoAdsFieldStrings",
    "PromoAdsOfferManagementFieldStrings",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupPromoAdCreativeFieldSelector",
    "adsUEditorAdgroupPromoAdEligibilitySelector",
    "adsUEditorAdgroupPromoAdRelayStoreSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
    "lazyLoadComponent",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsUEditorAdgroupPromoAdCreativeFieldContainer.react",
        ).__setRef("AdsMetadataSourcePromoAdsModulePlugin"),
      ),
      c = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsUEditorAdgroupPromoAdOfferManagementCESViewContainer.react",
        ).__setRef("AdsMetadataSourcePromoAdsModulePlugin"),
      ),
      d = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsMetadataPromoAdsSelectedItemsContainer.react",
        ).__setRef("AdsMetadataSourcePromoAdsModulePlugin"),
      ),
      m = r("lazyLoadComponent")(
        r("JSResource")("AdsMetadataPromoAdsOptInBadge.react").__setRef(
          "AdsMetadataSourcePromoAdsModulePlugin",
        ),
      ),
      p = r("lazyLoadComponent")(
        r("JSResource")("PromoAdsBauExpansionImpressionTracker.react").__setRef(
          "AdsMetadataSourcePromoAdsModulePlugin",
        ),
      );
    function _() {
      var e = o("react-compiler-runtime").c(11),
        t = o("AdsUEditorHooks").useUEditorAdgroupAdsSelector(
          o("adsUEditorAdgroupPromoAdCreativeFieldSelector")
            .promoAdsSelectedItemsSelector,
        ),
        n = t.emailCaptureOfferDetailFromAdsSpec,
        r = t.emailCaptureOffers,
        a = t.hasCatalogNoOffersWithDetectedOffersDisabled,
        i = t.hasCatalogOnlyManualOffersWithDetectedOffersDisabled,
        l = t.isEmailCaptureOptedIn,
        u = t.isPromoAdManualOptedIn,
        c = t.isPromoAdOptedIn,
        m = t.isPromoAdsAlwaysOn,
        p = t.isSourceCodesFromWebsites,
        _ = t.manualSelectedOffer,
        f;
      return (
        e[0] !== n ||
        e[1] !== r ||
        e[2] !== a ||
        e[3] !== i ||
        e[4] !== l ||
        e[5] !== u ||
        e[6] !== c ||
        e[7] !== m ||
        e[8] !== p ||
        e[9] !== _
          ? ((f = s.jsx(d, {
              state: {
                emailCaptureOfferDetailFromAdsSpec: n,
                emailCaptureOffers: r,
                hasCatalogNoOffersWithDetectedOffersDisabled: a,
                hasCatalogOnlyManualOffersWithDetectedOffersDisabled: i,
                isEmailCaptureOptedIn: l,
                isPromoAdManualOptedIn: u,
                isPromoAdOptedIn: c,
                isPromoAdsAlwaysOn: m,
                isSourceCodesFromWebsites: p,
                manualSelectedOffer: _,
              },
            })),
            (e[0] = n),
            (e[1] = r),
            (e[2] = a),
            (e[3] = i),
            (e[4] = l),
            (e[5] = u),
            (e[6] = c),
            (e[7] = m),
            (e[8] = p),
            (e[9] = _),
            (e[10] = f))
          : (f = e[10]),
        f
      );
    }
    var f = o("AdsFluxHooks").adsFluxContainer(_),
      g = {
        key: "promo_ads_module",
        type: "metadata/source_extension",
        preloadableJSResources: [
          r("JSResource")(
            "AdsUEditorAdgroupPromoAdCreativeFieldContainer.react",
          ).__setRef("AdsMetadataSourcePromoAdsModulePlugin"),
          r("JSResource")(
            "AdsUEditorAdgroupPromoAdOfferManagementCESViewContainer.react",
          ).__setRef("AdsMetadataSourcePromoAdsModulePlugin"),
          r("JSResource")(
            "AdsMetadataPromoAdsSelectedItemsContainer.react",
          ).__setRef("AdsMetadataSourcePromoAdsModulePlugin"),
          r("JSResource")("AdsMetadataPromoAdsOptInBadge.react").__setRef(
            "AdsMetadataSourcePromoAdsModulePlugin",
          ),
          r("JSResource")(
            "PromoAdsBauExpansionImpressionTracker.react",
          ).__setRef("AdsMetadataSourcePromoAdsModulePlugin"),
        ],
        getSortOrder: function () {
          return 1;
        },
        getHeading: function () {
          return o(
            "PromoAdsAdsManagerGatingAndExperimentUtils",
          ).isPromoAdsIgStoriesCTAPreClickExperienceEnabled()
            ? o("PromoAdsCESFieldStrings").getPAMHeader()
            : o("PromoAdsCESFieldStrings").PROMO_ADS_MODULE_FIELD_HEADER;
        },
        getTooltip: function () {
          var e = o(
            "adsUEditorAdgroupPromoAdCreativeFieldSelector",
          ).isPromoAdsAlwaysOnSelector(r("AdsEditingAdgroupEditorContext"));
          return e
            ? o("PromoAdsFieldStrings").getPromoAdsAlwaysOnHelpTextBodyFbt()
            : null;
        },
        getSubheading: function () {
          var e = o(
            "adsUEditorAdgroupPromoAdCreativeFieldSelector",
          ).isPromoAdsAlwaysOnSelector(r("AdsEditingAdgroupEditorContext"));
          if (e) {
            var t,
              n = r("adsUEditorAccountSelector")(
                r("AdsEditingAdgroupEditorContext"),
              ),
              a = (t = n.business) == null ? void 0 : t.id,
              l = r("adsUEditorSelectedAdgroupIDsSelector")(
                r("AdsEditingAdgroupEditorContext"),
              )[0],
              u = o(
                "adsUEditorAdgroupPromoAdCreativeFieldSelector",
              ).commonLogDataSelector(r("AdsEditingAdgroupEditorContext")),
              c = function () {
                (o("IncentivesAdsManagerUtils").logEvent(
                  o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                    .PROMO_ADS_OFFER_MANAGEMENT_EVENT,
                  n.account_id,
                  l,
                  o("PromoAdsAdsManagerOfferManagementTypes")
                    .OfferManagementEvent.VIEW_OPENED,
                  o("FBJSON").stringify(
                    babelHelpers.extends({}, u, {
                      isPromoAdsAlwaysOn: e,
                      promoAdsOfferManagementReferralSurface: o(
                        "PromoAdsAdsManagerCouponCodeUtils",
                      ).PromoAdsOfferManagementReferralSurface
                        .MANAGE_PROMO_CODES_CTA,
                    }),
                  ),
                ),
                  r("AdsPromoAdsOfferManagementAddEditOfferAction").dispatch(
                    {
                      visibleNestedViewComponentPluginKey: "promo_ads_module",
                      promoAdsOfferManagementMode: "promo_codes_view",
                    },
                    {
                      line: "217",
                      module: "AdsMetadataSourcePromoAdsModulePlugin.js",
                      moduleID: i.id,
                    },
                  ));
              },
              d = function () {
                o("IncentivesAdsManagerUtils").logEvent(
                  o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                    .PROMO_ADS_OFFER_MANAGEMENT_EVENT,
                  n.account_id,
                  l,
                  o("PromoAdsAdsManagerOfferManagementTypes")
                    .OfferManagementEvent.CM_REDIRECT_CLICKED,
                  o("FBJSON").stringify(
                    babelHelpers.extends({}, u, {
                      isPromoAdsAlwaysOn: e,
                      redirect_target: "settings",
                    }),
                  ),
                );
              };
            return o(
              "PromoAdsCESFieldStrings",
            ).getPromoAdsAlwaysOnCESDescriptionFbt(
              c,
              s.jsx(r("AdsMetadataPromoAdsAlwaysOnCommerceManagerLink.react"), {
                businessID: a,
                onClick: d,
              }),
            );
          }
          var m = o(
            "adsUEditorAdgroupPromoAdRelayStoreSelector",
          ).shopifyOfferSyncingEligibilitySelector(
            r("AdsEditingAdgroupEditorContext"),
          );
          return o(
            "PromoAdsAdsManagerGatingAndExperimentUtils",
          ).isPromoAdsIgStoriesCTAPreClickExperienceEnabled()
            ? o(
                "PromoAdsCESFieldStrings",
              ).getPromoAdsWithPreClickCESDescriptionFbt(m, function () {})
            : o("PromoAdsCESFieldStrings").getPromoAdsCESDescriptionFbt(
                m,
                function () {},
              );
        },
        getNestedViewTitle: function (t) {
          var e = t.promoAdsModuleData;
          if ((e == null ? void 0 : e.blockedDetectedOfferCodeName) != null)
            return o(
              "PromoAdsOfferManagementFieldStrings",
            ).PROMO_OFFER_MANAGEMENT_DETECTED_OFFER_DISABLED_MODAL_TITLE(
              e.blockedDetectedOfferCodeName,
            );
          switch (e == null ? void 0 : e.promoAdsOfferManagementMode) {
            case "promo_codes_view":
              return o("PromoAdsOfferManagementFieldStrings")
                .PROMO_OFFER_MANAGEMENT_MANAGE_PROMO_CODES_LABEL;
            case "promo_codes_edit":
              return o("PromoAdsCESFieldStrings")
                .PROMO_OFFER_MANAGEMENT_EDIT_CODE_TITLE;
            case "promo_codes_confirm":
              return o("PromoAdsCESFieldStrings")
                .PROMO_OFFER_MANAGEMENT_CONFIRM_PROMO_CODE_TITLE;
            case "promo_codes_create":
              return o("PromoAdsOfferManagementFieldStrings")
                .PROMO_OFFER_MANAGEMENT_OFFER_ADD_PROMOTION_TITLE;
            case "email_capture_unique_offer_create":
              return o("PromoAdsEmailCaptureFieldStrings")
                .PROMO_ADS_EMAIL_CAPTURE_UNIQUE_CODE_MODAL_ADD_OFFER_HEADER;
            case "email_capture_unique_offer_edit":
              return o("PromoAdsEmailCaptureFieldStrings")
                .PROMO_ADS_EMAIL_CAPTURE_UNIQUE_CODE_MODAL_EDIT_HEADER;
            case "email_capture_generic_offer_edit":
            case "email_capture_generic_offer_create":
              return o("PromoAdsEmailCaptureFieldStrings")
                .PROMO_ADS_EMAIL_CAPTURE_GENERIC_CODE_MODAL_EDIT_HEADER;
            default:
              return "";
          }
        },
        getNestedViewDescription: function (t) {
          var e = t.promoAdsModuleData;
          if ((e == null ? void 0 : e.blockedDetectedOfferCodeName) != null)
            return o(
              "PromoAdsOfferManagementFieldStrings",
            ).PROMO_OFFER_MANAGEMENT_DETECTED_OFFER_DISABLED_MODAL_DESCRIPTION(
              e.blockedDetectedOfferCodeName,
            );
          var n = o(
            "adsUEditorAdgroupPromoAdCreativeFieldSelector",
          ).isEmailCaptureAlwaysOnSelector(r("AdsEditingAdgroupEditorContext"));
          switch (e == null ? void 0 : e.promoAdsOfferManagementMode) {
            case "promo_codes_view":
              return o("PromoAdsCESFieldStrings")
                .PROMO_OFFER_MANAGEMENT_VIEW_OFFERS_DESCRIPTION;
            case "promo_codes_edit":
              return o("PromoAdsOfferManagementFieldStrings")
                .PROMO_OFFER_MANAGEMENT_OFFER_EDIT_CODE_DESCRIPTION;
            case "promo_codes_create":
              return o("PromoAdsCESFieldStrings")
                .PROMO_OFFER_MANAGEMENT_ADD_A_CODE_DESCRIPTION;
            case "promo_codes_confirm":
              return o("PromoAdsCESFieldStrings")
                .PROMO_OFFER_MANAGEMENT_ADD_A_CODE_DESCRIPTION;
            case "email_capture_unique_offer_edit":
            case "email_capture_unique_offer_create":
              return o(
                "PromoAdsEmailCaptureFieldStrings",
              ).getPromoAdsEmailCaptureUniqueCodeModalEditDescription(n);
            case "email_capture_generic_offer_edit":
            case "email_capture_generic_offer_create":
              return o(
                "PromoAdsAdsManagerEmailCaptureGenericCodeGatingUtils",
              ).isEmailCaptureGenericCodeOfferModalEnabled()
                ? o(
                    "PromoAdsFieldStrings",
                  ).getPromoAdsEmailCaptureModalGenericCodeDescription(n)
                : o("PromoAdsEmailCaptureFieldStrings")
                    .PROMO_ADS_EMAIL_CAPTURE_GENERIC_CODE_MODAL_EDIT_DESCRIPTION;
            default:
              return "";
          }
        },
        iconURI:
          "/images/ads/ads_manager/metadata/Promo-Ads-Module-Thumbnail.svg",
        isVisible: function () {
          var e =
            !o(
              "IncentivesAdsManagerUtils",
            ).isMovingAMStaticAdsPromoModuleEnabled() &&
            o(
              "adsUEditorAdgroupPromoAdCreativeFieldSelector",
            ).isCesIntegrationEligibleSelector(
              r("AdsEditingAdgroupEditorContext"),
            ) &&
            o(
              "adsUEditorAdgroupPromoAdEligibilitySelector",
            ).getIsPromoAdsEligible(!0)(r("AdsEditingAdgroupEditorContext"));
          if (e) {
            var t = r("adsUEditorAccountSelector")(
                r("AdsEditingAdgroupEditorContext"),
              ),
              n = r("adsUEditorSelectedAdgroupIDsSelector")(
                r("AdsEditingAdgroupEditorContext"),
              )[0];
            o("IncentivesAdsManagerUtils").logEvent(
              o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                .PROMO_ADS_SHOULD_SHOW_PROMO_ADS_FIELD_IN_CES,
              t.account_id,
              n,
              o("IncentivesAdsManagerUtils").ShouldShowIncentiveAdFieldSatus
                .ELIGIBLE,
              null,
              !0,
            );
          }
          return e;
        },
        MainComponent: function () {
          return s.jsx(u, {});
        },
        SelectedItemsComponent: function () {
          return s.jsx(f, {});
        },
        OptInComponent: function () {
          return s.jsxs(s.Fragment, { children: [s.jsx(m, {}), s.jsx(p, {})] });
        },
        nestedViewType: "dynamic-handlers",
        NestedViewComponent: function () {
          return s.jsx(c, {});
        },
        getNestedViewPrimaryButtonLabel: function (t) {
          var e = t.promoAdsModuleData;
          switch (e == null ? void 0 : e.promoAdsOfferManagementMode) {
            case "promo_codes_create":
            case "promo_codes_edit":
            case "promo_codes_confirm":
              return o("PromoAdsCESFieldStrings")
                .PROMO_OFFER_MANAGEMENT_SAVE_LABEL;
            case "email_capture_unique_offer_create":
            case "email_capture_generic_offer_create":
              return o("PromoAdsCESFieldStrings").PROMO_ADS_MODULE_SETUP_LABEL;
            case "email_capture_unique_offer_edit":
            case "email_capture_generic_offer_edit":
              return o("PromoAdsCESFieldStrings").getPromoAdsCESConfirmFbt();
            default:
              return o("PromoAdsCESFieldStrings").FOOTER_BUTTON_BACK_LABEL;
          }
        },
        getNestedViewSecondaryButtonLabel: function (t) {
          var e = t.promoAdsModuleData;
          switch (e == null ? void 0 : e.promoAdsOfferManagementMode) {
            case "promo_codes_create":
            case "promo_codes_edit":
            case "promo_codes_confirm":
            case "email_capture_unique_offer_create":
            case "email_capture_unique_offer_edit":
            case "email_capture_generic_offer_create":
            case "email_capture_generic_offer_edit":
              return o("PromoAdsCESFieldStrings").FOOTER_BUTTON_BACK_LABEL;
            default:
              return o("PromoAdsCESFieldStrings").FOOTER_BUTTON_CANCEL_LABEL;
          }
        },
        getNestedViewPrimaryButtonDisabledMessage: function (t) {
          var e = t.promoAdsModuleData,
            n = t.visibleNestedViewComponentPluginKey;
          if (n === "promo_ads_module") {
            if ((e == null ? void 0 : e.formState) === "no_change")
              return o("PromoAdsCESFieldStrings")
                .PROMO_ADS_MODULE_NO_CHANGE_FORM_LABEL;
            if ((e == null ? void 0 : e.formState) === "error") {
              var r;
              return (r = e == null ? void 0 : e.formErrorMessage) != null
                ? r
                : o("PromoAdsCESFieldStrings")
                    .PROMO_ADS_MODULE_INVALID_FORM_LABEL;
            } else if ((e == null ? void 0 : e.isSaveInFlight) === !0)
              return o("PromoAdsCESFieldStrings").PROMO_ADS_MODULE_SAVING_LABEL;
          }
          return null;
        },
        getNestedViewPrimaryClickHandler: function (t) {
          var e = t.promoAdsModuleData;
          return function () {
            switch (e == null ? void 0 : e.promoAdsOfferManagementMode) {
              case "promo_codes_create":
              case "promo_codes_edit":
              case "promo_codes_confirm":
              case "email_capture_unique_offer_create":
              case "email_capture_unique_offer_edit":
              case "email_capture_generic_offer_create":
              case "email_capture_generic_offer_edit":
                e != null &&
                  e.geoFormSubmit &&
                  (e == null || e.geoFormSubmit());
                break;
              case "promo_codes_view":
              default:
                r("AdsPromoCloseNestedViewAction").dispatch(
                  { navigateBackToMainView: !0 },
                  {
                    line: "428",
                    module: "AdsMetadataSourcePromoAdsModulePlugin.js",
                    moduleID: i.id,
                  },
                );
            }
          };
        },
        getNestedViewSecondaryClickHandler: function (t) {
          var e,
            n = t.promoAdsModuleData,
            o =
              (e = n == null ? void 0 : n.navigateBackToMainView) != null
                ? e
                : !1;
          switch (n == null ? void 0 : n.promoAdsOfferManagementMode) {
            case "promo_codes_create":
            case "promo_codes_edit":
            case "promo_codes_confirm":
            case "email_capture_unique_offer_create":
            case "email_capture_unique_offer_edit":
            case "email_capture_generic_offer_create":
            case "email_capture_generic_offer_edit":
              return function () {
                r("AdsPromoCloseNestedViewAction").dispatch(
                  { navigateBackToMainView: o },
                  {
                    line: "452",
                    module: "AdsMetadataSourcePromoAdsModulePlugin.js",
                    moduleID: i.id,
                  },
                );
              };
            case "promo_codes_view":
            default:
              return null;
          }
        },
      },
      h = g;
    l.default = h;
  },
  98,
);
