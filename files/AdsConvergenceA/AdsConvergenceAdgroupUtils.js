__d(
  "AdsConvergenceAdgroupUtils",
  [
    "AdmgrUserSettingsData",
    "AdsAPIAdgroupRecord",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIChildAttachmentPaths",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupUtils",
    "AdsAutomaticFlowUtils",
    "AdsCreativeFormatMutatorUtils",
    "AdsDataAtom",
    "AdsEditingAdgroupEditorContext",
    "AdsIGIDv2SemanticFields",
    "AdsMutators",
    "AdsSelectorUtils",
    "AdsUEditorAdgroupAudiosAdsMutators",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
    "ApiAdObjectTypes",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsRegulatedCategoryIsPoliticalCategorySelected",
    "adsUEditorIsAccountEligibleForAdsDefaultOnSelector",
    "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
    "gkx",
    "immutable",
    "isTruthy",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = Object.freeze({
        DEFAULT_CAROUSEL_ADS_CHILD_NUM: 3,
        MAX_CAROUSEL_ADS: 10,
        MIN_CAROUSEL_ADS_CHILD_NUM: 2,
      }),
      g = new (r("AdsAPIAdgroupRecord"))(
        ((s = {}), (s.creative = ((e = {}), (e.object_story_spec = {}), e)), s),
      ),
      h = new (r("AdsAPIAdgroupRecord"))(
        ((c = {}), (c.creative = ((u = {}), (u.object_story_id = null), u)), c),
      ),
      y = (p = r("AdsAdgroupRecordAccessors")).creative.object_type.set(
        (_ = r("ApiAdObjectTypes")).SHARE,
        g,
      ),
      C = p.creative.object_type.set(_.VIDEO, g),
      b = p.creative.object_type.set(_.PHOTO, g),
      v = p.creative.object_type.set(_.PHOTO, h);
    function S(e, t, n, a, i, l, s, u, c, d, m, p) {
      (c === void 0 && (c = !0),
        d === void 0 && (d = !0),
        m === void 0 && (m = f.DEFAULT_CAROUSEL_ADS_CHILD_NUM),
        p === void 0 && (p = "optimal_num_cards"));
      for (var _ = n, g = [], h = 0; h < m; h++) {
        var y = r("isTruthy")(s) ? { call_to_action: { type: s } } : {},
          C = babelHelpers.extends({}, y, {
            link: a,
            description: "",
            name: i,
            picture: l,
          });
        (r("isTruthy")(s) &&
          r("isTruthy")(u) &&
          r("setByPath")(
            C,
            r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE.LINK,
            u,
          ),
          g.push(C));
      }
      return (
        r("isTruthy")(i) && (g[0].name = i),
        r("isTruthy")(l) && (g[0].picture = l),
        d !== null &&
          (_ = r("AdsAdgroupSemanticFields").multiShareOptimized.set(e, _, d)),
        c !== null &&
          (_ = r("AdsAdgroupSemanticFields").multiShareEndCard.set(e, _, c)),
        (_ = r(
          "AdsAdgroupRecordAccessors",
        ).creative.portrait_customizations.carousel_delivery_mode.set(p, _)),
        (_ = o("AdsCreativeFormatMutatorUtils").mutateCreativeFormat(
          _,
          "Carousel",
        )),
        r("AdsAdgroupSemanticFields").childAttachments.set(
          e,
          _,
          r("immutable").fromJS(g),
        )
      );
    }
    function R() {
      var e = r("AdmgrUserSettingsData");
      return e.last_used_post_format === "MULTIPLE";
    }
    function L(e, t) {
      return r("adsRegulatedCategoryIsPoliticalCategorySelected")(t)
        ? o("AdsAdgroupUtils").isPoliticalAd(e)
          ? o("AdsMutators").chain(
              r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
                .delete,
              r("AdsAdgroupRecordAccessors").creative.contextual_multi_ads
                .delete,
            )(e)
          : o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.authorization_category.set("POLITICAL"),
              r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
                .delete,
              r("AdsAdgroupRecordAccessors").creative.contextual_multi_ads
                .delete,
            )(e)
        : e;
    }
    function E(e, t) {
      var n = t.account,
        a = t.campaign,
        i = t.getShouldEnableAutomaticFlowByDefault;
      if (n != null && i != null) {
        var l = o(
          "AdsAutomaticFlowUtils",
        ).isAccountEligibleForAutomaticFlowLite(n);
        if (l)
          return o(
            "adsAutomaticFlowMutationSetDoFSpec",
          ).adsStandardEnhancementsMutator(e, i());
      }
      return o("AdsUEditorAdgroupAudiosAdsMutators").isEligibleForAudios(
        e,
        a,
      ) && !r("gkx")("21531")
        ? o("AdsUEditorAdgroupAudiosAdsMutators").updateAdgroupWithAudioSpec(
            n,
            e,
          )
        : e;
    }
    function k(e, t) {
      var n = t.account,
        a = t.campaign,
        i = t.getShouldEnableAutomaticFlowByDefault;
      if (n != null && i != null) {
        var l = o(
          "AdsAutomaticFlowUtils",
        ).isAccountEligibleForAutomaticFlowLite(n);
        if (l)
          return o(
            "adsAutomaticFlowMutationSetDoFSpec",
          ).adsStandardEnhancementsMutator(e, i());
      }
      return o("AdsUEditorAdgroupAudiosAdsMutators").isEligibleForAudios(
        e,
        a,
      ) && !r("gkx")("21531")
        ? o("AdsUEditorAdgroupAudiosAdsMutators").updateAdgroupWithAudioSpec(
            n,
            e,
          )
        : e;
    }
    function I(e) {
      (m || (m = r("AdsDataAtom"))).waitFor(
        (d || (d = o("AdsSelectorUtils"))).getStoreDispatchTokens([
          r("adsUEditorIsAccountEligibleForAdsDefaultOnSelector"),
        ]),
      );
      var t = r(
        "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
      )(r("AdsEditingAdgroupEditorContext"));
      return o(
        "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
      ).updateContextualDiscoveryAdsEligibilitySpec(e, {
        shouldOptIn: t.shouldOptIn,
        isExplicitOptOut: t.isExplicitOptOut,
        shouldRenderCheckbox: t.shouldRenderCheckbox,
        actionMetadataType: t.actionMetadataType,
      });
    }
    function T(e, t, n, a) {
      return (r("gkx")("15865") ? a == null : n == null) ||
        !o(
          "AdsIGIDv2SemanticFields",
        ).IGIDV2SemanticFields.instagramUserID.isSupported(e, t)
        ? t
        : o("AdsIGIDv2SemanticFields").IGIDV2SemanticFields.instagramUserID.set(
            e,
            t,
            n,
            a,
          );
    }
    function D(e, t, n) {
      return n == null
        ? t
        : r("AdsAdgroupSemanticFields").threadsUserID.isSupported(e, t)
          ? r("AdsAdgroupSemanticFields").threadsUserID.set(e, t, n)
          : o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t)
            ? t
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.threads_user_id.set(n, t);
    }
    ((l.AdsCarouselConstants = f),
      (l.EMPTY_ADGROUP_WITH_OBJECT_STORY_SPEC = g),
      (l.EMPTY_SHARE_ADGROUP_RECORD = y),
      (l.EMPTY_VIDEO_ADGROUP_RECORD = C),
      (l.EMPTY_PHOTO_ADGROUP_RECORD = b),
      (l.EMPTY_PHOTO_ADGROUP_RECORD_FOR_EXISTING_POST = v),
      (l.appendCarouselChildAttachments = S),
      (l.isCarouselLastUsedFormat = R),
      (l.maySetPoliticalAd = L),
      (l.maybeEnableAutoflow = E),
      (l.maybeEnableAutoflowAfterEligibilityExpansion = k),
      (l.maybeEnableContextualDiscoveryAdsExperience = I),
      (l.maybeSetInstagramActorID = T),
      (l.maybeSetThreadsUserID = D));
  },
  98,
);
