__d(
  "AdsUEditorAdgroupBulkAddVideoChildAttachmentReducerPlugin",
  [
    "AdsAPIChildAttachmentPaths",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsSACarouselFlexibleFormatMutator",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAddChildAttachmentMutatorUtils",
    "AdsUEditorAdgroupBulkAddVideoChildAttachmentActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorMessagingDestinationUtils",
    "AdsVideoStore",
    "adsUEditorAccountSelector",
    "immutable",
    "isTruthy",
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
                var i = r("nullthrows")(a.get(n)),
                  l = i.campaign,
                  s = i.campaignGroup,
                  u = i.specPlugin,
                  c = o(
                    "AdsUEditorCampaignAdObjectsUtils",
                  ).getPromotedObjectType({ campaign: l, campaignGroup: s }),
                  d = o("AdsODAXUtils").maybeTranslateObjective(
                    s.objective,
                    c,
                    l.optimization_goal,
                  ),
                  m = r("AdsAdgroupSemanticFields").childAttachments.get(u, e),
                  p = t.videoIDs;
                if (
                  !m ||
                  !r("AdsAdgroupSemanticFields").childAttachments.isSupported(
                    u,
                    e,
                  ) ||
                  !p
                )
                  return e;
                m = o(
                  "AdsUEditorAdgroupAddChildAttachmentMutatorUtils",
                ).removeEmptyChildAttachmentsPlaceholder(m);
                var _ = r("AdsAdgroupSemanticFields").callToActionType.get(
                    u,
                    e,
                  ),
                  f = l.destination_type,
                  g = null,
                  h = p.map(function (t, n) {
                    if (t) {
                      var a = o(
                        "AdsUEditorAdgroupAddChildAttachmentMutatorUtils",
                      ).copyFirstChildLinkIntoChild(r("immutable").Map(), e, u);
                      (f != null &&
                        o(
                          "AdsUEditorMessagingDestinationUtils",
                        ).isClickToMessageAdDestination(f) &&
                        (a = o(
                          "AdsUEditorAdgroupAddChildAttachmentMutatorUtils",
                        ).setDefaultMessagingHeadline(a, f)),
                        (a = a.setIn(
                          r("AdsAPIChildAttachmentPaths").VIDEO_ID,
                          t,
                        )));
                      var i = r("AdsVideoStore").get(t);
                      if (i) {
                        var l,
                          p,
                          h =
                            (l = i.preferredThumbnail) == null ? void 0 : l.uri;
                        ((a = a.setIn(
                          r("AdsAPIChildAttachmentPaths").PICTURE,
                          h,
                        )),
                          ((p = m) == null ? void 0 : p.size) === 0 &&
                            n === 0 &&
                            (g = h));
                      }
                      return (
                        (a = o(
                          "AdsUEditorAdgroupAddChildAttachmentMutatorUtils",
                        ).copyCTAsIntoChild(a, e, u, s, c, d, _)),
                        a
                      );
                    }
                  });
                m = m.concat(h);
                var y = null;
                r("isTruthy")(g) &&
                  (y = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.thumbnail_url.set(g, e));
                var C = o(
                  "AdsUEditorAdgroupAddChildAttachmentMutatorUtils",
                ).processInteractiveComponentsBulk(y != null ? y : e, h.length);
                return (
                  (C = o(
                    "AdsSACarouselFlexibleFormatMutator",
                  ).optInEligibleFormatTransformations(C, m, t.stickyMap)),
                  r("AdsAdgroupSemanticFields").childAttachments.set(u, C, m)
                );
              },
            );
          },
          o("AdsUEditorAdgroupBulkAddVideoChildAttachmentActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
