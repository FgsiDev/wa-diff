__d(
  "AdsAdgroupMediaMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsMutators",
    "AdsUnifiedCreativeAPIFieldMappings",
    "AdsUnifiedCreativeAPIFields",
    "adsAssetFeedSpecRemoveAssetFieldAtIndex",
    "adsIsNewVideoThumbnailDataModel",
    "immutable",
    "isEmpty",
    "isFalsey",
    "isTruthy",
    "objectKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return e.withMutations(function (e) {
        (r("AdsAdgroupRecordAccessors").creative.platform_customizations.delete(
          e,
        ),
          r("objectKeys")(t).forEach(function (n) {
            (r("AdsAdgroupRecordAccessors").creative.platform_customizations[
              n
            ].image_hash.set(t[n].imageHash, e),
              r("AdsAdgroupRecordAccessors").creative.platform_customizations[
                n
              ].image_crops.set(t[n].imageCrops, e),
              r("AdsAdgroupRecordAccessors").creative.platform_customizations[
                n
              ].image_url.set(t[n].imageURL, e));
          }));
      });
    }
    function u(e, t, n) {
      var a = n.imageCrops,
        i = n.imageHash,
        l = n.imageURL,
        u = n.platformCustomizations,
        c = e;
      if (
        o("AdsAssetFeedUtils").isAdgroupUsingNonTextOnlyDofAssetFeedSpec(e) &&
        !o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(e)
      ) {
        var d = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(c, "images");
        return (
          (c = o("AdsAssetFeedMutationUtils").setImageAssetAtIndex(
            c,
            t,
            d,
            i,
            l,
          )),
          a
            ? o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                c,
                t,
                r("AdsUnifiedCreativeAPIFields").imageHash,
                d,
                "image_crops",
                r("immutable").fromJS(a),
              )
            : o(
                "adsAssetFeedSpecRemoveAssetFieldAtIndex",
              ).adsAssetFeedSpecRemoveAssetFieldAtIndex(
                c,
                "images",
                d,
                "image_crops",
              )
        );
      } else
        (r("AdsAdgroupSemanticFields").imageCrops.isSupported(t, c) &&
          (c = r("AdsAdgroupSemanticFields").imageCrops.set(
            t,
            c,
            r("immutable").fromJS(a),
          )),
          (c = r("isTruthy")(i)
            ? o("AdsMutators").chain(
                function (e) {
                  return r("AdsAdgroupSemanticFields").imageHash.set(t, e, i);
                },
                function (e) {
                  return r("AdsAdgroupSemanticFields").imageURL.delete(t, e);
                },
              )(c)
            : o("AdsMutators").chain(
                function (e) {
                  return r("AdsAdgroupSemanticFields").imageURL.set(t, e, l);
                },
                function (e) {
                  return r("AdsAdgroupSemanticFields").imageHash.delete(t, e);
                },
              )(c)));
      return (
        u
          ? (c = s(c, u))
          : (c = r(
              "AdsAdgroupRecordAccessors",
            ).creative.platform_customizations.delete(c)),
        c
      );
    }
    function c(e, t) {
      return e.withMutations(function (e) {
        (r("AdsAdgroupRecordAccessors").creative.platform_customizations.delete(
          e,
        ),
          r("objectKeys")(t).forEach(function (e) {
            var n = t[e].imageURL;
            (r("AdsAdgroupRecordAccessors").creative.platform_customizations[
              e
            ].video_id.set(t[e].videoID),
              r("isTruthy")(n) &&
                r("AdsAdgroupRecordAccessors").creative.platform_customizations[
                  e
                ].image_url.set(t[e].imageURL));
          }));
      });
    }
    function d(t, n, a, i, l, s, u) {
      if (
        (i === void 0 && (i = null),
        l === void 0 && (l = null),
        s === void 0 && (s = null),
        o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(t) &&
          !o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(t))
      )
        return o("AdsAssetFeedMutationUtils").setVideoAssetAtIndex(
          t,
          n,
          o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(t, "videos"),
          a,
          i,
        );
      var d = t;
      if ((e || (e = r("isEmpty")))(u) && r("isFalsey")(a)) {
        var p;
        return (
          (d = (p = r("AdsAdgroupSemanticFields")).videoID.set(n, d, null)),
          (d = p.videoThumbnailURL.set(n, d, null)),
          (d = p.videoThumbnailID.set(n, d, null)),
          (d = p.videoThumbnailSource.set(n, d, null)),
          (d = r(
            "AdsAdgroupRecordAccessors",
          ).creative.interactive_components_spec.delete(d)),
          (d = m(d)),
          d
        );
      }
      return (
        u && Object.keys(u).length !== 0
          ? (d = c(d, u))
          : r("isTruthy")(a) &&
            ((d = r("AdsAdgroupSemanticFields").videoID.set(n, d, a)),
            r("isTruthy")(i) &&
              ((d = m(d)),
              (d = r("AdsAdgroupSemanticFields").videoThumbnailURL.set(
                n,
                d,
                i,
              ))),
            r("adsIsNewVideoThumbnailDataModel")() &&
              r("isTruthy")(l) &&
              (d = r("AdsAdgroupSemanticFields").videoThumbnailID.set(n, d, l)),
            s &&
              (d = r("AdsAdgroupSemanticFields").videoThumbnailSource.set(
                n,
                d,
                s,
              ))),
        d
      );
    }
    function m(e) {
      var t,
        n = r("isTruthy")(
          (t = e.creative) == null ||
            (t = t.object_story_spec) == null ||
            (t = t.video_data) == null
            ? void 0
            : t.image_hash,
        );
      return n
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.image_hash.delete(e)
        : e;
    }
    function p(e) {
      return e.withMutations(function (e) {
        (Object.keys(r("AdsUnifiedCreativeAPIFieldMappings")).forEach(
          function (t) {
            var n = r("AdsUnifiedCreativeAPIFieldMappings")[t].imageURL,
              o = r("AdsUnifiedCreativeAPIFieldMappings")[t].imageHash,
              a = r("AdsUnifiedCreativeAPIFieldMappings")[t].imageCrops;
            (n && e.deleteIn(n), o && e.deleteIn(o), a && e.deleteIn(a));
          },
        ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.platform_customizations.delete(e));
      });
    }
    function _(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.platform_customizations.delete(e);
    }
    function f(e) {
      var t,
        n,
        o = e;
      return (
        (o =
          r("AdsAdgroupRecordAccessors") == null ||
          (t = r("AdsAdgroupRecordAccessors").creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.link_data) == null ||
          (t = t.image_hash) == null
            ? void 0
            : t.delete(o)),
        (o =
          r("AdsAdgroupRecordAccessors") == null ||
          (n = r("AdsAdgroupRecordAccessors").creative) == null ||
          (n = n.object_story_spec) == null ||
          (n = n.link_data) == null
            ? void 0
            : n.message.delete(o)),
        o
      );
    }
    ((l.setPlatformCustomizations = s),
      (l.setImage = u),
      (l.setVideo = d),
      (l.removeImage = p),
      (l.removePlatformCustomizations = _),
      (l.removeDefaultImageAndPrimaryText = f));
  },
  98,
);
