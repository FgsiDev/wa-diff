__d(
  "AdsUEditorAdgroupLeadGenFormatSwitchReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsChildAttachmentsUtils",
    "AdsMessengerConstants",
    "AdsMessengerVisualEditorLandingScreenType",
    "AdsMessengerVisualEditorUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupLeadGenFormatSwitchActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupUrlMutators",
    "AdsUEditorCallToActionMutators",
    "AdsUnifiedCreativeAPIFields",
    "CTXUnstructuredLeadsAdsStoreUtils",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i = r("nullthrows")(a.get(n)),
                  l = i.campaign,
                  s = i.specPlugin;
                if (
                  l.destination_type ===
                    r("AdCampaignDestination").PHONE_CALL &&
                  t.changingPage === !0
                )
                  return e;
                var u = o("AdsChildAttachmentsUtils").isCarouselAd(e),
                  c = o(
                    "AdsUEditorCallToActionMutators",
                  ).deleteCallToActionValueAppDestination(e, s),
                  d =
                    t.campaignDestination ===
                    r("AdCampaignDestination").MESSENGER;
                if (d) {
                  var m = o("AdsAPIAdgroupRecordUtils").getPageID(e, s),
                    p = o(
                      "AdsMessengerVisualEditorUtils",
                    ).getStandardTemplateDefaultJSON(m),
                    _ = o(
                      "CTXUnstructuredLeadsAdsStoreUtils",
                    ).enableCTMUnstructuredLeadsOptimizationMessageTemplateDefaulting(
                      m,
                      r("AdsAPIObjectives").OUTCOME_LEADS,
                      t.campaignDestination,
                      r("AdsAPIObjectives").OUTCOME_LEADS,
                    );
                  (_
                    ? ((p.landing_screen_type = r(
                        "AdsMessengerVisualEditorLandingScreenType",
                      ).WELCOME_MESSAGE),
                      (p = JSON.stringify(p)))
                    : ((p.landing_screen_type = r(
                        "AdsMessengerVisualEditorLandingScreenType",
                      ).CTM_LEAD_GEN_NEW),
                      (p = JSON.stringify(p))),
                    (c = o(
                      "AdsUEditorCallToActionMutators",
                    ).deleteCallToActionValueLeadGenFormID(c, s)),
                    (c = o(
                      "AdsUEditorCallToActionMutators",
                    ).setCallToActionValueAppDestination(c, s, "MESSENGER")),
                    (c = c.setIn(
                      r(
                        "AdsUnifiedCreativeAPIFields",
                      ).pageWelcomeMessage.getPathOrThrow(e, s),
                      p,
                    )));
                } else
                  c = r("AdsAdgroupSemanticFields").pageWelcomeMessage.delete(
                    s,
                    c,
                  );
                var f = d
                  ? o("AdsMessengerConstants").EMPTY_MESSENGER_LINK
                  : "http://fb.me";
                return (
                  o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e) ||
                  (o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(e) &&
                    !d)
                    ? (c = o("AdsUEditorAdgroupUrlMutators").updateWebsiteUrl(
                        c,
                        f,
                      ))
                    : (c = c.setIn(
                        r("AdsUnifiedCreativeAPIFields").linkURL.getPathOrThrow(
                          e,
                          s,
                        ),
                        f,
                      )),
                  u
                    ? o(
                        "AdsUEditorAdgroupChildAttachmentsMutators",
                      ).mutateChildAttachments(s, c, function (e) {
                        return e.setIn(["link"], f);
                      })
                    : c
                );
              },
            );
          },
          [o("AdsUEditorAdgroupLeadGenFormatSwitchActionFlux").actionType],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
