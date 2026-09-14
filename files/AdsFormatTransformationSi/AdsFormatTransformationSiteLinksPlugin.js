__d(
  "AdsFormatTransformationSiteLinksPlugin",
  [
    "fbt",
    "AdsFlexibleFormatAdexUtils",
    "AdsFlexibleFormatConstants",
    "AdsFlexibleFormatPreviewVariationConfig",
    "AdsFlexibleFormatTransformationUtils",
    "AdsFormatTransformationUtils",
    "AdsImageStore",
    "AdsMetadataConnectedSourcesUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 1,
      u = {
        type: "format_transformation/data_source",
        key: "site_links",
        getDescription: function (t) {
          return null;
        },
        getIsCollapsed: function () {
          return !1;
        },
        getIsSelected: function (t, n) {
          return t.adObjectsList.some(function (e) {
            var t = e.adgroup;
            return n == null
              ? !1
              : o(
                  "AdsFlexibleFormatTransformationUtils",
                ).getHasOptedInSiteLinksForGivenTargetFormat(t, n);
          });
        },
        getIsEligible: function (n, r) {
          return n.isPCAUnifiedOldFlow
            ? !1
            : n.isPCAUnifiedScaledAlpha &&
                r !== "single_media" &&
                r !== "video_slideshow"
              ? !0
              : n.adObjectsList.some(function (t) {
                  var a,
                    i,
                    l,
                    s,
                    u = t.adgroup,
                    c = t.campaign,
                    d = t.campaignGroup,
                    m =
                      (a = u.creative) == null ||
                      (a = a.creative_sourcing_spec) == null ||
                      (a = a.site_links_data_consented) == null
                        ? void 0
                        : a.enroll_status,
                    p =
                      m != null
                        ? m === "OPT_IN"
                        : ((i =
                            (l = u.creative) == null ||
                            (l = l.creative_sourcing_spec) == null ||
                            (l = l.site_links_spec) == null
                              ? void 0
                              : l.size) != null
                            ? i
                            : 0) > 0 ||
                          ((s = u.creative) == null ||
                          (s = s.creative_sourcing_spec) == null ||
                          (s = s.dynamic_site_links_spec) == null
                            ? void 0
                            : s.enroll_status) === "OPT_IN",
                    _ =
                      o("AdsFlexibleFormatAdexUtils").shouldShowWHForAdShape(
                        u,
                      ) &&
                      o(
                        "AdsFlexibleFormatAdexUtils",
                      ).passGKForWHAdexIntegration() &&
                      o("AdsFlexibleFormatAdexUtils").isWebsiteHighlightAdopted(
                        u,
                      ) &&
                      o("AdsFlexibleFormatAdexUtils").countWebsiteMediaImageUrl(
                        u,
                      ) > 0,
                    f = p || _;
                  if (r == null)
                    return (
                      o(
                        "AdsMetadataConnectedSourcesUtils",
                      ).isEligibleForSiteExtensionsByCampaignAndAdgroup(
                        c,
                        d,
                        u,
                      ) && f
                    );
                  var g =
                    _ &&
                    o(
                      "AdsMetadataConnectedSourcesUtils",
                    ).isEligibleForWebsiteMediaByCampaignAndAdgroup(c, d, u);
                  if (
                    !f ||
                    (!o(
                      "AdsMetadataConnectedSourcesUtils",
                    ).isEligibleForSiteExtensionsByCampaignAndAdgroup(
                      c,
                      d,
                      u,
                    ) &&
                      !g)
                  )
                    return !1;
                  switch (r) {
                    case "carousel": {
                      var h;
                      return g
                        ? o(
                            "AdsFlexibleFormatAdexUtils",
                          ).countWebsiteMediaImageUrl(u) >= e
                        : o(
                            "AdsMetadataConnectedSourcesUtils",
                          ).countL1SpecImageUrl(u) >= e ||
                            ((h = u.creative) == null ||
                            (h = h.creative_sourcing_spec) == null ||
                            (h = h.dynamic_site_links_spec) == null
                              ? void 0
                              : h.enroll_status) === "OPT_IN";
                    }
                    case "sa_collection":
                      return p || g;
                    case "video_slideshow":
                      return p || g;
                    case "collage": {
                      var y;
                      return o(
                        "AdsFlexibleFormatAdexUtils",
                      ).isEligibleForEPAMultiMediaSurface(
                        u,
                        n.existingPostPhotoCount,
                      )
                        ? !1
                        : o(
                              "AdsFlexibleFormatPreviewVariationConfig",
                            ).isEligibleForSASingleToCollage(
                              u,
                              n.originalFormat,
                              !0,
                            )
                          ? g &&
                            o("AdsFlexibleFormatAdexUtils")
                              .getEligibleMixedCollageDataSources(u)
                              .includes("site_links")
                          : g
                            ? o(
                                "AdsFlexibleFormatAdexUtils",
                              ).countWebsiteMediaImageUrl(u) >= e
                            : o(
                                "AdsMetadataConnectedSourcesUtils",
                              ).countL1SpecImageUrl(u) >= e ||
                              ((y = u.creative) == null ||
                              (y = y.creative_sourcing_spec) == null ||
                              (y = y.dynamic_site_links_spec) == null
                                ? void 0
                                : y.enroll_status) === "OPT_IN";
                    }
                    default:
                      return !1;
                  }
                });
        },
        getIsAvailable: function (n, r) {
          return n.isPCAUnifiedScaledAlpha
            ? o(
                "AdsFormatTransformationUtils",
              ).getPcaUnificationUploadedMediaPresent(null, n)
              ? r == null
                ? !0
                : n.adObjectsList.some(function (t) {
                    var a,
                      i,
                      l,
                      s,
                      u = t.adgroup,
                      c = t.campaign,
                      d = t.campaignGroup,
                      m =
                        (a = u.creative) == null ||
                        (a = a.creative_sourcing_spec) == null ||
                        (a = a.site_links_data_consented) == null
                          ? void 0
                          : a.enroll_status,
                      p =
                        m != null
                          ? m === "OPT_IN"
                          : ((i =
                              (l = u.creative) == null ||
                              (l = l.creative_sourcing_spec) == null ||
                              (l = l.site_links_spec) == null
                                ? void 0
                                : l.size) != null
                              ? i
                              : 0) > 0 ||
                            ((s = u.creative) == null ||
                            (s = s.creative_sourcing_spec) == null ||
                            (s = s.dynamic_site_links_spec) == null
                              ? void 0
                              : s.enroll_status) === "OPT_IN",
                      _ =
                        o("AdsFlexibleFormatAdexUtils").shouldShowWHForAdShape(
                          u,
                        ) &&
                        o(
                          "AdsFlexibleFormatAdexUtils",
                        ).passGKForWHAdexIntegration() &&
                        o(
                          "AdsFlexibleFormatAdexUtils",
                        ).isWebsiteHighlightAdopted(u) &&
                        o(
                          "AdsFlexibleFormatAdexUtils",
                        ).countWebsiteMediaImageUrl(u) > 0,
                      f = p || _;
                    if (
                      !f ||
                      !o(
                        "AdsMetadataConnectedSourcesUtils",
                      ).isEligibleForSiteExtensionsByCampaignAndAdgroup(c, d, u)
                    )
                      return !1;
                    var g =
                      _ &&
                      o(
                        "AdsMetadataConnectedSourcesUtils",
                      ).isEligibleForWebsiteMediaByCampaignAndAdgroup(c, d, u);
                    switch (r) {
                      case "carousel": {
                        var h;
                        return g
                          ? o(
                              "AdsFlexibleFormatAdexUtils",
                            ).countWebsiteMediaImageUrl(u) >= e
                          : o(
                              "AdsMetadataConnectedSourcesUtils",
                            ).countL1SpecImageUrl(u) >= e ||
                              ((h = u.creative) == null ||
                              (h = h.creative_sourcing_spec) == null ||
                              (h = h.dynamic_site_links_spec) == null
                                ? void 0
                                : h.enroll_status) === "OPT_IN";
                      }
                      case "sa_collection":
                        return n.isPCAUnifiedScaledAlpha &&
                          !o(
                            "AdsFormatTransformationUtils",
                          ).getIsFormatEligiblePlacementsAvailable(
                            n,
                            r,
                            "site_links",
                          )
                          ? !1
                          : p || g;
                      default:
                        return !1;
                    }
                  })
              : !1
            : !0;
        },
        unavailableMessage: function (t, n) {
          if (t != null && t.isPCAUnifiedScaledAlpha) {
            var e =
              n != null
                ? !o(
                    "AdsFormatTransformationUtils",
                  ).getIsFormatEligiblePlacementsAvailable(t, n, "catalog")
                : !1;
            return o("AdsFormatTransformationUtils").genIsLastOptedInFormat(
              t,
              n,
              u,
            )
              ? o("AdsFlexibleFormatConstants").LAST_SELECTED_FORMAT_LOCKED
              : e
                ? o("AdsFlexibleFormatConstants")
                    .REQUIRED_PLACEMENTS_OFF_FOR_SE_COLLECTION
                : null;
          }
        },
        getTitle: function (t, n) {
          var e =
              (n == null ? void 0 : n.adObjectsList) &&
              n.adObjectsList[0].adgroup,
            r =
              e == null
                ? null
                : o("AdsMetadataConnectedSourcesUtils").countL1SpecImageUrl(e),
            a = o("AdsFlexibleFormatAdexUtils").shouldShowWHExperience(e);
          return t == null
            ? a
              ? o("AdsFlexibleFormatConstants")
                  .WEBSITE_HIGHLIGHT_SECTION_HEADING
              : r === 0
                ? o("AdsFlexibleFormatConstants")
                    .SITE_LINK_SECTION_HEADING_WITHOUT_MEDIA
                : o("AdsFlexibleFormatConstants").SITE_LINK_SECTION_HEADING
            : a
              ? (n == null ? void 0 : n.uxVersion) === "modal_format_preview"
                ? o("AdsFlexibleFormatConstants")
                    .USE_WEBSITE_HIGHLIGHT_FOR_FORMAT_TRANSFORMATION_LABEL_RC
                : o("AdsFlexibleFormatConstants")
                    .USE_WEBSITE_HIGHLIGHT_FOR_FORMAT_TRANSFORMATION_LABEL
              : (n == null ? void 0 : n.uxVersion) === "simplified_format_v2"
                ? o("AdsFlexibleFormatConstants")
                    .WITH_SITE_LINK_FOR_FORMAT_TRANSFORMATION_LABEL
                : r === 0
                  ? o("AdsFlexibleFormatConstants")
                      .USE_SITE_LINK_FOR_FORMAT_TRANSFORMATION_WITHOUT_MEDIA_LABEL
                  : (n == null ? void 0 : n.uxVersion) ===
                      "modal_format_preview"
                    ? o("AdsFlexibleFormatConstants")
                        .USE_SITE_LINK_FOR_FORMAT_TRANSFORMATION_LABEL_RC
                    : o("AdsFlexibleFormatConstants")
                        .USE_SITE_LINK_FOR_FORMAT_TRANSFORMATION_LABEL;
        },
        imageSrcs: function (t) {
          var e,
            n = t.adObjectsList[0].adgroup,
            a = n.account_id,
            i =
              (e = n.creative) == null || (e = e.creative_sourcing_spec) == null
                ? void 0
                : e.site_links_spec,
            l =
              i == null
                ? void 0
                : i
                    .map(function (e) {
                      var t = e == null ? void 0 : e.toJS(),
                        n = t == null ? void 0 : t.site_link_image_url;
                      if (n != null) return String(n);
                      var o = t == null ? void 0 : t.site_link_image_hash;
                      if (o != null && a != null) {
                        var i = r("AdsImageStore").getImageDataFromHash(
                          String(a),
                          String(o),
                        );
                        if (i.url) return i.url;
                      }
                      return null;
                    })
                    .filter(Boolean),
            s = l == null ? [] : l.toArray();
          if (s.length > 0) return s;
          if (
            o("AdsFlexibleFormatAdexUtils").shouldShowWHForAdShape(n) &&
            o("AdsFlexibleFormatAdexUtils").passGKForWHAdexIntegration(!0) &&
            o("AdsFlexibleFormatAdexUtils").isWebsiteHighlightAdopted(n)
          ) {
            var u,
              c =
                (u = n.creative) == null ||
                (u = u.creative_sourcing_spec) == null ||
                (u = u.website_media_spec) == null
                  ? void 0
                  : u.media;
            if (c != null) {
              var d = [];
              if (
                (c.forEach(function (e) {
                  var t = e == null ? void 0 : e.get("image_url");
                  t != null && d.push(String(t));
                }),
                d.length > 0)
              )
                return d;
            }
          }
          return [];
        },
        formatModalPreviewConfig: function (t, n) {
          if (t === "carousel") {
            var e =
                (n == null ? void 0 : n.adObjectsList) &&
                n.adObjectsList[0].adgroup,
              r = o("AdsFlexibleFormatAdexUtils").shouldShowWHExperience(e);
            return r
              ? {
                  previewDescription: s._(
                    /*BTDS*/ "Show uploaded media in the intro card, followed by website highlights.",
                  ),
                }
              : {
                  previewDescription: o(
                    "AdsFlexibleFormatAdexUtils",
                  ).isIneligibleForFDODueToMMU()
                    ? s._(
                        /*BTDS*/ "Show uploaded media in the intro card and site link media in the other cards.",
                      )
                    : s._(
                        /*BTDS*/ "Show the first media you selected from your uploaded media in the intro card, then site link media in the other cards.",
                      ),
                };
          }
          if (t === "sa_collection") {
            var a =
              (n == null ? void 0 : n.adObjectsList) &&
              n.adObjectsList[0].adgroup;
            return o("AdsFlexibleFormatAdexUtils").shouldShowWHExperience(a)
              ? {
                  previewDescription: s._(
                    /*BTDS*/ "Show uploaded media as a cover and website highlights as tiles.",
                  ),
                }
              : {
                  previewDescription: o(
                    "AdsFlexibleFormatAdexUtils",
                  ).isIneligibleForFDODueToMMU()
                    ? s._(
                        /*BTDS*/ "Show uploaded media in the intro card and site link media in the tiles.",
                      )
                    : s._(
                        /*BTDS*/ "Show the first media you selected from your uploaded media in the cover and site link media in the tiles.",
                      ),
                };
          }
          if (t === "video_slideshow") {
            var i =
              (n == null ? void 0 : n.adObjectsList) &&
              n.adObjectsList[0].adgroup;
            return o("AdsFlexibleFormatAdexUtils").shouldShowWHExperience(i)
              ? {
                  previewDescription: s._(
                    /*BTDS*/ "Show uploaded media followed by website highlights together in a video slideshow.",
                  ),
                }
              : {};
          }
          return t === "collage"
            ? {
                previewDescription: s._(
                  /*BTDS*/ "Combine website highlight images into a single collage creative.",
                ),
              }
            : {};
        },
        tooltipMessage: function (t) {
          return t != null && t.isPCAUnifiedScaledAlpha
            ? null
            : o("AdsFlexibleFormatConstants")
                .SITE_LINKS_SECTION_HEADING_TOOLTIP;
        },
      },
      c = u;
    l.default = c;
  },
  226,
);
