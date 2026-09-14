__d(
  "AdsUEditorAdgroupSetChildLinkReducerPlugin",
  [
    "invariant",
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupChildAttachmentsFields",
    "AdsChildAttachmentsUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPCAConsolidationUtils",
    "AdsPromotedObjectTypes",
    "AdsSAInDAUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupOnsiteDestinationsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetChildLinkDataActionFlux",
    "AdsUEditorWebsiteAndAppMutators",
    "RecommendedDestinationsUtils",
    "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            onsiteDestinations: r(
              "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
            ).toFluxSelector(),
          },
          function (e, t, n) {
            var a = n.onsiteDestinations,
              i = n.parentData,
              l = t.childIndex,
              s = t.link;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var u,
                  c,
                  d,
                  m = r("nullthrows")(i.get(n)),
                  p = m.campaign,
                  _ = m.campaignGroup,
                  f = m.specPlugin,
                  g = r("AdsAdgroupChildAttachmentsFields").linkURL.get(
                    e,
                    f,
                    l,
                  ),
                  h = [
                    o(
                      "AdsUEditorAdgroupChildAttachmentsMutators",
                    ).childIterationConditions.isCardIndex(l),
                  ];
                (t.autoFillAllChildSet === !0 &&
                  h.push(function () {
                    return !0;
                  }),
                  t.childIndex === 0 &&
                    t.autoFillOnFirstChildSet === !0 &&
                    h.push(
                      o("AdsUEditorAdgroupChildAttachmentsMutators")
                        .childIterationConditions.isEmptyValue,
                    ),
                  o("AdsChildAttachmentsUtils").isStaticAndDynamicCarouselAd(
                    e,
                  ) &&
                    h.push(
                      o("AdsUEditorAdgroupChildAttachmentsMutators")
                        .childIterationConditions.notStaticCard,
                    ));
                var y = function () {
                    for (
                      var e = arguments.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    return h.some(function (e) {
                      return e.apply(void 0, t);
                    });
                  },
                  C = e;
                C = o(
                  "AdsUEditorAdgroupChildAttachmentsMutators",
                ).setEachChildField(
                  C,
                  f,
                  r("AdsAdgroupChildAttachmentsFields").linkURL,
                  s,
                  y,
                );
                var b = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                    _.objective,
                    p,
                  ),
                  v = o("AdsODAXUtils").maybeTranslateObjective(
                    _.objective,
                    b,
                    p.optimization_goal,
                  ),
                  S =
                    o("AdsPCAConsolidationUtils").isPCAVariation(p) &&
                    ((u = p.promoted_object) == null ? void 0 : u.variation) ===
                      "PRODUCT_SET_AND_OMNICHANNEL" &&
                    o("AdsSAInDAUtils").isSAInDAEnabledUsingCampaignAndAdgroup(
                      p,
                      e,
                    ) &&
                    o("AdsPCAConsolidationUtils")
                      .getEligibleOptimizationGoalsForOmnichannel()
                      .includes(p.optimization_goal),
                  R = b === r("AdsPromotedObjectTypes").WEB_AND_APP || S;
                if (
                  (R &&
                    (l === 0 || t.autoFillAllChildSet === !0) &&
                    (C = o(
                      "AdsUEditorWebsiteAndAppMutators",
                    ).setOmnichannelLinkSpecWebsiteURL(C, s)),
                  (b === r("AdsPromotedObjectTypes").WEB_AND_SHOP ||
                    ((c = e.creative) == null ||
                    (c = c.destination_spec) == null
                      ? void 0
                      : c.destination_type) === "WEBSITE_AND_SHOP") &&
                    l === 0)
                ) {
                  var L = o(
                      "RecommendedDestinationsUtils",
                    ).extractFirstChildAssetData(C),
                    E = L.imageHash,
                    k = L.pictureID,
                    I = L.videoID,
                    T = o(
                      "AdsUEditorAdgroupOnsiteDestinationsMutators",
                    ).getFirstDestinationID(
                      t.storefronts,
                      a,
                      s,
                      t.adgroupIDs,
                      E,
                      k,
                      I,
                      null,
                      null,
                      "static_carousel",
                    );
                  C = o(
                    "AdsUEditorAdgroupOnsiteDestinationsMutators",
                  ).updateOnsiteDestinationsWithLinkType(
                    C,
                    p,
                    "website_and_shops",
                    t.storefronts,
                    T,
                    !0,
                    !0,
                  );
                }
                return o(
                  "AdsUEditorAdgroupChildAttachmentsMutators",
                ).shouldSyncCallToActionLinkWithLink(
                  C,
                  v,
                  (d = _.promoted_object) == null ? void 0 : d.page_id,
                  f,
                  l,
                )
                  ? o(
                      "AdsUEditorAdgroupChildAttachmentsMutators",
                    ).syncAllChildLinksWithCTALinks(C, f, s)
                  : C;
              },
            );
          },
          o("AdsUEditorAdgroupSetChildLinkDataActionFlux").actionType,
        ),
      },
      u = e;
    l.default = u;
  },
  98,
);
