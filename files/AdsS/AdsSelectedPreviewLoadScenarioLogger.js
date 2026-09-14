__d(
  "AdsSelectedPreviewLoadScenarioLogger",
  [
    "AdsInteractionTracingUtils",
    "AdsMgmtCampaignObjectiveDataUtil",
    "AdsObjectTypes",
    "AdsPerfInteractionConstants",
    "AdsPerfInteractionUtil",
    "AdsPerfInteractionsController",
    "AdsPerfScenarioUtils",
    "AdsPreviewLogger",
    "AdsUEditorHostIDs",
    "InteractionTracingMetrics",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e + "-" + Date.now() + "-" + Math.round(Math.random() * 1e4);
    }
    function s(e, t, n) {
      var a = o("AdsPerfScenarioUtils").adObjectsToInteractionContext(
        r("AdsObjectTypes").ADGROUP,
        n,
      );
      a.source = e;
      var i = o("AdsMgmtCampaignObjectiveDataUtil").getObjective(a),
        l = !_(e);
      if (l) {
        var s = r("AdsPerfInteractionsController").startInteraction(
            "am.edit_ads.load_preview",
            e,
          ),
          u = r("AdsPerfInteractionsController").getActiveInteractionTraceAPI(
            s,
          );
        u &&
          (u.addMetadata("creative_event_source", e),
          u.addMetadata("CampaignObjective", i));
      }
    }
    function u(e) {
      return {
        bool: {
          has_image_crop: e.hasImageCrop,
          is_edit: e.isEdit,
          is_pac: e.isPAC,
          no_change: e.noChange,
          should_actually_end_scenario: e.shouldActuallyEndScenario,
        },
        string: {
          dco_optimization_type: e.dcoOptimizationType,
          media_format: e.mediaFormat,
          placement_format: e.format,
          render_category: o("AdsPreviewLogger").getPreviewRenderCategory(
            e.isClientSidePreview,
            e.isOptimisticPreview,
          ),
          creative_inline_created_post_type: e.creativeInlineCreatedPostType,
        },
        string_array: { preview_metadata: e.previewMetadata },
      };
    }
    function c(e, t) {
      o("AdsInteractionTracingUtils").annotateInteraction(e, u(t));
    }
    function d(e, t) {
      var n = r("AdsPerfInteractionsController").getActiveInteractionTraceAPI(
        e,
      );
      n &&
        n.onBeforeLog(function () {
          var n = t.get(e);
          (t.delete(e), n && c(e, n));
        });
    }
    function m(e, t, n) {
      if (t != null && !(n != null && n.has(t))) {
        var o,
          a,
          i = e(),
          l =
            (o =
              n == null || (a = n.get(t)) == null
                ? void 0
                : a.previewMetadata) != null
              ? o
              : [],
          s = i.previewMetadata;
        ((i = babelHelpers.extends({}, i, { previewMetadata: l.concat(s) })),
          n == null || n.set(t, i),
          r("InteractionTracingMetrics").addMarkerPoint(
            t,
            "previewFirstUpdate",
            "AppTiming",
          ));
      }
    }
    function p(e) {
      return e === r("AdsUEditorHostIDs").EDITING;
    }
    function _(e) {
      var t = r("AdsPerfInteractionsController").getActiveInteraction(
        "am.editor.preview",
      );
      if (t == null) return !1;
      var n = r("AdsPerfInteractionsController").getInteractionStartCallsite(t);
      return o("AdsPerfInteractionConstants").EDIT_TEXT_ENTRY_POINT.has(e) &&
        n != null &&
        n === e &&
        !o("AdsPerfInteractionUtil").shouldStartNewInteraction(
          "am.edit_ads.load_preview",
          t,
        )
        ? e === "AdsUEditorAdgroupTestimonialField.react"
          ? (o("AdsPerfInteractionUtil").setAndLogParallelInteraction(
              t,
              "am.edit_ads.load_preview_testimonial",
            ),
            !0)
          : (o("AdsPerfInteractionUtil").setAndLogParallelInteraction(
              t,
              "am.edit_ads.load_preview",
            ),
            !0)
        : !1;
    }
    ((l.makeQPLRequestID = e),
      (l.startScenario = s),
      (l.attachInteractionEndLogging = d),
      (l.maybeSetPreviewLoggingData = m),
      (l.shouldStartPreviewLoadScenario = p),
      (l.shouldMergeParallelPreviewInteractions = _));
  },
  98,
);
