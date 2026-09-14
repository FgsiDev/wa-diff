__d(
  "AdsUEditorAdgroupCarouselApplyToAllCardsReducerPlugin",
  [
    "invariant",
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupChildAttachmentsFields",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCarouselApplyToAllCardsDataActionFlux",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
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
          },
          function (e, t, n) {
            var a = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i = t.field,
                  l = t.sourceChildIndex,
                  u = r("nullthrows")(a.get(n)),
                  c = u.campaign,
                  d = u.campaignGroup,
                  m = u.specPlugin,
                  p = r("AdsAdgroupChildAttachmentsFields")[i].get(e, m, l),
                  _ = p.supported,
                  f = p.value;
                if ((_ || s(0, 59822, [i]), f == null)) return e;
                var g = e;
                if (
                  ((g = o(
                    "AdsUEditorAdgroupChildAttachmentsMutators",
                  ).setEachChildField(
                    g,
                    m,
                    r("AdsAdgroupChildAttachmentsFields")[i],
                    f,
                  )),
                  i === "linkURL")
                ) {
                  var h,
                    y = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                      d.objective,
                      c,
                    ),
                    C = o("AdsODAXUtils").maybeTranslateObjective(
                      d.objective,
                      y,
                      c.optimization_goal,
                    );
                  if (
                    o(
                      "AdsUEditorAdgroupChildAttachmentsMutators",
                    ).shouldSyncCallToActionLinkWithLink(
                      g,
                      C,
                      (h = d.promoted_object) == null ? void 0 : h.page_id,
                      m,
                      l,
                    )
                  )
                    return o(
                      "AdsUEditorAdgroupChildAttachmentsMutators",
                    ).syncAllChildLinksWithCTALinks(g, m, f);
                }
                return g;
              },
            );
          },
          o("AdsUEditorAdgroupCarouselApplyToAllCardsDataActionFlux")
            .actionType,
        ),
      },
      u = e;
    l.default = u;
  },
  98,
);
