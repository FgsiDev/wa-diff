__d(
  "AdsUEditorAdgroupReplaceChildAttachmentReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIChildAttachmentPaths",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsDynamicAdCustomizationConstants",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupReplaceChildAttachmentDataActionFlux",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "immutable",
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
                var i = a.get(n),
                  l = o("AdsMutators").chain(
                    r("AdsAdgroupRecordAccessors").creative.branded_content
                      .parent_source_instagram_media_id.delete,
                    r("AdsAdgroupRecordAccessors").creative.branded_content
                      .instagram_boost_post_access_token.delete,
                    r("AdsAdgroupRecordAccessors").creative.branded_content
                      .parent_source_facebook_post_id.delete,
                  )(e),
                  s = r("AdsAdgroupSemanticFields").callToActionType.get(i, l),
                  u = r("AdsAdgroupSemanticFields").childAttachments.get(i, l);
                if (!u) return l;
                var c = r("immutable")
                  .fromJS(t.childSpec)
                  .deleteIn(r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.path)
                  .delete(
                    o("AdsDynamicAdCustomizationConstants")
                      .CUSTOMIZATION_RULES_SPEC,
                  )
                  .setIn(
                    r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.TYPE,
                    s,
                  );
                return (
                  o("AdsAPIAdgroupRecordUtils").isTemplateCreative(l) &&
                    (c = c.setIn(
                      r("AdsAPIChildAttachmentPaths").STATIC_CARD,
                      !0,
                    )),
                  r("AdsAdgroupSemanticFields").childAttachments.set(
                    i,
                    l,
                    u.set(t.index, c),
                  )
                );
              },
            );
          },
          o("AdsUEditorAdgroupReplaceChildAttachmentDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
