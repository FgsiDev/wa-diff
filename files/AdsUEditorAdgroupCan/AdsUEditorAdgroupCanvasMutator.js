__d(
  "AdsUEditorAdgroupCanvasMutator",
  [
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsCanvasCollectionsConstants",
    "AdsCollectionsConstants",
    "AdsMediaTypeAutomationMutators",
    "AdsMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        r("AdsAdgroupSemanticFields").videoID.isSupported(t, e) &&
          (e = r("AdsAdgroupSemanticFields").videoID.delete(t, e)),
        r("AdsAdgroupSemanticFields").imageHash.isSupported(t, e) &&
          ((e = r("AdsAdgroupSemanticFields").imageHash.delete(t, e)),
          (e = r("AdsAdgroupRecordAccessors").creative.image_hash.delete(e))),
        r("AdsAdgroupSemanticFields").imageURL.isSupported(t, e) &&
          ((e = r("AdsAdgroupSemanticFields").imageURL.delete(t, e)),
          (e = r("AdsAdgroupRecordAccessors").creative.image_url.delete(e))),
        e
      );
    }
    function s(e, t, n) {
      var a = r("AdsAdgroupSemanticFields").productSetID.get(t, e);
      return (
        n !== a &&
          (e = o("AdsMutators").chain(
            function (e) {
              return r("AdsAdgroupSemanticFields").retailerItemIDs.set(
                t,
                e,
                o("AdsCollectionsConstants").EMPTY_COLLECTIONS_RETAIL_ID,
              );
            },
            function (e) {
              return r("AdsAdgroupSemanticFields").productSetID.set(t, e, n);
            },
            function (e) {
              return r("AdsAdgroupSemanticFields").collectionThumbnails.delete(
                t,
                e,
              );
            },
            function (e) {
              return r("AdsAdgroupSemanticFields").postClickItemHeadline.delete(
                t,
                e,
              );
            },
            function (e) {
              return r(
                "AdsAdgroupSemanticFields",
              ).postClickItemDescription.delete(t, e);
            },
          )(e)),
        e
      );
    }
    function u(e, t, n, a) {
      var i = e;
      return (
        n
          ? (i = r("AdsAdgroupSemanticFields").productSetID.set(t, i, n))
          : a !== r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
            (i = r("AdsAdgroupSemanticFields").productSetID.delete(t, i)),
        o("AdsMutators").chain(
          function (e) {
            return r("AdsAdgroupSemanticFields").collectionThumbnails.set(
              t,
              e,
              o("AdsCanvasCollectionsConstants").EMPTY_COLLECTION_THUMBNAILS,
            );
          },
          function (e) {
            return r("AdsAdgroupSemanticFields").retailerItemIDs.delete(t, e);
          },
          function (e) {
            return r("AdsAdgroupSemanticFields").postClickItemHeadline.delete(
              t,
              e,
            );
          },
          function (e) {
            return r(
              "AdsAdgroupSemanticFields",
            ).postClickItemDescription.delete(t, e);
          },
          function (e) {
            return n
              ? e
              : o(
                  "AdsMediaTypeAutomationMutators",
                ).removeMediaTypeAutomationFieldsMutator(e);
          },
        )(i)
      );
    }
    ((l.resetCollectionCoverMedia = e),
      (l.setRetailerCollectionFields = s),
      (l.setCanvasCollectionFields = u));
  },
  98,
);
