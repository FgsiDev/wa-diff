__d(
  "AdsEPACollageFlexibleFormatMutator",
  [
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupRecordAccessors",
    "AdsFlexibleFormatAdexUtils",
    "AdsSensitiveVerticalUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r,
        a = o("AdsFlexibleFormatAdexUtils").getExistingPostPhotoShape(e, t);
      if (
        a === "unresolved" ||
        a !== "multi_photo" ||
        !o("AdsFlexibleFormatAdexUtils").passEPACollageGKOnly(!0)
      )
        return e;
      if (o("AdsFlexibleFormatAdexUtils").isMultiPostExistingPostAd(e))
        return s(e, t);
      var i =
        (n == null ||
        (r = n.get("collage")) == null ||
        (r = r.find(function (e) {
          return e.data_source === "existing_post_media";
        })) == null
          ? void 0
          : r.status) === "OPT_OUT";
      return t != null &&
        t >= o("AdsFlexibleFormatAdexUtils").COLLAGE_MIN_IMAGE_COUNT &&
        !i &&
        !o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals()
        ? o(
            "AdsAdgroupFormatTransformationMutators",
          ).adsAdgroupFormatTransformationDataSourceOptInMutator(
            e,
            "collage",
            "existing_post_media",
            void 0,
            t,
          )
        : s(e, t);
    }
    function s(e, t) {
      var n = o("AdsFlexibleFormatAdexUtils").getCollageFtsFormatForAdgroup(
          e,
          t,
        ),
        a = r("immutable").Map({ data_source: ["none"], format: n }),
        i = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(e);
      if (i == null)
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.set(r("immutable").List([a]))(e);
      var l = i.some(function (e) {
          return e.get("format") === n;
        }),
        s = l
          ? i.map(function (e) {
              return e.get("format") === n
                ? e.set("data_source", r("immutable").List(["none"]))
                : e;
            })
          : i.push(a);
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(s)(e);
    }
    l.optInEligibleEPACollage = e;
  },
  98,
);
