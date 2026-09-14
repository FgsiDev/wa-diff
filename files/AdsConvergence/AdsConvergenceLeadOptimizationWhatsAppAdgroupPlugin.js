__d(
  "AdsConvergenceLeadOptimizationWhatsAppAdgroupPlugin",
  [
    "AdsAPIAdgroupLinkDataRecord",
    "AdsAPIObjectives",
    "AdsAdgroupSemanticFields",
    "AdsConvergenceAdgroupUtils",
    "AdsCreativeFormatMutatorUtils",
    "AdsMessengerConstants",
    "AdsMessengerVisualEditorUtils",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsAPIAdgroupLinkDataRecord")
        .getSpec()
        .call_to_action.getSpec().value,
      s = "WHATSAPP_MESSAGE",
      u = new e({ app_destination: "WHATSAPP" }),
      c = {
        type: "convergenceAdgroup",
        key: "adgroup/leadgen/whatsapp",
        pivots: {
          objective: r("AdsAPIObjectives").LEAD_GENERATION,
          promotedObjectType: r("AdsPromotedObjectTypes").WHATSAPP,
        },
        generateDefaultAdgroupSpec: function (t, n, a) {
          var e = o("AdsConvergenceAdgroupUtils").EMPTY_SHARE_ADGROUP_RECORD,
            i = t.pageID,
            l = o(
              "AdsMessengerVisualEditorUtils",
            ).getStandardTemplateDefaultJSON(i),
            c = JSON.stringify(l);
          return (
            (e = o("AdsMutators").chain(
              function (e) {
                return r("AdsAdgroupSemanticFields").callToActionType.set(
                  a,
                  e,
                  s,
                );
              },
              function (e) {
                return r("AdsAdgroupSemanticFields").callToActionValue.set(
                  a,
                  e,
                  u,
                );
              },
              function (e) {
                return r("AdsAdgroupSemanticFields").linkURL.set(
                  a,
                  e,
                  o("AdsMessengerConstants").EMPTY_MESSENGER_LINK,
                );
              },
              function (e) {
                return r("AdsAdgroupSemanticFields").headline.set(
                  a,
                  e,
                  o("AdsMessengerConstants").DEFAULT_HEADLINE.toString(),
                );
              },
              function (e) {
                return r("AdsAdgroupSemanticFields").pageID.set(a, e, i);
              },
              function (e) {
                return r("AdsAdgroupSemanticFields").pageWelcomeMessage.set(
                  a,
                  e,
                  c,
                );
              },
              function (e) {
                return o("AdsCreativeFormatMutatorUtils").mutateCreativeFormat(
                  e,
                  "SingleLink",
                );
              },
              function (e) {
                return o("AdsConvergenceAdgroupUtils").maybeEnableAutoflow(
                  e,
                  t,
                );
              },
              function (e) {
                var n, r, a, i;
                return o(
                  "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
                ).updateContextualDiscoveryAdsEligibilitySpec(e, {
                  shouldOptIn:
                    ((n = t.contextualDiscoveryAdsEligibilityState) == null
                      ? void 0
                      : n.shouldOptIn) === !0,
                  shouldRenderCheckbox:
                    t == null ||
                    (r = t.contextualDiscoveryAdsEligibilityState) == null
                      ? void 0
                      : r.shouldRenderCheckbox,
                  isExplicitOptOut:
                    t == null ||
                    (a = t.contextualDiscoveryAdsEligibilityState) == null
                      ? void 0
                      : a.isExplicitOptOut,
                  actionMetadataType:
                    (i = t.contextualDiscoveryAdsEligibilityState) == null
                      ? void 0
                      : i.actionMetadataType,
                });
              },
            )(e)),
            o("AdsConvergenceAdgroupUtils").maySetPoliticalAd(
              e,
              t.specialAdCategories,
            )
          );
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
