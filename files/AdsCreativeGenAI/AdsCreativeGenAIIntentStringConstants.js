__d(
  "AdsCreativeGenAIIntentStringConstants",
  [
    "fbt",
    "AdsCreativeGenAIStringConstants",
    "AdsCreativeGenAIViewTermsLink.react",
    "GeoTooltip.react",
    "IPB4BImage.react",
    "MAIBAChatConstants",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = s._(/*BTDS*/ "Product or service description"),
      d = function () {
        return s._(/*BTDS*/ "Product or service description {tooltip}", [
          s._param(
            "tooltip",
            u.jsx(r("GeoTooltip.react"), {
              align: "start",
              content: s._(
                /*BTDS*/ "Product or service descriptions are generated with AI using information from your website and ad account. {=m1}",
                [
                  s._implicitParam(
                    "=m1",
                    u.jsx(r("AdsCreativeGenAIViewTermsLink.react"), {
                      children: s._(/*BTDS*/ ""),
                    }),
                  ),
                ],
              ),
              heading: o("AdsCreativeGenAIStringConstants")
                .GEN_AI_IMAGE_GEN_POPOVER_HEADER,
              children: u.jsx(r("IPB4BImage.react"), {
                alt: "",
                height: 12,
                src: o("MAIBAChatConstants").metaAIRingExtraExtraSmall,
                style: { marginInlineStart: 4, verticalAlign: "-2px" },
                width: 12,
              }),
            }),
          ),
        ]);
      },
      m = function () {
        return s._(/*BTDS*/ "Selling points {tooltip}", [
          s._param(
            "tooltip",
            u.jsx(r("GeoTooltip.react"), {
              align: "start",
              content: s._(
                /*BTDS*/ "Selling points are generated with AI based on information from your website and ad account. {=m1}",
                [
                  s._implicitParam(
                    "=m1",
                    u.jsx(r("AdsCreativeGenAIViewTermsLink.react"), {
                      children: s._(/*BTDS*/ ""),
                    }),
                  ),
                ],
              ),
              heading: o("AdsCreativeGenAIStringConstants")
                .GEN_AI_IMAGE_GEN_POPOVER_HEADER,
              children: u.jsx(r("IPB4BImage.react"), {
                alt: "",
                height: 12,
                src: o("MAIBAChatConstants").metaAIRingExtraExtraSmall,
                style: { marginInlineStart: 4, verticalAlign: "-2px" },
                width: 12,
              }),
            }),
          ),
        ]);
      },
      p = s._(/*BTDS*/ "Selling points"),
      _ = s._(/*BTDS*/ "Regenerate concepts"),
      f = s._(/*BTDS*/ "Back"),
      g = s._(/*BTDS*/ "Regenerate"),
      h = s._(/*BTDS*/ "Cancel"),
      y = s._(
        /*BTDS*/ "In a few words, describe why your product or service is valuable. For example, lightweight formula...",
      ),
      C = s._(
        /*BTDS*/ "In a few sentences, give more context about your selling point. This can improve AI generations.",
      );
    ((l.GEN_AI_INTENT_AD_SUMMARY_TITLE = c),
      (l.getProductSummaryHeader = d),
      (l.getSellingPointHeader = m),
      (l.GEN_AI_INTENT_SELLING_POINTS_HEADER = p),
      (l.GEN_AI_REGENERATE_CONCEPTS_HEADER = _),
      (l.GEN_AI_CONCEPT_EDITOR_BACK_BUTTON_LABEL = f),
      (l.GEN_AI_INTENT_CARD_PRIMARY_BTN_LABEL = g),
      (l.GEN_AI_INTENT_CARD_SECONDARY_BTN_LABEL = h),
      (l.GEN_AI_ADD_NEW_SELLINGPOINT_SCJ_PLACEHOLDER = y),
      (l.GEN_AI_ADD_NEW_SELLINGPOINT_AI_GENERATED_PLACEHOLDER = C));
  },
  226,
);
