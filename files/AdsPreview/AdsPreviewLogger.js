__d(
  "AdsPreviewLogger",
  ["AdsInterfacesLogger", "Random", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("justknobx")._("838"),
      s = "client",
      u = "optimistic",
      c = "pagelet",
      d = r("Random").coinflip(e),
      m = new Set(["preview_load_finished", "preview_load_success"]);
    function p(e, t) {
      return e ? s : t ? u : c;
    }
    function _(e, t) {
      var n, o, a;
      (m.has(e) && !d) ||
        r("AdsInterfacesLogger").log({
          eventName: e,
          eventCategory: t.eventCategory,
          unified_interface_request_id: t.unifiedInterfaceRequestID,
          data:
            ((a = {}),
            (a.action_type = t.actionType),
            (a.ad_preview_format = t.format),
            (a.adgroup_id = t.adgroupID),
            (a.error_type = t.errorType),
            (a.has_object_story_spec = t.hasObjectStorySpec),
            (a.is_edit = t.isEdit),
            (a.post_format = t.linkPostFormat),
            (a.loading_count = t.loadingCount),
            (a.media_format = t.mediaFormat),
            (a.message = t.message),
            (a.meta_message = t.metaMessage),
            (a.time_since_load = t.timeSinceLoad),
            (a.custom_event_type = t.visibilityType),
            (a.component_name = t.previewParent),
            (a.new_value = t.newValue),
            (a.old_value = t.oldValue),
            (a.unified_interface_request_id = t.unifiedInterfaceRequestID),
            (a.custom_event_type = p(
              t.isClientSidePreview,
              t.isOptimisticPreview,
            )),
            (a.dco_optimization_type = t.dcoOptimizationType),
            (a.selected_category_id =
              (n = t.adCreativeOptimizationOptionValue) == null
                ? void 0
                : n.toString()),
            (a.change_type =
              (o = t.adCreativeOptimizationType) == null
                ? void 0
                : o.toString()),
            a),
        });
    }
    function f(e, t, n) {}
    ((l.getPreviewRenderCategory = p),
      (l.log = _),
      (l.logOptimisitcPreviewYielderError = f));
  },
  98,
);
