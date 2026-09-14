__d(
  "AdsDCOUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupTypeUtils",
    "AdsAssetFeedSimpleFieldCheckUtils",
    "AdsAssetFeedUtils",
    "AdsBuyingTypes",
    "AdsCampaignRawSpecUtils",
    "AdsCampaignRecordAccessors",
    "AdsChildAttachmentsUtils",
    "AdsDCOConversionUtils",
    "AdsDCODegreesOfFreedomUtils",
    "AdsDynamicAdMultiTextUtils",
    "AdsDynamicCreationOptimizationPluginResolver",
    "AdsInstagramUserIdMigrationUtils",
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupBodyMutators",
    "AdsUEditorAdgroupHeadlineMutators",
    "AdsUEditorHostIDs",
    "ApiDynamicCreativeOptimizationTypes",
    "adsDCOConvertDynamicCreativeToStorySpecCampaign",
    "adsDeleteProductAudienceSpecsFromCampaignRecord",
    "compose",
    "getByPath",
    "immutable",
    "isAdsCanvasLink",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = r("AdsAPIObjectives")).LEAD_GENERATION,
        e.VIDEO_VIEWS,
        e.BRAND_AWARENESS,
        e.REACH,
        e.POST_ENGAGEMENT,
      ],
      u = new Set([
        e.CONVERSIONS,
        e.APP_INSTALLS,
        e.LINK_CLICKS,
        e.PAGE_LIKES,
        e.BRAND_AWARENESS,
        e.REACH,
        e.LEAD_GENERATION,
        e.POST_ENGAGEMENT,
        e.MESSAGES,
        e.VIDEO_VIEWS,
        e.EVENT_RESPONSES,
      ]),
      c = new Set([].concat(Array.from(u), [e.PRODUCT_CATALOG_SALES])),
      d = new Set([r("AdsBuyingTypes").AUCTION]);
    function m(e, t, n) {
      n === void 0 && (n = {});
      var a = _(n.hostID) && t !== r("AdsAPIObjectives").VIDEO_VIEWS;
      return n.hostID !== r("AdsUEditorHostIDs").CREATION &&
        o("AdsChildAttachmentsUtils").isCarouselAd(e)
        ? "CAROUSEL_IMAGE"
        : a
          ? "AUTOMATIC_FORMAT"
          : o("AdsAdgroupTypeUtils").isVideoAd(e) ||
              t === r("AdsAPIObjectives").VIDEO_VIEWS
            ? "SINGLE_VIDEO"
            : "SINGLE_IMAGE";
    }
    function p(e) {
      return e.some(function (e) {
        return f(e);
      });
    }
    function _(e) {
      return e === r("AdsUEditorHostIDs").EDITING;
    }
    function f(e) {
      var t = o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(e),
        n = o("AdsAssetFeedUtils").isDCAssetCustomizationAdgroupFromSpec(e);
      if (n) return !0;
      if (!t) return !1;
      var r = o("AdsAssetFeedUtils").isAAAFromRecord(e);
      if (r) return !1;
      var a =
        o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(e) &&
        (o("AdsAssetFeedSimpleFieldCheckUtils").hasTargetRules(e) ||
          o("AdsAssetFeedSimpleFieldCheckUtils").hasGroupRules(e) ||
          o("AdsAssetFeedSimpleFieldCheckUtils").hasAssetCustomizationRules(e));
      return !!a;
    }
    function g(e, t) {
      var n = h(e, t, !1, null, null);
      return { assetValue: n.assetValue, renderUsingDCO: n.renderUsingDCO };
    }
    function h(e, t, n, a, i, l, s, u) {
      var c = r("immutable").List(),
        d = !1,
        m = !1,
        p = s === !0 || u === r("AdsAPIObjectives").APP_INSTALLS;
      if (e.length === 1 || (e.length > 1 && p)) {
        var _ = e[0],
          f = o("AdsAssetFeedUtils").isAutomaticFlow(_);
        d = o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(_);
        var g =
          o("AdsAssetFeedUtils").isPACAdgroupFromRecord(_) &&
          !o("AdsAssetFeedUtils").hasCarouselFormat(_) &&
          i === !0 &&
          l === !0;
        m = n && o("AdsAssetFeedUtils").isDofAdgroupFromSpec(_) && i === !0;
        var h = !1;
        if (
          i === !0 &&
          n &&
          r("getByPath")(a, ["name"]) === "message" &&
          o("AdsDynamicAdMultiTextUtils").isEligibleDynamicAdForMultiText(_)
        ) {
          var y,
            C =
              _ == null || (y = _.creative) == null
                ? void 0
                : y.asset_feed_spec,
            b = C == null ? void 0 : C.bodies;
          b != null &&
            (b instanceof r("immutable").List ? b.size > 1 : b.length > 1) &&
            ((m = !0),
            (c =
              b instanceof r("immutable").List
                ? b
                : r("immutable").List(
                    Array.from(b).map(function (e) {
                      return r("immutable").Map.isMap(e)
                        ? e
                        : r("immutable").fromJS(e);
                    }),
                  )),
            (h = !0));
        }
        var v = t[0];
        if (((f || d || m) && v != null && !h && (c = v), g)) {
          if (r("getByPath")(a, ["name"]) === "message") {
            var S,
              R = o(
                "AdsUEditorAdgroupBodyMutators",
              ).getDefaultPlacementBodyAssets(_);
            c = (S = R != null ? R : v) != null ? S : c;
          }
          if (r("getByPath")(a, ["name"]) === "headline") {
            var L,
              E = o(
                "AdsUEditorAdgroupHeadlineMutators",
              ).getDefaultPlacementHeadlineAssets(_);
            c = (L = E != null ? E : v) != null ? L : c;
          }
        }
        m = m || g;
      }
      return c instanceof r("immutable").List
        ? { assetValue: c, renderUsingDCO: d, renderUsingDOF: m }
        : {
            assetValue: r("immutable").List([c]),
            renderUsingDCO: d,
            renderUsingDOF: m,
          };
    }
    function y(e, t) {
      var n,
        r = t.getValueForIndex(0);
      return {
        errors: C(e, r, !0),
        renderUsingDCO: !0,
        warnings: C(e, r, !1),
        warningObjects: r
          ? ((n = {}), (n[e[0].id] = r.warningObjects), n)
          : null,
      };
    }
    function C(e, t, n) {
      var r = {};
      return (
        e.length === 1 && t && (r[e[0].id] = n ? t.errors : t.warnings),
        r
      );
    }
    function b(e, t) {
      var n = o("AdsUEditorAdgroupBodyMutators").getDefaultPlacementBodyIndexes(
          e,
        ),
        r = {},
        a = t[e.id];
      return (
        n == null ||
          n.forEach(function (e, t) {
            a[e] != null && (r[t] = a[e]);
          }),
        r
      );
    }
    function v(e, t) {
      return b(e, t);
    }
    function S(e, t) {
      return b(e, t);
    }
    function R(e) {
      return e
        .valueSeq()
        .flatMap(function (e) {
          return e.slice(0, 1);
        })
        .toArray();
    }
    function L(e) {
      return e
        .valueSeq()
        .flatMap(function (e) {
          return e.map(function (e) {
            return e.id;
          });
        })
        .toArray();
    }
    function E(e) {
      var t;
      return o("AdsMutators").chain(
        (t = r(
          "AdsAdgroupRecordAccessors",
        )).creative.asset_feed_spec.images.set(void 0),
        t.creative.asset_feed_spec.videos.set(void 0),
        t.creative.asset_feed_spec.titles.set(void 0),
        t.creative.asset_feed_spec.descriptions.set(void 0),
        t.creative.asset_feed_spec.bodies.set(void 0),
        t.creative.asset_feed_spec.link_urls.set(void 0),
        t.creative.asset_feed_spec.call_to_actions.set(void 0),
        t.creative.asset_feed_spec.call_to_action_types.set(
          r("immutable").List.of("LEARN_MORE"),
        ),
      )(e);
    }
    function k(e, t, n) {
      var a;
      n === void 0 && (n = {});
      var i = n,
        l = i.oldImages;
      if (o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(e)) return e;
      if (o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(e)) {
        var s = e;
        if (
          ((o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(e) ||
            o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e) ||
            o("AdsAssetFeedUtils").isLocalizedPlacementsAdgroupFromRecord(e)) &&
            ((s = o(
              "AdsUEditorAdgroupAssetFeedMutators",
            ).removeAdlabelsFromAssetFeedSpec(s)),
            (s = o(
              "AdsUEditorAdgroupAssetFeedMutators",
            ).dedupAssetsFromAssetFeedSpec(s))),
          o("AdsAPIAdgroupRecordUtils").isExistingPostAd(s) &&
            (s = o("AdsMutators").chain(
              r("AdsAdgroupRecordAccessors").creative.object_story_id.delete,
              o("AdsInstagramUserIdMigrationUtils").IGIDV2MigrationAccessors
                .creative.instagram_user_id.delete,
            )(s)),
          o("AdsAssetFeedUtils").hasPACCarouselFormat(s))
        ) {
          var u,
            c =
              (u = s.creative) == null || (u = u.asset_feed_spec) == null
                ? void 0
                : u.link_urls,
            d = null;
          if (c != null)
            for (var p of c) {
              var _ = p.get("website_url");
              if (_ != null && (typeof _ == "string" || _ instanceof String)) {
                d = p;
                break;
              }
            }
          s = o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.carousels
              .delete,
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.videos
              .delete,
            d != null
              ? r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.link_urls.set(
                  r("immutable").List.of(d),
                )
              : r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
                  .link_urls.delete,
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.descriptions
              .delete,
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.titles
              .delete,
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.ad_formats.set(
              r("immutable").List.of("CAROUSEL_IMAGE"),
            ),
          )(s);
        }
        return o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.optimization_type.set(
            r("ApiDynamicCreativeOptimizationTypes").REGULAR,
          ),
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.groups.delete,
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
            .asset_customization_rules.delete,
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.target_rules
            .delete,
        )(o("AdsDCOConversionUtils").filterDCOUnsupportedImageTypes(s));
      }
      var f = o("AdsUEditorAdgroupAssetFeedMutators").convertToAssetFeedSpec(
        o("AdsAPIAdgroupRecordUtils").getObjectType(e),
        e,
        t,
      );
      ((f = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.ad_formats.set(
        r("immutable").List.of(m(e, t, n)),
        f,
      )),
        (f = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.optimization_type.set(
          r("ApiDynamicCreativeOptimizationTypes").REGULAR,
          f,
        )),
        l != null &&
          t !== r("AdsAPIObjectives").VIDEO_VIEWS &&
          (f = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.images.set(l, f)));
      var g =
        (a = f.creative) == null || (a = a.asset_feed_spec) == null
          ? void 0
          : a.link_urls;
      if (g != null) {
        var h = g.first().get("website_url");
        (typeof h == "string" || h instanceof String) &&
          r("isAdsCanvasLink")(String(h)) &&
          (f = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.link_urls.delete(f));
      }
      var y = o("AdsDCODegreesOfFreedomUtils").isEligibleForDegreesOfFreedom(f);
      return (
        y
          ? (f = r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.degrees_of_freedom_type.set(
              "USER_ENROLLED",
              f,
            ))
          : (f = r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.degrees_of_freedom_type.set(
              "DISABLED",
              f,
            )),
        r("compose")(
          o("AdsDCOConversionUtils").filterDCOUnsupportedCTATypes,
          o("AdsDCOConversionUtils").filterDCOUnsupportedImageTypes,
        )(f)
      );
    }
    function I(e, t) {
      var n,
        a = o("AdsPlacementReducerUtils").updatePlacementSpec(
          o("AdsCampaignRawSpecUtils").setCampaignPlacement(e, t),
        );
      return o("AdsMutators").chain(
        (n = r(
          "AdsCampaignRecordAccessors",
        )).is_dynamic_creative_optimization.set(!0),
        n.is_dynamic_creative.set(!0),
        n.is_dynamic_creative_asset_customization.set(!1),
        n.promoted_object.offer_id.delete,
        n.targeting.excluded_product_audience_specs.delete,
        r("adsDeleteProductAudienceSpecsFromCampaignRecord"),
        n.promoted_object.product_set_id.delete,
        n.promoted_object.product_catalog_id.delete,
      )(a);
    }
    function T(e, t) {
      return r("AdsDynamicCreationOptimizationPluginResolver")
        .resolve({ buyingType: e, objective: t })
        .isDynamicCreativeOptimizationSupported();
    }
    function D(e, t) {
      return u.has(t) && d.has(e);
    }
    function x(e, t) {
      return c.has(t) && d.has(e);
    }
    function $(e) {
      return e != null && s.includes(e);
    }
    ((l.isCreativeEditDisabled = p),
      (l.isCreativeEditDisabledForAdgroup = f),
      (l.getDCOAssetProperties = g),
      (l.getDCOOrDOForACOAssetProperties = h),
      (l.getErrorsAndWarningsWhenRenderingUsingDCO = y),
      (l.mapDefaultBodyAssetDCOErrorsToDefaultIndices = v),
      (l.mapDefaultBodyAssetDCOErrorObjectsToDefaultIndices = S),
      (l.getAdgroupsToRetain = R),
      (l.getAllAdgroupIDs = L),
      (l.clearAssetFeedSpec = E),
      (l.convertStorySpecAdToDCOAd = k),
      (l.convertToDCOCampaign = I),
      (l.convertDynamicCreativeToStorySpecCampaign = r(
        "adsDCOConvertDynamicCreativeToStorySpecCampaign",
      )),
      (l.isSupportedObjectiveForRegularDCO = T),
      (l.isSupportedObjectiveForTextDOF = D),
      (l.isSupportedObjectiveForTextGen = x),
      (l.isSupportedLinkDescriptionObjectiveForDCO = $));
  },
  98,
);
