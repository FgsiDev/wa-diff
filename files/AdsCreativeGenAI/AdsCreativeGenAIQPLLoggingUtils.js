__d(
  "AdsCreativeGenAIQPLLoggingUtils",
  ["AdsManagerQPLUserFlowLogger", "QPLUserFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      (o("AdsManagerQPLUserFlowLogger").start(r("qpl")._(440802286, "3005"), {
        annotations: {
          string: {
            action_type: e.actionType,
            adgroup_id: e.adgroupID,
            entry_point: (t = e.entryPoint) != null ? t : "",
            layout: e.layout,
          },
          bool: babelHelpers.extends({}, e.adgroupAnnotations),
        },
        joinOptions: e.sessionUUID != null ? { joinId: e.sessionUUID } : void 0,
      }),
        c(e.layout));
    }
    function s() {
      r("QPLUserFlow").endCancel(r("qpl")._(440802286, "3005"));
    }
    function u(e) {
      r("QPLUserFlow").endSuccess(r("qpl")._(440802286, "3005"), {
        annotations: { int: { opted_in_image: e } },
      });
    }
    function c(e) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "MODAL_LOAD_START",
        { data: { string: { layout: e } } },
      );
    }
    function d() {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "IMAGE_GEN_PREFETCH",
      );
    }
    function m() {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "IMAGE_GEN_PREFETCH_SKIPPED",
      );
    }
    function p(e) {
      var t;
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "IMAGE_DATA_PROCESSING_" + e.source,
        {
          data: {
            bool: {
              no_personas_fetched: e.no_personas_fetched,
              no_image_variants_fetched: e.no_image_variants_fetched,
            },
            int: {
              total_image_count: e.total_image_count,
              total_personas_count: e.total_personas_count,
              total_personas_with_empty_images_count:
                e.total_personas_with_empty_images_count,
            },
            string: { fetch_policy: (t = e.fetch_policy) != null ? t : "" },
          },
        },
      );
    }
    function _(e, t, n, o) {
      var a,
        i,
        l,
        s,
        u,
        c = {
          data: {
            int: { position: t },
            string: {
              asset_hash: e.assetHash,
              image_variation_id: e.adsImageVariationID,
              asset_creation_time:
                e.creationTime != null ? String(e.creationTime) : null,
              recipe_name: e.recipeType,
              model: (a = e.model) != null ? a : null,
              source: (i = e.source) != null ? i : null,
              layout: n,
              request_id: (l = e.requestID) != null ? l : null,
              generation_path: (s = e.generationPath) != null ? s : null,
              retrieval_tier: (u = e.retrievalTier) != null ? u : null,
            },
          },
        };
      (r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "ASSET_LOAD",
        c,
      ),
        r("QPLUserFlow").addPoint(
          r("qpl")._(440802286, "3005"),
          o === !0 ? "PREGEN_ASSET_LOAD" : "NEWGEN_ASSET_LOAD",
          c,
        ));
    }
    function f(e) {
      var t;
      r("QPLUserFlow").addPoint(r("qpl")._(440802286, "3005"), "ASSET_LOAD", {
        data: {
          int: { position: e.position },
          string: {
            image_variation_id: e.variantId,
            layout: e.layout,
            media_kind: e.mediaKind,
            recipe_name: (t = e.recipeName) != null ? t : null,
          },
        },
      });
    }
    function g(e) {
      var t;
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "ASSET_DETAILS_LOAD",
        {
          data: {
            bool: { insight_shown: e.insightShown },
            int: { position: e.position },
            string: {
              asset_hash: (t = e.assetHash) != null ? t : null,
              image_variation_id: e.imageVariationID,
            },
          },
        },
      );
    }
    function h(e, t, n, o) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "ASSET_SELECTION_TOGGLE",
        {
          data: {
            bool: { is_selected: n },
            int: { position: o },
            string: { asset_key: e, image_gen_source: t != null ? t : "" },
          },
        },
      );
    }
    function y(e) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "ASSET_SELECTION_ALL_TOGGLE",
        { data: { bool: { is_selected: e } } },
      );
    }
    function C(e, t, n) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "GROUP_ASSET_SELECTION_TOGGLE",
        {
          data: {
            bool: { is_selected: n },
            string: { collection_id: t, collection_type: e },
          },
        },
      );
    }
    function b(e) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "ASSET_EDIT_START",
        { data: { string: { asset_key: e } } },
      );
    }
    function v(e, t) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "ASSET_EDIT_REQUEST_START",
        { data: { string: { asset_key: e, prompt_text: t } } },
      );
    }
    function S(e, t) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "ASSET_EDIT_REQUEST_SUCCESS",
        { data: { string: { asset_key: e, prompt_text: t } } },
      );
    }
    function R(e, t, n) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "ASSET_EDIT_REQUEST_FAIL",
        { data: { string: { errorMessage: n, asset_key: e, prompt_text: t } } },
      );
    }
    function L(e) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "ASSET_EDIT_SUCCESS",
        { data: { string: { asset_key: e }, int: { edit_count: 0 } } },
      );
    }
    function E(e) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "ASSET_EDIT_CANCEL",
        { data: { string: { asset_key: e }, int: { edit_count: 0 } } },
      );
    }
    function k() {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "ASSET_APPLY_SUCCESS",
        { data: { string: { asset_keys: "" }, int: { num_images_edited: 0 } } },
      );
    }
    function I() {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "ASSET_APPLY_CANCEL",
        { data: { string: { asset_keys: "" }, int: { num_images_edited: 0 } } },
      );
    }
    function T(e, t) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "ASSET_EDIT_REVERT",
        {
          data: {
            string: { asset_key: e != null ? e : "" },
            int: { num_edits_reverted: t != null ? t : 0 },
          },
        },
      );
    }
    function D(e) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "PREVIOUSLY_ADOPTED_LOADED",
        { data: { int: { num_adopted: e } } },
      );
    }
    function x(e, t) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "PREVIOUSLY_ADOPTED_MISSING",
        { data: { int: { num_expected: e, num_missing: t } } },
      );
    }
    function $(e) {
      r("QPLUserFlow").addAnnotations(r("qpl")._(440802286, "3005"), {
        string: { generation_path: e },
      });
    }
    function P(e) {
      r("QPLUserFlow").addAnnotations(r("qpl")._(440802286, "3005"), {
        string: { layout: e },
      });
    }
    function N(e) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "COLLECTION_HEADLINE_LOADED",
        {
          data: {
            string: {
              collection_id: e.collectionId,
              collection_type: e.collectionType,
            },
          },
        },
      );
    }
    function M(e) {
      r("QPLUserFlow").addAnnotations(r("qpl")._(440802286, "3005"), {
        string: { advertiser_segment: e },
      });
    }
    function w(e) {
      (r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "GENERATION_PATH_CHANGE",
        { data: { string: { new_generation_path: e } } },
      ),
        $(e));
    }
    function A() {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "REGENERATE_CLICK",
      );
    }
    function F() {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "REGENERATE_CONFIRM_CLICK",
      );
    }
    function O(e, t) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "SPEC_MUTATION_START",
        { data: { int: { variant_count: e, selected_count: t } } },
      );
    }
    function B(e, t) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "SPEC_MUTATION_SUCCESS",
        { data: { int: { variant_count: e, selected_count: t } } },
      );
    }
    function W(e, t) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "SPEC_MUTATION_FAIL",
        { data: { int: { variant_count: e }, string: { error_message: t } } },
      );
    }
    function q(e) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "SPEC_MUTATION_SKIP_NO_VARIANTS",
        { data: { int: { selected_count: e } } },
      );
    }
    function U(e, t) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "IMAGE_GEN_STEP_start",
        { data: { string: { previous_step: e, layout: t } } },
      );
    }
    function V(e, t) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "IMAGE_GEN_STEP_end",
        { data: { string: { reason: e, next_step: t } } },
      );
    }
    function H(e) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "EMPTY_VARIANTS_PANEL_IMPRESSION",
        { data: { string: { seed_image_hash: e } } },
      );
    }
    function G(e, t) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "FEEDBACK_SUBMITTED",
        { data: { bool: { is_positive: e, is_variant_level: t } } },
      );
    }
    function z() {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "ONE_CLICK_SPLASH_IMPRESSION",
      );
    }
    function j() {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "ONE_CLICK_GENERATE_CLICKED",
      );
    }
    function K() {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "SPLASH_PLACEHOLDER_MOUNTED",
      );
    }
    function Q() {
      r("QPLUserFlow").addPoint(
        r("qpl")._(440802286, "3005"),
        "SPLASH_PLACEHOLDER_UNMOUNTED",
      );
    }
    ((l.startGenAIQPLFlow = e),
      (l.cancelGenAIQPLFlow = s),
      (l.successGenAIQPLFlow = u),
      (l.addImageGenPrefetchQPLPoint = d),
      (l.addImageGenPrefetchSkippedQPLPoint = m),
      (l.addImageDataProcessingQPLPoint = p),
      (l.addAssetLoadQPLPoint = _),
      (l.addUnifiedAssetLoadQPLPoint = f),
      (l.addAssetDetailsLoadQPLPoint = g),
      (l.addAssetSelectionToggleQPLPoint = h),
      (l.addAssetSelectionAllToggleQPLPoint = y),
      (l.addAssetSelectionGroupToggleQPLPoint = C),
      (l.addAssetEditStartQPLPoint = b),
      (l.addAssetEditRequestQPLPoint = v),
      (l.addAssetEditRequestSuccessQPLPoint = S),
      (l.addAssetEditRequestFailedQPLPoint = R),
      (l.addAssetEditSuccessQPLPoint = L),
      (l.addAssetEditCancelQPLPoint = E),
      (l.addAssetEditAppliedQPLPoint = k),
      (l.addAssetEditDiscardedQPLPoint = I),
      (l.addAssetEditRevertQPLPoint = T),
      (l.addPreviouslyAdoptedLoadedQPLPoint = D),
      (l.addPreviouslyAdoptedMissingQPLPoint = x),
      (l.addProgLoadingLayoutQPLAnnotation = P),
      (l.addCollectionHeadlineLoadedQPLPoint = N),
      (l.addAdvertiserSegmentQPLAnnotation = M),
      (l.addGenerationPathChangeQPLPoint = w),
      (l.addRegenerateClickQPLPoint = A),
      (l.addRegenerateConfirmClickQPLPoint = F),
      (l.addSpecMutationStartQPLPoint = O),
      (l.addSpecMutationSuccessQPLPoint = B),
      (l.addSpecMutationFailQPLPoint = W),
      (l.addSpecMutationSkipNoVariantsPoint = q),
      (l.startImageGenStepQPLSpan = U),
      (l.endImageGenStepQPLSpan = V),
      (l.addEmptyVariantsPanelImpressionQPLPoint = H),
      (l.addFeedbackSubmittedQPLPoint = G),
      (l.addOneClickSplashImpressionQPLPoint = z),
      (l.addOneClickGenerateClickedQPLPoint = j),
      (l.addSplashMountedQPLPoint = K),
      (l.addSplashUnmountedQPLPoint = Q));
  },
  98,
);
