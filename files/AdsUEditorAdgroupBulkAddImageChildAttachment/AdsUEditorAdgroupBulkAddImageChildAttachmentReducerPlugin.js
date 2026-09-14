__d(
  "AdsUEditorAdgroupBulkAddImageChildAttachmentReducerPlugin",
  [
    "AdsAdgroupSemanticFields",
    "AdsImageInfoStore",
    "AdsImageInfoStoreUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsSACarouselFlexibleFormatMutator",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAddChildAttachmentMutatorUtils",
    "AdsUEditorAdgroupBulkAddImageChildAttachmentActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorMessagingDestinationUtils",
    "adsUEditorAccountSelector",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            adAccount: r("adsUEditorAccountSelector"),
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
                var i,
                  l = r("nullthrows")(a.get(n)),
                  s = l.campaign,
                  u = l.campaignGroup,
                  c = l.specPlugin,
                  d = o(
                    "AdsUEditorCampaignAdObjectsUtils",
                  ).getPromotedObjectType({ campaign: s, campaignGroup: u }),
                  m = o("AdsODAXUtils").maybeTranslateObjective(
                    u.objective,
                    d,
                    s.optimization_goal,
                  ),
                  p = r("AdsAdgroupSemanticFields").childAttachments.get(c, e),
                  _ = (i = t.imageIDs) == null ? void 0 : i.toArray();
                if (
                  !p ||
                  !r("AdsAdgroupSemanticFields").childAttachments.isSupported(
                    c,
                    e,
                  ) ||
                  !_
                )
                  return e;
                p = o(
                  "AdsUEditorAdgroupAddChildAttachmentMutatorUtils",
                ).removeEmptyChildAttachmentsPlaceholder(p);
                var f = r("AdsAdgroupSemanticFields").callToActionType.get(
                    c,
                    e,
                  ),
                  g = s.destination_type,
                  h = null,
                  y = _.map(function (t, n) {
                    var a,
                      i = o(
                        "AdsUEditorAdgroupAddChildAttachmentMutatorUtils",
                      ).copyFirstChildLinkIntoChild(r("immutable").Map(), e, c);
                    (g != null &&
                      o(
                        "AdsUEditorMessagingDestinationUtils",
                      ).isClickToMessageAdDestination(g) &&
                      (i = o(
                        "AdsUEditorAdgroupAddChildAttachmentMutatorUtils",
                      ).setDefaultMessagingHeadline(i, g)),
                      ((a = p) == null ? void 0 : a.size) === 0 &&
                        n === 0 &&
                        (h = t));
                    var l = r(
                      "AdsImageInfoStoreUtils",
                    ).getImageAssetFromImageID(t);
                    if (l) {
                      var s =
                          typeof (l == null ? void 0 : l.get("hash")) ==
                          "string"
                            ? String(l == null ? void 0 : l.get("hash"))
                            : null,
                        _ =
                          typeof (l == null ? void 0 : l.get("url")) == "string"
                            ? String(l == null ? void 0 : l.get("url"))
                            : null;
                      return (
                        (i = o(
                          "AdsUEditorAdgroupAddChildAttachmentMutatorUtils",
                        ).addImageIntoChild(i, s, _)),
                        (i = o(
                          "AdsUEditorAdgroupAddChildAttachmentMutatorUtils",
                        ).copyCTAsIntoChild(i, e, c, u, d, m, f)),
                        i
                      );
                    }
                  });
                p = p.concat(y);
                var C = null;
                if (h) {
                  var b = r("AdsImageInfoStore").getThumbnail(h);
                  if (b.hasValue()) {
                    var v = b.getValueEnforcing().displayImage.height,
                      S = b.getValueEnforcing().displayImage.width,
                      R = b.getValueEnforcing().displayImage.url;
                    v &&
                      S &&
                      R &&
                      (C = o(
                        "AdsUEditorAdgroupAddChildAttachmentMutatorUtils",
                      ).setImageThumbnail(R, v, S, e));
                  }
                }
                var L = o(
                  "AdsUEditorAdgroupAddChildAttachmentMutatorUtils",
                ).processInteractiveComponentsBulk(C != null ? C : e, y.length);
                return (
                  (L = o(
                    "AdsSACarouselFlexibleFormatMutator",
                  ).optInEligibleFormatTransformations(L, p, t.stickyMap)),
                  r("AdsAdgroupSemanticFields").childAttachments.set(c, L, p)
                );
              },
            );
          },
          o("AdsUEditorAdgroupBulkAddImageChildAttachmentActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
