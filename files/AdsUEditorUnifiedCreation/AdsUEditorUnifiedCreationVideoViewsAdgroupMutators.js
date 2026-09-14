__d(
  "AdsUEditorUnifiedCreationVideoViewsAdgroupMutators",
  [
    "AdsBrandAwarenessUtils",
    "AdsLinkTypeUtils",
    "AdsMessagesUnifiedCreationTypes",
    "AdsMessengerConstants",
    "AdsUEditorAdgroupSetLinkTypeMutator",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "AdsUEditorInstagramUtils",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "AdsUEditorUnifiedCreationAwarenessConstants",
    "AdsUEditorUnifiedCreationAwarenessUtils",
    "AdsWhatsAppUtils",
    "ClickToMessageCTMAdoptionFeatureGating",
    "ClickToMessageCTXMDOptimizationExpansionFeatureGating",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a, i, l, s, u, c, d, m, p, _, f, g, h, y) {
      var C;
      (h === void 0 && (h = !1), y === void 0 && (y = !1));
      var b = t;
      y === !0 &&
        (b = o(
          "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
        ).cleanWebsiteExtensionFields(b));
      var v =
        o(
          "ClickToMessageCTMAdoptionFeatureGating",
        ).isEligibleForCTXL1EngagementVideoViews(_, d) ||
        o(
          "ClickToMessageCTMAdoptionFeatureGating",
        ).isEligibleForCTXAwarenessVideoViews(m, d);
      if (
        !(
          (o("AdsBrandAwarenessUtils").isBrandObjective(d) && a) ||
          v ||
          o(
            "ClickToMessageCTXMDOptimizationExpansionFeatureGating",
          ).enableUnifiedCreationCTXMDL1(d, m, h)
        ) ||
        (s === !0 &&
          !o("AdsLinkTypeUtils").isMessagingDestination(f) &&
          (!v ||
            o(
              "AdsUEditorUnifiedCreationAwarenessUtils",
            ).hasCallToActionDestination(t)))
      )
        return b;
      if (l === !0) {
        var S;
        ((b = (S = o(
          "AdsUEditorAdgroupSetLinkTypeMutator",
        )).clearMovieLinkFields(b, g)),
          (b = S.clearExternalLinkFields(b, g, !0)),
          (b = S.clearEventLinkFields(b, g)),
          (b = S.clearPhoneCallLinkFields(b, g, r)),
          (b = S.clearAppFields(b, i, r)));
      }
      b = o(
        "AdsUEditorUnifiedCreationAdgroupMutators",
      ).clearMessagingAppsFields(b, g, r, a, d, void 0, _);
      var R =
        (C =
          (s === !0 || u === !0) &&
          !o(
            "ClickToMessageCTXMDOptimizationExpansionFeatureGating",
          ).enableUnifiedCreationCTXMDL1(d, m, h)
            ? o(
                "AdsUEditorUnifiedCreationAwarenessUtils",
              ).getNewMessageTypeForPage(p, e, f != null ? f : "", _, d, m, s)
            : c) != null
          ? C
          : o("AdsMessagesUnifiedCreationTypes").ClickToMessageDestinationType
              .MESSENGER;
      switch (R) {
        case o("AdsMessagesUnifiedCreationTypes").ClickToMessageDestinationType
          .MESSENGER:
          return (
            (b = o(
              "AdsUEditorUnifiedCreationAdgroupMutators",
            ).setMessagingAppFields(
              b,
              g,
              a,
              d,
              r,
              "MESSENGER",
              o("AdsMessengerConstants").MESSENGER_PREFIX,
              o("AdsUEditorUnifiedCreationAwarenessConstants").SEND_MESSAGE,
              o("AdsMessengerConstants").MESSENGER_PREFIX,
              o("AdsUEditorUnifiedCreationAwarenessConstants")
                .MESSENGER_HEADLINE,
              _,
              m,
            )),
            b
          );
        case o("AdsMessagesUnifiedCreationTypes").ClickToMessageDestinationType
          .INSTAGRAM_DIRECT:
          return (
            (b = o(
              "AdsUEditorUnifiedCreationAdgroupMutators",
            ).setMessagingAppFields(
              b,
              g,
              a,
              d,
              r,
              "INSTAGRAM_DIRECT",
              n != null ? n : "",
              o("AdsUEditorUnifiedCreationAwarenessConstants")
                .INSTAGRAM_MESSAGE,
              o("AdsUEditorInstagramUtils").DEFAULT_INSTAGRAM_LINK,
              o("AdsUEditorUnifiedCreationAwarenessConstants")
                .INSTAGRAM_HEADLINE,
              _,
              m,
            )),
            b
          );
        case o("AdsMessagesUnifiedCreationTypes").ClickToMessageDestinationType
          .WHATSAPP:
          return (
            (b = o(
              "AdsUEditorUnifiedCreationAdgroupMutators",
            ).setMessagingAppFields(
              b,
              g,
              a,
              d,
              r,
              "WHATSAPP",
              o("AdsWhatsAppUtils").getDefaultCTALink(),
              o("AdsUEditorUnifiedCreationAwarenessConstants")
                .SEND_WHATSAPP_MESSAGE,
              o("AdsWhatsAppUtils").getDefaultCTALink(),
              o("AdsUEditorUnifiedCreationAwarenessConstants")
                .WHATSAPP_HEADLINE,
              _,
              m,
            )),
            b
          );
      }
      return b;
    }
    l.getNewVideoViewsAdgroupWithMessagingFields = e;
  },
  98,
);
