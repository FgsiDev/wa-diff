__d(
  "AdsUEditorAdgroupAppendChildAttachmentReducerPlugin",
  [
    "AdsAPIChildAttachmentPaths",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsDynamicAdCustomizationConstants",
    "AdsMutators",
    "AdsSACarouselFlexibleFormatMutator",
    "AdsUEditorAdgroupAddChildAttachmentMutatorUtils",
    "AdsUEditorAdgroupAppendChildAttachmentActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (e, t, n) {
            var a = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i,
                  l = r("nullthrows")(a.get(n)),
                  s = o("AdsMutators").chain(
                    r("AdsAdgroupRecordAccessors").creative.branded_content
                      .parent_source_instagram_media_id.delete,
                    r("AdsAdgroupRecordAccessors").creative.branded_content
                      .instagram_boost_post_access_token.delete,
                    r("AdsAdgroupRecordAccessors").creative.branded_content
                      .parent_source_facebook_post_id.delete,
                  )(e),
                  u = r("AdsAdgroupSemanticFields").callToActionType.get(l, s),
                  c = r("AdsAdgroupSemanticFields").childAttachments.get(l, s);
                if (!c || !(c instanceof r("immutable").List)) return s;
                c = o(
                  "AdsUEditorAdgroupAddChildAttachmentMutatorUtils",
                ).removeEmptyChildAttachmentsPlaceholder(c);
                var d = t.childSpecs.map(function (e) {
                    return r("immutable")
                      .fromJS(e)
                      .deleteIn(r("AdsAPIChildAttachmentPaths").STATIC_CARD)
                      .deleteIn(
                        r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.path,
                      )
                      .delete(
                        o("AdsDynamicAdCustomizationConstants")
                          .CUSTOMIZATION_RULES_SPEC,
                      )
                      .setIn(
                        r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.TYPE,
                        u,
                      );
                  }),
                  m = (i = c).push.apply(i, d);
                return (
                  (s = o(
                    "AdsSACarouselFlexibleFormatMutator",
                  ).optInEligibleFormatTransformations(s, m, t.stickyMap)),
                  r("AdsAdgroupSemanticFields").childAttachments.set(l, s, m)
                );
              },
            );
          },
          o("AdsUEditorAdgroupAppendChildAttachmentActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
