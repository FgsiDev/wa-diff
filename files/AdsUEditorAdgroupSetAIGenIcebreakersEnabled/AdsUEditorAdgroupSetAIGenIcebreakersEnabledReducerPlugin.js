__d(
  "AdsUEditorAdgroupSetAIGenIcebreakersEnabledReducerPlugin",
  [
    "AdsAdgroupSemanticFields",
    "AdsMessengerVisualEditorCustomerActionType",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetAIGenIcebreakersEnabledDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "isFalsey",
    "nullthrows",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (e, t, n) {
            var a = n.plugins;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                o = r("nullthrows")(a.get(e.id)),
                i = r("AdsAdgroupSemanticFields").pageWelcomeMessage.get(o, e);
              if (r("isFalsey")(i)) return e;
              var l = JSON.parse(i);
              return (l == null || (n = l.text_format) == null
                ? void 0
                : n.customer_action_type) ===
                r("AdsMessengerVisualEditorCustomerActionType").WHATSAPP_FLOW
                ? e
                : (r("setByPath")(
                    l,
                    ["ai_generated_icebreaker_toggle_enabled"],
                    t.isAIGenIcebreakersEnabled,
                  ),
                  r("AdsAdgroupSemanticFields").pageWelcomeMessage.set(
                    r("nullthrows")(a.get(e.id)),
                    e,
                    JSON.stringify(l),
                  ));
            });
          },
          o("AdsUEditorAdgroupSetAIGenIcebreakersEnabledDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
