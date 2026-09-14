__d(
  "AdsSuggestedProductTagsUtils",
  [
    "AdsInteractiveComponentConstants",
    "AdsPlacementAssetEligibilityUtils",
    "AdsPlacementAssetUtils",
    "AdsPlacementMediaRecommendationUtils",
    "AdsSuggestedProductTagsConstants",
    "AdsUIMediaFormat",
    "AsyncRequest",
    "IGStaticAdsSuggestedProductTagsSitevarConfig.experimental",
    "Promise",
    "QPLUserFlow",
    "XAdsSuggestedProductTagsController",
    "XAdsSuggestedProductTagsRemovalController",
    "gkx",
    "immutable",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 7e3,
      u = function (a) {
        var t = r("qpl")._(270212079, "833");
        a.isCarousel === !0
          ? ((t = r("qpl")._(270212083, "1663")),
            r("QPLUserFlow").getActiveFlowIDs().includes(270212083) ||
              r("QPLUserFlow").start(t, {
                annotations: {
                  string: { source: "carousel_spt_on_edit_dialog_open" },
                },
              }))
          : r("QPLUserFlow").getActiveFlowIDs().includes(270212079) ||
            r("QPLUserFlow").start(t, {
              annotations: { string: { source: "spt_on_edit_dialog_open" } },
            });
        var i = r("qpl")._(270213887, "2010");
        return (
          r("QPLUserFlow").getActiveFlowIDs().includes(270213887) ||
            r("QPLUserFlow").start(i, {
              annotations: { string: { source: "mcpt_on_edit_dialog_open" } },
            }),
          new (e || (e = n("Promise")))(function (e) {
            var n, l;
            new (r("AsyncRequest"))()
              .setURI(
                r("XAdsSuggestedProductTagsController")
                  .getURIBuilder()
                  .getURI(),
              )
              .setData({
                ad_account_id: a.accountID,
                catalog_ids: a.catalogIds,
                asset_hash_id: a.imageHashId,
                adgroup_id: a.adgroupID,
                is_shops_ad: a.isShopsAd,
                destination_link_url: a.destinationLinkUrl,
                trigger_source: a.triggerSource,
                is_carousel: a.isCarousel,
                auto_tags_ineligible_reasons: a.autoTagsIneligibleReason,
                availability_flags: a.availabilityFlags,
                fb_page_id:
                  (n = a.identityAccountIDs) == null ? void 0 : n.fbPageID,
                ig_account_id:
                  (l = a.identityAccountIDs) == null ? void 0 : l.igAccountID,
                matching_tag_request_types: a.matchingTagRequestTypes,
                picture_fbid: a.pictureFBID,
                video_fbid: a.videoFBID,
                ui_media_format: a.uiMediaFormat,
              })
              .setHandler(function (n) {
                var l,
                  s,
                  u,
                  c,
                  d,
                  m,
                  p,
                  _ =
                    (n == null ? void 0 : n.payload) != null &&
                    Array.isArray(
                      n == null || (l = n.payload) == null
                        ? void 0
                        : l.auto_tags,
                    ) &&
                    Array.isArray(
                      n == null || (s = n.payload) == null
                        ? void 0
                        : s.suggested_tags,
                    );
                if (
                  !_ ||
                  ((n == null || (u = n.payload) == null
                    ? void 0
                    : u.auto_tags.length) === 0 &&
                    (n == null || (c = n.payload) == null
                      ? void 0
                      : c.suggested_tags) === 0)
                )
                  (r("QPLUserFlow").addPoint(
                    t,
                    _
                      ? "spt_fetch_product_tags_empty_response"
                      : "spt_fetch_product_tags_invalid_response",
                  ),
                    r("QPLUserFlow").endFailure(
                      t,
                      "spt_fetch_product_tags_error",
                    ),
                    r("QPLUserFlow").addPoint(
                      i,
                      _
                        ? "mcpt_fetch_product_tags_empty_response"
                        : "mcpt_fetch_product_tags_invalid_response",
                    ),
                    r("QPLUserFlow").endFailure(
                      i,
                      "mcpt_fetch_product_tags_error",
                    ));
                else {
                  var f,
                    g = n.payload.auto_tags,
                    h = n.payload.auto_tags,
                    y = g.concat(h);
                  r("QPLUserFlow").addPoint(
                    t,
                    "spt_fetch_product_tags_success",
                    {
                      data: {
                        string: { responseString: JSON.stringify(n.payload) },
                        int: {
                          bestMatchedScore:
                            ((f = y[0]) == null ? void 0 : f.reranking_score) *
                            100,
                          number_of_tags_returned: y.length,
                        },
                        bool: { isShopsAds: a.isShopsAd },
                      },
                    },
                  );
                }
                if (!_)
                  return e({
                    value: [],
                    state: o("AdsSuggestedProductTagsConstants")
                      .SuggestedProductTagState.ERROR,
                  });
                var C =
                    n == null || (d = n.payload) == null ? void 0 : d.auto_tags,
                  b =
                    n == null || (m = n.payload) == null
                      ? void 0
                      : m.suggested_tags,
                  v =
                    n == null || (p = n.payload) == null
                      ? void 0
                      : p.product_set_id;
                return (
                  C.length !== 0 || b !== 0
                    ? r("QPLUserFlow").endSuccess(t)
                    : r("QPLUserFlow").endCancel(t),
                  (b == null ? void 0 : b.length) !== 0
                    ? (r("QPLUserFlow").addPoint(
                        i,
                        "spt_fetch_product_tags_success",
                        {
                          data: {
                            string: { responseString: JSON.stringify(a) },
                            string_array: {
                              productIds:
                                b == null
                                  ? void 0
                                  : b.map(function (e) {
                                      return e.product_id;
                                    }),
                            },
                            int_array: {
                              rerankingScores:
                                b == null
                                  ? void 0
                                  : b.map(function (e) {
                                      return e.reranking_score;
                                    }),
                            },
                            bool: { isShopsAds: a.isShopsAd },
                          },
                        },
                      ),
                      r("QPLUserFlow").endSuccess(i))
                    : r("QPLUserFlow").endCancel(i),
                  e({
                    medium_confidence_tags: b,
                    productSetID: v,
                    value: C,
                    state: o("AdsSuggestedProductTagsConstants")
                      .SuggestedProductTagState.LOADED,
                  })
                );
              })
              .setTimeoutHandler(s, function (n) {
                var a;
                return (
                  (a = r("QPLUserFlow")).addPoint(
                    t,
                    "spt_fetch_product_tags_timedout",
                  ),
                  a.endTimeout(t),
                  a.addPoint(i, "mcpt_fetch_product_tags_timedout"),
                  a.endTimeout(i),
                  e({
                    value: [],
                    state: o("AdsSuggestedProductTagsConstants")
                      .SuggestedProductTagState.ERROR,
                  })
                );
              })
              .setErrorHandler(function (n) {
                return (
                  r("QPLUserFlow").endFailure(
                    t,
                    "spt_fetch_product_tags_error",
                  ),
                  r("QPLUserFlow").endFailure(
                    i,
                    "mcpt_fetch_product_tags_error",
                  ),
                  e({
                    value: [],
                    state: o("AdsSuggestedProductTagsConstants")
                      .SuggestedProductTagState.ERROR,
                  })
                );
              })
              .send();
          })
        );
      };
    function c(e, t, n) {
      (t === void 0 && (t = !1), n === void 0 && (n = null));
      var a = e.value || [],
        i = r("immutable").List(
          a.map(function (e) {
            var n,
              a = e.dot_location,
              i = e.product_id,
              l = r("immutable").Map(
                ((n = {}), (n.product_id = i.toString()), n),
              );
            if (t) {
              var s;
              return r("immutable").Map(
                ((s = {}),
                (s.type = o(
                  "AdsInteractiveComponentConstants",
                ).SHOPPING_PRODUCT_TAG),
                (s.product_tag_spec = l),
                s),
              );
            } else {
              var u,
                c,
                d = r("immutable").Map(((u = {}), (u.x = a.x), (u.y = a.y), u));
              return r("immutable").Map(
                ((c = {}),
                (c.type = o(
                  "AdsInteractiveComponentConstants",
                ).SHOPPING_PRODUCT_TAG),
                (c.position_spec = d),
                (c.product_tag_spec = l),
                c),
              );
            }
          }),
        );
      return i.concat(n != null ? n : r("immutable").List());
    }
    function d(e) {
      var t = r("gkx")("21358"),
        n = o("AdsSuggestedProductTagsConstants").SPT_SUPPORTED_SURFACES;
      return (e || t || n.push("INSTAGRAM_STORY"), n);
    }
    function m(e) {
      var t = r("gkx")("21358"),
        n = o(
          "AdsSuggestedProductTagsConstants",
        ).SPT_SUPPORTED_ASPECT_TYPE_TO_ADS_PREVIEW_FORMAT;
      return (
        e === r("AdsUIMediaFormat").SINGLE_VIDEO ||
          t ||
          n.set("FULLSCREEN_VERTICAL", "INSTAGRAM_STORY"),
        n
      );
    }
    function p(e) {
      var t;
      return (t =
        e == null
          ? void 0
          : e.some(function (e) {
              return (
                e.reranking_score >
                r("IGStaticAdsSuggestedProductTagsSitevarConfig.experimental")
                  .ranking_score_threshold
              );
            })) != null
        ? t
        : !1;
    }
    function _(e) {
      switch (e) {
        case "carousel_video_asset_change":
          return "CAROUSEL_VIDEO_ASSET_CHANGE";
        case "carousel_image_asset_change":
          return "CAROUSEL_IMAGE_ASSET_CHANGE";
        case "carousel_new_image_upload":
          return "CAROUSEL_NEW_IMAGE_UPLOAD";
        case "carousel_new_video_upload":
          return "CAROUSEL_NEW_VIDEO_UPLOAD";
        case "image_change":
          return "SINGLE_MEDIA_ON_IMAGE_CHANGE";
        case "image_upload":
          return "SINGLE_MEDIA_IMAGE_UPLOAD";
        case "url_change":
          return "URL_CHANGE";
        case "existing_post_url_change":
          return "EXISTING_POST_URL_CHANGE";
        case "video_upload":
          return "SINGLE_MEDIA_VIDEO_UPLOAD";
        case "ig_existing_post_image_change_or_upload":
          return "EXISTING_POST_IG_IMAGE_UPLOAD_OR_CHANGE";
        default:
          return "UNKNOWN_EVENT";
      }
    }
    function f(e) {
      var t = "";
      return (
        e != null &&
          (Array.isArray(e)
            ? (t = e[0].toString())
            : typeof e == "string" && (t = e)),
        t
      );
    }
    function g(t) {
      return new (e || (e = n("Promise")))(function (e) {
        new (r("AsyncRequest"))()
          .setURI(
            r("XAdsSuggestedProductTagsRemovalController")
              .getURIBuilder()
              .getURI(),
          )
          .setData({
            ad_account_id: t.accountID,
            asset_hash_id: t.imageHashId,
            adgroup_id: t.adgroupID,
            removed_product_ids: t.removedProductIDs,
          })
          .send();
      });
    }
    function h(e, t, n) {
      return o("AdsPlacementAssetUtils")
        .getAssetGroupsFromPlacements(
          o("AdsPlacementMediaRecommendationUtils")
            .getPlacementsFromImageRecommendedAspectRatio(n)
            .filter(function (e) {
              return o(
                "AdsPlacementAssetEligibilityUtils",
              ).isEligiblePlacementForPlacementAssetCustomizationPhase2(e, t);
            }),
        )
        .filter(function (t) {
          return e.includes(t);
        })
        .toArray();
    }
    function y(e, t, n) {
      var o = d(e === r("AdsUIMediaFormat").SINGLE_VIDEO);
      if (
        !t.some(function (e) {
          return o.includes(e);
        })
      )
        return [];
      var a = m(e),
        i = [];
      return (
        a.forEach(function (e, r) {
          var o = h(t, n, r);
          i.push([e, o]);
        }),
        i
      );
    }
    function C(e) {
      return e != null &&
        o(
          "AdsSuggestedProductTagsConstants",
        ).SPT_UNSUPPORTED_CONVERSION_TYPES.includes(e)
        ? r("gkx")("22336")
        : !1;
    }
    var b = [
      "ig_existing_post_image_change_or_upload",
      "existing_post_url_change",
    ];
    function v(e) {
      return [
        "carousel_image_asset_change",
        "carousel_video_asset_change",
      ].includes(e);
    }
    ((l.fetchProductTagsApiCall = u),
      (l.buildInteractiveComponentsSpec = c),
      (l.fetchSupportedSurfaces = d),
      (l.fetchSupportedAspectTypeToAdsPreviewFormat = m),
      (l.hasHighConfidenceSuggestions = p),
      (l.getSuggestedTagsLoggerEvent = _),
      (l.calculateExistingPostWebsiteURL = f),
      (l.removeSuggestedProductIDs = g),
      (l.getEligibleAssetGroup = h),
      (l.getEligibleAssetGroupForToastCTA = y),
      (l.getIsUnsupportedConversionType = C),
      (l.EPA_TRIGGER_SOURCES = b),
      (l.isCarouselAssetChange = v));
  },
  98,
);
