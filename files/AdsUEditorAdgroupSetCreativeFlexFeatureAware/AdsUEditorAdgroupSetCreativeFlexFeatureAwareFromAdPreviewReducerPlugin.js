__d(
  "AdsUEditorAdgroupSetCreativeFlexFeatureAwareFromAdPreviewReducerPlugin",
  [
    "AdsAdgroupDraftFragmentStore",
    "AdsAdgroupRecordAccessors",
    "AdsAdvancedPreviewV2MediaVisibilitySetVisibleActionFlux",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return t.options.some(function (e) {
              var t, n;
              return (
                ((t = e.previewMedia) == null ? void 0 : t.assetSource) ===
                  "related-media" ||
                ((n = e.previewMedia) == null ? void 0 : n.assetSource) ===
                  "related-media-da"
              );
            })
              ? o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                  return r("AdsAdgroupDraftFragmentStore").hasDraft(e.id)
                    ? r(
                        "AdsAdgroupRecordAccessors",
                      ).is_creative_flex_feature_aware.set(!0)(e)
                    : e;
                })
              : e;
          },
          r("AdsAdvancedPreviewV2MediaVisibilitySetVisibleActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
