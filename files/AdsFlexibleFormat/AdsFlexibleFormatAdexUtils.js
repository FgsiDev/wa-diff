__d(
  "AdsFlexibleFormatAdexUtils",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAssetFeedUtils",
    "AdsAutomaticFlowUtils",
    "AdsChildAttachmentsUtils",
    "AdsCreativeFlexAssetUtils",
    "AdsDynamicAdsFormatUtils",
    "AdsDynamicAdsUtils",
    "AdsFlexibleFormatDAUtils",
    "AdsFlexibleFormatPacCarouselUtils",
    "AdsMetadataConnectedSourcesUtils",
    "AdsObjectTypeUtils",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsSensitiveVerticalUtils",
    "AdsUEditorMessagingDestinationUtils",
    "AdsWizardMediaPickerMultiUploadUtils",
    "ApiAdObjectTypes",
    "ClickToWhatsAppFeatureGating",
    "DAFlexibleFormatUtils",
    "DeepRecordUtils",
    "IGAdsSensitiveVerticalsUtils",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3,
      s = 10,
      u = 10,
      c = ["carousel", "collage", "sa_collection", "video_slideshow"],
      d = ["carousel", "collage", "sa_collection"];
    function m(e, t) {
      return t != null &&
        (ce(t) || o("AdsAPIAdgroupRecordUtils").isExistingPostMultiPhotoAd(t))
        ? e.filter(function (e) {
            return e !== "collage";
          })
        : ne()
          ? e.filter(function (e) {
              return e !== "collage";
            })
          : re(!0)
            ? [].concat(e)
            : e.filter(function (e) {
                return e !== "collage";
              });
    }
    var p = ["carousel", "video_slideshow"],
      _ = ["simplified_format", "simplified_format_v2"];
    function f(e) {
      var t = e.creative;
      return t == null || Object.keys(t).length === 0;
    }
    function g(e) {
      return (
        (o("AdsWizardMediaPickerMultiUploadUtils").isEligibleForMultiUpload(
          "silent",
        ) ||
          (e != null &&
            o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
              e,
              "multi_media",
            ))) &&
        !r("gkx")("22874")
      );
    }
    function h(e, t) {
      return g(t) ? !1 : r("gkx")("12020") || F(e) || se(t);
    }
    function y(e, t, n) {
      return g(n) ? !1 : F(t) || se(n);
    }
    function C(e, t, n, a) {
      return o("AdsPCAUnifiedFormatEligibilityUtils").isEligiblePCAUnifiedL1(
        t,
        n,
      ) || S(n, a)
        ? "modal_format_preview"
        : o(
              "AdsMetadataConnectedSourcesUtils",
            ).isEligibleForCESCreativeSetupWithAppInfo(e, t, n) ||
            t.objective === r("AdsAPIObjectives").APP_INSTALLS
          ? "simplified_format"
          : b(e, t, n);
    }
    function b(e, t, n) {
      return o("AdsDynamicAdsUtils").isDynamicAd(n) &&
        o(
          "DAFlexibleFormatUtils",
        ).isAdgroupEligibleForDACarouselIntroCardRevamp(n, !1)
        ? "simplified_format"
        : "format";
    }
    var v = [
      "sa_single_image",
      "sa_carousel",
      "da_carousel",
      "epa_single_media",
      "epa_multi_medias",
    ];
    function S(e, t) {
      if (r("justknobx")._("695") || !v.includes(t)) return !1;
      var n = !o("AdsDynamicAdsUtils").isDynamicAd(e),
        a =
          o("AdsDynamicAdsUtils").isDynamicAd(e) &&
          o("AdsDynamicAdsFormatUtils").getIsDynamicAdCarouselMediaFormat(e);
      return !n && !a
        ? !1
        : o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals()
          ? !0
          : R();
    }
    function R(e) {
      return e === !0 ? r("gkx")("25281") : r("gkx")("13894");
    }
    function L(e) {
      return e === !0 ? r("gkx")("8565") : r("gkx")("8668");
    }
    function E(e) {
      return r("IGAdsSensitiveVerticalsUtils")
        .is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        ? !1
        : e === !0
          ? r("gkx")("16555")
          : r("gkx")("16556");
    }
    function k(e) {
      var t;
      return (
        ((t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null ||
        (t = t.website_media_spec) == null
          ? void 0
          : t.enroll_status) === "OPT_IN"
      );
    }
    function I() {
      return r("gkx")("1504");
    }
    function T(e) {
      return e == null || !o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)
        ? !0
        : I();
    }
    function D(e) {
      var t;
      if (e == null || !o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e))
        return !0;
      var n = (t = e.creative) == null ? void 0 : t.object_type,
        a =
          n === r("ApiAdObjectTypes").PHOTO ||
          n === r("ApiAdObjectTypes").VIDEO;
      return a && I();
    }
    function x(e) {
      return e === !0 ? r("gkx")("21512") : r("gkx")("22841");
    }
    function $(e) {
      return e == null || !D(e) ? !1 : E(!0) && k(e) && w(e) > 0;
    }
    function P(e) {
      return e == null || !T(e) ? !1 : E(!0) && k(e) && w(e) > 0;
    }
    function N(e) {
      return D(e) ? x(!0) || $(e) : !1;
    }
    function M(e) {
      var t,
        n =
          e == null ||
          (t = e.creative) == null ||
          (t = t.creative_sourcing_spec) == null ||
          (t = t.site_links_data_consented) == null
            ? void 0
            : t.enroll_status;
      return n != null ? n === "OPT_IN" : !1;
    }
    function w(e) {
      var t,
        n = o("DeepRecordUtils").maybeToPlainObject(
          (t = e.creative) == null || (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.website_media_spec,
        ),
        r = n == null ? void 0 : n.media;
      if (r == null) return 0;
      var a = 0;
      return (
        r.forEach(function (e) {
          (e == null ? void 0 : e.image_url) != null && a++;
        }),
        a
      );
    }
    function A(e) {
      var t,
        n,
        r,
        o,
        a =
          (t = e.creative) == null ||
          (t = t.creative_sourcing_spec) == null ||
          (t = t.site_links_data_consented) == null
            ? void 0
            : t.enroll_status,
        i =
          (n =
            (r = e.creative) == null ||
            (r = r.creative_sourcing_spec) == null ||
            (r = r.site_links_spec) == null
              ? void 0
              : r.size) != null
            ? n
            : 0,
        l =
          (o = e.creative) == null ||
          (o = o.creative_sourcing_spec) == null ||
          (o = o.dynamic_site_links_spec) == null
            ? void 0
            : o.enroll_status,
        s = (a !== "OPT_OUT" && i > 0) || l === "OPT_IN";
      return s ? !0 : T(e) && E(!0) ? k(e) && w(e) > 0 : !1;
    }
    function F(e) {
      return r("gkx")("12123")
        ? (o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals(), !0)
        : !1;
    }
    function O(e) {
      return r("IGAdsSensitiveVerticalsUtils")
        .is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        ? !1
        : e === !0
          ? r("qex")._("2524") === !0 ||
            (r("gkx")("12123") && r("gkx")("10141"))
          : r("qex")._("2525") === !0 ||
            (r("gkx")("12123") && r("gkx")("10159"));
    }
    function B(e) {
      return !(
        r("IGAdsSensitiveVerticalsUtils").is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
      );
    }
    function W(e, t, n, a) {
      return (!o(
        "AdsMetadataConnectedSourcesUtils",
      ).isEligibleForCESCreativeSetupWithPE(e, t, n) &&
        !o(
          "AdsMetadataConnectedSourcesUtils",
        ).isEligibleForCESCreativeSetupWithSE(e, t, n)) ||
        g(n) ||
        (e.destination_type === r("AdCampaignDestination").WHATSAPP &&
          o("ClickToWhatsAppFeatureGating").isLegacyCTWAPETargetingEligible() &&
          !r("gkx")("8700")) ||
        (o("AdsUEditorMessagingDestinationUtils").isCTM(e.destination_type) &&
          o("AdsMetadataConnectedSourcesUtils").isEligibleAdAccount() &&
          !r("gkx")("20754"))
        ? !1
        : F(a);
    }
    function q(e, t, n, a) {
      return !o(
        "AdsMetadataConnectedSourcesUtils",
      ).isEligibleForCESCreativeSetupWithPEOrSEOrAppInfo(e, t, n) ||
        g(n) ||
        (e.destination_type === r("AdCampaignDestination").WHATSAPP &&
          o("ClickToWhatsAppFeatureGating").isLegacyCTWAPETargetingEligible() &&
          !r("gkx")("8700")) ||
        (o("AdsUEditorMessagingDestinationUtils").isCTM(e.destination_type) &&
          o("AdsMetadataConnectedSourcesUtils").isEligibleAdAccount() &&
          !r("gkx")("20754"))
        ? !1
        : o(
              "AdsMetadataConnectedSourcesUtils",
            ).isEligibleForCESCreativeSetupWithAppInfo(e, t, n) &&
            !r("IGAdsSensitiveVerticalsUtils")
              .is_pharma_or_sensitive_vertical &&
            !r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
          ? !0
          : F(a);
    }
    function U(e, t, n) {
      var r;
      return (
        (!f(n) && q(e, t, n)) ||
        ((!f(n) ||
          ((r = n.creative) == null || (r = r.creative_sourcing_spec) == null
            ? void 0
            : r.associated_product_set_id) != null) &&
          o("AdsPCAUnifiedFormatEligibilityUtils").isEligiblePCAUnifiedL1(
            t,
            n,
          )) ||
        (!f(n) &&
          o("AdsAPIAdgroupRecordUtils").isExistingPostAd(n) &&
          (o("AdsAPIAdgroupRecordUtils").isExistingPostMultiPhotoAd(n) ||
            o(
              "AdsMetadataConnectedSourcesUtils",
            ).isEligibleForSiteExtensionsByCampaignAndAdgroup(e, t, n) ||
            o(
              "AdsMetadataConnectedSourcesUtils",
            ).isEligibleForCatalogByCampaignAndAdgroup(e, t, n) ||
            o(
              "AdsMetadataConnectedSourcesUtils",
            ).isEligibleForWebsiteMediaByCampaignAndAdgroup(e, t, n)) &&
          ge())
      );
    }
    function V(e, t, n) {
      return f(e) ||
        (o("AdsObjectTypeUtils").isDynamicProductAd(e) &&
          o("ClickToWhatsAppFeatureGating").isEligibleForCTXAdvantageCatalog(
            t.destination_type,
            !1,
          ))
        ? !1
        : o("AdsFlexibleFormatDAUtils").isReactiveControlCardVisibleForDA(e)
          ? !0
          : !o("AdsObjectTypeUtils").isDynamicProductAd(e) &&
              o("AdsChildAttachmentsUtils").isStaticCarouselAd(e)
            ? !o("AdsChildAttachmentsUtils").isCarouseAdWithAtLeastXMedia(
                e,
                n,
                2,
              ) ||
              !o("AdsChildAttachmentsUtils").isCarouseAdWithAtLeastXImages(
                e,
                n,
                1,
              )
              ? !1
              : H()
            : !o("AdsObjectTypeUtils").isDynamicProductAd(e) &&
                o("AdsAssetFeedUtils").hasPACCarouselFormat(e)
              ? !G(t) ||
                !o(
                  "AdsFlexibleFormatPacCarouselUtils",
                ).isPacCarouselWithAtLeastXMedia(e, 2) ||
                !o(
                  "AdsFlexibleFormatPacCarouselUtils",
                ).isPacCarouselWithAtLeastXImages(e, 1)
                ? !1
                : o("AdsFlexibleFormatPacCarouselUtils").passGKForPACCarousel()
              : !1;
    }
    function H() {
      return r("gkx")("12224")
        ? (o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals(), !0)
        : !1;
    }
    function G(e) {
      var t = e.targeting.facebook_positions,
        n = e.targeting.instagram_positions,
        o = e.targeting.device_platforms,
        a =
          (t == null ? void 0 : t.includes("feed")) === !0 ||
          (n == null ? void 0 : n.includes("stream")) === !0,
        i = o == null || o.includes(r("AdsAPIDevicePlatform").MOBILE);
      return a && i;
    }
    function z() {
      return r("IGAdsSensitiveVerticalsUtils")
        .is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        ? !1
        : r("gkx")("21570");
    }
    function j() {
      return r("IGAdsSensitiveVerticalsUtils")
        .is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        ? !1
        : r("gkx")("21573");
    }
    function K(e) {
      return r("IGAdsSensitiveVerticalsUtils")
        .is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        ? !1
        : e === !0
          ? r("gkx")("23676")
          : r("gkx")("21571");
    }
    function Q(e) {
      return r("IGAdsSensitiveVerticalsUtils")
        .is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        ? !1
        : e === !0
          ? r("gkx")("23678")
          : r("gkx")("21574");
    }
    function X() {
      return r("gkx")("7425") || r("gkx")("5171");
    }
    function Y(e) {
      return r("IGAdsSensitiveVerticalsUtils")
        .is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        ? !1
        : e === !0
          ? r("gkx")("23138")
          : r("gkx")("20180");
    }
    function J(e) {
      return e === !0 ? r("gkx")("6354") : r("gkx")("23571");
    }
    function Z(e) {
      return te() ? !1 : ee(e);
    }
    function ee(e) {
      return e === !0 ? r("gkx")("19503") : r("gkx")("19551");
    }
    function te() {
      return (
        o("AdsSensitiveVerticalUtils").isAdAccountOnBig6AgencyBlocklist() ||
        o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals()
      );
    }
    function ne() {
      return (
        o("AdsSensitiveVerticalUtils").isAdAccountOnBig6AgencyBlocklist() ||
        o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals()
      );
    }
    function re(e) {
      return e === !0 ? r("gkx")("1642") : r("gkx")("2450");
    }
    var oe = e - 1;
    function ae(t) {
      return t != null &&
        o("AdsAutomaticFlowUtils").isStaticSingleVideoFormat(t)
        ? e
        : oe;
    }
    var ie = "site_links";
    function le(e) {
      var t, n;
      if (e == null) return [];
      var r = [],
        o = (t = e.creative) == null ? void 0 : t.creative_sourcing_spec;
      return (
        (o == null || (n = o.catalog) == null ? void 0 : n.enroll_status) ===
          "OPT_IN" &&
          (o == null ? void 0 : o.associated_product_set_id) != null &&
          r.push("catalog"),
        $(e) && w(e) >= ae(e) && r.push("site_links"),
        r
      );
    }
    function se(e) {
      return e == null || !o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)
        ? !1
        : Z(!0);
    }
    function ue(e) {
      var t = e == null ? void 0 : e.creative;
      return e == null ||
        t == null ||
        t.object_story_spec != null ||
        t.object_story_id != null ||
        t.source_instagram_media_id != null ||
        t.source_facebook_post_id != null ||
        t.object_type !== r("ApiAdObjectTypes").SHARE ||
        t.object_id == null
        ? !1
        : Z(!0);
    }
    function ce(e) {
      return (
        !o("AdsObjectTypeUtils").isDynamicProductAd(e) &&
        o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e) &&
        !o("AdsAPIAdgroupRecordUtils").isExistingPostMultiPhotoAd(e)
      );
    }
    function de(e) {
      return e == null || !ce(e) ? !1 : Z(!0);
    }
    function me(e) {
      return e == null ||
        !o("AdsAPIAdgroupRecordUtils").isExistingPostMultiPhotoAd(e)
        ? !1
        : Z(!0);
    }
    function pe(e) {
      return (
        e === "sa_single_image" ||
        e === "epa_single_media" ||
        e === "epa_multi_medias"
      );
    }
    function _e() {
      return r("gkx")("19787") && r("gkx")("17644");
    }
    function fe() {
      r("gkx")("19795");
    }
    function ge() {
      return Z();
    }
    function he() {
      return _e() ? "photo_collage" : "collage";
    }
    function ye(e) {
      return e == null ||
        (!o("AdsObjectTypeUtils").isDynamicProductAd(e) &&
          (o("AdsChildAttachmentsUtils").isStaticCarouselAd(e) ||
            (o("AdsAssetFeedUtils").hasPACCarouselFormat(e) &&
              o("AdsFlexibleFormatPacCarouselUtils").passGKForPACCarousel(
                !0,
              )))) ||
        de(e) ||
        me(e)
        ? !1
        : o("AdsAutomaticFlowUtils").isStaticSingleImageOrVideoFormat(e) &&
            !o("AdsAPIAdgroupRecordUtils").isFlexibleFormatAd(e);
    }
    function Ce(e) {
      return e != null &&
        o("AdsAPIAdgroupRecordUtils").isExistingPostMultiPhotoAd(e) &&
        ee(!0)
        ? "photo_collage"
        : he();
    }
    function be(e, t, n, r, o) {
      var a = e.originalFormat;
      if (a == null) return null;
      var i =
          o == null
            ? void 0
            : o.findIndex(function (t) {
                return t.original_format === e.originalFormat;
              }),
        l = 0,
        s = null,
        c = null;
      if (o != null && i != null && i !== -1) {
        var d, m, p, _;
        ((s = (d = o[i].sticky_settings) != null ? d : []),
          (c =
            (m = s) == null ||
            (m = m.find(function (e) {
              return e.key === t;
            })) == null
              ? void 0
              : m.value),
          (l =
            (p =
              (_ = c) == null ||
              (_ = _.find(function (e) {
                return e.data_source === n;
              })) == null
                ? void 0
                : _.opt_out_count) != null
              ? p
              : 0));
      }
      var f = {
          data_source: n,
          opt_out_count: r ? (l > u ? l : l + 1) : 0,
          updated_time: Date.now().toString(),
          status: r ? "OPT_OUT" : "OPT_IN",
        },
        g = {
          impression_count: 1,
          original_format: a,
          sticky_settings: [{ key: t, value: [f] }],
          feedback_impression_count: 0,
        };
      return o == null
        ? [babelHelpers.extends({}, g)]
        : i === -1
          ? [].concat(o != null ? o : [], [babelHelpers.extends({}, g)])
          : o == null
            ? void 0
            : o.map(function (e) {
                var r, o;
                if (e.original_format !== a) return e;
                var i =
                    (r = c) == null
                      ? void 0
                      : r.find(function (e) {
                          return e.data_source === n;
                        }),
                  l =
                    (o = s) == null
                      ? void 0
                      : o.findIndex(function (e) {
                          return e.key === t;
                        }),
                  u = s != null ? s : [];
                if (l == null || l === -1 || l > u.length - 1)
                  u = [].concat(u, [{ key: t, value: [f] }]);
                else {
                  var d, m;
                  u[l].value = i
                    ? (d =
                        (m = c) == null
                          ? void 0
                          : m.map(function (e) {
                              return e.data_source === n ? f : e;
                            })) != null
                      ? d
                      : []
                    : [].concat(c != null ? c : [], [f]);
                }
                return babelHelpers.extends({}, e, { sticky_settings: u });
              });
    }
    function ve(e) {
      return (
        e === void 0 && (e = !1),
        o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals() ||
          e === !0
      );
    }
    function Se(e, t, n) {
      var r = e.originalFormat;
      if (r == null) return null;
      var o =
        t == null
          ? void 0
          : t.findIndex(function (t) {
              return t.original_format === e.originalFormat;
            });
      return t == null || o === -1
        ? null
        : t == null
          ? void 0
          : t.map(function (e) {
              var t;
              return e.original_format !== r
                ? e
                : babelHelpers.extends({}, e, {
                    feedback_impression_count:
                      ((t = e.feedback_impression_count) != null ? t : 0) + 1,
                    feedback_last_impression_timestamp: Date.now().toString(),
                    feedback_last_response_timestamp: n
                      ? Date.now().toString()
                      : e.feedback_last_response_timestamp,
                  });
            });
    }
    function Re(e, t, n, r) {
      if (e.hasValue()) {
        var o,
          a = e.getValue(),
          i = a == null ? void 0 : a.reactive_control_settings;
        return i == null ||
          (o = i.find(function (e) {
            return e.original_format === t;
          })) == null ||
          (o = o.sticky_settings) == null ||
          (o = o.find(function (e) {
            return e.key === n;
          })) == null ||
          (o = o.value) == null ||
          (o = o.find(function (e) {
            return e.data_source === r;
          })) == null
          ? void 0
          : o.status;
      }
      return null;
    }
    function Le(e) {
      switch (e) {
        case "DEFAULT":
          return "DEFAULT";
        case "STICKY":
          return "STICKY";
        case "MANUAL":
          return "MANUAL";
        default:
          return null;
      }
    }
    function Ee(e, t) {
      var n, r;
      if (e == null || !t.isPCAUnifiedScaledAlpha) return e;
      var o =
          (n = t.adObjectsList) == null || (n = n[0]) == null
            ? void 0
            : n.adgroup,
        a =
          o == null ||
          (r = o.creative) == null ||
          (r = r.creative_sourcing_spec) == null ||
          (r = r.product_media_metadata_spec) == null
            ? void 0
            : r.multi_share_end_card;
      if (a == null) return e;
      var i = e.applyAdgroupMutationsForPage;
      return babelHelpers.extends({}, e, {
        applyAdgroupMutationsForPage: function (t, n, r) {
          var e = i != null ? i(t, n, r) : t;
          return e.setIn(
            [
              "creative",
              "creative_sourcing_spec",
              "product_media_metadata_spec",
              "multi_share_end_card",
            ],
            a,
          );
        },
      });
    }
    function ke(e, t, n) {
      var r = [],
        a = se(e);
      return (
        (o(
          "AdsMetadataConnectedSourcesUtils",
        ).isEligibleForCESCreativeSetupWithSE(t, n, e) ||
          o(
            "AdsMetadataConnectedSourcesUtils",
          ).isEligibleForCESCreativeSetupWithWebsiteMedia(t, n, e) ||
          a) &&
          r.push("site_links"),
        (o(
          "AdsMetadataConnectedSourcesUtils",
        ).isEligibleForCESCreativeSetupWithPE(t, n, e) ||
          a) &&
          r.push("catalog"),
        o(
          "AdsMetadataConnectedSourcesUtils",
        ).isEligibleForCESCreativeSetupWithAppInfo(t, n, e) &&
          r.push("app_information"),
        r
      );
    }
    function Ie() {
      return r("gkx")("23611");
    }
    function Te(e, t) {
      return !(
        e == null ||
        t == null ||
        !o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
          e,
          "multi_media",
        ) ||
        !o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators").hasAnyOrigins(t, [
          "flexible_format",
          "creative_asset_groups",
        ])
      );
    }
    ((l.COLLAGE_MIN_IMAGE_COUNT = e),
      (l.MAXIUM_IMPRESSION_COUNT_IN_RECORD = s),
      (l.SA_SINGLE_SE_SUPPORTED_FORMATS = c),
      (l.SA_SINGLE_PE_SUPPORTED_FORMATS = d),
      (l.withSASingleCollageGate = m),
      (l.SA_SINGLE_APP_INFO_SUPPORTED_FORMATS = p),
      (l.SIMPLIFIED_FORMATS = _),
      (l.isEmptyCreative = f),
      (l.isIneligibleForFDODueToMMU = g),
      (l.shouldShowSERevamp = h),
      (l.shouldRemovePEAPlusC = y),
      (l.getReactiveControlUXModel = C),
      (l.isNonPCAUEligibleForModalPreview = S),
      (l.passGKForModalUX = R),
      (l.passGKForPEClawback = L),
      (l.passGKForWHAdexIntegration = E),
      (l.isWebsiteHighlightAdopted = k),
      (l.passGKForWebsiteMediaExistingPostExpansion = I),
      (l.isWHAllowedForAdShape = T),
      (l.shouldShowWHForAdShape = D),
      (l.passGKForCombinedFeaturedOfferings = x),
      (l.isWHAdoptedWithMedia = $),
      (l.isWHConsentedWithMedia = P),
      (l.shouldShowWHExperience = N),
      (l.isSiteLinksDataConsented = M),
      (l.countWebsiteMediaImageUrl = w),
      (l.isSiteLinksOrWHConsented = A),
      (l.passQEForReactiveControlPESE = F),
      (l.passSAPGDGating = O),
      (l.passDAPGDGating = B),
      (l.isEligibleForReactiveControlPESE = W),
      (l.isEligibleForReactiveControlPESEOrAppInfo = q),
      (l.isFlexibleFormatEligibleForSingleMedia = U),
      (l.isFlexibleFormatEligibleForRichFormat = V),
      (l.passSACarouselFFQE = H),
      (l.isMobileFeedPlacementTargeted = G),
      (l.passFormatSelectorMergeSAPrePhase1 = z),
      (l.passFormatSelectorMergeDAPrePhase1 = j),
      (l.passFormatSelectorMergeSAPhase1 = K),
      (l.passFormatSelectorMergeDAPhase1 = Q),
      (l.isInC2VBlocklist = X),
      (l.passGKForC2V = Y),
      (l.passGKForCollage = J),
      (l.passGKForEPACollage = Z),
      (l.passEPACollageGKOnly = ee),
      (l.isExcludedFromEPACollageRollout = te),
      (l.isExcludedFromSASingleCollageRollout = ne),
      (l.passGKForSASingleCollage = re),
      (l.MIXED_COLLAGE_MIN_SOURCE_MEDIA_COUNT = oe),
      (l.MIXED_COLLAGE_STICKY_DATA_SOURCE = ie),
      (l.getEligibleMixedCollageDataSources = le),
      (l.isEligibleForEPAFDOSurface = se),
      (l.isEPAFlowAwaitingPostSelection = ue),
      (l.isEligibleForEPASingleMediaSurface = de),
      (l.isEligibleForEPAMultiMediaSurface = me),
      (l.usesPECarouselIntroCardSplit = pe),
      (l.passGKForCarouselToCollage = _e),
      (l.logCarouselToCollageExposure = fe),
      (l.logEPACollageExposure = ge),
      (l.getCollageFtsFormat = he),
      (l.isSASingleCollageSurface = ye),
      (l.getCollageFtsFormatForAdgroup = Ce),
      (l.getUpdatedReactiveControlSettingsForSticky = be),
      (l.shouldBlockReactiveControlDefaultOn = ve),
      (l.getUpdatedReactiveControlSettingsForFeedbackSurvey = Se),
      (l.getStickyStatusFromUserSettingsLoadObject = Re),
      (l.coerceFeatureActionToSourceAction = Le),
      (l.applyProfileCardMutationToPreviewConfig = Ee),
      (l.getEligibleDataSources = ke),
      (l.passGKForFDODebugger = Ie),
      (l.isAutoConvertedFfToMmuAd = Te));
  },
  98,
);
