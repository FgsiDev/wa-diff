__d(
  "AdsSACarouselFlexibleFormatMutator",
  [
    "AdsAPlusCStickyOptOutUtils",
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupRecordAccessors",
    "AdsChildAttachmentsUtils",
    "AdsFlexibleFormatAdexUtils",
    "AdsFormatTransformationManualUploadAssetPlugin",
    "AdsMutators",
    "AdsSensitiveVerticalUtils",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a, i, l;
      if (t.size === 0) return e;
      var s = o("AdsFlexibleFormatAdexUtils").passSACarouselFFQE();
      if (!s) return e;
      var c = e;
      if (o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals())
        return (
          (c = _(c)),
          (c = u(c, "sa_collection", "manual_uploads")),
          (c = u(c, "collage", "manual_uploads")),
          p(c)
        );
      var d = r("gkx")("3475") || r("gkx")("13419");
      (n == null ||
      (a = n.get("single_media")) == null ||
      (a = a.find(function (e) {
        return e.data_source === "manual_uploads";
      })) == null
        ? void 0
        : a.status) !== "OPT_OUT" && !d
        ? (c = o(
            "AdsAdgroupFormatTransformationMutators",
          ).adsAdgroupFormatTransformationDataSourceOptInMutator(
            c,
            "single_media",
            "manual_uploads",
          ))
        : (c = _(c));
      var f = 0;
      for (var g of t)
        o("AdsChildAttachmentsUtils").isVideoChildAttachment(g) ||
          o("AdsChildAttachmentsUtils").hasPlaceData(g) ||
          f++;
      if (
        (f >= 4 &&
        (n == null ||
        (i = n.get("sa_collection")) == null ||
        (i = i.find(function (e) {
          return e.data_source === "manual_uploads";
        })) == null
          ? void 0
          : i.status) !== "OPT_OUT" &&
        !d
          ? (c = o(
              "AdsAdgroupFormatTransformationMutators",
            ).adsAdgroupFormatTransformationDataSourceOptInMutator(
              c,
              "sa_collection",
              "manual_uploads",
            ))
          : (c = u(c, "sa_collection", "manual_uploads")),
        o("AdsFlexibleFormatAdexUtils").passGKForCollage() &&
        f >= o("AdsFlexibleFormatAdexUtils").COLLAGE_MIN_IMAGE_COUNT &&
        (n == null ||
        (l = n.get("collage")) == null ||
        (l = l.find(function (e) {
          return e.data_source === "manual_uploads";
        })) == null
          ? void 0
          : l.status) !== "OPT_OUT" &&
        !d
          ? (c = o(
              "AdsAdgroupFormatTransformationMutators",
            ).adsAdgroupFormatTransformationDataSourceOptInMutator(
              c,
              "collage",
              "manual_uploads",
            ))
          : (c = u(c, "collage", "manual_uploads")),
        !o("AdsFlexibleFormatAdexUtils").passGKForC2V())
      )
        f >= 2 &&
          (o("AdsFlexibleFormatAdexUtils").isInC2VBlocklist()
            ? (c = p(c))
            : (c = m(c)));
      else if (f >= 2) {
        var h,
          y =
            n == null ||
            (h = n.get("video_slideshow")) == null ||
            (h = h.find(function (e) {
              return e.data_source === "manual_uploads";
            })) == null
              ? void 0
              : h.status,
          C = o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
            "carousel_to_video",
          ),
          b =
            !C &&
            (o("AdsFlexibleFormatAdexUtils").isInC2VBlocklist()
              ? y === "OPT_IN"
              : y !== "OPT_OUT");
        b ? (c = m(c)) : (c = p(c));
      }
      return c;
    }
    function s(e, t) {
      return o(
        "AdsChildAttachmentsUtils",
      ).hasOnlyEmptyChildAttachmentsPlaceholder(t)
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.format_transformation_spec.delete(e)
        : e;
    }
    function u(e, t, n) {
      var o = r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.get(e);
      if (o == null)
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.set(
          r("immutable").List([
            r("immutable").Map({ data_source: ["none"], format: t }),
          ]),
        )(e);
      var a = o.find(function (e) {
          return e.get("format") === t;
        }),
        i = o;
      return (
        a == null
          ? (i = o.push(
              r("immutable").Map({ data_source: ["none"], format: t }),
            ))
          : (i = o.map(function (e) {
              if (e.get("format") === t) {
                var o = e.get("data_source"),
                  a = Array.isArray(o)
                    ? o
                    : o instanceof r("immutable").List
                      ? o.toArray()
                      : [];
                if (Array.isArray(a) && a.includes(n))
                  return a.length === 1
                    ? e.set("data_source", r("immutable").List(["none"]))
                    : e.set(
                        "data_source",
                        a.filter(function (e) {
                          return e !== n;
                        }),
                      );
              }
              return e;
            })),
        r("AdsAdgroupRecordAccessors").creative.format_transformation_spec.set(
          i,
        )(e)
      );
    }
    function c(e, t, n, a) {
      var i =
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.format_transformation_spec.get(e) == null,
        l = o(
          "AdsAdgroupFormatTransformationMutators",
        ).adsAdgroupFormatTransformationDataSourceOptInMutator(e, t, n);
      return (i && (l = d(l, t, a)), l);
    }
    function d(e, t, n) {
      var o = r("AdsFormatTransformationManualUploadAssetPlugin"),
        a = t === "sa_collection" ? "single_media" : "sa_collection",
        i = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(e);
      if (
        i == null ||
        (i != null &&
          i.some(function (e) {
            return e.contains(a);
          }))
      )
        return e;
      var l =
          o.getIsEligible(n, a) && o.getIsSelected(n, a)
            ? "manual_uploads"
            : "none",
        s = r("immutable").List([
          r("immutable").Map({ data_source: [l], format: a }),
        ]),
        u = i.concat(s);
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(u)(e);
    }
    function m(e) {
      var t = o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.carousel_to_video.enroll_status.set(
          "OPT_IN",
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.carousel_to_video.action_metadata.type.set(
          "DEFAULT",
        ),
      )(e);
      return o(
        "AdsAdgroupFormatTransformationMutators",
      ).adsAdgroupFormatTransformationDataSourceOptInMutator(
        t,
        "video_slideshow",
        "manual_uploads",
      );
    }
    function p(e) {
      var t = o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.carousel_to_video.enroll_status.set(
          "OPT_OUT",
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.carousel_to_video.action_metadata.type.set(
          "DEFAULT",
        ),
      )(e);
      return u(t, "video_slideshow", "manual_uploads");
    }
    function _(e) {
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.get(e);
      if (t == null)
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.set(
          r("immutable").List([
            r("immutable").Map({
              data_source: ["none"],
              format: "single_media",
            }),
          ]),
        )(e);
      if (t.size !== 0) {
        var n = t.map(function (e) {
          return e.get("format") === "single_media"
            ? e.set("data_source", ["none"])
            : e;
        });
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.set(n)(e);
      }
      return e;
    }
    ((l.optInEligibleFormatTransformations = e),
      (l.removeIneligibleTransformations = s),
      (l.optOutFormatTransformation = u),
      (l.optInFormatTransformationWithBackfill = c));
  },
  98,
);
