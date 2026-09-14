__d(
  "AdsUEditorAdgroupSetLeadGenFormAtIndexReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetLeadGenFormAtIndexDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "FBLogger",
    "gkx",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = n.get("lead_gen_form_id");
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.object_story_spec.template_data.call_to_action.value.lead_gen_form_id.set(
        o,
      )(e);
    }
    function s(e, t, n) {
      var o = r("AdsAdgroupSemanticFields").callToAction.get(t, e);
      if (
        (o === void 0 && (o = r("immutable").List()),
        !(o instanceof r("immutable").List))
      )
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "this function must be invoked on an asset feed field",
        );
      var a = o.map(function (e) {
        return e.set("value", n);
      });
      return r("AdsAdgroupSemanticFields").callToAction.set(t, e, a);
    }
    function u(e, t) {
      var n,
        o,
        a = e,
        i,
        l =
          (n = a.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.call_to_action_types;
      l != null && (i = l.get(0));
      var s =
          ((o = a.creative) == null || (o = o.asset_feed_spec) == null
            ? void 0
            : o.call_to_actions) || r("immutable").List([]),
        u = s.setIn(["0", "type"], i);
      return (
        (u = u.map(function (e) {
          return e.set("value", t);
        })),
        (a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_to_actions.set(u, a)),
        a
      );
    }
    var c = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (t, n, a) {
            var i = a.plugins;
            return o("AdsMutators").mutateEach(t, n.adgroupIDs, function (t) {
              var a,
                l = r("immutable").Map(
                  ((a = {}), (a.lead_gen_form_id = n.formID), a),
                );
              return n.isFormExtension === !0
                ? u(t, l)
                : o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(
                      t,
                    ) && r("gkx")("14713")
                  ? e(t, r("nullthrows")(i.get(t.id)), l)
                  : s(t, r("nullthrows")(i.get(t.id)), l);
            });
          },
          o("AdsUEditorAdgroupSetLeadGenFormAtIndexDataActionFlux").actionType,
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
