__d(
  "adsUEditorAdgroupBulkMessageFieldSelector",
  [
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedFieldUtils",
    "AdsCreativeFlexAssetUtils",
    "AdsMultiMediaUtils",
    "AdsUEditorSelectorUtils",
    "AdsUEditorSelectors",
    "AdsWizardMediaPickerMultiUploadUtils",
    "adsCreateSelector",
    "adsMultiMediaTextSelectors",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        r("adsUEditorSelectedAdgroupPlainObjectsSelector"),
        o("AdsUEditorSelectors").adgroup.bulkBySemanticField(
          r("AdsAdgroupSemanticFields").message.get,
        ),
        o("adsMultiMediaTextSelectors").createMultiMediaTextValueSelector(
          o("AdsMultiMediaUtils").MultiMediaTextType.MESSAGE,
        ),
      ],
      o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e, t, n) {
        return e.length === 1 &&
          (r("justknobx")._("5758")
            ? o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
                e[0],
                "multi_media",
              )
            : (o(
                "AdsWizardMediaPickerMultiUploadUtils",
              ).isEligibleForMultiUpload("silent") &&
                n.length > 0) ||
              o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
                e[0],
                "multi_media",
              ))
          ? n.map(function (e) {
              return e;
            })
          : o("AdsAssetFeedFieldUtils").getDefaultFieldValuesForAdgroups(
              e,
              t,
              "bodies",
              "text",
            );
      }),
      { name: i.id + ".bulkMessageSelector" },
    );
    l.bulkMessageSelector = e;
  },
  98,
);
