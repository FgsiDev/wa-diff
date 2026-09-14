__d(
  "AdsCreativeFlexSpecCheckUtils",
  [
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsCAGAssetUtils",
    "AdsCreativeFlexAssetUtils",
    "AdsCreativeFlexConstants",
    "AdsCreativeFlexGKCheckUtils",
    "AdsCreativeFlexTypes",
    "AdsCreativeMediaSourcingSpecTypes.flow",
    "AdsRelatedMediaGroupingUtils",
    "DAFlexibleFormatUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      var a, i;
      r === void 0 && (r = !0);
      var l = [],
        s = [],
        u = [],
        c = new Set(),
        d = o("AdsCreativeFlexAssetUtils").getCreativeFlexImageAndVideoFromMSS(
          e,
        ),
        m = d.mssImageSpecs,
        p = d.mssVideoSpecs;
      (m.forEach(function (e) {
        var t,
          n = (t = e.hash) != null ? t : e.url;
        n != null && c.add(n);
      }),
        p.forEach(function (e) {
          e.video_id != null && c.add(e.video_id);
        }));
      var _ = o(
        "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
      ).hasAnyOrigins(e, [
        "creative_flex",
        "format_liquidity_da_flexible_format_with_related_media",
      ]);
      if (
        ((l = o("AdsCAGAssetUtils")
          .getAllImageSpecs(e)
          .filter(function (e) {
            return (
              (e.hash != null && !c.has(e.hash)) ||
              (e.url != null && !c.has(e.url))
            );
          })
          .filter(function (e) {
            return _ || e.source === "related_media";
          })),
        (s = o("AdsCAGAssetUtils")
          .getAllVideoSpecs(e)
          .filter(function (e) {
            return e.video_id != null && !c.has(e.video_id);
          })
          .filter(function (e) {
            return _ || e.source === "related_media";
          })),
        c.size === 0 && l.length === 0 && s.length === 0)
      ) {
        var f,
          g =
            (f =
              t == null
                ? void 0
                : t.filter(function (e) {
                    return (
                      e.selection !==
                      o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_OUT
                    );
                  })) != null
              ? f
              : [];
        u = r
          ? g.slice(
              0,
              n != null
                ? n
                : o("AdsCreativeFlexConstants").RELATED_MEDIA_DEFAULT_COUNT,
            )
          : g;
      }
      return {
        cagImageSpecs: l,
        cagVideoSpecs: s,
        mssImageSpecs:
          (a =
            m == null
              ? void 0
              : m.filter(function (e) {
                  return (
                    e.opt_in_status !==
                    o("AdsCreativeMediaSourcingSpecTypes.flow")
                      .RelatedMediaOptInStatusSpecType.OPT_OUT
                  );
                })) != null
            ? a
            : [],
        mssVideoSpecs:
          (i =
            p == null
              ? void 0
              : p.filter(function (e) {
                  return (
                    e.opt_in_status !==
                    o("AdsCreativeMediaSourcingSpecTypes.flow")
                      .RelatedMediaOptInStatusSpecType.OPT_OUT
                  );
                })) != null
            ? i
            : [],
        recommendedMediaArray: u,
      };
    }
    function s(t) {
      var n = e(t),
        r = n.cagImageSpecs,
        o = n.cagVideoSpecs,
        a = n.mssImageSpecs,
        i = n.mssVideoSpecs,
        l = a.length > 0 || i.length > 0;
      return r.length > 0 || o.length > 0 || l;
    }
    function u(e) {
      return (
        o("DAFlexibleFormatUtils").hasRelatedMediaInSpec(e) &&
        (o("AdsRelatedMediaGroupingUtils").isRelatedMediaGroupingQEEnabled(
          !0,
        ) ||
          o(
            "AdsCreativeFlexGKCheckUtils",
          ).isEligibleForCreativeFlexDefaultOnFix())
      );
    }
    ((l.getAllOptInRelatedMediaSpecs = e),
      (l.isCreativeFlexOptedInAd = s),
      (l.shouldClearStaleRelatedMediaOnBaseChange = u));
  },
  98,
);
