__d(
  "AdsUEditorAdgroupImageMutators",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIChildAttachmentPaths",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsChildAttachmentsUtils",
    "AdsDCOImageCropDoFUtils",
    "AdsDLOAdgroupFieldMutators",
    "AdsDLOLanguageUtils",
    "AdsImageUtils",
    "AdsLocalizedPlacementsMutators",
    "AdsMessengerReducerUtils",
    "AdsMutators",
    "AdsObjectStorySpecUtils",
    "AdsObjectTypeUtils",
    "AdsPACSpecMutationAsyncLog",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPlacementAssetUtils",
    "AdsPlatformTypes",
    "AdsUnifiedCreativeAPIFields",
    "adsAssetFeedSpecRemoveAssetFieldAtIndex",
    "adsPlacementAssetMutationConvertToImageAssetFeedWithCampaignTargeting",
    "immutable",
    "isFalsey",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i) {
      if (r("isFalsey")(a)) return t;
      var l = r("AdsAdgroupSemanticFields").pageWelcomeMessage.get(n, t);
      if (!o("AdsMessengerReducerUtils").shouldSetDefaultWelcomeMessage(l))
        return t;
      var s = o("AdsAPIAdgroupRecordUtils").getAppDestinationType(t, n);
      if (s !== "MESSENGER") return t;
      var u = i ? i.name : null,
        c = e.account_id,
        d = o("AdsMessengerReducerUtils").getWelcomeMessageDefaultMediaFormat(),
        m = r("AdsAdgroupSemanticFields").pageID.get(n, t),
        p = o("AdsMessengerReducerUtils").getDefaultQuickReplies(i),
        _ = o("AdsMessengerReducerUtils").setDefaultWelcomeMessage(
          c,
          d,
          p,
          a,
          m,
          u,
          l,
          null,
          !0,
        );
      return r("AdsAdgroupSemanticFields").pageWelcomeMessage.isSupported(n, t)
        ? r("AdsAdgroupSemanticFields").pageWelcomeMessage.set(n, t, _)
        : t;
    }
    function s(t, n, a, i, l, s, c, m, p, _, f) {
      var g = n != null ? void 0 : a,
        h = e(t, m, p, n, _);
      if (r("isTruthy")(i) && r("isFalsey")(n) && r("isFalsey")(g))
        h = r(
          "AdsAdgroupRecordAccessors",
        ).creative.platform_customizations.delete(h);
      else if (i === r("AdsPlatformTypes").INSTAGRAM)
        h = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.platform_customizations.instagram.image_hash.set(n),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.platform_customizations.instagram.image_url.set(g),
        )(h);
      else if (
        o("AdsAssetFeedUtils").isAdgroupUsingNonTextOnlyDofAssetFeedSpec(h) &&
        !o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(h) &&
        !o(
          "AdsAssetFeedUtils",
        ).isUnifiedProfileVisitsDestinationAdgroupFromSpec(h)
      ) {
        if (
          o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(h) &&
          o("AdsAssetFeedUtils").getAssetMediaAdlabelCount(h) <= 0
        ) {
          var y = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(h);
          if (y != null)
            return o("AdsDLOAdgroupFieldMutators").setImage(
              h,
              y,
              n,
              n == null ? a : null,
            );
        }
        if (o("AdsDCOImageCropDoFUtils").isAdgroupOptInImageCropDof(h))
          return o("AdsDCOImageCropDoFUtils").replaceImageInOptInAdgroup(
            m,
            p,
            n,
            n == null ? a : null,
            f,
          );
        var C = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(h, "images");
        return (
          (n != null || g != null) &&
            (h = o("AdsAssetFeedMutationUtils").setImageAssetAtIndex(
              h,
              p,
              C,
              n,
              g,
            )),
          f != null &&
            (h = o("AdsAssetFeedMutationUtils").setImageCropAtIndex(
              h,
              p,
              C,
              f,
            )),
          h
        );
      } else {
        var b, v;
        (r("AdsAdgroupSemanticFields").imageHash.isSupported(p, h) &&
          (h = r("AdsAdgroupSemanticFields").imageHash.set(p, h, n)),
          r("isTruthy")((b = h.creative) == null ? void 0 : b.image_hash) &&
            (h = r("AdsAdgroupRecordAccessors").creative.image_hash.set(n, h)),
          r("AdsAdgroupSemanticFields").videoThumbnailURL.isSupported(p, h)
            ? (h = r("AdsAdgroupSemanticFields").videoThumbnailURL.set(p, h, l))
            : r("AdsAdgroupSemanticFields").imageURL.isSupported(p, h) &&
              (h = r("AdsAdgroupSemanticFields").imageURL.set(p, h, g)),
          r("isTruthy")((v = h.creative) == null ? void 0 : v.image_url) &&
            (h = r("AdsAdgroupRecordAccessors").creative.image_url.set(g, h)),
          (h = d(l, s, c, h)));
      }
      return ((h = u(f, i, h, p)), h);
    }
    function u(e, t, n, a) {
      var i,
        l = (i = n.creative) == null ? void 0 : i.object_type;
      return l == null || !o("AdsImageUtils").canCropStaticImageForPlatform(l)
        ? n
        : r("isTruthy")(t)
          ? c(e, t, n)
          : r("AdsAdgroupSemanticFields").imageCrops.isSupported(a, n)
            ? !e || Object.keys(e).length === 0
              ? r("AdsAdgroupSemanticFields").imageCrops.delete(a, n)
              : r("AdsAdgroupSemanticFields").imageCrops.set(a, n, e)
            : n;
    }
    function c(e, t, n) {
      return t !== r("AdsPlatformTypes").INSTAGRAM
        ? n
        : !e || Object.keys(e).length === 0
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.platform_customizations.instagram.image_crops.delete(n)
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.platform_customizations.instagram.image_crops.set(e, n);
    }
    function d(e, t, n, a) {
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.thumbnail_url.set(e),
        r("AdsAdgroupRecordAccessors").creative.thumbnail_height.set(t),
        r("AdsAdgroupRecordAccessors").creative.thumbnail_width.set(n),
      )(a);
    }
    function m(e) {
      var t = o("AdsObjectTypeUtils").getCreativeSpecType(e),
        n = o("AdsObjectStorySpecUtils").getPaths(e, t),
        a = n.image_url,
        i = n.image_hash;
      if (!a || !i) return e;
      var l = e.getIn(a),
        s = e.getIn(i),
        u = l && s ? e.deleteIn(a) : e,
        c = o("AdsChildAttachmentsUtils").getChildAttachmentsPath(u);
      if (!c) return u;
      var d = u.getIn(c);
      return d
        ? ((d = d.map(function (e) {
            var t = e.getIn(r("AdsAPIChildAttachmentPaths").IMAGE_HASH),
              n = e.getIn(r("AdsAPIChildAttachmentPaths").PICTURE);
            return t && n
              ? e.deleteIn(r("AdsAPIChildAttachmentPaths").PICTURE)
              : e;
          })),
          u.setIn(c, d))
        : u;
    }
    function p(e) {
      var t,
        n,
        a = e.adAccount,
        i = e.adgroup,
        l = e.assetGroup,
        s = e.backgroundColor,
        u = e.campaign,
        c = e.crops,
        d = e.imageHash,
        m = e.imageURL,
        p = e.isUsingPlacementEditor,
        h = p === void 0 ? !1 : p,
        y = e.placementList,
        C = e.sourceReducer,
        b = e.specPlugin,
        v = e.validAssetGroupsByAsset,
        S = i,
        R = o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(i),
        L = !R;
      (L && o("AdsPACSpecMutationAsyncLog").log(i, "ADD_IMAGE_START", C),
        R
          ? (S = o(
              "AdsLocalizedPlacementsMutators",
            ).convertDLOToLocalizedPlacementsAdgroup(i, b))
          : o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(i) ||
            (S = r(
              "adsPlacementAssetMutationConvertToImageAssetFeedWithCampaignTargeting",
            )(i, u, b, a, h)),
        L &&
          o("AdsPACSpecMutationAsyncLog").log(
            S,
            "ADD_IMAGE_CONVERT_TO_PAC",
            C,
          ));
      var E =
        v && l
          ? o("AdsPlacementAssetUtils").getAssetLabelIfSingleValidAssetGroup(
              l,
              v,
            )
          : null;
      if (r("isTruthy")(E)) {
        var k,
          I,
          T = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
            (k = S.creative) == null || (k = k.asset_feed_spec) == null
              ? void 0
              : k.images,
            E,
            "hash",
          ).index;
        r("isFalsey")(T) && (T = 0);
        var D = g(i, b, T, E),
          x = D.adgroupWithIsolatedImageAsset,
          $ = D.isolatedImageAssetIndex;
        ((S = x), (T = $));
        var P = o("AdsAssetFeedFieldUtils").getAssetAtIndex(
          (I = S.creative) == null || (I = I.asset_feed_spec) == null
            ? void 0
            : I.images,
          "hash",
          T,
        );
        return (
          P !== d &&
            ((S = o(
              "adsAssetFeedSpecRemoveAssetFieldAtIndex",
            ).adsAssetFeedSpecRemoveAssetFieldAtIndex(
              S,
              "images",
              T,
              "image_crops",
            )),
            (S = o(
              "adsAssetFeedSpecRemoveAssetFieldAtIndex",
            ).adsAssetFeedSpecRemoveAssetFieldAtIndex(
              S,
              "images",
              T,
              "portrait_customizations",
            ))),
          (S = _(S, b, T, P !== d, d, m, s, c)),
          (S = f(S, b)),
          L && o("AdsPACSpecMutationAsyncLog").log(S, "ADD_IMAGE_END", C),
          S
        );
      }
      var N =
          (t = S.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.images,
        M = N != null ? N.size : 0,
        w = o("AdsPlacementAssetUtils").makeUniqueLabelNameForPlacementAsset();
      if (
        ((S = _(S, b, M, !0, d, m, s, c)),
        (S = o("AdsAssetFeedMutationUtils").setAssetAdLabelAtIndex(
          S,
          b,
          r("AdsUnifiedCreativeAPIFields").imageHash,
          M,
          w,
        )),
        o("AdsAssetFeedUtils").isLocalizedPlacementsAdgroupFromRecord(S))
      )
        return (
          (S = o(
            "AdsLocalizedPlacementsMutators",
          ).addPlacementsToAssetCustomizationRules(S, "image_label", w, y)),
          (S = f(S, b)),
          L && o("AdsPACSpecMutationAsyncLog").log(S, "ADD_IMAGE_END", C),
          S
        );
      var A =
          (n = S.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.asset_customization_rules,
        F = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).movePlacementsInTargetingRules(
          A || r("immutable").List(),
          "image_label",
          w,
          y,
        ),
        O = F.labelsRemoved,
        B = F.updatedTargetingRules;
      S = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.asset_customization_rules.set(B, S);
      var W = function (t) {
          var e,
            n,
            a = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
              (e = S.creative) == null || (e = e.asset_feed_spec) == null
                ? void 0
                : e.images,
              t,
              "hash",
            ).index;
          if (a == null) return 0;
          var i =
            (n = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.images.get(S)) == null
              ? void 0
              : n.get(a);
          if (i == null) return 0;
          var l = i.get("adlabels");
          if (!(l instanceof r("immutable").List)) return 0;
          var s = l.filter(function (e) {
            return e.get("name") != t;
          });
          s == null || s.size === 0
            ? (S = r("AdsAdgroupRecordAccessors")
                .creative.asset_feed_spec.images.at(a)
                .delete(S))
            : (i.set("adlabels", s),
              (S = r("AdsAdgroupRecordAccessors")
                .creative.asset_feed_spec.images.at(a)
                .set(i, S)));
        },
        q;
      for (var U of O) q = W(U);
      return (
        (S = f(S, b)),
        L && o("AdsPACSpecMutationAsyncLog").log(S, "ADD_IMAGE_END", C),
        S
      );
    }
    function _(e, t, n, a, i, l, s, u) {
      var c = e;
      if (
        (a &&
          (c = o("AdsAssetFeedMutationUtils").setImageAssetAtIndex(
            c,
            t,
            n,
            i,
            l,
          )),
        u &&
          (c = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            c,
            t,
            r("AdsUnifiedCreativeAPIFields").imageHash,
            n,
            "image_crops",
            r("immutable").fromJS(u),
          )),
        s)
      ) {
        var d,
          m,
          p = r("immutable").fromJS(
            ((m = {}),
            (m.specifications = [((d = {}), (d.background_color = s), d)]),
            m),
          );
        c = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
          c,
          t,
          r("AdsUnifiedCreativeAPIFields").imageHash,
          n,
          "portrait_customizations",
          p,
        );
      }
      return c;
    }
    function f(e, t) {
      return o("AdsAssetFeedMutationUtils").removeDuplicateAssets(
        e,
        t,
        r("AdsUnifiedCreativeAPIFields").imageHash,
        "adlabels",
      );
    }
    function g(e, t, n, a) {
      var i = o("AdsAssetFeedMutationUtils").isolateAssetWithLabel(
          e,
          t,
          r("AdsUnifiedCreativeAPIFields").imageHash,
          n,
          "adlabels",
          a,
        ),
        l = i.adgroupWithIsolatedAsset,
        s = i.isolatedAssetIndex;
      return { adgroupWithIsolatedImageAsset: l, isolatedImageAssetIndex: s };
    }
    ((l.setImage = s),
      (l.setImageCrops = u),
      (l.setImageThumbnail = d),
      (l.removeRedundantImageURL = m),
      (l.addPlacementCustomizationImage = p),
      (l.updateCustomizationImageAtIndex = _),
      (l.removeDuplicateImageAssets = f),
      (l.isolateImageAssetWithLabel = g));
  },
  98,
);
