__d(
  "AdsAdgroupMultiProductMutatorUtils",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsDynamicAdCustomizationAssetFeedUtils",
    "AdsImageUtils",
    "AdsMutators",
    "AdsUEditorAdgroupMultiProductMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a = e,
        i = o("AdsDynamicAdCustomizationAssetFeedUtils").isAssetFeedBasedMMDA(
          a,
        );
      return (
        r("AdsAdgroupSemanticFields").displayURL.isSupported(t, a) &&
          !i &&
          (a = o("AdsMutators").chain(function (e) {
            return n
              ? r("AdsAdgroupSemanticFields").displayURL.delete(t, e)
              : e;
          }, r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data.call_to_action.value.caption.delete)(
            a,
          )),
        n && !i && (a = r("AdsAdgroupSemanticFields").linkURL.delete(t, a)),
        r("AdsAdgroupSemanticFields").multiShareEndCard.set(t, a, !1)
      );
    }
    function s(e, t) {
      return r("AdsAdgroupSemanticFields").multiShareEndCard.set(t, e, !0);
    }
    function u(e, t, n, a, i, l, s, u) {
      var m;
      (n == null &&
        a == null &&
        ((i = d(i, e)),
        (i = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.thumbnail_url.delete,
          r("AdsAdgroupRecordAccessors").creative.thumbnail_height.delete,
          r("AdsAdgroupRecordAccessors").creative.thumbnail_width.delete,
        )(i))),
        n
          ? ((i = o("AdsUEditorAdgroupMultiProductMutators").deleteInChild(
              e,
              ["picture"],
              i,
            )),
            (i = o("AdsUEditorAdgroupMultiProductMutators").setInChild(
              e,
              ["image_hash"],
              n,
              i,
            )))
          : a &&
            ((i = o("AdsUEditorAdgroupMultiProductMutators").deleteInChild(
              e,
              ["image_hash"],
              i,
            )),
            (i = o("AdsUEditorAdgroupMultiProductMutators").setInChild(
              e,
              ["picture"],
              a,
              i,
            ))));
      var p = (m = i.creative) == null ? void 0 : m.object_type;
      return (
        p == null ||
          !o("AdsImageUtils").canCropStaticImageForPlatform(p) ||
          (t
            ? (i = o("AdsUEditorAdgroupMultiProductMutators").setInChild(
                e,
                ["image_crops"],
                t,
                i,
              ))
            : (i = o("AdsUEditorAdgroupMultiProductMutators").deleteInChild(
                e,
                ["image_crops"],
                i,
              )),
          e === 0 && l && s && u && (i = c(l, s, u, i))),
        i
      );
    }
    function c(e, t, n, a) {
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.thumbnail_url.set(e),
        r("AdsAdgroupRecordAccessors").creative.thumbnail_height.set(t),
        r("AdsAdgroupRecordAccessors").creative.thumbnail_width.set(n),
      )(a);
    }
    function d(e, t) {
      return (
        (e = o("AdsUEditorAdgroupMultiProductMutators").deleteInChild(
          t,
          ["picture"],
          e,
        )),
        (e = o("AdsUEditorAdgroupMultiProductMutators").deleteInChild(
          t,
          ["image_hash"],
          e,
        )),
        (e = o("AdsUEditorAdgroupMultiProductMutators").deleteInChild(
          t,
          ["image_crops"],
          e,
        )),
        e
      );
    }
    ((l.disableShowEndCard = e),
      (l.enableShowEndCard = s),
      (l.setChildImageAndCrops = u));
  },
  98,
);
