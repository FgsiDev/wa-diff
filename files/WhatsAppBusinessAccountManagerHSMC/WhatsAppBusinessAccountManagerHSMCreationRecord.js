__d(
  "WhatsAppBusinessAccountManagerHSMCreationRecord",
  [
    "WhatsAppBusinessAccountManagerHSMComponentRecord",
    "WhatsAppBusinessAccountManagerHSMExampleRecordExt",
    "immutable",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n("immutable").Record({
        element: "",
        id: null,
        name: null,
        tag: null,
        subTag: null,
        language: "en",
        status: null,
        quality: null,
        lastUpdatedTime: null,
        editorStatus: "NOT_STARTED",
        formatViolations: null,
        rejectionReason: "NONE",
        approvedBody: void 0,
        header: new (e = n("WhatsAppBusinessAccountManagerHSMComponentRecord"))(
          { type: "HEADER" },
        ),
        body: new e({ type: "BODY" }),
        footer: new e({ type: "FOOTER" }),
        buttons: new e({ type: "BUTTONS" }),
        limited_time_offer: new e({ type: "LIMITED_TIME_OFFER" }),
        cards: new e({ type: "CAROUSEL" }),
        example: new (n("WhatsAppBusinessAccountManagerHSMExampleRecordExt"))(),
        violation: { element: null, language: null },
        previousTag: null,
        numApprovedStateEdits: [],
        aliases: { header: n("immutable").Map(), body: n("immutable").Map() },
        interpretation: void 0,
        isTemplateCategoryInAppeal: !1,
        templateCategoryAppealInfo: null,
        categoryMigrationInfo: null,
        messageSendTtlSeconds: null,
        ctaUrlLinkTrackingOptedOut: !1,
        isOnAdsManagerBetaFlow: !1,
        eligibilityCheckEnabled: !1,
        eligibilityCheckTermsAccepted: !1,
        headerMediaHeadline: void 0,
        headerMediaDescription: void 0,
      }),
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(l),
      u = s;
    i.default = u;
  },
  66,
);
