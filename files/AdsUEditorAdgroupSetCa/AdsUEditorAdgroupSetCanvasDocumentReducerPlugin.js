__d(
  "AdsUEditorAdgroupSetCanvasDocumentReducerPlugin",
  [
    "AdsAPIChildAttachmentPaths",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupTypeUtils",
    "AdsAdgroupWebsiteLinkPostTypeMutators",
    "AdsAppUtils",
    "AdsAssetFeedUtils",
    "AdsCanvasAdUtils",
    "AdsChildAttachmentsUtils",
    "AdsCollectionsAdUtils",
    "AdsDynamicAdCustomizationDialogDataProvider",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCanvasMutator",
    "AdsUEditorAdgroupMultiProductMutators",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetCanvasDocumentDataActionFlux",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignAdObjectsUtils",
    "JSResource",
    "ProductSetDataProvider",
    "ShopsAdsOffsiteCheckoutAdsUtils",
    "adsL1AdCanSinglePhotoHaveCTA",
    "adsUEditorAccountSelector",
    "adsUEditorPreloadedIdentityToStorefrontSelector",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s, u, c, d, m) {
      var p,
        _ = e,
        f = i;
      if (a)
        ((_ = o("AdsUEditorAdgroupCanvasMutator").resetCollectionCoverMedia(
          _,
          t,
        )),
          n.useRetailerItemIDs === !0
            ? (_ = o(
                "AdsUEditorAdgroupCanvasMutator",
              ).setRetailerCollectionFields(
                _,
                t,
                r("nullthrows")(n.productSetID),
              ))
            : (_ = o(
                "AdsUEditorAdgroupCanvasMutator",
              ).setCanvasCollectionFields(_, t, n.productSetID, s)));
      else if (f) {
        var g = r("AdsAdgroupSemanticFields").retailerItemIDs.get(t, _);
        ((f = f.set("retailerItemIDs", g != null ? g : r("immutable").List())),
          r("JSResource").loadAll(
            [
              r("JSResource")("AdsCanvasElementDataDispatcher").__setRef(
                "AdsUEditorAdgroupSetCanvasDocumentReducerPlugin",
              ),
            ],
            function (e) {
              return e.updateElement(f, l);
            },
          ));
      }
      var h = d.getValue(),
        y = r("AdsAdgroupSemanticFields").instagramActorID.get(t, _),
        C = (p = _.creative) == null ? void 0 : p.product_set_id,
        b = C != null ? (m == null ? void 0 : m.get(C)) : null,
        v =
          b != null && b.hasValue()
            ? b == null
              ? void 0
              : b.getValueEnforcing().catalogID
            : null;
      return (
        (_ = o("AdsUEditorAdgroupMutators").maybeUpdateSAOffDestinationSpec(
          _,
          u,
          c,
          v,
          h,
          l,
          y,
          o("ShopsAdsOffsiteCheckoutAdsUtils").SAOffDefaultingTrigger
            .COLLECTIONS_AD_CANVAS_CHANGE,
        )),
        _
      );
    }
    function s(e, t) {
      var n,
        o,
        a = (n = e.creative) == null ? void 0 : n.asset_feed_spec,
        i = a == null ? void 0 : a.link_urls;
      if (i == null || i.size !== 1) return e;
      var l = r("immutable").fromJS([
          ((o = {}),
          (o.website_url = t),
          (o.display_url = ""),
          (o.adlabels = i.first().get("adlabels")),
          o),
        ]),
        s = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.link_urls.set(l, e);
      if ((a == null ? void 0 : a.call_to_actions) != null) {
        var u;
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_to_actions.set(
          (u = s.creative) == null ||
            (u = u.asset_feed_spec) == null ||
            (u = u.call_to_actions) == null
            ? void 0
            : u.update(0, function (e) {
                return e.setIn(["value", "link"], t);
              }),
          s,
        );
      }
      return s;
    }
    var u = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            mmdaDialogData: r(
              "AdsDynamicAdCustomizationDialogDataProvider",
            ).toFluxSelector(),
            account: r("adsUEditorAccountSelector"),
            identitiesToStorefrontLO: o(
              "adsUEditorPreloadedIdentityToStorefrontSelector",
            ).preloadedIdentityToStorefrontSelector,
            productSetSelector: r("ProductSetDataProvider").toFluxSelector(),
          },
          function (t, n, a) {
            var i = a.identitiesToStorefrontLO,
              l = a.mmdaDialogData,
              u = a.parentData,
              c = a.productSetSelector,
              d = o("AdsCanvasAdUtils").getCanvasLink(n.canvasID);
            return o("AdsMutators").mutateEach(
              t,
              n.adgroupIDs,
              function (t, a) {
                var m = t;
                if (l.isDialogShown) return m;
                var p = r("nullthrows")(u.get(a)),
                  _ = p.campaign,
                  f = p.campaignGroup,
                  g = p.specPlugin,
                  h = o(
                    "AdsUEditorCampaignAdObjectsUtils",
                  ).getPromotedObjectType({ campaign: _, campaignGroup: f }),
                  y = o("AdsODAXUtils").maybeTranslateObjective(
                    f.objective,
                    h,
                    _.optimization_goal,
                  );
                if (
                  o("AdsAssetFeedUtils").isPACAdgroupFromRecord(m) &&
                  !o("AdsChildAttachmentsUtils").isStaticAndDynamicCarouselAd(m)
                )
                  return s(m, d);
                ((r("adsL1AdCanSinglePhotoHaveCTA")(y) ||
                  !r("AdsAdgroupSemanticFields").linkURL.isSupported(g, m)) &&
                  (m = o(
                    "AdsAdgroupWebsiteLinkPostTypeMutators",
                  ).convertToHasWebsiteLinkFormat(m, g)),
                  (m = r("AdsAdgroupSemanticFields").linkURL.set(g, m, d)));
                var C = r("nullthrows")(
                  r("AdsAdgroupSemanticFields").pageID.get(g, m),
                );
                if (
                  !o("AdsAdgroupTypeUtils").isVideoAd(m) &&
                  r("AdsAdgroupSemanticFields").callToActionValue.isSupported(
                    g,
                    m,
                  )
                ) {
                  var b = r("AdsAdgroupSemanticFields").callToActionValue.get(
                    g,
                    m,
                  );
                  m = r("AdsAdgroupSemanticFields").callToActionValue.set(
                    g,
                    m,
                    b == null ? void 0 : b.delete("link"),
                  );
                }
                if (
                  (o("AdsChildAttachmentsUtils").isCarouselAd(m)
                    ? ((m = o(
                        "AdsUEditorAdgroupMultiProductMutators",
                      ).setInEachChild(
                        r("AdsAPIChildAttachmentPaths").LINK,
                        d,
                        m,
                      )),
                      (m = o(
                        "AdsUEditorAdgroupMultiProductMutators",
                      ).deleteInEachChild(["call_to_action"], m)))
                    : o("AdsCollectionsAdUtils").isCollectionsAd(m.creative) &&
                      (m = e(
                        m,
                        g,
                        n.canvasAdSettings,
                        n.shouldSetCollectionFields,
                        n.productSetElement,
                        C,
                        y,
                        _,
                        f,
                        i,
                        c,
                      )),
                  o(
                    "AdsPCAUnifiedFormatEligibilityUtils",
                  ).isEligiblePCAUnifiedL1(f, m))
                ) {
                  var v,
                    S,
                    R,
                    L,
                    E =
                      (v =
                        (S =
                          (R = n.canvasAdSettings) == null
                            ? void 0
                            : R.productSetID) != null
                          ? S
                          : (L = n.productSetElement) == null
                            ? void 0
                            : L.setID) != null
                        ? v
                        : null;
                  E != null &&
                    (m = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.creative_sourcing_spec.associated_product_set_id.set(
                      E,
                      m,
                    ));
                }
                return (
                  r("AdsAppUtils").isMobileAppObjective(f.objective, h) &&
                    (m = o(
                      "AdsUEditorCallToActionMutators",
                    ).setCallToActionLink({
                      link: d,
                      adgroup: m,
                      specPlugin: g,
                    })),
                  m
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetCanvasDocumentDataActionFlux").actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
