__d(
  "InstagramAuthenticationErrorMessagesUtils",
  ["fbt", "GeoLink.react", "isFalsey", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {};
    ((c.cannot_obtain_oauth_access_token = s._(
      /*BTDS*/ "Sorry, something went wrong when trying to authenticate with Instagram.",
    )),
      (c.claim_instagram_account_failure = s._(
        /*BTDS*/ "Failed to add the Instagram account. Please verify your information and try again.",
      )),
      (c.instagram_account_is_linked = s._(
        /*BTDS*/ "This Instagram account is already connected to a Facebook Page.",
      )),
      (c.invalid_access_token = c.cannot_obtain_oauth_access_token),
      (c.incorrect_username_or_password = s._(
        /*BTDS*/ "The provided username or password is wrong. Please verify your information and try again.",
      )),
      (c.invalid_phone_number = s._(
        /*BTDS*/ "The provided phone number is invalid. Please verify your information and try again.",
      )),
      (c.user_is_not_business_admin = s._(
        /*BTDS*/ "You are not an admin of this business.",
      )),
      (c.user_is_not_page_admin = s._(
        /*BTDS*/ "You are not an admin of this Facebook Page.",
      )),
      (c.page_create_instagram_account_failure = s._(
        /*BTDS*/ "Failed to create the Instagram account. Please verify your information and try again.",
      )),
      (c.page_link_instagram_account_failure = s._(
        /*BTDS*/ "Failed to link the Instagram account. Please verify your information and try again.",
      )),
      (c.page_is_linked = s._(
        /*BTDS*/ "This Facebook Page is already connected to an Instagram account.",
      )),
      (c.page_unlink_instagram_account_failure = s._(
        /*BTDS*/ "Failed to unlink the Instagram account. Please verify your information and try again.",
      )),
      (c.remove_existing_ownership_failure = s._(
        /*BTDS*/ "Failed to remove the existing ownership for the Instagram account. Please verify your information and try again.",
      )),
      (c.two_factor_is_not_supported = s._(
        /*BTDS*/ "We do not support connecting Instagram account with two factor authentication enabled.",
      )),
      (c.account_is_checkpointed = s._(
        /*BTDS*/ "The Instagram account is currently blocked, please go to the Instagram app or website to resolve the issue.",
      )),
      (c.account_is_in_current_business = s._(
        /*BTDS*/ "This Instagram account has already been added to this business.",
      )),
      (c.profesional_instagram_account_needed_for_pageless_ctd = s._(
        /*BTDS*/ "You need a professional account to use this feature. Please convert your account and try again.",
      )),
      (c.account_is_in_current_business_but_user_not_permitted_user = s._(
        /*BTDS*/ "This Instagram account has already been added to this business, but you do not have permission to access it. Please ask the administrator for access. {learnMore}",
        [
          s._param(
            "learnMore",
            u.jsx(r("GeoLink.react"), {
              href: "https://www.facebook.com/business/help/1125825714110549",
              target: "_blank",
              children: "Learn More",
            }),
          ),
        ],
      )),
      (c.instagram_account_is_already_linked_with_commerce_account = s._(
        /*BTDS*/ "Instagram Account is associated with a Commerce Account and cannot be moved. Please disable the Commerce Account first before trying again.",
      )),
      (c.business_is_high_value_compromised = s._(
        /*BTDS*/ "This business account is not able to claim Instagram accounts at this time. Please contact support for assistance.",
      )));
    function d(e) {
      return r("isFalsey")(e) || !c[e]
        ? s._(/*BTDS*/ "Sorry, an unknown error occurred. Please try again.")
        : c[e];
    }
    l.getMessage = d;
  },
  226,
);
