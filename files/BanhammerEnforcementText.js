__d(
  "BanhammerEnforcementText",
  [
    "fbt",
    "BusinessAssetTypesLowercasePlural$FbtEnum",
    "BusinessAssetTypesUppercase$FbtEnum",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function () {
        return s._(/*BTDS*/ "Access Restricted");
      },
      u = function () {
        return s._(/*BTDS*/ "You're Not Allowed to Advertise");
      },
      c = function () {
        return s._(/*BTDS*/ "You're Restricted From Advertising");
      },
      d = function () {
        return s._(
          /*BTDS*/ "You can't use this business portfolio to advertise",
        );
      },
      m = function () {
        return s._(/*BTDS*/ "Business portfolio Not Allowed to Advertise");
      },
      p = function () {
        return s._(/*BTDS*/ "Page Not Allowed to Advertise");
      },
      _ = function () {
        return s._(/*BTDS*/ "We restricted your ad account");
      },
      f = function () {
        return s._(/*BTDS*/ "Your Ad Account Will Be Closed Soon");
      },
      g = function () {
        return s._(/*BTDS*/ "Page Access Restricted");
      },
      h = function (t) {
        return s._(
          /*BTDS*/ '_j{"ad-account":"Ad Account Access Restricted","ad-study":"Lift Study Access Restricted","app":"App Access Restricted","block-list":"Publisher Block List Access Restricted","white-list":"Publisher Allow List Access Restricted","brand":"Business Access Restricted","business-payout-account":"Payout Account Access Restricted","business-unit":"Line of Business Access Restricted","custom-conversion":"Custom Conversion Access Restricted","event-source-group":"Event Source Group Access Restricted","example-cat":"Cat (do not translate) Access Restricted","owned-domain":"Domain Access Restricted","news-page":"News Page Access Restricted","instagram-account-v2":"Instagram Account Access Restricted","leads-access":"Leads Access Access Restricted","monetization-property":"Property Access Restricted","offline-event-set":"Offline Event Set Access Restricted","events-dataset":"Dataset Access Restricted","business-locations-wrapper":"Page Structure Access Restricted","page":"Page Access Restricted","profile-plus":"Profile Access Restricted","payout-method":"Payment Account Access Restricted","pixel":"Pixel Access Restricted","product-catalog":"Catalog Access Restricted","registered-trademark":"Registered Trademark Access Restricted","shared-audience":"Shared Audience Access Restricted","sliced-event-source-group":"Sliced Event Source Group Access Restricted","threads-account":"Threads Account Access Restricted","user":"Person Access Restricted","whatsapp-account":"WhatsApp Account Access Restricted","whatsapp-business-account":"WhatsApp Account Access Restricted","whatsapp-business-presence":"WhatsApp Business Presence Access Restricted","business-resource-group":"Business Asset Group Access Restricted","business-creative-folder":"Business Creative Folder Access Restricted","dynamic-content-set":"Content Allow List Access Restricted","ads-event-source":"Ads Event Source Access Restricted","seller-profile":"Commerce Account Access Restricted","legal-entity":"Legal Entity Access Restricted","advanced-analytics-instance":"Instance Access Restricted","events-dataset-new":"Dataset Access Restricted","events-dataset-and-pixel":"Dataset and Pixel Access Restricted","offsite-email-account":"Email Account Access Restricted","creator-marketplace-brand-profile":"Creator Marketplace Account Access Restricted","mv4b-billable-account":"Meta Verified Account Access Restricted","marketplace-partner-billable-account":"Marketplace Partner Account Access Restricted","biz-ai-billable-account":"Business AI Account Access Restricted","meta-business-agent-billable-account":"Meta Business Agent Account Access Restricted","meta-one-billable-account":"Meta One Account Access Restricted"}',
          [s._enum(t, r("BusinessAssetTypesUppercase$FbtEnum"))],
        );
      },
      y = function () {
        return s._(
          /*BTDS*/ "You can't add people to this ad account because you're restricted from advertising.",
        );
      },
      C = function () {
        return s._(
          /*BTDS*/ "You can't remove people from this ad account because you're restricted from advertising.",
        );
      },
      b = function () {
        return s._(
          /*BTDS*/ "You can't add people to this business because you're restricted from advertising.",
        );
      },
      v = function () {
        return s._(
          /*BTDS*/ "You can't remove people from this business because you're restricted from advertising.",
        );
      },
      S = function () {
        return s._(
          /*BTDS*/ "You can't edit people's business role or details because you're restricted from advertising.",
        );
      },
      R = function (t) {
        return s._(
          /*BTDS*/ '_j{"ad-account":"You can\'t manage ad accounts because you\'re restricted from advertising.","ad-study":"You can\'t manage lift studies because you\'re restricted from advertising.","app":"You can\'t manage apps because you\'re restricted from advertising.","block-list":"You can\'t manage publisher block lists because you\'re restricted from advertising.","brand":"You can\'t manage businesses because you\'re restricted from advertising.","business-payout-account":"You can\'t manage Payout accounts because you\'re restricted from advertising.","business-unit":"You can\'t manage lines of business because you\'re restricted from advertising.","custom-conversion":"You can\'t manage custom conversions because you\'re restricted from advertising.","event-source-group":"You can\'t manage event source groups because you\'re restricted from advertising.","example-cat":"You can\'t manage cats (do not translate) because you\'re restricted from advertising.","owned-domain":"You can\'t manage domains because you\'re restricted from advertising.","news-page":"You can\'t manage news Pages because you\'re restricted from advertising.","instagram-account-v2":"You can\'t manage Instagram accounts because you\'re restricted from advertising.","leads-access":"You can\'t manage leads access because you\'re restricted from advertising.","legal-entity":"You can\'t manage legal entities because you\'re restricted from advertising.","monetization-property":"You can\'t manage properties because you\'re restricted from advertising.","offline-event-set":"You can\'t manage offline event sets because you\'re restricted from advertising.","events-dataset":"You can\'t manage datasets because you\'re restricted from advertising.","business-locations-wrapper":"You can\'t manage Page Structures because you\'re restricted from advertising.","page":"You can\'t manage Pages because you\'re restricted from advertising.","profile-plus":"You can\'t manage profiles because you\'re restricted from advertising.","payout-method":"You can\'t manage payment accounts because you\'re restricted from advertising.","pixel":"You can\'t manage pixels because you\'re restricted from advertising.","product-catalog":"You can\'t manage catalogs because you\'re restricted from advertising.","registered-trademark":"You can\'t manage registered trademarks because you\'re restricted from advertising.","shared-audience":"You can\'t manage shared audiences because you\'re restricted from advertising.","sliced-event-source-group":"You can\'t manage sliced event source groups because you\'re restricted from advertising.","threads-account":"You can\'t manage Threads accounts because you\'re restricted from advertising.","user":"You can\'t manage users because you\'re restricted from advertising.","whatsapp-account":"You can\'t manage WhatsApp accounts because you\'re restricted from advertising.","whatsapp-business-account":"You can\'t manage WhatsApp accounts because you\'re restricted from advertising.","whatsapp-business-presence":"You can\'t manage WhatsApp accounts because you\'re restricted from advertising.","business-resource-group":"You can\'t manage business asset groups because you\'re restricted from advertising.","business-creative-folder":"You can\'t manage business creative folders because you\'re restricted from advertising.","ads-event-source":"You can\'t manage ads event sources because you\'re restricted from advertising.","seller-profile":"You can\'t manage commerce accounts because you\'re restricted from advertising.","advanced-analytics-instance":"You can\'t manage instances because you\'re restricted from advertising.","events-dataset-and-pixel":"You can\'t manage datasets and pixels because you\'re restricted from advertising.","events-dataset-new":"You can\'t manage datasets because you\'re restricted from advertising.","offsite-email-account":"You can\'t manage email accounts because you\'re restricted from advertising.","creator-marketplace-brand-profile":"You can\'t manage creator marketplace accounts because you\'re restricted from advertising.","mv4b-billable-account":"You can\'t manage meta verified accounts because you\'re restricted from advertising.","marketplace-partner-billable-account":"You can\'t manage marketplace partner accounts because you\'re restricted from advertising.","biz-ai-billable-account":"You can\'t manage business AI accounts because you\'re restricted from advertising.","meta-business-agent-billable-account":"You can\'t manage meta business agent accounts because you\'re restricted from advertising.","meta-one-billable-account":"You can\'t manage meta one accounts because you\'re restricted from advertising."}',
          [s._enum(t, r("BusinessAssetTypesLowercasePlural$FbtEnum"))],
        );
      },
      L = function () {
        return s._(
          /*BTDS*/ "You can't add business admins when you're restricted from advertising.",
        );
      },
      E = function () {
        return s._(
          /*BTDS*/ "You can't create ads because you're restricted from advertising.",
        );
      },
      k = function () {
        return s._(/*BTDS*/ "You can't run ads or manage ad accounts.");
      },
      I = function () {
        return s._(
          /*BTDS*/ "You can't run ads or manage ad accounts and other advertising assets.",
        );
      },
      T = function () {
        return s._(
          /*BTDS*/ "You can't create ads or promote your Page because you're restricted from advertising.",
        );
      },
      D = function () {
        return s._(
          /*BTDS*/ "You can't boost posts because you're restricted from advertising.",
        );
      },
      x = function () {
        return s._(
          /*BTDS*/ "You can't boost events because you're restricted from advertising.",
        );
      },
      $ = function (t) {
        return s._(
          /*BTDS*/ "The business {Business name} is restricted from advertising. This includes running ads with ad accounts that were shared with it.",
          [s._param("Business name", t)],
        );
      },
      P = function (t) {
        return s._(
          /*BTDS*/ "You can't use the business {Business name} to create ads.",
          [s._param("Business name", t)],
        );
      },
      N = function () {
        return s._(
          /*BTDS*/ "You can't remove Pages from a business portfolio that's restricted from advertising.",
        );
      },
      M = function () {
        return s._(
          /*BTDS*/ "You can't add Pages from a business portfolio that's restricted from advertising.",
        );
      },
      w = function () {
        return s._(
          /*BTDS*/ "You can't share Pages from a business portfolio that's restricted from advertising.",
        );
      },
      A = function (t) {
        return s._(
          /*BTDS*/ '_j{"ad-account":"You can\'t share ad accounts from a business portfolio that\'s restricted from advertising.","ad-study":"You can\'t share lift studies from a business portfolio that\'s restricted from advertising.","app":"You can\'t share apps from a business portfolio that\'s restricted from advertising.","block-list":"You can\'t share publisher block lists from a business portfolio that\'s restricted from advertising.","brand":"You can\'t share businesses from a business portfolio that\'s restricted from advertising.","business-payout-account":"You can\'t share Payout accounts from a business portfolio that\'s restricted from advertising.","business-unit":"You can\'t share lines of business from a business portfolio that\'s restricted from advertising.","custom-conversion":"You can\'t share custom conversions from a business portfolio that\'s restricted from advertising.","event-source-group":"You can\'t share event source groups from a business portfolio that\'s restricted from advertising.","example-cat":"You can\'t share cats (do not translate) from a business portfolio that\'s restricted from advertising.","owned-domain":"You can\'t share domains from a business portfolio that\'s restricted from advertising.","news-page":"You can\'t share news Pages from a business portfolio that\'s restricted from advertising.","instagram-account-v2":"You can\'t share Instagram accounts from a business portfolio that\'s restricted from advertising.","leads-access":"You can\'t share leads access from a business portfolio that\'s restricted from advertising.","legal-entity":"You can\'t share legal entities from a business portfolio that\'s restricted from advertising.","monetization-property":"You can\'t share properties from a business portfolio that\'s restricted from advertising.","offline-event-set":"You can\'t share offline event sets from a business portfolio that\'s restricted from advertising.","events-dataset":"You can\'t share datasets from a business portfolio that\'s restricted from advertising.","business-locations-wrapper":"You can\'t share Page Structures from a business portfolio that\'s restricted from advertising.","page":"You can\'t share Pages from a business portfolio that\'s restricted from advertising.","profile-plus":"You can\'t share profiles from a business portfolio that\'s restricted from advertising.","payout-method":"You can\'t share payment accounts from a business portfolio that\'s restricted from advertising.","pixel":"You can\'t share pixels from a business portfolio that\'s restricted from advertising.","product-catalog":"You can\'t share catalogs from a business portfolio that\'s restricted from advertising.","registered-trademark":"You can\'t share registered trademarks from a business portfolio that\'s restricted from advertising.","shared-audience":"You can\'t share shared audiences from a business portfolio that\'s restricted from advertising.","sliced-event-source-group":"You can\'t share sliced event source groups from a business portfolio that\'s restricted from advertising.","threads-account":"You can\'t share Threads accounts from a business portfolio that\'s restricted from advertising.","user":"You can\'t share users from a business portfolio that\'s restricted from advertising.","whatsapp-account":"You can\'t share WhatsApp accounts from a business portfolio that\'s restricted from advertising.","whatsapp-business-account":"You can\'t share WhatsApp accounts from a business portfolio that\'s restricted from advertising.","whatsapp-business-presence":"You can\'t share WhatsApp accounts from a business portfolio that\'s restricted from advertising.","business-resource-group":"You can\'t share business asset groups from a business portfolio that\'s restricted from advertising.","business-creative-folder":"You can\'t share business creative folders from a business portfolio that\'s restricted from advertising.","ads-event-source":"You can\'t share ads event sources from a business portfolio that\'s restricted from advertising.","seller-profile":"You can\'t share commerce accounts from a business portfolio that\'s restricted from advertising.","advanced-analytics-instance":"You can\'t share instances from a business portfolio that\'s restricted from advertising.","events-dataset-and-pixel":"You can\'t share datasets and pixels from a business portfolio that\'s restricted from advertising.","events-dataset-new":"You can\'t share datasets from a business portfolio that\'s restricted from advertising.","offsite-email-account":"You can\'t share email accounts from a business portfolio that\'s restricted from advertising.","creator-marketplace-brand-profile":"You can\'t share creator marketplace accounts from a business portfolio that\'s restricted from advertising.","mv4b-billable-account":"You can\'t share meta verified accounts from a business portfolio that\'s restricted from advertising.","marketplace-partner-billable-account":"You can\'t share marketplace partner accounts from a business portfolio that\'s restricted from advertising.","biz-ai-billable-account":"You can\'t share business AI accounts from a business portfolio that\'s restricted from advertising.","meta-business-agent-billable-account":"You can\'t share meta business agent accounts from a business portfolio that\'s restricted from advertising.","meta-one-billable-account":"You can\'t share meta one accounts from a business portfolio that\'s restricted from advertising."}',
          [s._enum(t, r("BusinessAssetTypesLowercasePlural$FbtEnum"))],
        );
      },
      F = function (t) {
        return s._(
          /*BTDS*/ '_j{"ad-account":"You can\'t request access to ad accounts when your business is restricted from advertising.","ad-study":"You can\'t request access to lift studies when your business is restricted from advertising.","app":"You can\'t request access to apps when your business is restricted from advertising.","block-list":"You can\'t request access to publisher block lists when your business is restricted from advertising.","brand":"You can\'t request access to businesses when your business is restricted from advertising.","business-payout-account":"You can\'t request access to Payout accounts when your business is restricted from advertising.","business-unit":"You can\'t request access to lines of business when your business is restricted from advertising.","custom-conversion":"You can\'t request access to custom conversions when your business is restricted from advertising.","event-source-group":"You can\'t request access to event source groups when your business is restricted from advertising.","example-cat":"You can\'t request access to cats (do not translate) when your business is restricted from advertising.","owned-domain":"You can\'t request access to domains when your business is restricted from advertising.","news-page":"You can\'t request access to news Pages when your business is restricted from advertising.","instagram-account-v2":"You can\'t request access to Instagram accounts when your business is restricted from advertising.","leads-access":"You can\'t request access to leads access when your business is restricted from advertising.","legal-entity":"You can\'t request access to legal entities when your business is restricted from advertising.","monetization-property":"You can\'t request access to properties when your business is restricted from advertising.","offline-event-set":"You can\'t request access to offline event sets when your business is restricted from advertising.","events-dataset":"You can\'t request access to datasets when your business is restricted from advertising.","business-locations-wrapper":"You can\'t request access to Page Structures when your business is restricted from advertising.","page":"You can\'t request access to Pages when your business is restricted from advertising.","profile-plus":"You can\'t request access to profiles when your business is restricted from advertising.","payout-method":"You can\'t request access to payment accounts when your business is restricted from advertising.","pixel":"You can\'t request access to pixels when your business is restricted from advertising.","product-catalog":"You can\'t request access to catalogs when your business is restricted from advertising.","registered-trademark":"You can\'t request access to registered trademarks when your business is restricted from advertising.","shared-audience":"You can\'t request access to shared audiences when your business is restricted from advertising.","sliced-event-source-group":"You can\'t request access to sliced event source groups when your business is restricted from advertising.","threads-account":"You can\'t request access to Threads accounts when your business is restricted from advertising.","user":"You can\'t request access to users when your business is restricted from advertising.","whatsapp-account":"You can\'t request access to WhatsApp accounts when your business is restricted from advertising.","whatsapp-business-account":"You can\'t request access to WhatsApp accounts when your business is restricted from advertising.","whatsapp-business-presence":"You can\'t request access to WhatsApp accounts when your business is restricted from advertising.","business-resource-group":"You can\'t request access to business asset groups when your business is restricted from advertising.","business-creative-folder":"You can\'t request access to business creative folders when your business is restricted from advertising.","ads-event-source":"You can\'t request access to ads event sources when your business is restricted from advertising.","seller-profile":"You can\'t request access to commerce accounts when your business is restricted from advertising.","advanced-analytics-instance":"You can\'t request access to instances when your business is restricted from advertising.","events-dataset-and-pixel":"You can\'t request access to datasets and pixels when your business is restricted from advertising.","events-dataset-new":"You can\'t request access to datasets when your business is restricted from advertising.","offsite-email-account":"You can\'t request access to email accounts when your business is restricted from advertising.","creator-marketplace-brand-profile":"You can\'t request access to creator marketplace accounts when your business is restricted from advertising.","mv4b-billable-account":"You can\'t request access to meta verified accounts when your business is restricted from advertising.","marketplace-partner-billable-account":"You can\'t request access to marketplace partner accounts when your business is restricted from advertising.","biz-ai-billable-account":"You can\'t request access to business AI accounts when your business is restricted from advertising.","meta-business-agent-billable-account":"You can\'t request access to meta business agent accounts when your business is restricted from advertising.","meta-one-billable-account":"You can\'t request access to meta one accounts when your business is restricted from advertising."}',
          [s._enum(t, r("BusinessAssetTypesLowercasePlural$FbtEnum"))],
        );
      },
      O = function () {
        return s._(
          /*BTDS*/ "You can't create ads or promote your Page because it's restricted from advertising.",
        );
      },
      B = function () {
        return s._(
          /*BTDS*/ "We restricted your ad account because it looks like some of your activity doesn't follow our rules. This means you can't run ads. You can request a review if you think we made a mistake.",
        );
      },
      W = function () {
        return s._(/*BTDS*/ "You can't use this account to create ads.");
      },
      q = function () {
        return s._(/*BTDS*/ "See Details");
      },
      U = function () {
        return s._(
          /*BTDS*/ "We've restricted your ad account because it looks like some of your activity doesn't follow our rules. This means you can't run ads. You can request a review if you think we made a mistake.",
        );
      },
      V = function () {
        return s._(
          /*BTDS*/ "To start running ads, approve a temporary hold of funds on your debit or credit card.",
        );
      },
      H = function () {
        return s._(
          /*BTDS*/ "We noticed some unusual activity, so we've restricted your ad account for security purposes. To run ads again, verify at least one payment method or add a new one.",
        );
      },
      G = function () {
        return s._(
          /*BTDS*/ "We weren't able to place a temporary hold on your card. Try again or update your default payment method. If you try again, make sure your card has sufficient funds first.",
        );
      },
      z = function () {
        return s._(/*BTDS*/ "Verify payment method");
      },
      j = function () {
        return s._(/*BTDS*/ "Try hold again");
      },
      K = function () {
        return s._(/*BTDS*/ "Approve hold");
      },
      Q = function () {
        return s._(/*BTDS*/ "Request Review");
      },
      X = function () {
        return s._(/*BTDS*/ "Get Started");
      },
      Y = function () {
        return s._(
          /*BTDS*/ "We restricted your ad account for security purposes",
        );
      },
      J = function () {
        return s._(/*BTDS*/ "Fix issue");
      },
      Z = function () {
        return [
          s._(/*BTDS*/ "Find an admin in Business Settings to contact"),
          s._(
            /*BTDS*/ "To reinstate your advertising access, ask an admin of this ad account to confirm their identity with Facebook. This helps prevent fraud and impersonation on our platform.",
          ),
          s._(
            /*BTDS*/ "Find out who is an admin of this ad account by going to Business Settings.",
          ),
        ];
      },
      ee = function () {
        return s._(/*BTDS*/ "Confirm Identity");
      },
      te = function () {
        return s._(/*BTDS*/ "Go to Business Settings");
      },
      ne = function () {
        return s._(
          /*BTDS*/ "Advertising Access Restricted For Security Purposes",
        );
      },
      re = Object.freeze({
        ACCESS_RESTRICTED_TITLE: e,
        ADVERTISING_RESTRICTED_TITLE: u,
        ADVERTISING_RESTRICTED_ALT_TITLE: c,
        ADVERTISING_RESTRICTED_BUSINESS_TITLE: d,
        ADVERTISING_RESTRICTED_SHARED_BUSINESS_TITLE: m,
        ADVERTISING_RESTRICTED_PAGE_TITLE: p,
        AD_ACCOUNT_DISABLED_TITLE: _,
        AD_ACCOUNT_PENDING_CLOSURE_TITLE: f,
        PAGES_ACCESS_RESTRICTED_TITLE: g,
        ASSET_ACCESS_RESTRICTED_TITLE: h,
        USER_BANHAMMER_AD_ACCOUNT_ADD_PEOPLE_TEXT: y,
        USER_BANHAMMER_AD_ACCOUNT_REMOVE_PEOPLE_TEXT: C,
        USER_BANHAMMER_ADD_PEOPLE_TEXT: b,
        USER_BANHAMMER_REMOVE_PEOPLE_TEXT: v,
        USER_BANHAMMER_EDIT_PEOPLE_TEXT: S,
        USER_BANHAMMER_MANAGE_ASSET_TEXT: R,
        USER_BANHAMMER_ADD_ADMINS_TEXT: L,
        USER_BANHAMMER_CREATE_ADS_TEXT: E,
        USER_BANHAMMER_MANAGE_AD_ACCOUNTS_TEXT: k,
        USER_BANHAMMER_MANAGE_BUSINESS_TEXT: I,
        USER_BANHAMMER_PROMOTE_PAGE_TEXT: T,
        USER_BANHAMMER_BOOST_EVENT_TEXT: x,
        USER_BANHAMMER_BOOST_POST_TEXT: D,
        BUSINESS_BANHAMMER_SHARED_TEXT: $,
        BUSINESS_BANHAMMER_SHARED_CREATE_ADS_TEXT: P,
        BUSINESS_BANHAMMER_REMOVE_PAGES_TEXT: N,
        BUSINESS_BANHAMMER_ADD_PAGES_TEXT: M,
        BUSINESS_BANHAMMER_SHARE_PAGES_TEXT: w,
        BUSINESS_BANHAMMER_SHARE_ASSET_TEXT: A,
        BUSINESS_BANHAMMER_REQUEST_ASSET_TEXT: F,
        PAGE_BANHAMMER_PROMOTE_TEXT: O,
        AD_ACCOUNT_DISABLED_TEXT: B,
        AD_ACCOUNT_DISABLED_CREATE_ADS_TEXT: W,
        SEE_DETAILS_LINK_TEXT: q,
        RISK_AD_ACCOUNT_DISABLED_TEXT: U,
        RISK_PREAUTH_AD_ACCOUNT_DISABLED_TEXT: V,
        RISK_REAUTH_AD_ACCOUNT_RESTRICTED: G,
        RISK_SDC_AD_ACCOUNT_RESTRICTED_TEXT: H,
        VERIFY_PAYMENT_METHOD_CTA_TEXT: z,
        REQUEST_REVIEW_CTA_TEXT: Q,
        SEND_REAUTH_CTA_TEXT: j,
        APPROVE_PREAUTH_CTA_TEXT: K,
        GET_STARTED_CTA_TEXT: X,
        PREHARM_AD_ACCOUNT_DISABLED_TITLE: Y,
        PREHARM_AD_ACCOUNT_DISABLED_TEXT_EMPLOYEE: Z,
        CONFIRM_IDENTITY_BUTTON: ee,
        BUSINESS_SETTINGS_BUTTON: te,
        PREHARM_USER_TITLE: ne,
        FIX_ISSUE_TEXT: J,
      });
    l.default = re;
  },
  226,
);
