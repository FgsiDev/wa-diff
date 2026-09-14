__d(
  "AdsReachBrandAwarenessWhatsAppDestinationDefaultingReducerPlugin",
  [
    "AdsAPIAdgroupCallToActionValueRecord",
    "AdsAPIAdgroupPaths",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupWebsiteLinkPostTypeMutators",
    "AdsApplicationIDs",
    "AdsAssetFeedUtils",
    "AdsBuyingTypes",
    "AdsChildAttachmentsUtils",
    "AdsMutators",
    "AdsReachBrandAwarenessWhatsAppDestinationDefaultingActionFlux",
    "AdsRemoveCTAEventFieldsForPlacementCustomizedAds",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "AdsWhatsAppUtils",
    "ClickToWhatsAppAdsDetails",
    "ClickToWhatsAppAdsLoggerUtils",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "WHATSAPP_MESSAGE",
      s = r("immutable").List([]);
    function u(t, n) {
      var a,
        i,
        l,
        u,
        c =
          ((a = t.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.call_to_actions) || s,
        d = c.getIn(["0", "type"]),
        m = c.getIn(["0", "value", "app_destination"]),
        p =
          (i = t.creative) == null || (i = i.asset_feed_spec) == null
            ? void 0
            : i.link_urls,
        _ = o("AdsWhatsAppUtils").getDefaultCTALink();
      if (
        d === e &&
        m === "WHATSAPP" &&
        p != null &&
        (p.getIn == null ? void 0 : p.getIn(["0", "website_url"])) === _
      )
        return t;
      var f = t;
      f = o(
        "AdsRemoveCTAEventFieldsForPlacementCustomizedAds",
      ).removeCTAEventFieldsForPlacementCustomizedAds(f, n);
      var g = c
        .setIn(["0", "type"], e)
        .setIn(["0", "value", "app_destination"], "WHATSAPP");
      f = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.call_to_actions.set(g, f);
      var h =
          (l = f.creative) == null || (l = l.asset_feed_spec) == null
            ? void 0
            : l.link_urls,
        y = (h || []).reduce(function (e, t) {
          var n = e;
          return (
            t.get("adlabels") != null && (n = e.concat(t.get("adlabels"))),
            n
          );
        }, r("immutable").List()),
        C = r("immutable").fromJS([
          ((u = {}),
          (u.website_url = o("AdsWhatsAppUtils").getDefaultCTALink()),
          (u.display_url = ""),
          (u.adlabels = y),
          u),
        ]);
      return (
        (f = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.link_urls.set(C, f)),
        r("AdsAdgroupSemanticFields").callToActionType.set(
          n,
          f,
          r("immutable").List([e]),
        )
      );
    }
    var c = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (t, n, a) {
            var i = a.parentData;
            return o("AdsMutators").mutateEach(
              t,
              n.adgroupIDs,
              function (t, n) {
                var a,
                  l = r("nullthrows")(i.get(n)),
                  s = l.campaignGroup,
                  c = l.specPlugin;
                if (
                  s.buying_type === r("AdsBuyingTypes").RESERVED ||
                  o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(t) ||
                  o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(t) ||
                  r("AdsAdgroupRecordAccessors").creative.branded_content.get(
                    t,
                  ) != null ||
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.branded_content_boosting_type.get(t) != null
                )
                  return t;
                var d = r("AdsAdgroupSemanticFields").callToActionType.get(
                  c,
                  t,
                );
                if (d === e) {
                  var m = r("AdsAdgroupSemanticFields").callToActionValue.get(
                      c,
                      t,
                    ),
                    p = o("AdsWhatsAppUtils").getDefaultCTALink();
                  if (
                    m != null &&
                    m.get("link") === p &&
                    m.get("app_destination") === "WHATSAPP"
                  )
                    return t;
                }
                var _ = o(
                  "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                ).cleanWebsiteExtensionFields(t);
                if (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(_))
                  return u(_, c);
                ((_ = o(
                  "AdsAdgroupWebsiteLinkPostTypeMutators",
                ).convertToHasWebsiteLinkFormat(_, c)),
                  o("AdsChildAttachmentsUtils").isCarouselAd(_) &&
                    (_ = o(
                      "AdsUEditorAdgroupChildAttachmentsMutators",
                    ).mutateChildAttachments(c, _, function (e) {
                      return e
                        .setIn(
                          ["link"],
                          o("AdsWhatsAppUtils").getDefaultCTALink(),
                        )
                        .setIn(
                          ["call_to_action", "value", "app_destination"],
                          "WHATSAPP",
                        );
                    })));
                var f =
                  (a = _.creative) == null || (a = a.object_story_spec) == null
                    ? void 0
                    : a.video_data;
                f ||
                  (_ = _.setIn(
                    r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                      .LINK,
                    o("AdsWhatsAppUtils").getDefaultCTALink(),
                  ));
                var g =
                  r("AdsAdgroupSemanticFields").callToActionValue.get(c, _) ||
                  o(
                    "AdsAPIAdgroupCallToActionValueRecord",
                  ).createEmptyCallToActionValueFromAdgroup(_);
                ((g = g.set("app_destination", "WHATSAPP")),
                  (g = g.set(
                    "link",
                    o("AdsWhatsAppUtils").getDefaultCTALink(),
                  )));
                try {
                  _ = r("AdsAdgroupSemanticFields").callToActionValue.set(
                    c,
                    _,
                    g,
                  );
                } catch (e) {
                  return (
                    o(
                      "ClickToWhatsAppAdsLoggerUtils",
                    ).logClickToWhatsAppAdsUnifiedEventDetails(
                      new (r("ClickToWhatsAppAdsDetails"))({
                        adAccountID: t.account_id,
                        appID: r("AdsApplicationIDs").ADS_POWER_EDITOR,
                        pageID: r("AdsAdgroupSemanticFields").pageID.get(c, _),
                        productFlow: "quick_create_ads_manager",
                        objective: o(
                          "ClickToWhatsAppAdsLoggerUtils",
                        ).getAdproObjectiveFromApiObjective(s.objective),
                        event: "default_to_whatsapp_destination_exception",
                        eventInfo: JSON.stringify(g),
                      }),
                    ),
                    t
                  );
                }
                return r("AdsAdgroupSemanticFields").callToActionType.set(
                  c,
                  _,
                  e,
                );
              },
            );
          },
          r("AdsReachBrandAwarenessWhatsAppDestinationDefaultingActionFlux")
            .actionType,
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
