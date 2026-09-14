__d(
  "getMessageMarketingIntegrityValidationResults",
  [
    "$InternalEnum",
    "AdsError",
    "MessageMarketingDefaultSubscriberPoolMissingValidator",
    "MessageMarketingPhoneNumberMessagingLimitReachedValidator",
    "MessageMarketingPhoneNumberRealNumberDisplayNameUnapprovedValidator",
    "MessageMarketingPhoneNumberUnverifiedValidator",
    "MessageMarketingPhoneNumberVirtualNumberDisplayNameUnapprovedValidator",
    "MessageMarketingSubscriberPoolAutomationRecommendationValidator",
    "MessageMarketingSubscriberPoolSizeBelowThresholdValidator",
    "MessageMarketingSubscriberPoolSizeNotIdealValidator",
    "MessageMarketingTemplateDisabledValidator",
    "MessageMarketingTemplateMediumQualityValidator",
    "MessageMarketingTemplatePausedValidator",
    "MessageMarketingTemplateRejectedValidator",
    "MessageMarketingUnavailableWABAValidator",
    "MessageMarketingWABAPolicyWarningL1Validator",
    "MessageMarketingWABARestrictedL1Validator",
    "MessengerMarketingPageMessagingDisabledValidator",
    "MessengerMarketingPageNotConnectedValidator",
    "MessengerMarketingSubscriberPoolMissingValidator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "TEMPLATE_DISABLED",
        "TEMPLATE_MEDIUM_QUALITY",
        "TEMPLATE_PAUSED",
        "TEMPLATE_REJECTED",
        "PROMOTED_WA_PHONE_NUMBER_VIRTUAL_NUMBER_DISPLAY_NAME_UNAPPROVED",
        "PROMOTED_WA_PHONE_NUMBER_REAL_NUMBER_DISPLAY_NAME_UNAPPROVED",
        "PROMOTED_WA_PHONE_NUMBER_STATUS_UNVERIFIED",
        "PROMOTED_WA_PHONE_NUMBER_UNAVAILABLE",
        "PROMOTED_WA_MESSAGING_LIMIT_REACHED",
        "PROMOTED_WABA_MISSING_SUBSCRIBERS_IN_SUBSCRIBER_POOL",
        "PROMOTED_WABA_RESTRICTED_L1",
        "PROMOTED_WABA_NOT_SET",
        "PROMOTED_WABA_POLICY_WARNING_L1",
        "PROMOTED_WABA_MISSING_FROM_USER",
        "SUBSCRIBER_POOL_SIZE_BELOW_THRESHOLD",
        "DEFAULT_SUBSCRIBER_POOL_MISSING",
        "SUBSCRIBER_POOL_AUTOMATION_RECCOMENDATION",
        "SUBSCRIBER_POOL_SIZE_NOT_IDEAL",
        "MESSENGER_PAGE_NOT_CONNECTED",
        "MESSENGER_PAGE_MESSAGING_DISABLED",
        "MESSENGER_SUBSCRIBER_POOL_MISSING_OR_EMPTY",
      ]),
      s = [
        e.PROMOTED_WA_PHONE_NUMBER_UNAVAILABLE,
        e.MESSENGER_PAGE_NOT_CONNECTED,
        e.PROMOTED_WABA_RESTRICTED_L1,
        e.PROMOTED_WA_PHONE_NUMBER_STATUS_UNVERIFIED,
        e.MESSENGER_PAGE_MESSAGING_DISABLED,
        e.PROMOTED_WA_PHONE_NUMBER_VIRTUAL_NUMBER_DISPLAY_NAME_UNAPPROVED,
        e.TEMPLATE_REJECTED,
        e.TEMPLATE_DISABLED,
        e.TEMPLATE_PAUSED,
        e.TEMPLATE_MEDIUM_QUALITY,
        e.PROMOTED_WABA_POLICY_WARNING_L1,
        e.PROMOTED_WA_MESSAGING_LIMIT_REACHED,
        e.PROMOTED_WA_PHONE_NUMBER_REAL_NUMBER_DISPLAY_NAME_UNAPPROVED,
        e.DEFAULT_SUBSCRIBER_POOL_MISSING,
        e.PROMOTED_WABA_MISSING_SUBSCRIBERS_IN_SUBSCRIBER_POOL,
        e.MESSENGER_SUBSCRIBER_POOL_MISSING_OR_EMPTY,
        e.SUBSCRIBER_POOL_SIZE_BELOW_THRESHOLD,
        e.SUBSCRIBER_POOL_SIZE_NOT_IDEAL,
        e.SUBSCRIBER_POOL_AUTOMATION_RECCOMENDATION,
        e.PROMOTED_WABA_MISSING_FROM_USER,
      ];
    function u(e) {
      var t = e.adgroupIntegrityData,
        n = e.adgroupWABAIntegrityData,
        o = e.advertiserProfileSubscriberPoolIntegrityData,
        a = e.callsite,
        i = e.campaignIntegrityData,
        l = e.messengerPageIntegrityData,
        u = [
          r("MessageMarketingTemplateDisabledValidator"),
          r("MessageMarketingTemplateMediumQualityValidator"),
          r("MessageMarketingTemplatePausedValidator"),
          r("MessageMarketingTemplateRejectedValidator"),
        ],
        c = [];
      t &&
        (c = u
          .map(function (e) {
            return e.validate(t, a);
          })
          .filter(Boolean)
          .map(function (e) {
            return babelHelpers.extends({}, e, { channel: "WHATSAPP" });
          }));
      var d = [
          r("MessageMarketingWABARestrictedL1Validator"),
          r("MessageMarketingWABAPolicyWarningL1Validator"),
          r(
            "MessageMarketingPhoneNumberVirtualNumberDisplayNameUnapprovedValidator",
          ),
          r(
            "MessageMarketingPhoneNumberRealNumberDisplayNameUnapprovedValidator",
          ),
          r("MessageMarketingUnavailableWABAValidator"),
          r("MessageMarketingPhoneNumberMessagingLimitReachedValidator"),
          r("MessageMarketingPhoneNumberUnverifiedValidator"),
        ],
        m = [];
      n &&
        (m = d
          .map(function (e) {
            return e.validate(n, a);
          })
          .filter(Boolean)
          .map(function (e) {
            return babelHelpers.extends({}, e, { channel: "WHATSAPP" });
          }));
      var p = [
          r("MessageMarketingDefaultSubscriberPoolMissingValidator"),
          r("MessageMarketingSubscriberPoolSizeBelowThresholdValidator"),
          r("MessageMarketingSubscriberPoolAutomationRecommendationValidator"),
        ],
        _ = [];
      i &&
        (_ = p
          .map(function (e) {
            return e.validate(i, a);
          })
          .filter(Boolean)
          .map(function (e) {
            return babelHelpers.extends({}, e, { channel: "WHATSAPP" });
          }));
      var f = [
          r("MessageMarketingSubscriberPoolSizeBelowThresholdValidator"),
          r("MessageMarketingSubscriberPoolSizeNotIdealValidator"),
        ],
        g = [];
      o &&
        (g = f
          .map(function (e) {
            return e.validate(o, a);
          })
          .filter(Boolean)
          .map(function (e) {
            return babelHelpers.extends({}, e, { channel: "WHATSAPP" });
          }));
      var h = [].concat(c, m, _, g);
      if (l != null) {
        var y = [
          r("MessengerMarketingPageNotConnectedValidator"),
          r("MessengerMarketingPageMessagingDisabledValidator"),
          r("MessengerMarketingSubscriberPoolMissingValidator"),
        ]
          .map(function (e) {
            return e.validate(l, a);
          })
          .filter(Boolean)
          .map(function (e) {
            return babelHelpers.extends({}, e, { channel: "MESSENGER" });
          });
        h.push.apply(h, y);
      }
      var C = new Map(
          h.map(function (e) {
            return [e.errorEnum, e];
          }),
        ),
        b = [];
      for (var v of s) {
        var S = C.get(v);
        S && b.push(S);
      }
      return b;
    }
    function c(e) {
      var t = u(e);
      return t.length > 0 ? t[0] : null;
    }
    function d(e) {
      var t,
        n = c(e);
      return (
        (n == null || (t = n.error) == null ? void 0 : t.level) ===
        r("AdsError").Level.WARN
      );
    }
    ((l.MessageMarketingIntegrityErrorEnum = e),
      (l.getMessageMarketingIntegrityHighestPriorityValidationResult = c),
      (l.hasMessageMarketingIntegrityWarnError = d));
  },
  98,
);
