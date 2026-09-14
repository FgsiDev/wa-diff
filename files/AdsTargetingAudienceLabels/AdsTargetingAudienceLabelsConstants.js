__d(
  "AdsTargetingAudienceLabelsConstants",
  [
    "fbt",
    "ix",
    "AdsCustomAudienceLabelAPI",
    "AdsLearnMore.react",
    "AdsTargetingAudienceLabelsHelpCentreConstants",
    "AdsTargetingAudienceLabelsTaxonomy",
    "AudienceLabelsGKUtils",
    "fbicon",
    "meta-brand-shopping-bag-filled-16",
    "meta-brand-speech-bubble-stacked-filled-16",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = s._(/*BTDS*/ "Audience label"),
      m = s._(/*BTDS*/ "Remove label"),
      p = s._(/*BTDS*/ "None added"),
      _ = s._(/*BTDS*/ "None added. Edit the custom audience to add a label."),
      f = s._(/*BTDS*/ "No label added"),
      g = s._(/*BTDS*/ "No label added"),
      h = s._(
        /*BTDS*/ "Edit this audience to add a label. Labels help you find audiences for your ads more effectively.",
      );
    function y() {
      return s._(
        /*BTDS*/ "Choose a label that describes this audience. Labels may be used to find audiences for your ads more effectively. {link}",
        [
          s._param(
            "link",
            c.jsx(r("AdsLearnMore.react"), {
              cmsID: o("AdsTargetingAudienceLabelsHelpCentreConstants")
                .AUDIENCE_LABEL_CMS_ID,
              forceNewWindow: !0,
              label: o("AdsTargetingAudienceLabelsHelpCentreConstants")
                .ABOUT_AUDIENCE_LABELS,
            }),
          ),
        ],
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return s._(
        /*BTDS*/ "Choose a label that describes this audience. You can use this label to categorize your audience and create value rules which let you bid more for them. {link}",
        [
          s._param(
            "link",
            c.jsx(r("AdsLearnMore.react"), {
              cmsID: o("AdsTargetingAudienceLabelsHelpCentreConstants")
                .AUDIENCE_LABEL_CMS_ID,
              forceNewWindow: !0,
              label: o("AdsTargetingAudienceLabelsHelpCentreConstants")
                .ABOUT_AUDIENCE_LABELS,
            }),
          ),
        ],
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    var b = s._(/*BTDS*/ "Leads"),
      v = s._(/*BTDS*/ "Types of customer"),
      S = s._(/*BTDS*/ "Restricted audiences"),
      R = s._(/*BTDS*/ "Audiences you can't show ads to."),
      L = s._(/*BTDS*/ "Customers you consider valuable to your business"),
      E = s._(/*BTDS*/ "Customers that may harm your business"),
      k = s._(/*BTDS*/ "Leads that meet your qualification criteria"),
      I = s._(/*BTDS*/ "Leads that don't meet your qualification criteria"),
      T = s._(/*BTDS*/ "Leads that have become customers"),
      D = s._(/*BTDS*/ "Restricted users"),
      x = s._(
        /*BTDS*/ "People you can't show ads to, for legal or other reasons.",
      ),
      $ = s._(/*BTDS*/ ""),
      P = [
        o("AdsTargetingAudienceLabelsTaxonomy").AudienceLabelGroup.LEADS,
        o("AdsTargetingAudienceLabelsTaxonomy").AudienceLabelGroup
          .CUSTOMER_TYPES,
        o("AdsTargetingAudienceLabelsTaxonomy").AudienceLabelGroup
          .ENGAGED_AUDIENCES,
        o("AdsTargetingAudienceLabelsTaxonomy").AudienceLabelGroup.CUSTOMERS,
        o("AdsTargetingAudienceLabelsTaxonomy").AudienceLabelGroup
          .BUSINESS_CONTROLS,
        o("AdsTargetingAudienceLabelsTaxonomy").AudienceLabelGroup
          .OTHER_AUDIENCES,
      ];
    function N(e) {
      switch (e) {
        case o("AdsTargetingAudienceLabelsTaxonomy").AudienceLabelGroup
          .ENGAGED_AUDIENCES:
          return o("meta-brand-speech-bubble-stacked-filled-16")
            .metaBrandSpeechBubbleStackedNucleusMessagesFilled16;
        case o("AdsTargetingAudienceLabelsTaxonomy").AudienceLabelGroup
          .CUSTOMERS:
          return o("meta-brand-shopping-bag-filled-16")
            .metaBrandShoppingBagShoppingBagFlaredFilled16;
        default:
          return o("fbicon")._(u("624928"), 16);
      }
    }
    function M(e) {
      switch (e) {
        case o("AdsTargetingAudienceLabelsTaxonomy").AudienceLabelGroup
          .BUSINESS_CONTROLS:
          return {
            name: S,
            description: R,
            icon: o("fbicon")._(u("714935"), 16),
            items: [{ value: "restricted_users", name: D, description: x }],
          };
        case o("AdsTargetingAudienceLabelsTaxonomy").AudienceLabelGroup.LEADS:
          return {
            name: b,
            description: $,
            items: [
              {
                value: "qualified_leads",
                name: o("AdsTargetingAudienceLabelsTaxonomy")
                  .AUDIENCE_LABEL_QUALIFIED_LEADS_NAME,
                description: k,
              },
              {
                value: "disqualified_leads",
                name: o("AdsTargetingAudienceLabelsTaxonomy")
                  .AUDIENCE_LABEL_DISQUALIFIED_LEADS_NAME,
                description: I,
              },
              {
                value: "general_customers",
                name: o("AdsTargetingAudienceLabelsTaxonomy")
                  .AUDIENCE_LABEL_GENERAL_CUSTOMERS_NAME,
                description: T,
              },
            ],
          };
        case o("AdsTargetingAudienceLabelsTaxonomy").AudienceLabelGroup
          .CUSTOMER_TYPES:
          return {
            name: o("AdsTargetingAudienceLabelsTaxonomy")
              .AUDIENCE_LABEL_CUSTOMER_LEADS_NAME,
            description: $,
            items: [
              {
                value: "high_value_customers",
                name: o("AdsTargetingAudienceLabelsTaxonomy")
                  .AUDIENCE_LABEL_HIGH_VALUE_CUSTOMERS_NAME,
                description: L,
              },
              {
                value: "low_value_customers",
                name: o("AdsTargetingAudienceLabelsTaxonomy")
                  .AUDIENCE_LABEL_LOW_VALUE_CUSTOMERS_NAME,
                description: E,
              },
            ],
          };
        default: {
          var t = o(
            "AdsTargetingAudienceLabelsTaxonomy",
          ).getAudienceSelectorV2GroupInfo(e);
          return {
            name: t.name,
            description: t.description,
            icon: N(e),
            items: o(
              "AdsTargetingAudienceLabelsTaxonomy",
            ).getAudienceSelectorV2GroupItems(e),
          };
        }
      }
    }
    function w(e) {
      var t = M(e);
      return t.items;
    }
    function A(e) {
      var t = o("AudienceLabelsGKUtils").isAudienceLabelsVARBetaGKEnabled();
      return w(e).filter(function (e) {
        return o(
          "AdsTargetingAudienceLabelsTaxonomy",
        ).DEPRECATED_AUDIENCE_LABELS.has(e.value)
          ? !1
          : o(
                "AdsTargetingAudienceLabelsTaxonomy",
              ).VAR_BETA_ONLY_AUDIENCE_LABELS.has(e.value)
            ? t
            : !0;
      });
    }
    var F = new Map();
    function O(e) {
      var t = F.get(e);
      if (t != null) return t;
      var n = new Set(
        w(e).map(function (e) {
          return e.value;
        }),
      );
      return (F.set(e, n), n);
    }
    function B() {
      return Object.fromEntries(
        P.flatMap(function (e) {
          return w(e).map(function (e) {
            return [e.value, e.name];
          });
        }),
      );
    }
    function W(e) {
      var t = r("AdsCustomAudienceLabelAPI").cast(e);
      return t != null ? B()[t] : null;
    }
    ((l.AUDIENCE_LABEL_V2_TAXONOMY_GROUPS = o(
      "AdsTargetingAudienceLabelsTaxonomy",
    ).AUDIENCE_LABEL_V2_TAXONOMY_GROUPS),
      (l.DEPRECATED_AUDIENCE_LABELS = o(
        "AdsTargetingAudienceLabelsTaxonomy",
      ).DEPRECATED_AUDIENCE_LABELS),
      (l.VAR_BETA_ONLY_AUDIENCE_LABELS = o(
        "AdsTargetingAudienceLabelsTaxonomy",
      ).VAR_BETA_ONLY_AUDIENCE_LABELS),
      (l.AudienceLabelGroup = o(
        "AdsTargetingAudienceLabelsTaxonomy",
      ).AudienceLabelGroup),
      (l.AUDIENCE_LABEL_SELECTOR_LABEL = d),
      (l.AUDIENCE_LABEL_CLEAR_BUTTON_LABEL = m),
      (l.AUDIENCE_LABEL_FOR_NO_LABEL_IN_AUDIENCE_TABLE = p),
      (l.AUDIENCE_LABEL_FOR_NO_LABEL_IN_AUDIENCE_TABLE_PANE = _),
      (l.AUDIENCE_LABEL_GHOST_TEXT = f),
      (l.AUDIENCE_LABEL_GHOST_TOOLTIP_HEADER = g),
      (l.AUDIENCE_LABEL_GHOST_TOOLTIP_BODY = h),
      (l.getAudienceLabelSelectorDescription = y),
      (l.getAudienceLabelSelectorDescriptionV2 = C),
      (l.AUDIENCE_LABEL_GROUP_LEADS_NAME = b),
      (l.AUDIENCE_LABEL_GROUP_CUSTOMER_TYPES_NAME = v),
      (l.getAudienceSelectorGroupConfig = M),
      (l.getAudienceSelectorGroupItems = w),
      (l.getSelectableAudienceLabelItemsForGroup = A),
      (l.getAudienceLabelValueSetForGroup = O),
      (l.getAudienceLabelNames = B),
      (l.getAudienceLabelNameForValue = W));
  },
  226,
);
