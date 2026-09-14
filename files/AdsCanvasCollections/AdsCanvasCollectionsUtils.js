__d(
  "AdsCanvasCollectionsUtils",
  [
    "AdImageSpecs",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsCanvasCollectionsConstants",
    "AdsCanvasCollectionsThumbnail",
    "AdsImageLegacy",
    "immutable",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("immutable").List([]);
      return (
        e.collection_thumbnails &&
          (t = t.push(r("immutable").List(e.collection_thumbnails.map(s)))),
        e.dynamic_setting &&
          e.dynamic_setting.child_documents.map(function (e) {
            (r("vulture")("S47DYBo-4tCEo0_zULQOsjY8fn8="),
              e.collection_thumbnails &&
                (t = t.push(
                  r("immutable").List(e.collection_thumbnails.map(s)),
                )));
          }),
        (t = t.flatten(!0)),
        t.count() === 0
          ? o("AdsCanvasCollectionsConstants").EMPTY_COLLECTION_THUMBNAILS
          : t
      );
    }
    function s(e) {
      var t;
      if (e.photo) {
        var n,
          o = e.photo,
          a = o.height,
          i = o.width,
          l = 0,
          s = 0;
        (a > i ? ((s = (a - i) / 2), (a = i)) : ((l = (i - a) / 2), (i = a)),
          (t =
            ((n = {}),
            (n[r("AdImageSpecs").CANVAS_COLLECTIONS.cropKey] = [
              [l, s],
              [l + i, s + a],
            ]),
            n)));
      }
      return new (r("AdsCanvasCollectionsThumbnail"))({
        element_child_index: e.element_child_index,
        element_crops: t || {},
        element_id: e.element_id,
      });
    }
    function u(e) {
      return new (r("AdsImageLegacy"))({
        crops: void 0,
        height: e.height,
        id: e.id,
        key: e.id,
        url: e.src,
        width: e.width,
      });
    }
    function c(e) {
      if (!e.elements) return !1;
      var t = 0;
      return (
        e.elements.map(function (e) {
          e.element_type === "PHOTO" && e.element && e.element.photo
            ? t++
            : e.element_type === "SLIDESHOW" &&
              e.element &&
              e.element.child_elements &&
              e.element.child_elements.map(function (e) {
                e.element && e.element.photo && t++;
              });
        }),
        t >= 4
      );
    }
    function d(e, t) {
      var n = o("AdsAPIAdgroupRecordUtils").getCollectionThumbnails(e, t);
      return !!n;
    }
    function m(e) {
      return e === r("AdsAPIObjectives").POST_ENGAGEMENT;
    }
    ((l.convertThumbnailsFromAPI = e),
      (l.convertToLegacyImage = u),
      (l.isCanvasCollectionEligible = c),
      (l.isCanvasCollectionAd = d),
      (l.isCanvasCollectionOnlyObjective = m));
  },
  98,
);
