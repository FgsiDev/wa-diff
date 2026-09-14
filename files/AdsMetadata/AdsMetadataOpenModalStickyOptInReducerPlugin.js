__d(
  "AdsMetadataOpenModalStickyOptInReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupStickyOptInMutators",
    "AdsConnectedSourcesModalOpenActionFlux",
    "AdsInterfacesLogger",
    "AdsMetadataBrandKitUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "adsUEditorAdgroupWebsiteMediaExtensionEligibilitySelector",
    "adsUEditorAdgroupWebsiteSummaryExtensionEligibilitySelector",
    "adsUEditorMetadataBrandKitOptOutTimestampEligibilitySelector",
    "adsUEditorMetadataBrandkitDefaultOnEligibilitySelector",
    "adsUEditorMetadataBrandkitStickyOptInSelector",
    "adsUEditorWebsiteMediaStickyOptInSelector",
    "adsUEditorWebsiteReviewsStickyOptInSelector",
    "adsUEditorWebsiteSellingPointsStickyOptInSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            isBrandkitDefaultOnEligible: o(
              "adsUEditorMetadataBrandkitDefaultOnEligibilitySelector",
            ).adsUEditorMetadataBrandkitDefaultOnEligibilitySelector,
            isBrandkitOptOutTimestampEligible: o(
              "adsUEditorMetadataBrandKitOptOutTimestampEligibilitySelector",
            ).adsUEditorMetadataBrandKitOptOutTimestampEligibilitySelector,
            isEligibleForWebsiteMedia: o(
              "adsUEditorAdgroupWebsiteMediaExtensionEligibilitySelector",
            ).adsUEditorAdgroupWebsiteMediaExtensionEligibilitySelector,
            isEligibleForWebsiteSummary: o(
              "adsUEditorAdgroupWebsiteSummaryExtensionEligibilitySelector",
            ).adsUEditorAdgroupWebsiteSummaryExtensionEligibilitySelector,
            isStickyBrandkitOptInFlag: o(
              "adsUEditorMetadataBrandkitStickyOptInSelector",
            ).adsUEditorMetadataBrandkitStickyOptInSelector,
            isStickyReviewsOptInFlag: o(
              "adsUEditorWebsiteReviewsStickyOptInSelector",
            ).adsUEditorWebsiteReviewsStickyOptInSelector,
            isStickySellingPointsOptInFlag: o(
              "adsUEditorWebsiteSellingPointsStickyOptInSelector",
            ).adsUEditorWebsiteSellingPointsStickyOptInSelector,
            isStickyWebsiteMediaOptInFlag: o(
              "adsUEditorWebsiteMediaStickyOptInSelector",
            ).adsUEditorWebsiteMediaStickyOptInSelector,
          },
          function (e, t, n) {
            var a = n.isBrandkitDefaultOnEligible,
              i = n.isBrandkitOptOutTimestampEligible,
              l = n.isEligibleForWebsiteMedia,
              s = n.isEligibleForWebsiteSummary,
              u = n.isStickyBrandkitOptInFlag,
              c = n.isStickyReviewsOptInFlag,
              d = n.isStickySellingPointsOptInFlag,
              m = n.isStickyWebsiteMediaOptInFlag,
              p = t.adgroupIDs;
            return p == null
              ? e
              : o("AdsMutators").mutateEach(e, p, function (e) {
                  var t,
                    n,
                    p = e,
                    _ =
                      ((t = e.creative) == null ||
                      (t = t.creative_sourcing_spec) == null ||
                      (t = t.brand) == null
                        ? void 0
                        : t.enroll_status) != null,
                    f = a.hasValueWithoutError() && a.getValue() === !0,
                    g = i.hasValueWithoutError() && i.getValue() === !0;
                  if (f && g)
                    p = o("AdsMutators").chain(
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.creative_sourcing_spec.brand.enroll_status.set(
                        "OPT_IN",
                      ),
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.creative_sourcing_spec.brand.action_metadata.type.set(
                        "DEFAULT_OPT_IN",
                      ),
                    )(e);
                  else if (
                    !_ &&
                    o(
                      "AdsMetadataBrandKitUtils",
                    ).isEligibleForBrandKitStickyOptIn() &&
                    u.hasValueWithoutError()
                  ) {
                    var h = u.getValue() === !0 ? "OPT_IN" : "OPT_OUT";
                    p = o("AdsMutators").chain(
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.creative_sourcing_spec.brand.enroll_status.set(
                        h,
                      ),
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.creative_sourcing_spec.brand.action_metadata.type.set(
                        "STICKY",
                      ),
                    )(e);
                  }
                  s &&
                    (p = o(
                      "AdsAdgroupStickyOptInMutators",
                    ).applyWebsiteSummaryStickyOptInMutator(e, p, c, d));
                  var y =
                      (n = e.creative) == null ||
                      (n = n.creative_sourcing_spec) == null
                        ? void 0
                        : n.website_media_spec,
                    C = l
                      ? o(
                          "AdsAdgroupStickyOptInMutators",
                        ).applyWebsiteMediaStickyOptInMutator(e, p, m)
                      : p;
                  if (C !== p) {
                    var b,
                      v,
                      S = m.getValue() === !0 ? "OPT_IN" : "OPT_OUT";
                    p = C;
                    var R = y == null ? void 0 : y.media;
                    r("AdsInterfacesLogger").log({
                      eventName: "website_media_sticky_opt_in_applied",
                      data:
                        ((v = {}),
                        (v.subsequent_data = JSON.stringify({
                          newEnrollStatus: S,
                          hasMedia: R != null,
                          mediaLength:
                            (b = R == null ? void 0 : R.size) != null ? b : 0,
                          mediaIsNull: R === null,
                          mediaIsUndefined: R === void 0,
                          isExistingPost: o(
                            "AdsAPIAdgroupRecordUtils",
                          ).isExistingPostAd(e),
                        })),
                        v),
                    });
                  }
                  return p;
                });
          },
          [r("AdsConnectedSourcesModalOpenActionFlux").actionType],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
