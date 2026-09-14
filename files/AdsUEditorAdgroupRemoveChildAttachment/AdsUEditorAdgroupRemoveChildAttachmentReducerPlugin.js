__d(
  "AdsUEditorAdgroupRemoveChildAttachmentReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsChildAttachmentDefaultsUtils",
    "AdsChildAttachmentsUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsSACarouselFlexibleFormatMutator",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveChildAttachmentDataActionFlux",
    "AdsUEditorAdgroupSelectors",
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
          return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e, n) {
            var i = r("nullthrows")(a.get(n)),
              l = i.campaign,
              u = i.campaignGroup,
              c = i.specPlugin,
              d = r("AdsAdgroupSemanticFields").childAttachments.get(c, e);
            if (!d) return e;
            var m;
            if (t.childAttachmentCount === 1 && t.index === 0) {
              var p = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                  u.objective,
                  l,
                ),
                _ = o("AdsODAXUtils").maybeTranslateObjective(u.objective, p);
              m = o(
                "AdsChildAttachmentDefaultsUtils",
              ).initializeChildAttachments(
                o("AdsChildAttachmentsUtils").getDefaultChildAttachments(0),
                e,
                l,
                c,
                _,
                p,
              );
            } else m = d.delete(t.index);
            var f = s(e, t.index);
            return (
              (f = o(
                "AdsSACarouselFlexibleFormatMutator",
              ).removeIneligibleTransformations(f, m)),
              r("AdsAdgroupSemanticFields").childAttachments.set(c, f, m)
            );
          });
        },
        o("AdsUEditorAdgroupRemoveChildAttachmentDataActionFlux").actionType,
      ),
    };
    function s(e, t) {
      var n = r(
        "AdsAdgroupRecordAccessors",
      ).creative.interactive_components_spec.child_attachments.get(e);
      return n == null
        ? e
        : o(
            "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
          ).syncChildAttachments(n.delete(t), e);
    }
    var u = e;
    l.default = u;
  },
  98,
);
