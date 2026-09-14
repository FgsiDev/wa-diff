__d(
  "PromoAdsOfferManagementFieldStrings",
  ["fbt", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = s._(/*BTDS*/ "Manage promo codes"),
      d = s._(/*BTDS*/ "Offer management"),
      m = s._(
        /*BTDS*/ "Manage existing offers and add new promo codes all in one place",
      ),
      p = s._(/*BTDS*/ "Source"),
      _ = s._(/*BTDS*/ "Offer amount"),
      f = s._(/*BTDS*/ "Offer type"),
      g = s._(/*BTDS*/ "Promo code"),
      h = s._(/*BTDS*/ "Dates"),
      y = s._(/*BTDS*/ "Conditions"),
      C = s._(/*BTDS*/ "Description"),
      b = s._(/*BTDS*/ "Minimum spend required"),
      v = s._(/*BTDS*/ "Minimum quantity required"),
      S = function (t) {
        return s._(/*BTDS*/ "Minimum spend of {amount}", [
          s._param("amount", t),
        ]);
      },
      R = function (t) {
        return s._(/*BTDS*/ "Minimum quantity of {quantity}", [
          s._param("quantity", t),
        ]);
      },
      L = s._(/*BTDS*/ "No minimum requirement"),
      E = s._(/*BTDS*/ "Add a code"),
      k = s._(/*BTDS*/ "Add a promotion");
    function I(e) {
      return e ? k : E;
    }
    var T = s._(/*BTDS*/ "Confirm code"),
      D = s._(
        /*BTDS*/ "Fill out every section to improve your customer\u2019s experience.",
      ),
      x = s._(/*BTDS*/ "Change code"),
      $ = s._(
        /*BTDS*/ "This change will affect all active ads linked to the ad account.",
      ),
      P = s._(/*BTDS*/ "Offer updated successfully."),
      N = s._(/*BTDS*/ "Offer created successfully."),
      M = s._(/*BTDS*/ "Unable to update offer."),
      w = s._(/*BTDS*/ "Unable to create offer."),
      A = s._(/*BTDS*/ "Promo code"),
      F = s._(
        /*BTDS*/ "Must be 2-20 characters and contain both letters and numbers",
      ),
      O = s._(
        /*BTDS*/ "Must be 2-20 characters and contain both letters and numbers",
      ),
      B = s._(/*BTDS*/ "This promo code is already added."),
      W = s._(/*BTDS*/ "Offer amount"),
      q = s._(/*BTDS*/ "Offer type can't be changed once it's created."),
      U = s._(/*BTDS*/ "Field required"),
      V = s._(/*BTDS*/ "Percentage"),
      H = s._(/*BTDS*/ "Fixed amount"),
      G = s._(/*BTDS*/ "Free shipping"),
      z = s._(/*BTDS*/ "Free shipping offers cannot be edited"),
      j = s._(/*BTDS*/ "Start date"),
      K = s._(/*BTDS*/ "End date"),
      Q = s._(/*BTDS*/ "Condition"),
      X = s._(/*BTDS*/ "Minimum subtotal"),
      Y = s._(/*BTDS*/ "Minimum quantity"),
      J = s._(/*BTDS*/ "Maximum discount"),
      Z = s._(
        /*BTDS*/ "The maximum discount offered on a single order. Only applicable to percentage offers.",
      ),
      ee = s._(/*BTDS*/ "None"),
      te = s._(/*BTDS*/ "\u0025"),
      ne = s._(/*BTDS*/ "Description"),
      re = s._(/*BTDS*/ "Add a code"),
      oe = s._(/*BTDS*/ "Manage offers in Commerce Manager"),
      ae = s._(/*BTDS*/ "Commerce Manager"),
      ie = s._(/*BTDS*/ "Manage offers"),
      le = s._(/*BTDS*/ "Offer merchandising settings"),
      se = s._(/*BTDS*/ "Please select a page for offer setup"),
      ue = s._(/*BTDS*/ "Select a code"),
      ce = s._(/*BTDS*/ "Ads"),
      de = s._(/*BTDS*/ "Website"),
      me = s._(/*BTDS*/ "Manual"),
      pe = s._(/*BTDS*/ "Not seeing the right code?"),
      _e = s._(/*BTDS*/ "No matching results."),
      fe = s._(/*BTDS*/ "Active ads affected by change"),
      ge = s._(
        /*BTDS*/ "The update will affect all active ads in this account.",
      ),
      he = s._(
        /*BTDS*/ "We automatically added a promo code based on the ad text you provided. You can review the code and add additional information.",
      ),
      ye = function (t) {
        return s._(
          /*BTDS*/ "Code {promo code} was found in ad text you provided. We'll check this code is active and synced with Shopify so it can appear in your shops and ads across Meta.",
          [s._param("promo code", t)],
        );
      },
      Ce = function (t) {
        return s._(
          /*BTDS*/ "This offer can only be edited on {partner platform}, where your promotions are managed.",
          [s._param("partner platform", Qe(t))],
        );
      },
      be = function (t) {
        return s._(
          /*BTDS*/ "This offer can only be deleted on {partner platform} , where your promotions are managed.",
          [s._param("partner platform", Qe(t))],
        );
      },
      ve = s._(/*BTDS*/ "Delete promo code?"),
      Se = function (t) {
        return s._(
          /*BTDS*/ "Deleting will impact the performance of any ads currently using code {promo code}. Are you sure you want to proceed?",
          [s._param("promo code", t)],
        );
      },
      Re = s._(/*BTDS*/ "Edit promo code?"),
      Le = function (t) {
        return s._(
          /*BTDS*/ "Changes will apply to any ads which use code {promo code}.",
          [s._param("promo code", t)],
        );
      },
      Ee = function (t) {
        return s._(/*BTDS*/ "{couponCode} has been deleted.", [
          s._param("couponCode", t),
        ]);
      },
      ke = s._(/*BTDS*/ "Unable to delete offer. Please try again."),
      Ie = s._(
        /*BTDS*/ "Unable to delete offer. The offer could not be found.",
      ),
      Te = s._(
        /*BTDS*/ "Unable to delete offer. This offer is synced from a third party and cannot be deleted here.",
      ),
      De = function (t, n) {
        var e = s._(/*BTDS*/ "ad copy"),
          r = s._(/*BTDS*/ "found");
        switch (n) {
          case "AD_CREATIVE_PRIMARY_TEXT":
            e = s._(/*BTDS*/ "primary text");
            break;
          case "AD_CREATIVE_HEADLINE":
            e = s._(/*BTDS*/ "headline");
            break;
          case "AD_CREATIVE_DESCRIPTION":
            e = s._(/*BTDS*/ "description");
            break;
          default:
            break;
        }
        return (
          (r = s._(/*BTDS*/ "created")),
          s._(
            /*BTDS*/ "The code {promo code} has been {found the code} based on the {promo code soure} you provided. You can add more details, such as an offer amount.",
            [
              s._param("promo code", t),
              s._param("found the code", r),
              s._param("promo code soure", e),
            ],
          )
        );
      },
      xe = s._(
        /*BTDS*/ "Your ad has a new manually selected code. You can confirm the offer details for the code or remove it. If you don\u2019t take any action, your ad will still publish with this code.",
      ),
      $e = s._(/*BTDS*/ "Confirm promo code"),
      Pe = s._(/*BTDS*/ "Add code details"),
      Ne = s._(/*BTDS*/ "Enter a number between 1 and 100."),
      Me = s._(/*BTDS*/ "Enter amount"),
      we = s._(/*BTDS*/ "Enter value"),
      Ae = s._(/*BTDS*/ "Enter offer percentage"),
      Fe = s._(/*BTDS*/ "The discount must be greater than 0."),
      Oe = s._(
        /*BTDS*/ "Minimum subtotal should be at least the offer amount.",
      ),
      Be = s._(
        /*BTDS*/ "This code failed at checkout on your website. Make sure it is active on your website and offer details are correct to display this code on your ads.",
      ),
      We = s._(/*BTDS*/ "This code has been deleted. You cannot use it."),
      qe = s._(
        /*BTDS*/ "This code has been deleted. You can select another one.",
      ),
      Ue = s._(
        /*BTDS*/ "This code was detected from your website and cannot be used because detected offers have been turned off.",
      ),
      Ve = function (t) {
        return s._(/*BTDS*/ "Confirm {code} to keep showing it on your ad", [
          s._param("code", t),
        ]);
      },
      He = function (t) {
        return s._(
          /*BTDS*/ "You turned off Detected offers in Commerce Manager, so this ad isn't showing {code} right now. Confirm the offer to start showing it again, or pick a different one.",
          [s._param("code", t)],
        );
      },
      Ge = s._(/*BTDS*/ "Review offer"),
      ze = function (t) {
        return s._(/*BTDS*/ "Still using {code}?", [s._param("code", t)]);
      },
      je = function (t) {
        return s._(
          /*BTDS*/ "You turned off Detected offers in Commerce Manager, so this ad isn't showing {code} right now. Confirm the offer below to start showing it again.",
          [s._param("code", t)],
        );
      },
      Ke = s._(/*BTDS*/ "Keep highlighting");
    function Qe(e) {
      switch (e) {
        case "SHOPIFY":
          return s._(/*BTDS*/ "Shopify");
        case "MAGENTO":
          return s._(/*BTDS*/ "Magento");
        case "SALESFORCE_COMMERCE_CLOUD":
          return s._(/*BTDS*/ "Salesforce Commerce Cloud");
        case "WOO_COMMERCE":
          return s._(/*BTDS*/ "WooCommerce");
        default:
          return s._(/*BTDS*/ "Other ecommerce platform");
      }
    }
    ((l.PROMO_OFFER_MANAGEMENT_MANAGE_PROMO_CODES_LABEL = c),
      (l.PROMO_OFFER_MANAGEMENT_VIEW_MODAL_HEADER = d),
      (l.PROMO_OFFER_MANAGEMENT_VIEW_MODAL_DESCRIPTION = m),
      (l.PROMO_OFFER_MANAGEMENT_VIEW_SOURCE_COLUMN_HEADER = p),
      (l.PROMO_OFFER_MANAGEMENT_VIEW_OFFER_AMOUNT_COLUMN_HEADER = _),
      (l.PROMO_OFFER_MANAGEMENT_VIEW_OFFER_TYPE_COLUMN_HEADER = f),
      (l.PROMO_OFFER_MANAGEMENT_VIEW_PROMO_CODE_COLUMN_HEADER = g),
      (l.PROMO_OFFER_MANAGEMENT_VIEW_DATES_COLUMN_HEADER = h),
      (l.PROMO_OFFER_MANAGEMENT_VIEW_CONDITIONS_COLUMN_HEADER = y),
      (l.PROMO_OFFER_MANAGEMENT_VIEW_DESCRIPTION_COLUMN_HEADER = C),
      (l.PROMO_OFFER_MANAGEMENT_VIEW_CONDITIONS_MINIMUM_SUBTOTAL_HEADER = b),
      (l.PROMO_OFFER_MANAGEMENT_VIEW_CONDITIONS_MINIMUM_QUANTITY_HEADER = v),
      (l.PROMO_OFFER_MANAGEMENT_VIEW_CONDITIONS_MINIMUM_SUBTOTAL = S),
      (l.PROMO_OFFER_MANAGEMENT_VIEW_CONDITIONS_MINIMUM_QUANTITY = R),
      (l.PROMO_OFFER_MANAGEMENT_VIEW_CONDITIONS_NO_MINIMUM = L),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_ADD_CODE_TITLE = E),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_ADD_PROMOTION_TITLE = k),
      (l.getPromoOfferManagementAddTitle = I),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_CONFIRM_CODE_TITLE = T),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_ADD_CODE_DESCRIPTION = D),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_CHANGE_CODE_TITLE = x),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_EDIT_CODE_DESCRIPTION = $),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_EDIT_SUCCESS_TOAST = P),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_ADD_SUCCESS_TOAST = N),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_EDIT_FAIL_TOAST = M),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_ADD_FAIL_TOAST = w),
      (l.PROMO_OFFER_MANAGEMENT_PROMO_CODE_INPUT_LABEL = A),
      (l.PROMO_OFFER_MANAGEMENT_PROMO_CODE_INPUT_INFO_MESSAGE_LABEL = F),
      (l.PROMO_OFFER_MANAGEMENT_PROMO_CODE_INPUT_ERROR_MESSAGE_LABEL = O),
      (l.PROMO_OFFER_MANAGEMENT_PROMO_CODE_DUPLICATEDCODE_ERROR_MESSAGE_LABEL =
        B),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_AMOUNT_INPUT_LABEL = W),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_AMOUNT_TOOLTIP_LABEL = q),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_FIELD_REQUIRED_LABEL = U),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_TYPE_PERCENTAGE_LABEL = V),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_TYPE_FIXED_AMOUNT_LABEL = H),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_TYPE_FREE_SHIPPING_LABEL = G),
      (l.FREE_SHIPPING_OFFER_EDIT_DISABLED_TOOLTIP = z),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_START_DATE_INPUT_LABEL = j),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_END_DATE_INPUT_LABEL = K),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_CONDITION_LABEL = Q),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_MINIMUM_SUBTOTAL_LABEL = X),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_MINIMUM_QUANTITY_LABEL = Y),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_MAX_DISCOUNT_LABEL = J),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_MAX_DISCOUNT_DISABLED_MESSAGE = Z),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_NONE_OPTION_LABEL = ee),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_PERCENTAGE_SIGN_LABEL = te),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_DESCRIPTION_TITLE = ne),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_ADD_A_CODE_BUTTON_LABEL = re),
      (l.PROMO_OFFER_MANAGEMENT_CM_REDIRECT_BUTTON_LABEL = oe),
      (l.PROMO_OFFER_MANAGEMENT_CM_HEADING = ae),
      (l.PROMO_OFFER_MANAGEMENT_CM_MANAGE_OFFERS_LABEL = ie),
      (l.PROMO_OFFER_MANAGEMENT_CM_OFFER_MERCHANDISING_SETTINGS_LABEL = le),
      (l.PROMO_OFFER_MANAGEMENT_NO_FACEBOOK_PAGE_SELECTED_LABEL = se),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_MANUAL_SELECTION_PLACEHOLDER = ue),
      (l.PROMO_OFFER_MANAGEMENT_VIEW_SOURCE_ADS_LABEL = ce),
      (l.PROMO_OFFER_MANAGEMENT_VIEW_SOURCE_WEBSITE_LABEL = de),
      (l.PROMO_OFFER_MANAGEMENT_VIEW_SOURCE_MANUAL_LABEL = me),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_NOT_SEEING_CODE_LABEL = pe),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_NO_MATCHING_RESULTS_LABEL = _e),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_EDIT_CONFIRMATION_TITLE = fe),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_EDIT_CONFIRMATION_CONTENT = ge),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_AD_COPY_CODE_GUIDANCE_CONTENT = he),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_AD_COPY_CODE_SHOPIFY_GUIDANCE_CONTENT =
        ye),
      (l.SYNCED_PARTNER_PLATFORM_DISCOUNT_EDIT_TOOLTIP = Ce),
      (l.SYNCED_PARTNER_PLATFORM_DISCOUNT_DELETE_TOOLTIP = be),
      (l.OFFER_ACTION_MENU_DELETE_CONFIRMATION_TITLE = ve),
      (l.OFFER_ACTION_MENU_DELETE_CONFIRMATION_BODY = Se),
      (l.OFFER_ACTION_MENU_EDIT_CONFIRMATION_TITLE = Re),
      (l.OFFER_ACTION_MENU_EDIT_CONFIRMATION_BODY = Le),
      (l.PROMO_OFFER_MANAGEMENT_DELETE_SUCCESS_TOAST = Ee),
      (l.PROMO_OFFER_MANAGEMENT_DELETE_FAIL_TOAST = ke),
      (l.PROMO_OFFER_MANAGEMENT_DELETE_FAIL_OFFER_NOT_FOUND_TOAST = Ie),
      (l.PROMO_OFFER_MANAGEMENT_DELETE_FAIL_THIRD_PARTY_SYNCED_TOAST = Te),
      (l.PROMO_OFFER_AD_COPY_CODE_GUIDANCE_CONTENT = De),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_MANUAL_CODE_GUIDANCE_CONTENT = xe),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_AD_COPY_COMFIRM_CODE_GUIDANCE_LINK = $e),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_AD_COPY_ADD_CODE_DETAILS_GUIDANCE_LINK =
        Pe),
      (l.PROMO_OFFER_MANAGEMENT_INVALID_PERCENTAGE_WARNING_MESSAGE = Ne),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_AMOUNT_INPUT_PLACEHOLDER_MESSAGE = Me),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_CONDITION_VALUE_PLACEHOLDER_MESSAGE = we),
      (l.PROMO_OFFER_MANAGEMENT_OFFER_PERCENTAGE_INPUT_PLACEHOLDER_MESSAGE =
        Ae),
      (l.PROMO_OFFER_MANAGEMENT_NEGATIVE_VALUE_WARNING_MESSAGE = Fe),
      (l.PROMO_OFFER_MANAGEMENT_MIN_SPEND_BELOW_DISCOUNT_WARNING = Oe),
      (l.PROMO_OFFER_MANAGEMENT_INVALID_CODE_WARNING_MESSAGE = Be),
      (l.PROMO_OFFER_MANAGEMENT_DELETED_CODE_WARNING_MESSAGE = We),
      (l.PROMO_OFFER_MANAGEMENT_V3_UNAVAILABLE_CODE_WARNING_MESSAGE = qe),
      (l.PROMO_OFFER_MANAGEMENT_DETECTED_OFFER_DISABLED_WARNING = Ue),
      (l.PROMO_OFFER_MANAGEMENT_DETECTED_OFFER_DISABLED_GUIDANCE_TITLE = Ve),
      (l.PROMO_OFFER_MANAGEMENT_DETECTED_OFFER_DISABLED_GUIDANCE_CONTENT = He),
      (l.PROMO_OFFER_MANAGEMENT_DETECTED_OFFER_DISABLED_REVIEW_OFFER_LINK = Ge),
      (l.PROMO_OFFER_MANAGEMENT_DETECTED_OFFER_DISABLED_MODAL_TITLE = ze),
      (l.PROMO_OFFER_MANAGEMENT_DETECTED_OFFER_DISABLED_MODAL_DESCRIPTION = je),
      (l.PROMO_OFFER_MANAGEMENT_DETECTED_OFFER_DISABLED_MODAL_SAVE_LABEL = Ke),
      (l.getPartnerPlatformNameFbt = Qe));
  },
  226,
);
